import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("hero has an interactive premium visual treatment", async () => {
  const [desktop, css] = await Promise.all([
    readFile(new URL("../components/sections/DesktopLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(desktop, /dlp-hero-art/);
  assert.match(desktop, /--hero-x/);
  assert.match(desktop, /--hero-y/);
  assert.match(css, /\.dlp-hero-art::before/);
  assert.match(css, /var\(--hero-x/);
  assert.match(css, /var\(--hero-y/);
});
