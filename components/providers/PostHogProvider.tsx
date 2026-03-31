"use client";

import { useEffect } from "react";
import { initPostHog, shutdownPostHog, POSTHOG_KEY } from "@/lib/posthog";

const COOKIE_KEY = "genfy-cookie-consent";

export function PostHogProvider() {
  useEffect(() => {
    if (!POSTHOG_KEY) return;

    const consent = localStorage.getItem(COOKIE_KEY);
    if (consent === "accepted") {
      initPostHog();
    }

    // Listen for consent changes (dispatched by CookieConsent)
    const onConsent = (e: Event) => {
      const { accepted } = (e as CustomEvent<{ accepted: boolean }>).detail;
      if (accepted) {
        initPostHog();
      } else {
        shutdownPostHog();
      }
    };

    window.addEventListener("cookie-consent", onConsent);
    return () => window.removeEventListener("cookie-consent", onConsent);
  }, []);

  return null;
}
