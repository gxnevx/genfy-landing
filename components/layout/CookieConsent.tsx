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
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-slide-up-sheet">
      <div className="glass-card p-4">
        <p className="text-tx2 text-xs leading-relaxed mb-3">
          {t.cookie_message}{" "}
          <a href="/privacy" className="text-ac hover:underline">{t.cookie_privacyLink}</a>.
        </p>
        <div className="flex gap-2">
          <button onClick={() => handle(true)} className="btn-accent text-xs py-1.5 px-3 min-h-0 flex-1">{t.cookie_accept}</button>
          <button onClick={() => handle(false)} className="btn-ghost text-xs py-1.5 px-3 flex-1">{t.cookie_decline}</button>
        </div>
      </div>
    </div>
  );
}
