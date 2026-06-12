"use client";

import { MapPin } from "lucide-react";
import { faqItems } from "@/data/landing";
import { useLang } from "@/contexts/LangContext";

export function BrazilOrigin() {
  const { lang } = useLang();

  return (
    <section id="brazil" className="visual-section">
      <div className="visual-inner grid gap-6 lg:grid-cols-[0.44fr_0.56fr]">
        <div className="brazil-art-card vector-card relative min-h-[320px] overflow-hidden p-6">
          <div className="brazil-orbit brazil-orbit-wide" />
          <div className="brazil-orbit brazil-orbit-tight" />
          <div className="brazil-flag-field">
            <span />
            <span />
            <span />
          </div>
          <div className="brazil-map-ghost">
            <span className="brazil-node node-north" />
            <span className="brazil-node node-west" />
            <span className="brazil-node node-center" />
            <span className="brazil-node node-south" />
            <span className="brazil-node node-sp" />
          </div>
          <div className="brazil-pulse" />
          <div className="brazil-coordinates">
            <span>23.5505 S</span>
            <span>46.6333 W</span>
          </div>
          <div className="relative z-10 flex h-full flex-col justify-between">
            <MapPin size={28} className="text-cyan-100" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/36">
                {lang === "pt" ? "São Paulo para o mundo" : "São Paulo to the world"}
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
                {lang === "pt" ? "Nascida no Brasil." : "Born in Brazil."}
              </h2>
              <p className="mt-3 text-lg font-semibold text-white/54">
                {lang === "pt" ? "Criando uma nova categoria global." : "Building a global category."}
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          {faqItems.map((item) => (
            <article key={item.qEn} className="vector-card p-4">
              <h3 className="text-base font-bold text-white">{lang === "pt" ? item.qPt : item.qEn}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{lang === "pt" ? item.aPt : item.aEn}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
