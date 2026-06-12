import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("all app CTAs use the Studio login route", async () => {
  const constants = await readFile(new URL("../lib/constants.ts", import.meta.url), "utf8");

  assert.match(constants, /APP_URL = "https:\/\/genfy\.studio\/login"/);
  assert.doesNotMatch(constants, /APP_URL = "https:\/\/genfy\.studio"/);
});
