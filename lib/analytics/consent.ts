import type {
  ConsentPreferences,
  GoogleConsentState,
} from "./types";

export const CONSENT_STORAGE_KEY = "genfy_consent_v2";
export const LEGACY_CONSENT_STORAGE_KEY = "genfy-cookie-consent";
export const CONSENT_CHANGED_EVENT = "genfy-consent-changed";
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;

export const DEFAULT_CONSENT: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function toGoogleConsent(
  preferences: ConsentPreferences,
): GoogleConsentState {
  return {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
  };
}

export function parseConsentPreferences(
  stored: string | null,
  legacy: string | null = null,
): ConsentPreferences {
  if (stored) {
    try {
      const parsed = JSON.parse(
        decodeURIComponent(stored),
      ) as Partial<ConsentPreferences>;
      if (
        typeof parsed.analytics === "boolean" &&
        typeof parsed.marketing === "boolean"
      ) {
        return {
          necessary: true,
          analytics: parsed.analytics,
          marketing: parsed.marketing,
        };
      }
    } catch {
      // Invalid preferences are treated as no optional consent.
    }
  }

  if (legacy === "accepted") {
    return { necessary: true, analytics: true, marketing: false };
  }

  return DEFAULT_CONSENT;
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  return (
    document.cookie
      .split("; ")
      .find((entry) => entry.startsWith(`${name}=`))
      ?.slice(name.length + 1) ?? null
  );
}

export function buildConsentCookie(
  preferences: ConsentPreferences,
  options: { productionDomain: boolean; secure: boolean },
): string {
  const domain = options.productionDomain
    ? "; Domain=.genfy.studio"
    : "";
  const secure = options.secure ? "; Secure" : "";
  return (
    `${CONSENT_STORAGE_KEY}=${encodeURIComponent(JSON.stringify(preferences))}` +
    `; Path=/; Max-Age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${domain}${secure}`
  );
}

export function getStoredConsent(): ConsentPreferences {
  if (typeof window === "undefined") return DEFAULT_CONSENT;

  return parseConsentPreferences(
    readCookie(CONSENT_STORAGE_KEY),
    window.localStorage.getItem(LEGACY_CONSENT_STORAGE_KEY),
  );
}

export function hasStoredConsent(): boolean {
  if (typeof window === "undefined") return false;
  return Boolean(
    readCookie(CONSENT_STORAGE_KEY) ||
      window.localStorage.getItem(LEGACY_CONSENT_STORAGE_KEY),
  );
}

export function applyGoogleConsent(preferences: ConsentPreferences) {
  if (typeof window === "undefined") return;

  const state = toGoogleConsent(preferences);
  window.dataLayer = window.dataLayer ?? [];

  if (window.gtag) {
    window.gtag("consent", "update", state);
  } else {
    window.dataLayer.push(["consent", "update", state]);
  }
}

export function saveConsent(preferences: ConsentPreferences) {
  if (typeof window === "undefined") return;

  const productionDomain =
    window.location.hostname === "genfy.studio" ||
    window.location.hostname.endsWith(".genfy.studio");
  document.cookie = buildConsentCookie(
    preferences,
    {
      productionDomain,
      secure: window.location.protocol === "https:",
    },
  );
  window.localStorage.removeItem(LEGACY_CONSENT_STORAGE_KEY);
  applyGoogleConsent(preferences);
  window.dispatchEvent(
    new CustomEvent<ConsentPreferences>(CONSENT_CHANGED_EVENT, {
      detail: preferences,
    }),
  );
}
