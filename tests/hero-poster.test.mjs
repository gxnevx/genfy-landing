import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("hero video exposes a preloaded poster for mobile LCP", async () => {
  const [visualLanding, mobileLanding, desktopLanding] = await Promise.all([
    readFile("components/sections/VisualLanding.tsx", "utf8"),
    readFile("components/sections/MobileLanding.tsx", "utf8"),
    readFile("components/sections/DesktopLanding.tsx", "utf8"),
  ]);

  assert.match(visualLanding, /rel="preload"/);
  assert.match(visualLanding, /fetchPriority="high"/);
  assert.match(visualLanding, /seedance-1\.webp/);
  assert.match(mobileLanding, /poster="\/landing\/posters\/seedance-1\.webp"/);
  assert.match(desktopLanding, /poster="\/landing\/posters\/seedance-1\.webp"/);
});
