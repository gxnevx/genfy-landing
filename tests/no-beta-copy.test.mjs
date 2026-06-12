import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

const ROOT = new URL("..", import.meta.url);
const SCANNED_DIRS = ["app", "components", "data", "lib", "messages", "docs/superpowers"];
const TEXT_EXTENSIONS = new Set([".css", ".json", ".md", ".tsx", ".ts"]);

function hasTextExtension(filePath) {
  return [...TEXT_EXTENSIONS].some((extension) => filePath.endsWith(extension));
}

async function collectTextFiles(dir) {
  const entries = await readdir(new URL(dir, ROOT), { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relativePath = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await collectTextFiles(relativePath));
      continue;
    }

    if (entry.isFile() && hasTextExtension(relativePath)) {
      files.push(relativePath);
    }
  }

  return files;
}

test("landing copy no longer references beta", async () => {
  const files = (await Promise.all(SCANNED_DIRS.map(collectTextFiles))).flat();
  const offenders = [];

  await Promise.all(files.map(async (file) => {
    const contents = await readFile(new URL(file, ROOT), "utf8");

    if (/\bbeta\b/i.test(contents)) {
      offenders.push(file);
    }
  }));

  assert.deepEqual(offenders.sort(), []);
});
