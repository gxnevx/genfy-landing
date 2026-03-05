"use client";

import { GenfyLogo } from "@/components/app/GenfyLogo";
import { useLang } from "@/contexts/LangContext";
import { APP_URL } from "@/lib/constants";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 opacity-30 animate-gradient-shift"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(139,92,246,0.08), transparent)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 glass-card px-3 py-1.5 mb-8 animate-fade-in"
          style={{ animationDelay: "200ms", animationFillMode: "both" }}
        >
          <Play size={12} className="text-ac" />
          <span className="text-tx2 text-[11px] font-medium tracking-wide">{t.hero_badge}</span>
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6 animate-fade-in-up"
          style={{ animationDuration: "1s", animationFillMode: "both" }}
        >
          <span className="text-tx">{t.hero_title_1}</span>
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--nx-ac-grad)", WebkitBackgroundClip: "text" }}
          >
            {t.hero_title_highlight}
          </span>
          <br />
          <span className="text-tx">{t.hero_title_2}</span>
        </h1>

        <p
          className="text-tx2 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "200ms", animationDuration: "800ms", animationFillMode: "both" }}
        >
          {t.hero_subtitle}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "400ms", animationDuration: "600ms", animationFillMode: "both" }}
        >
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-accent px-6 py-3 text-sm gap-2">
            {t.hero_cta}
            <ArrowRight size={16} />
          </a>
          <a href="#how-it-works" className="btn-ghost px-5 py-2.5 text-sm">{t.hero_cta2}</a>
        </div>

        <div className="mt-16 flex justify-center animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "both" }}>
          <div className="relative">
            <GenfyLogo size={80} className="opacity-20" />
            <div className="absolute inset-0 blur-[30px] opacity-30" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.2), transparent)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
