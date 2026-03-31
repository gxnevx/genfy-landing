"use client";

import { useLang } from "@/contexts/LangContext";
import { trackLanguageSwitched } from "@/lib/analytics";

export function LangToggle() {
  const { lang, setLang } = useLang();

  const handleToggle = () => {
    const next = lang === "pt" ? "en" : "pt";
    trackLanguageSwitched(lang as "pt" | "en", next);
    setLang(next);
  };

  return (
    <button
      onClick={handleToggle}
      className="h-8 px-2 flex items-center justify-center rounded-pill text-tx3 hover:text-tx transition-colors text-[11px] font-semibold tracking-wide uppercase"
      aria-label="Toggle language"
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );
}
