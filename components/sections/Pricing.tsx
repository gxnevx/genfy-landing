"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/cn";
import { APP_URL } from "@/lib/constants";
import { Check, Info, Coins, Gift } from "lucide-react";
import { TokenSimulator } from "@/components/sections/TokenSimulator";
import type { Translations } from "@/lib/i18n";

interface TokenPackage {
  nameKey: keyof Translations;
  tokensKey: keyof Translations;
  priceKey: keyof Translations;
  bonusKey: keyof Translations;
  valueKey: keyof Translations;
  tokenCount: number;
  highlighted: boolean;
  badge: "popular" | "best_value" | null;
  isBusiness: boolean;
}

const PACKAGES: TokenPackage[] = [
  {
    nameKey: "pricing_pack_500",
    tokensKey: "pricing_pack_500_tokens",
    priceKey: "pricing_pack_500_price",
    bonusKey: "pricing_pack_500_bonus",
    valueKey: "pricing_pack_500_value",
    tokenCount: 500,
    highlighted: false,
    badge: null,
    isBusiness: false,
  },
  {
    nameKey: "pricing_pack_2000",
    tokensKey: "pricing_pack_2000_tokens",
    priceKey: "pricing_pack_2000_price",
    bonusKey: "pricing_pack_2000_bonus",
    valueKey: "pricing_pack_2000_value",
    tokenCount: 2000,
    highlighted: false,
    badge: null,
    isBusiness: false,
  },
  {
    nameKey: "pricing_pack_5000",
    tokensKey: "pricing_pack_5000_tokens",
    priceKey: "pricing_pack_5000_price",
    bonusKey: "pricing_pack_5000_bonus",
    valueKey: "pricing_pack_5000_value",
    tokenCount: 5000,
    highlighted: true,
    badge: "popular",
    isBusiness: false,
  },
  {
    nameKey: "pricing_pack_10000",
    tokensKey: "pricing_pack_10000_tokens",
    priceKey: "pricing_pack_10000_price",
    bonusKey: "pricing_pack_10000_bonus",
    valueKey: "pricing_pack_10000_value",
    tokenCount: 10000,
    highlighted: false,
    badge: "best_value",
    isBusiness: false,
  },
  {
    nameKey: "pricing_pack_business",
    tokensKey: "pricing_pack_business_tokens",
    priceKey: "pricing_pack_business_price",
    bonusKey: "pricing_pack_business_tokens",
    valueKey: "pricing_pack_business_tokens",
    tokenCount: 50000,
    highlighted: false,
    badge: null,
    isBusiness: true,
  },
];

const TOKEN_COSTS_KEYS: (keyof Translations)[] = [
  "pricing_engine_standard",
  "pricing_engine_ultra",
  "pricing_engine_prime",
  "pricing_engine_advanced",
];

const ALL_FEATURES_KEYS: (keyof Translations)[] = [
  "pricing_all_features_f1",
  "pricing_all_features_f2",
  "pricing_all_features_f3",
  "pricing_all_features_f4",
  "pricing_all_features_f5",
  "pricing_all_features_f6",
];

export function Pricing() {
  const { t } = useLang();

  return (
    <section id="pricing" className="relative z-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <RevealOnScroll>
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-4">
              {t.pricing_title}
            </h2>
            <p className="text-tx2 text-sm max-w-lg mx-auto">
              {t.pricing_subtitle}
            </p>
          </div>
        </RevealOnScroll>

        {/* Token explainer info box */}
        <RevealOnScroll delay={80}>
          <div className="glass-card p-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-md flex items-center justify-center bg-ac-s shrink-0 mt-0.5">
                <Info size={13} className="text-ac" />
              </div>
              <div>
                <p className="text-tx text-xs font-semibold mb-1">
                  {t.pricing_token_explain}
                </p>
                <p className="text-tx3 text-xs leading-relaxed mb-2">
                  {t.pricing_token_explain_desc}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <span className="text-tx3 text-[10px] font-medium">
                    {t.pricing_token_cost_label}
                  </span>
                  {TOKEN_COSTS_KEYS.map((key) => (
                    <span
                      key={key}
                      className="flex items-center gap-1 text-[10px] text-tx2"
                    >
                      <Coins size={9} className="text-ac" />
                      {t[key] as string}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Package cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {PACKAGES.map((pkg, i) => {
            const bonus = t[pkg.bonusKey] as string;
            const hasBonus = Boolean(bonus) && !pkg.isBusiness;
            const value = t[pkg.valueKey] as string;

            return (
              <RevealOnScroll
                key={pkg.nameKey}
                delay={i * 80}
                className={cn(
                  pkg.isBusiness && "col-span-2 lg:col-span-1"
                )}
              >
                <div
                  className={cn(
                    "glass-card p-6 flex flex-col relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--nx-glass-glow)] h-full",
                    pkg.highlighted && "border-ac/[0.3] shadow-[0_0_30px_rgba(59,130,246,0.08)]"
                  )}
                >
                  {/* Accent top line for highlighted */}
                  {pkg.highlighted && (
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ backgroundImage: "var(--nx-ac-grad)" }}
                    />
                  )}

                  {/* Badge */}
                  {pkg.badge && (
                    <div className="absolute top-3 right-3 text-[9px] font-bold tracking-wide px-2 py-0.5 rounded-full bg-ac-s text-ac">
                      {pkg.badge === "popular"
                        ? t.pricing_badge_popular
                        : t.pricing_badge_best_value}
                    </div>
                  )}

                  {/* Package name */}
                  <h3 className="text-tx font-semibold text-base mb-3">
                    {t[pkg.nameKey] as string}
                  </h3>

                  {/* Price */}
                  <div className="mb-1">
                    <span className="text-2xl font-bold text-tx">
                      {t[pkg.priceKey] as string}
                    </span>
                  </div>
                  {!pkg.isBusiness && (
                    <p className="text-tx3 text-[10px] mb-4">
                      {t.pricing_one_time}
                    </p>
                  )}

                  {/* Token count box */}
                  <div className="glass-card p-3 rounded-md mb-3 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-1.5">
                      <Coins size={14} className="text-ac shrink-0" />
                      <span className="text-tx font-bold text-sm">
                        {t[pkg.tokensKey] as string}{" "}
                        <span className="text-tx3 font-normal text-xs">
                          {t.pricing_tokens_label}
                        </span>
                      </span>
                    </div>
                    {hasBonus && (
                      <div className="flex items-center gap-1 mt-1.5">
                        <Gift size={11} className="text-emerald-400 shrink-0" />
                        <span className="text-emerald-400 text-[11px] font-semibold">
                          {bonus}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Value per token */}
                  {!pkg.isBusiness && value && (
                    <p className="text-tx3 text-[10px] mb-4 text-center">
                      {value}
                    </p>
                  )}

                  {/* CTA */}
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "text-center text-[12px] py-2.5 rounded-btn font-semibold transition-all duration-200 mt-auto",
                      pkg.highlighted
                        ? "btn-accent"
                        : "btn-ghost justify-center"
                    )}
                  >
                    {pkg.isBusiness
                      ? t.pricing_pack_business_cta
                      : t.pricing_buy_tokens}
                  </a>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Shared features box */}
        <RevealOnScroll delay={100}>
          <div className="glass-card p-4 mt-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-md flex items-center justify-center bg-ac-s shrink-0 mt-0.5">
                <Check size={13} className="text-ac" />
              </div>
              <div>
                <p className="text-tx text-xs font-semibold mb-2">
                  {t.pricing_all_features_title}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5">
                  {ALL_FEATURES_KEYS.map((key) => (
                    <span
                      key={key}
                      className="flex items-center gap-1.5 text-xs text-tx2"
                    >
                      <Check size={10} className="text-ac shrink-0" />
                      {t[key] as string}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Token simulator */}
        <TokenSimulator />
      </div>
    </section>
  );
}
