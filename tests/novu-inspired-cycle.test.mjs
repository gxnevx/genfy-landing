import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("desktop cycle uses a focused product story with one central vertical video", async () => {
  const [component, css] = await Promise.all([
    readFile(new URL("../components/sections/DesktopLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(component, /className="dlp-cycle-stage"/);
  assert.match(component, /className="dlp-cycle-device"/);
  assert.match(component, /Do link ao vídeo/);
  assert.match(component, /Produto encontrado/);
  assert.match(component, /Publicar rascunho/);
  assert.match(css, /\.dlp-cycle-stage/);
  assert.match(css, /\.dlp-cycle-phone/);
  assert.match(css, /\.dlp-cycle-signal/);
});
