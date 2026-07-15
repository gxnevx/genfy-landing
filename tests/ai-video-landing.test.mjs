import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("AI video route reuses the current visual landing and product assets", async () => {
  const [page, visual, desktop, mobile, sitemap] = await Promise.all([
    readFile(new URL("../app/gerador-video-ia/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/sections/VisualLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/sections/DesktopLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/sections/MobileLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<Navbar \/>/);
  assert.match(page, /<VisualLanding variant="ai-video" \/>/);
  assert.match(page, /<Footer \/>/);
  assert.match(page, /Gerador de Vídeo com IA para Produtos/);
  assert.match(visual, /<MobileLanding variant=\{variant\} \/>/);
  assert.match(visual, /<DesktopLanding variant=\{variant\} \/>/);

  for (const component of [desktop, mobile]) {
    assert.match(component, /Gerador de vídeo com IA/);
    assert.match(component, /Veo 3\.1 ou Seedance 2\.0/);
    assert.match(component, /variant === "ai-video"/);
  }

  assert.match(sitemap, /\/gerador-video-ia/);
});
