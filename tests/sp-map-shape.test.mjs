import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const previousShape = "42% 2%, 58% 5%, 72% 16%, 78% 31%, 92% 40%";
test("São Paulo map uses a recognizable low-poly SVG and preserves the old shape", async () => {
  const [component, css, backup] = await Promise.all([
    readFile(new URL("../components/sections/DesktopLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../docs/backups/sp-map-shape-2026-06-10.css", import.meta.url), "utf8"),
  ]);

  assert.match(component, /className="dlp-sp-map-svg"/);
  assert.match(component, /className="dlp-sp-map-shape"/);
  assert.match(component, /M 128 256 L 189 213 L 274 69/);
  assert.match(component, /transform="translate\(0 25\) scale\(1 0\.9\)"/);
  assert.doesNotMatch(component, /transform="translate\(-100 70\) scale\(1\.2 0\.72\)"/);
  assert.doesNotMatch(component, /dlp-sp-map-facet/);
  assert.doesNotMatch(component, /clipPath id="sp-map-clip"/);
  assert.doesNotMatch(css, /\.dlp-brazil-map\s*\{[^}]*clip-path:/);
  assert.match(css, /width:\s*min\(390px,\s*76%\)/);
  assert.match(css, /height:\s*190px/);
  assert.match(backup, new RegExp(previousShape.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
});
