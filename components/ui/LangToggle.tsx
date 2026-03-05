"use client";

import { useLang } from "@/contexts/LangContext";

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      className="h-8 px-2 flex items-center justify-center rounded-pill text-tx3 hover:text-tx transition-colors text-[11px] font-semibold tracking-wide uppercase"
      aria-label="Toggle language"
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );
}
