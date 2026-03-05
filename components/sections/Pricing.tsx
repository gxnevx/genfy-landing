"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/cn";
import { APP_URL } from "@/lib/constants";
import { Check, Info, Coins } from "lucide-react";

export function Pricing() {
  const { t } = useLang();

  const plans = [
    {
      name: t.pricing_free,
      price: t.pricing_free_price,
      tokens: null as string | null,
      description: t.pricing_free_desc,
      features: [t.pricing_free_f1, t.pricing_free_f2, t.pricing_free_f3, t.pricing_free_f4],
      cta: t.pricing_free_cta,
      highlighted: false,
      isBusiness: false,
    },
    {
      name: t.pricing_pack1,
      price: t.pricing_pack1_price,
      tokens: t.pricing_pack1_tokens,
      description: t.pricing_pack1_desc,
      features: [t.pricing_pack1_f1, t.pricing_pack1_f2, t.pricing_pack1_f3, t.pricing_pack1_f4, t.pricing_pack1_f5],
      cta: t.pricing_pack1_cta,
      highlighted: false,
      isBusiness: false,
    },
    {
      name: t.pricing_pack2,
      price: t.pricing_pack2_price,
      tokens: t.pricing_pack2_tokens,
      description: t.pricing_pack2_desc,
      features: [t.pricing_pack2_f1, t.pricing_pack2_f2, t.pricing_pack2_f3, t.pricing_pack2_f4, t.pricing_pack2_f5, t.pricing_pack2_f6],
      cta: t.pricing_pack2_cta,
      highlighted: true,
      isBusiness: false,
    },
    {
      name: t.pricing_business,
      price: t.pricing_business_price,
      tokens: null as string | null,
      description: t.pricing_business_desc,
      features: [t.pricing_business_f1, t.pricing_business_f2, t.pricing_business_f3, t.pricing_business_f4, t.pricing_business_f5],
      cta: t.pricing_business_cta,
      highlighted: false,
      isBusiness: true,
    },
  ];

  const tokenCosts = [t.pricing_engine_standard, t.pricing_engine_ultra, t.pricing_engine_prime, t.pricing_engine_advanced];

  return (
    <section id="pricing" className="relative z-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-4">{t.pricing_title}</h2>
            <p className="text-tx2 text-sm max-w-lg mx-auto">{t.pricing_subtitle}</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <div className="glass-card p-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-md flex items-center justify-center bg-ac-s shrink-0 mt-0.5">
                <Info size={13} className="text-ac" />
              </div>
              <div>
                <p className="text-tx text-xs font-semibold mb-1">{t.pricing_token_explain}</p>
                <p className="text-tx3 text-xs leading-relaxed mb-2">{t.pricing_token_explain_desc}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <span className="text-tx3 text-[10px] font-medium">{t.pricing_token_cost_label}</span>
                  {tokenCosts.map((cost) => (
                    <span key={cost} className="flex items-center gap-1 text-[10px] text-tx2">
                      <Coins size={9} className="text-ac" />
                      {cost}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <RevealOnScroll key={plan.name} delay={i * 80}>
              <div
                className={cn(
                  "glass-card p-6 flex flex-col relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--nx-glass-glow)] h-full",
                  plan.highlighted && "border-ac/[0.3] shadow-[0_0_30px_rgba(59,130,246,0.08)]",
                )}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundImage: "var(--nx-ac-grad)" }} />
                )}

                {plan.highlighted && (
                  <div className="absolute top-3 right-3 text-[9px] font-bold tracking-wide px-2 py-0.5 rounded-full bg-ac-s text-ac">
                    {t.pricing_badge_popular}
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-tx font-semibold text-base mb-1">{plan.name}</h3>
                  <p className="text-tx3 text-[11px] mb-4 leading-relaxed">{plan.description}</p>
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-2xl font-bold text-tx">{plan.price}</span>
                    {plan.tokens && (
                      <span className="flex items-center gap-1 text-[11px] text-ac font-semibold bg-ac-s px-1.5 py-0.5 rounded">
                        <Coins size={10} />
                        {plan.tokens}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="flex flex-col gap-2 mb-8 flex-1">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2">
                      <Check size={12} className="text-ac shrink-0 mt-0.5" />
                      <span className="text-tx2 text-xs leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-center text-[12px] py-2.5 rounded-btn font-semibold transition-all duration-200",
                    plan.highlighted ? "btn-accent" : "btn-ghost justify-center"
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
