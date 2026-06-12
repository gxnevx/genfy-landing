import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("landing uses the three supplied videos without promoting a single engine", async () => {
  const [data, desktop, mobile] = await Promise.all([
    readFile(new URL("../data/landing.ts", import.meta.url), "utf8"),
    readFile(new URL("../components/sections/DesktopLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/sections/MobileLanding.tsx", import.meta.url), "utf8"),
  ]);

  for (const index of [1, 2, 3]) {
    await access(new URL(`../public/landing/videos/seedance-${index}.mp4`, import.meta.url));
    assert.match(data, new RegExp(`/landing/videos/seedance-${index}\\.mp4`));
  }

  assert.match(data, /Produto em movimento/);
  assert.doesNotMatch(desktop, /Feitos com Seedance|SEEDANCE 2\.0|dlp-reel-index|dlp-reel-engine/);
  assert.doesNotMatch(data, /titlePt: ".*Seedance|textPt: ".*Seedance/);
  assert.match(desktop, /src="\/landing\/videos\/seedance-1\.mp4"/);
  assert.match(desktop, /src="\/landing\/videos\/seedance-3\.mp4"/);
  assert.match(mobile, /src="\/landing\/videos\/seedance-1\.mp4"/);
});
