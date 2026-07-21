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
    assert.match(component, /Criar conta grátis/);
    assert.match(component, /200 tokens/);
    assert.match(component, /primeiro vídeo/);
    assert.match(component, /Vídeos a partir de R\$ 4,90/);
    assert.match(component, /Me avisar no WhatsApp/);
    assert.match(component, /pronto para publicar/);
    assert.match(component, /Prepare o próximo criativo/);
    assert.doesNotMatch(component, /Quero testar agora|Fique por dentro no WhatsApp|Bora gerar o primeiro/);
  }

  assert.match(desktop, /Transforme foto/);
  assert.match(desktop, /em vídeo com IA/);
  assert.match(mobile, /Transforme foto/);
  assert.match(mobile, /em vídeo com IA/);

  assert.doesNotMatch(data, /Vídeos IA gerados|Criadores ativos|Produtos rastreados/);
  assert.match(data, /Foto ou link/);
  assert.match(data, /R\$ 4,90/);
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
