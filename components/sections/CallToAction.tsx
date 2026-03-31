"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import { APP_URL } from "@/lib/constants";
import { trackGetStarted } from "@/lib/analytics";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  const { t } = useLang();

  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <RevealOnScroll threshold={0.3}>
          <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.18), transparent 70%)" }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-4">{t.cta_title}</h2>
              <p className="text-tx2 text-sm max-w-md mx-auto mb-8">{t.cta_subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3 text-sm gap-2" onClick={() => trackGetStarted("final_cta")}>
                  {t.cta_button}
                  <ArrowRight size={15} />
                </a>
                <a href="#tools" className="btn-ghost px-6 py-2.5 text-sm">{t.cta_secondary}</a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
