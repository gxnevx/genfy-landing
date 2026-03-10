"use client";

import { useLang } from "@/contexts/LangContext";
import { APP_URL } from "@/lib/constants";
import { ArrowRight, Play, Sparkles, Zap, Share2 } from "lucide-react";

const STATS = [
  { icon: <Play size={14} className="text-blue-400" />,    valueKey: "hero_stat_videos",    value: "50k+" },
  { icon: <Sparkles size={14} className="text-purple-400" />, valueKey: "hero_stat_engines",  value: "4" },
  { icon: <Share2 size={14} className="text-pink-400" />,   valueKey: "hero_stat_platforms", value: "10+" },
] as const;

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div
        className="absolute inset-0 opacity-30 animate-gradient-shift"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.18), transparent), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(139,92,246,0.1), transparent), radial-gradient(ellipse 40% 30% at 20% 60%, rgba(16,185,129,0.06), transparent)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 glass-card px-3 py-1.5 mb-8 animate-fade-in"
          style={{ animationDelay: "100ms", animationFillMode: "both" }}
        >
          <Zap size={11} className="text-ac" />
          <span className="text-tx2 text-[11px] font-medium tracking-wide">{t.hero_badge}</span>
        </div>

        {/* Headline */}
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

        {/* Subtitle */}
        <p
          className="text-tx2 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "200ms", animationDuration: "800ms", animationFillMode: "both" }}
        >
          {t.hero_subtitle}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up"
          style={{ animationDelay: "350ms", animationDuration: "600ms", animationFillMode: "both" }}
        >
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-accent px-6 py-3 text-sm gap-2">
            {t.hero_cta}
            <ArrowRight size={15} />
          </a>
          <a href="#tools" className="btn-ghost px-5 py-2.5 text-sm">{t.hero_cta2}</a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-fade-in"
          style={{ animationDelay: "550ms", animationFillMode: "both" }}
        >
          {STATS.map((stat) => (
            <div key={stat.valueKey} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1.5">
                {stat.icon}
                <span className="text-tx font-bold text-xl tracking-tight">{stat.value}</span>
              </div>
              <span className="text-tx3 text-[10px] tracking-wide uppercase font-medium">
                {t[stat.valueKey]}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
