import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("cycle step titles stay concise enough to avoid widows", async () => {
  const source = await readFile(
    new URL("../components/sections/DesktopLanding.tsx", import.meta.url),
    "utf8",
  );

  assert.match(source, /titlePt: "Valide antes de gastar\."/);
  assert.match(source, /titlePt: "Transforme em vídeo\."/);
});
