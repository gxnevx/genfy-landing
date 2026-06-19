"use client";

import { useEffect } from "react";
import { initPostHog, shutdownPostHog, POSTHOG_KEY } from "@/lib/posthog";
import {
  CONSENT_CHANGED_EVENT,
  getStoredConsent,
} from "@/lib/analytics/consent";
import type { ConsentPreferences } from "@/lib/analytics/types";

export function PostHogProvider() {
  useEffect(() => {
    if (!POSTHOG_KEY) return;

    if (getStoredConsent().analytics) {
      initPostHog();
    }

    const onConsent = (e: Event) => {
      const preferences = (e as CustomEvent<ConsentPreferences>).detail;
      if (preferences.analytics) {
        initPostHog();
      } else {
        shutdownPostHog();
      }
    };

    window.addEventListener(CONSENT_CHANGED_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onConsent);
  }, []);

  return null;
}
