import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const files = {
  desktop: new URL("../components/sections/DesktopLanding.tsx", import.meta.url),
  mobile: new URL("../components/sections/MobileLanding.tsx", import.meta.url),
  momentum: new URL("../components/visuals/DesktopSellerMomentum.tsx", import.meta.url),
  data: new URL("../data/landing.ts", import.meta.url),
  css: new URL("../app/globals.css", import.meta.url),
};

test("Seedance is named correctly and presented as launched", async () => {
  const [desktop, mobile, momentum, data] = await Promise.all([
    readFile(files.desktop, "utf8"),
    readFile(files.mobile, "utf8"),
    readFile(files.momentum, "utf8"),
    readFile(files.data, "utf8"),
  ]);

  for (const source of [desktop, mobile, momentum, data]) {
    assert.doesNotMatch(source, /SeaDance/);
    assert.match(source, /Seedance 2\.0/);
  }

  assert.match(desktop, /engine-depth-seedance/);
  assert.match(mobile, /engine-depth-seedance/);
  assert.match(data, /statusPt: "Disponível"/);
});

test("both launched engines share an interactive depth treatment", async () => {
  const css = await readFile(files.css, "utf8");

  assert.match(css, /\.engine-depth-veo/);
  assert.match(css, /\.engine-depth-seedance/);
  assert.match(css, /\.engine-focus-veo/);
  assert.match(css, /\.engine-focus-seedance/);
  assert.match(css, /@keyframes engine-stage-float/);
});
