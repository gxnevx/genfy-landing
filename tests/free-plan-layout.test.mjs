import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("free tools plan is first and explains the video-generation limit", async () => {
  const data = await readFile(new URL("../data/landing.ts", import.meta.url), "utf8");
  const plansStart = data.indexOf("export const plans");
  const freeStart = data.indexOf('key: "free"', plansStart);
  const starterStart = data.indexOf('key: "starter"', plansStart);

  assert.ok(freeStart > plansStart && freeStart < starterStart);
  assert.match(data, /Acesso a todas as ferramentas/);
  assert.match(data, /Geração de vídeo requer tokens/);
});

test("desktop pricing grid keeps five cards in one compact row", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.gx-plans-grid\s*\{[\s\S]*?display:\s*flex;[\s\S]*?flex-wrap:\s*nowrap;/);
  assert.match(css, /\.gx-plan\s*\{[\s\S]*?flex:\s*1 1 0;/);
});
