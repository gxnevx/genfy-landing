"use client";

import { useLang } from "@/contexts/LangContext";
import type { Translations } from "@/lib/i18n";
import { APP_URL } from "@/lib/constants";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MockupFrame } from "@/components/tools/MockupFrame";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

type TKey = keyof Translations;

interface Step {
  readonly titleKey: TKey;
  readonly descKey: TKey;
  readonly num: number;
}

interface Feature {
  readonly key: TKey;
}

interface ToolPageLayoutProps {
  heroKey: TKey;
  heroSubKey: TKey;
  icon: React.ReactNode;
  iconColor: string;
  steps: readonly Step[];
  features: readonly Feature[];
  mockup: React.ReactNode;
}

export function ToolPageLayout({
  heroKey,
  heroSubKey,
  icon,
  iconColor,
  steps,
  features,
  mockup,
}: ToolPageLayoutProps) {
  const { t } = useLang();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back link */}
        <RevealOnScroll>
          <Link
            href="/#tools"
            className="inline-flex items-center gap-1.5 text-tx3 text-sm hover:text-tx transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            {t.tool_back}
          </Link>
        </RevealOnScroll>

        {/* Hero */}
        <RevealOnScroll>
          <div className="flex items-start gap-4 mb-6">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${iconColor} shrink-0`}
            >
              {icon}
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-tx tracking-tight mb-2">
                {t[heroKey] }
              </h1>
              <p className="text-tx2 text-sm md:text-base max-w-xl leading-relaxed">
                {t[heroSubKey] }
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Mockup */}
        <RevealOnScroll delay={100}>
          <div className="mb-16">
            <MockupFrame>{mockup}</MockupFrame>
          </div>
        </RevealOnScroll>

        {/* How it works */}
        <RevealOnScroll delay={150}>
          <h2 className="text-xl md:text-2xl font-bold text-tx tracking-tight mb-8">
            {t.tool_how_it_works}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {steps.map((step) => (
              <div key={step.num} className="glass-card p-6 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-ac/10 flex items-center justify-center text-ac text-sm font-bold shrink-0">
                    {step.num}
                  </div>
                  <h3 className="text-tx font-semibold text-sm">
                    {t[step.titleKey] }
                  </h3>
                </div>
                <p className="text-tx2 text-sm leading-relaxed pl-11">
                  {t[step.descKey] }
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Features */}
        <RevealOnScroll delay={200}>
          <h2 className="text-xl md:text-2xl font-bold text-tx tracking-tight mb-6">
            {t.tool_features}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
            {features.map((f) => (
              <div key={f.key} className="flex items-center gap-3 glass-card p-4">
                <Check size={16} className="text-ac shrink-0" />
                <span className="text-tx text-sm">{t[f.key] }</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll delay={250}>
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.18), transparent 70%)" }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-tx tracking-tight mb-3">
                {t.tool_cta}
              </h2>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex px-8 py-3 text-sm gap-2 mt-4"
              >
                {t.hero_cta}
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
