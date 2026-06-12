"use client";

import { genfyCycleSteps } from "@/data/landing";
import { useLang } from "@/contexts/LangContext";

export function GenfyCycle() {
  const { lang } = useLang();

  return (
    <section id="cycle" className="visual-section">
      <div className="visual-inner">
        <div className="mb-8 flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow-chip">{lang === "pt" ? "Ciclo Genfy" : "Genfy flow"}</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              {lang === "pt" ? "Uma linha de produção para criativos que vendem." : "A production line for selling creatives."}
            </h2>
          </div>
          <div className="cycle-orbit-badge" aria-hidden>
            <span />
            <strong>Genfy</strong>
          </div>
        </div>

        <div className="cycle-production-line grid gap-3 md:grid-cols-[1fr_40px_1fr_40px_1fr_40px_1fr] md:items-stretch">
          {genfyCycleSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === genfyCycleSteps.length - 1;
            return (
              <div key={step.key} className="contents">
                <article className="vector-card cycle-step-card scroll-reveal p-4">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-blue-300/10 text-blue-200">
                      <Icon size={19} />
                    </div>
                    <span className="text-[11px] font-bold text-white/32">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {lang === "pt" ? step.titlePt : step.titleEn}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-white/62">
                    {lang === "pt" ? step.captionPt : step.captionEn}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-white/42 cycle-step-detail">
                    {lang === "pt" ? step.detailPt : step.detailEn}
                  </p>
                </article>
                {!isLast && (
                  <div className="flex min-h-8 items-center justify-center md:min-h-0">
                    <div className="connector-line h-8 w-px rounded-full md:h-px md:w-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
