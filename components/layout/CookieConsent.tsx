"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LangContext";

const COOKIE_KEY = "genfy-cookie-consent";

export function CookieConsent() {
  const { t } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem(COOKIE_KEY)) setShow(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const handle = (accepted: boolean) => {
    localStorage.setItem(COOKIE_KEY, accepted ? "accepted" : "declined");
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: { accepted } }));
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
          <div className="cookie-consent-actions grid grid-cols-2 gap-2">
            <button onClick={() => handle(true)} className="btn-accent min-h-9 text-[11px] md:min-h-10 md:text-xs">{t.cookie_accept}</button>
            <button onClick={() => handle(false)} className="btn-ghost min-h-9 justify-center text-[11px] md:min-h-10 md:text-xs">{t.cookie_decline}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
