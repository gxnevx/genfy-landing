"use client";

import { aiEngines } from "@/data/landing";
import { useLang } from "@/contexts/LangContext";

export function EngineRail() {
  const { lang } = useLang();

  return (
    <section id="engines" className="visual-section">
      <div className="visual-inner">
        <div className="mb-8 max-w-2xl">
          <span className="eyebrow-chip">{lang === "pt" ? "Linha de IA" : "AI production layer"}</span>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            {lang === "pt" ? "Dois motores para manter a esteira andando." : "Two engines to keep the creative line moving."}
          </h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {aiEngines.map((engine) => {
            const Icon = engine.icon;
            return (
              <article key={engine.key} className="vector-card p-4">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white/[0.06] text-blue-200">
                    <Icon size={19} />
                  </div>
                  <span className="text-xs font-bold text-emerald-200">
                    {lang === "pt" ? engine.statusPt : engine.statusEn}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{engine.name}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
