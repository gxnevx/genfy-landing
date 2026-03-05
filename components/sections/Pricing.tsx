"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/cn";
import { APP_URL } from "@/lib/constants";
import { Check } from "lucide-react";

export function Pricing() {
  const { t } = useLang();

  const plans = [
    {
      name: t.pricing_free,
      price: t.pricing_free_price,
      period: "",
      description: t.pricing_free_desc,
      features: [t.pricing_free_f1, t.pricing_free_f2, t.pricing_free_f3, t.pricing_free_f4],
      cta: t.pricing_free_cta,
      highlighted: false,
    },
    {
      name: t.pricing_pro,
      price: t.pricing_pro_price,
      period: t.pricing_pro_period,
      description: t.pricing_pro_desc,
      features: [t.pricing_pro_f1, t.pricing_pro_f2, t.pricing_pro_f3, t.pricing_pro_f4, t.pricing_pro_f5],
      cta: t.pricing_pro_cta,
      highlighted: true,
    },
    {
      name: t.pricing_ultra,
      price: t.pricing_ultra_price,
      period: t.pricing_ultra_period,
      description: t.pricing_ultra_desc,
      features: [t.pricing_ultra_f1, t.pricing_ultra_f2, t.pricing_ultra_f3, t.pricing_ultra_f4, t.pricing_ultra_f5, t.pricing_ultra_f6],
      cta: t.pricing_ultra_cta,
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative z-10 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-4">{t.pricing_title}</h2>
            <p className="text-tx2 text-sm max-w-lg mx-auto">{t.pricing_subtitle}</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <RevealOnScroll key={plan.name} delay={i * 100}>
              <div
                className={cn(
                  "glass-card p-6 flex flex-col relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--nx-glass-glow)]",
                  plan.highlighted && "border-ac/[0.3] shadow-[0_0_30px_rgba(59,130,246,0.08)]"
                )}
              >
                {plan.highlighted && <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundImage: "var(--nx-ac-grad)" }} />}

                <div className="mb-6">
                  <h3 className="text-tx font-semibold text-lg mb-1">{plan.name}</h3>
                  <p className="text-tx3 text-xs mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-tx">{plan.price}</span>
                    {plan.period && <span className="text-tx3 text-xs">{plan.period}</span>}
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check size={14} className="text-ac shrink-0" />
                      <span className="text-tx2 text-xs">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-center text-[13px] py-2.5 rounded-btn font-semibold transition-all duration-200",
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
