"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LangContext";
import {
  DEFAULT_CONSENT,
  getStoredConsent,
  hasStoredConsent,
  saveConsent,
} from "@/lib/analytics/consent";
import { initializeAttribution } from "@/lib/analytics/attribution";

export function CookieConsent() {
  const { t } = useLang();
  const [show, setShow] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    initializeAttribution();
    const stored = getStoredConsent();
    setAnalytics(stored.analytics);
    setMarketing(stored.marketing);

    const timer = setTimeout(() => {
      if (!hasStoredConsent()) setShow(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const handle = (preferences: typeof DEFAULT_CONSENT) => {
    saveConsent(preferences);
    setShow(false);
  };

  return (
    <div className="cookie-consent fixed left-3 right-3 z-50 animate-slide-up-sheet md:left-auto md:right-6 md:max-w-md" style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)" }}>
      <div className="cookie-consent-card glass-card p-3 md:p-4">
        <div className="cookie-consent-content flex flex-col gap-3 md:block">
          <p className="cookie-consent-text text-tx2 text-[11px] leading-relaxed md:mb-3 md:text-xs">
            {t.cookie_message}{" "}
            <a href="/privacy" className="text-ac hover:underline">{t.cookie_privacyLink}</a>.
          </p>
          {managing && (
            <div className="mb-3 grid gap-2 rounded-xl border border-white/10 bg-black/20 p-3 text-xs">
              <label className="flex items-center justify-between gap-4">
                <span>{t.cookie_analytics}</span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                />
              </label>
              <label className="flex items-center justify-between gap-4">
                <span>{t.cookie_marketing}</span>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(event) => setMarketing(event.target.checked)}
                />
              </label>
            </div>
          )}
          <div className="cookie-consent-actions grid grid-cols-2 gap-2">
            <button
              onClick={() => handle({ necessary: true, analytics: true, marketing: true })}
              className="btn-accent min-h-9 text-[11px] md:min-h-10 md:text-xs"
            >
              {t.cookie_accept}
            </button>
            <button
              onClick={() => handle(DEFAULT_CONSENT)}
              className="btn-ghost min-h-9 justify-center text-[11px] md:min-h-10 md:text-xs"
            >
              {t.cookie_decline}
            </button>
            <button
              onClick={() => setManaging((current) => !current)}
              className="btn-ghost min-h-9 justify-center text-[11px] md:min-h-10 md:text-xs"
            >
              {t.cookie_manage}
            </button>
            {managing && (
              <button
                onClick={() => handle({ necessary: true, analytics, marketing })}
                className="btn-ghost min-h-9 justify-center text-[11px] md:min-h-10 md:text-xs"
              >
                {t.cookie_save}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
