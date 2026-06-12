import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("landing uses specific conversion copy instead of generic CTAs", async () => {
  const [desktop, mobile, data] = await Promise.all([
    readFile(new URL("../components/sections/DesktopLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/sections/MobileLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../data/landing.ts", import.meta.url), "utf8"),
  ]);

  for (const component of [desktop, mobile]) {
    assert.match(component, /Gerar meu primeiro vídeo/);
    assert.match(component, /Me avisar no WhatsApp/);
    assert.match(component, /Criar meu primeiro vídeo/);
    assert.match(component, /pronto para viralizar/);
    assert.match(component, /Prepare o próximo viral/);
    assert.doesNotMatch(component, /Quero testar agora|Fique por dentro no WhatsApp|Bora gerar o primeiro/);
  }

  assert.match(desktop, /Transforme(?:&nbsp;|\u00a0)em/);
  assert.match(desktop, /vídeo(?:&nbsp;|\u00a0)viral/);
  assert.match(mobile, /Transforme em/);
  assert.match(mobile, /vídeo viral/);

  assert.match(data, /Explorar o Genfy grátis/);
  assert.match(data, /Gerar com 500 tokens/);
  assert.match(data, /Escolher pacote Pro/);
  assert.doesNotMatch(data, /ctaPt:\s*"Comprar"/);
});

test("Portuguese copy consistently treats Genfy as masculine", async () => {
  const sources = await Promise.all([
    readFile(new URL("../components/sections/DesktopLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/sections/MobileLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/visuals/ResultVideos.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/visuals/DesktopSellerMomentum.tsx", import.meta.url), "utf8"),
    readFile(new URL("../data/landing.ts", import.meta.url), "utf8"),
    readFile(new URL("../messages/pt.json", import.meta.url), "utf8"),
  ]);

  const portugueseCopy = sources.join("\n");
  assert.doesNotMatch(portugueseCopy, /\bA Genfy\b|\bda Genfy\b|\bna Genfy\b|\bpela Genfy\b|\bà Genfy\b/i);
});
