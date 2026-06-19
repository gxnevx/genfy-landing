import test from "node:test";
import assert from "node:assert/strict";

import {
  CONSENT_STORAGE_KEY,
  DEFAULT_CONSENT,
  buildConsentCookie,
  parseConsentPreferences,
  toGoogleConsent,
} from "../lib/analytics/consent.ts";
import { captureAttribution } from "../lib/analytics/attribution.ts";
import {
  createAnalyticsEvent,
  pushAnalyticsEvent,
} from "../lib/analytics/data-layer.ts";

test("optional Google storage is denied before the visitor chooses", () => {
  assert.equal(CONSENT_STORAGE_KEY, "genfy_consent_v2");
  assert.deepEqual(toGoogleConsent(DEFAULT_CONSENT), {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
});

test("legacy accepted consent migrates to analytics-only consent", () => {
  assert.deepEqual(parseConsentPreferences(null, "accepted"), {
    necessary: true,
    analytics: true,
    marketing: false,
  });
});

test("production consent cookie is shared by the landing page and Studio", () => {
  const cookie = buildConsentCookie(
    { necessary: true, analytics: true, marketing: false },
    { productionDomain: true, secure: true },
  );

  assert.match(cookie, /^genfy_consent_v2=/);
  assert.match(cookie, /Domain=\.genfy\.studio/);
  assert.match(cookie, /SameSite=Lax/);
  assert.match(cookie, /Secure/);
});

test("campaign attribution preserves first touch and refreshes last touch", () => {
  const first = captureAttribution({
    url: "https://home.genfy.studio/?utm_source=google&utm_medium=cpc&utm_campaign=launch&gclid=click-1",
    referrer: "https://www.google.com/",
    capturedAt: "2026-06-18T12:00:00.000Z",
  });

  const second = captureAttribution(
    {
      url: "https://genfy.studio/login?utm_source=youtube&utm_medium=video&utm_campaign=demo",
      referrer: "https://www.youtube.com/",
      capturedAt: "2026-06-19T12:00:00.000Z",
    },
    first,
  );

  assert.equal(second.first_touch.utm_source, "google");
  assert.equal(second.first_touch.gclid, "click-1");
  assert.equal(second.last_touch.utm_source, "youtube");
  assert.equal(second.last_touch.utm_medium, "video");
  assert.equal(second.last_touch.landing_url, "https://genfy.studio/login");
});

test("CTA event contains only the approved measurement fields", () => {
  assert.deepEqual(
    createAnalyticsEvent("cta_click", {
      cta_name: "start_creating_free",
      cta_location: "hero",
      destination: "https://genfy.studio/login",
    }),
    {
      event: "cta_click",
      cta_name: "start_creating_free",
      cta_location: "hero",
      destination: "https://genfy.studio/login",
    },
  );
});

test("browser events remain visible in dataLayer and are sent through gtag", () => {
  const calls = [];
  globalThis.window = {
    dataLayer: [],
    gtag: (...args) => calls.push(args),
  };

  pushAnalyticsEvent("tool_explored", { tool: "product-validation" });

  assert.deepEqual(globalThis.window.dataLayer, [
    { event: "tool_explored", tool: "product-validation" },
  ]);
  assert.deepEqual(calls, [
    ["event", "tool_explored", { tool: "product-validation" }],
  ]);

  delete globalThis.window;
});
