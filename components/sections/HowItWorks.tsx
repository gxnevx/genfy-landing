"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import { Upload, Wand2, Share2 } from "lucide-react";

export function HowItWorks() {
  const { t } = useLang();

  const steps = [
    { step: 1, title: t.howItWorks_step1_title, desc: t.howItWorks_step1_desc, icon: <Upload size={22} /> },
    { step: 2, title: t.howItWorks_step2_title, desc: t.howItWorks_step2_desc, icon: <Wand2 size={22} /> },
    { step: 3, title: t.howItWorks_step3_title, desc: t.howItWorks_step3_desc, icon: <Share2 size={22} /> },
  ];

  return (
    <section id="how-it-works" className="relative z-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-4">{t.howItWorks_title}</h2>
            <p className="text-tx2 text-sm max-w-lg mx-auto">{t.howItWorks_subtitle}</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.step} delay={i * 120} className="h-full">
              <div className="glass-card p-6 h-full flex flex-col relative group hover:-translate-y-1 hover:border-ac/[0.14] hover:shadow-[var(--nx-glass-glow)] transition-all duration-200 cursor-default">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white font-bold text-sm" style={{ backgroundImage: "var(--nx-ac-grad)" }}>
                  {s.step}
                </div>
                <div className="text-ac mb-3">{s.icon}</div>
                <h3 className="text-tx font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-tx3 text-sm leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-bd" />
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
