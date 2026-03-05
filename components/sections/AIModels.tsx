"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/cn";
import { Zap, Star, Crown, Gauge } from "lucide-react";

interface ModelSpec {
  nameKey: keyof import("@/lib/i18n").Translations;
  tagKey: keyof import("@/lib/i18n").Translations;
  descKey: keyof import("@/lib/i18n").Translations;
  qualityKey: keyof import("@/lib/i18n").Translations;
  speedKey: keyof import("@/lib/i18n").Translations;
  tokensKey: keyof import("@/lib/i18n").Translations;
  accent: string;
  accentBg: string;
  badge?: "popular" | "quality";
  provider: string;
}

const MODELS: ModelSpec[] = [
  {
    nameKey: "model_engine_name",
    tagKey: "model_engine_tag",
    descKey: "model_engine_desc",
    qualityKey: "model_engine_quality",
    speedKey: "model_engine_speed",
    tokensKey: "model_engine_tokens",
    accent: "rgba(59,130,246,1)",
    accentBg: "rgba(59,130,246,0.08)",
    provider: "Sora2API",
  },
  {
    nameKey: "model_ultra_name",
    tagKey: "model_ultra_tag",
    descKey: "model_ultra_desc",
    qualityKey: "model_ultra_quality",
    speedKey: "model_ultra_speed",
    tokensKey: "model_ultra_tokens",
    accent: "rgba(139,92,246,1)",
    accentBg: "rgba(139,92,246,0.08)",
    badge: "popular",
    provider: "Kie.ai",
  },
  {
    nameKey: "model_prime_name",
    tagKey: "model_prime_tag",
    descKey: "model_prime_desc",
    qualityKey: "model_prime_quality",
    speedKey: "model_prime_speed",
    tokensKey: "model_prime_tokens",
    accent: "rgba(16,185,129,1)",
    accentBg: "rgba(16,185,129,0.08)",
    badge: "quality",
    provider: "Vidgo",
  },
  {
    nameKey: "model_advanced_name",
    tagKey: "model_advanced_tag",
    descKey: "model_advanced_desc",
    qualityKey: "model_advanced_quality",
    speedKey: "model_advanced_speed",
    tokensKey: "model_advanced_tokens",
    accent: "rgba(245,158,11,1)",
    accentBg: "rgba(245,158,11,0.08)",
    provider: "Kie.ai",
  },
];

export function AIModels() {
  const { t } = useLang();

  return (
    <section id="models" className="relative z-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-4">
              {t.models_title}
            </h2>
            <p className="text-tx2 text-sm max-w-xl mx-auto leading-relaxed">
              {t.models_subtitle}
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MODELS.map((model, i) => (
            <RevealOnScroll key={model.nameKey} delay={i * 80}>
              <div
                className={cn(
                  "glass-card p-6 relative overflow-hidden group transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--nx-glass-glow)] cursor-default",
                  (model.badge === "popular" || model.badge === "quality") &&
                    "border-[rgba(255,255,255,0.12)]"
                )}
              >
                {/* Colored top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: model.accent, opacity: 0.6 }}
                />

                {/* Badge */}
                {model.badge && (
                  <div
                    className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide"
                    style={{ background: model.accentBg, color: model.accent }}
                  >
                    {model.badge === "popular" ? (
                      <Star size={9} />
                    ) : (
                      <Crown size={9} />
                    )}
                    {model.badge === "popular"
                      ? t.model_badge_popular
                      : t.model_badge_quality}
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: model.accentBg }}
                  >
                    <Gauge size={18} style={{ color: model.accent }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-tx font-semibold text-base">
                        {t[model.nameKey] as string}
                      </span>
                      <span
                        className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded"
                        style={{ background: model.accentBg, color: model.accent }}
                      >
                        {t[model.tagKey] as string}
                      </span>
                    </div>
                    <p className="text-tx3 text-[10px] mt-0.5">{model.provider}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-tx2 text-sm leading-relaxed mb-5">
                  {t[model.descKey] as string}
                </p>

                {/* Specs row */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-tx3 text-[9px] font-semibold tracking-[0.5px] uppercase">
                      {t.model_label_quality}
                    </span>
                    <span className="text-tx font-semibold text-sm">
                      {t[model.qualityKey] as string}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-tx3 text-[9px] font-semibold tracking-[0.5px] uppercase">
                      {t.model_label_speed}
                    </span>
                    <div className="flex items-center gap-1">
                      <Zap size={11} style={{ color: model.accent }} />
                      <span className="text-tx font-semibold text-sm">
                        {t[model.speedKey] as string}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-tx3 text-[9px] font-semibold tracking-[0.5px] uppercase">
                      {t.model_label_cost}
                    </span>
                    <span className="text-tx font-semibold text-sm">
                      {t[model.tokensKey] as string}
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
