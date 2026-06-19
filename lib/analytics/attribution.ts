import type { Attribution, AttributionTouch } from "./types";

export const ATTRIBUTION_COOKIE_KEY = "genfy_attribution_v1";
export const ATTRIBUTION_MAX_AGE_SECONDS = 60 * 60 * 24 * 90;

const CAMPAIGN_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

interface AttributionInput {
  url: string;
  referrer?: string;
  capturedAt?: string;
}

function cleanUrl(value: string): string {
  if (!value) return "";
  try {
    const url = new URL(value);
    return `${url.origin}${url.pathname}`;
  } catch {
    return "";
  }
}

function createTouch(input: AttributionInput): AttributionTouch {
  const url = new URL(input.url);
  const touch: AttributionTouch = {
    landing_url: `${url.origin}${url.pathname}`,
    captured_at: input.capturedAt ?? new Date().toISOString(),
  };

  for (const key of CAMPAIGN_KEYS) {
    const value = url.searchParams.get(key);
    if (value) touch[key] = value.slice(0, 500);
  }

  const referrer = cleanUrl(input.referrer ?? "");
  if (referrer) touch.referrer = referrer;

  return touch;
}

export function captureAttribution(
  input: AttributionInput,
  existing?: Attribution | null,
): Attribution {
  const touch = createTouch(input);

  return {
    first_touch: existing?.first_touch ?? touch,
    last_touch: touch,
  };
}

export function readAttributionCookie(): Attribution | null {
  if (typeof document === "undefined") return null;

  const value = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${ATTRIBUTION_COOKIE_KEY}=`))
    ?.split("=")
    .slice(1)
    .join("=");

  if (!value) return null;

  try {
    return JSON.parse(decodeURIComponent(value)) as Attribution;
  } catch {
    return null;
  }
}

export function writeAttributionCookie(attribution: Attribution) {
  if (typeof document === "undefined") return;

  const isProductionDomain =
    window.location.hostname === "genfy.studio" ||
    window.location.hostname.endsWith(".genfy.studio");
  const domain = isProductionDomain ? "; Domain=.genfy.studio" : "";
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie =
    `${ATTRIBUTION_COOKIE_KEY}=${encodeURIComponent(JSON.stringify(attribution))}` +
    `; Path=/; Max-Age=${ATTRIBUTION_MAX_AGE_SECONDS}; SameSite=Lax${domain}${secure}`;
}

export function initializeAttribution() {
  if (typeof window === "undefined") return;

  const attribution = captureAttribution(
    {
      url: window.location.href,
      referrer: document.referrer,
    },
    readAttributionCookie(),
  );
  writeAttributionCookie(attribution);
}

