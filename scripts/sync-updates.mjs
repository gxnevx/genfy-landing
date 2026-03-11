/**
 * sync-updates.mjs
 *
 * Fetches recent commits from nexus-workflow and nexusvideogenerator repos,
 * uses GPT-4 Mini to generate human-readable patch notes, and writes the
 * result to data/updates.json.
 *
 * Required environment variables:
 *   GITHUB_TOKEN       — Personal access token with repo read access
 *   OPENAI_API_KEY     — OpenAI API key
 *   GITHUB_OWNER       — GitHub org/user that owns the repos (default: gxnevx)
 *
 * Usage:
 *   node scripts/sync-updates.mjs
 */

import { writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, "../data/updates.json");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const GITHUB_OWNER = process.env.GITHUB_OWNER || "gxnevx";
const REPOS = ["nexus-workflow", "nexusvideogenerator"];
const COMMITS_PER_REPO = 30;
const OPENAI_MODEL = "gpt-4.1";

// How many versions to show on the landing page
const MAX_UPDATES = 5;

// Commit messages to skip (not user-facing)
const SKIP_PATTERNS = [
  /^Merge/i,
  /^chore:/i,
  /^style:/i,
  /^test:/i,
  /^ci:/i,
  /^build:/i,
  /^docs?:/i,
  /^refactor:/i,
  /^wip\b/i,
  /^bump/i,
  /^version/i,
];

async function fetchCommits(repo) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${repo}/commits?per_page=${COMMITS_PER_REPO}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API error for ${repo}: ${res.status} — ${text}`);
  }

  const commits = await res.json();
  return commits.map((c) => ({
    sha: c.sha.substring(0, 7),
    message: c.commit.message.split("\n")[0].trim(),
    date: c.commit.author.date.substring(0, 10),
    author: c.commit.author.name,
    repo,
  }));
}

function isRelevant(commit) {
  return !SKIP_PATTERNS.some((pattern) => pattern.test(commit.message));
}

async function generatePatchNotes(commits) {
  const commitList = commits
    .map((c) => `[${c.repo}/${c.sha}] ${c.date}: ${c.message}`)
    .join("\n");

  const systemPrompt = `You are a technical writer creating user-facing patch notes for Genfy, an AI video generation platform.
Given a list of git commits from two repositories (nexus-workflow = backend, nexusvideogenerator = frontend),
group them into meaningful releases and generate human-readable changelog entries.

Rules:
- Focus ONLY on user-facing changes (features, fixes, improvements, new tools)
- Skip internal/technical commits that users don't care about
- Group related commits into logical releases
- Generate max ${MAX_UPDATES} versions
- Each version should have 2-5 bullet points
- Write in clear, non-technical language for end users
- Determine a version number based on significance (major features = minor bump, fixes = patch)
- Start versions from the current latest (v1.4.0), only increment if meaningful changes

Output a JSON array with this exact structure:
[
  {
    "version": "v1.X.Y",
    "date": "YYYY-MM-DD",
    "type": "feature|improvement|fix",
    "title_en": "Short release title in English",
    "title_pt": "Short release title in Portuguese",
    "items_en": ["bullet 1", "bullet 2"],
    "items_pt": ["bullet 1 in Portuguese", "bullet 2 in Portuguese"]
  }
]

If there are no meaningful user-facing changes, return an empty array [].`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Here are the recent commits to analyze:\n\n${commitList}\n\nGenerate the changelog JSON array.`,
        },
      ],
      temperature: 0.3,
      response_format: { type: "json_object" },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenAI API error: ${res.status} — ${text}`);
  }

  const data = await res.json();
  const content = data.choices[0].message.content;

  try {
    const parsed = JSON.parse(content);
    // Handle both array and {updates: [...]} response formats
    return Array.isArray(parsed) ? parsed : parsed.updates || parsed.changelog || [];
  } catch {
    console.error("Failed to parse OpenAI response:", content);
    return [];
  }
}

async function main() {
  if (!GITHUB_TOKEN) {
    console.error("❌ GITHUB_TOKEN is required");
    process.exit(1);
  }
  if (!OPENAI_API_KEY) {
    console.error("❌ OPENAI_API_KEY is required");
    process.exit(1);
  }

  console.log("📡 Fetching commits from GitHub...");

  let allCommits = [];
  for (const repo of REPOS) {
    try {
      const commits = await fetchCommits(repo);
      const relevant = commits.filter(isRelevant);
      console.log(`  ${repo}: ${commits.length} commits, ${relevant.length} relevant`);
      allCommits = allCommits.concat(relevant);
    } catch (err) {
      console.error(`  ⚠️  Failed to fetch ${repo}: ${err.message}`);
    }
  }

  if (allCommits.length === 0) {
    console.log("⚠️  No relevant commits found. Keeping existing updates.json.");
    return;
  }

  // Sort by date descending
  allCommits.sort((a, b) => b.date.localeCompare(a.date));

  console.log(`🤖 Sending ${allCommits.length} commits to GPT-4 Mini for analysis...`);

  let newUpdates = [];
  try {
    newUpdates = await generatePatchNotes(allCommits);
    console.log(`  Generated ${newUpdates.length} release entries`);
  } catch (err) {
    console.error(`  ❌ OpenAI failed: ${err.message}`);
    console.log("  Keeping existing updates.json.");
    return;
  }

  if (newUpdates.length === 0) {
    console.log("ℹ️  No meaningful changes detected. Keeping existing updates.json.");
    return;
  }

  // Read existing updates to merge (keep older ones if new list is shorter)
  let existingUpdates = [];
  try {
    const existing = JSON.parse(readFileSync(OUTPUT_PATH, "utf-8"));
    existingUpdates = existing.updates || [];
  } catch {
    // File doesn't exist yet
  }

  // New updates take precedence; pad with older ones up to MAX_UPDATES
  const merged = [...newUpdates];
  for (const old of existingUpdates) {
    if (merged.length >= MAX_UPDATES) break;
    if (!merged.find((u) => u.version === old.version)) {
      merged.push(old);
    }
  }

  const output = {
    generated_at: new Date().toISOString(),
    updates: merged.slice(0, MAX_UPDATES),
  };

  writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
  console.log(`✅ Wrote ${output.updates.length} updates to data/updates.json`);
  console.log(`   Versions: ${output.updates.map((u) => u.version).join(", ")}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
