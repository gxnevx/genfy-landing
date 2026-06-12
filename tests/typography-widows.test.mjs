import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("landing typography protects against widows and orphaned CTA words", async () => {
  const [component, mobile, css] = await Promise.all([
    readFile(new URL("../components/sections/DesktopLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/sections/MobileLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(component, /Produto(?:&nbsp;|\u00a0)bom/);
  assert.match(component, /não espera/);
  assert.match(mobile, /Produto bom/);
  assert.match(mobile, /não espera/);
  assert.match(component, /Transforme(?:&nbsp;|\u00a0)em/);
  assert.match(mobile, /Transforme em/);
  assert.match(component, /vídeo(?:&nbsp;|\u00a0)viral/);
  assert.match(mobile, /vídeo viral/);
  assert.match(css, /text-wrap:\s*balance/);
  assert.match(css, /text-wrap:\s*pretty/);
  assert.match(css, /\.dlp-cta,[\s\S]*white-space:\s*nowrap/);
});
