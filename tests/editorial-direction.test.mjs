import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("desktop landing carries the editorial direction beyond a single box", async () => {
  const [component, css] = await Promise.all([
    readFile(new URL("../components/sections/DesktopLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(component, /dlp-hero-side-note/);
  assert.match(component, /dlp-hero-art-label/);
  assert.doesNotMatch(component, /dlp-results-word/);
  assert.doesNotMatch(component, />CRIATIVOS</);
  assert.doesNotMatch(component, /dlp-results-word-a/);
  assert.match(component, /dlp-seedance-reel/);
  assert.match(css, /\.dlp-seedance-reel/);
  assert.match(css, /\.dlp-hero-art-label-bottom\s*\{[\s\S]*position:\s*static/);
  assert.doesNotMatch(css, /dlp-results-word/);
  assert.doesNotMatch(css, /dlp-results-word-a/);
  assert.doesNotMatch(component, /dlp-reel-ticker/);
});
