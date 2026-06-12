import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("landing shows the real token packs and prices", async () => {
  const data = await readFile(new URL("../data/landing.ts", import.meta.url), "utf8");

  for (const expected of [
    'price: "4"',
    'price: "19"',
    'price: "49"',
    'price: "99"',
    'tokensPt: "500 tokens"',
    'tokensPt: "2.000 tokens + 100 bônus"',
    'tokensPt: "5.000 tokens + 400 bônus"',
    'tokensPt: "10.000 tokens + 1.000 bônus"',
  ]) {
    assert.match(data, new RegExp(expected.replace(/[.+]/g, "\\$&")));
  }

  assert.doesNotMatch(data, /\/mês|Assinar Criador|Assinar Pro/);
});

test("pricing section describes token purchases instead of subscriptions", async () => {
  const [desktop, mobile] = await Promise.all([
    readFile(new URL("../components/sections/DesktopLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/sections/MobileLanding.tsx", import.meta.url), "utf8"),
  ]);

  for (const source of [desktop, mobile]) {
    assert.match(source, /Comprar tokens/);
    assert.doesNotMatch(source, /prévia|podem mudar até o lançamento/);
  }
});
