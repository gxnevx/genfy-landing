"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import { TrendingUp, Users, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const TOOLS = [
  {
    nameKey: "tool_trending_name",
    descKey: "tool_trending_desc",
    href: "/tools/trending-products",
    icon: <TrendingUp size={22} />,
    color: "from-blue-500/20 to-blue-500/5",
    accent: "text-blue-400",
  },
  {
    nameKey: "tool_sellers_name",
    descKey: "tool_sellers_desc",
    href: "/tools/trending-sellers",
    icon: <Users size={22} />,
    color: "from-purple-500/20 to-purple-500/5",
    accent: "text-purple-400",
  },
  {
    nameKey: "tool_validation_name",
    descKey: "tool_validation_desc",
    href: "/tools/product-validation",
    icon: <ShieldCheck size={22} />,
    color: "from-emerald-500/20 to-emerald-500/5",
    accent: "text-emerald-400",
  },
] as const;

export function Tools() {
  const { t } = useLang();

  return (
    <section id="tools" className="relative z-10 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-3">
              {t.tools_title}
            </h2>
            <p className="text-tx2 text-sm max-w-md mx-auto">
              {t.tools_subtitle}
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TOOLS.map((tool, i) => (
            <RevealOnScroll key={tool.nameKey} delay={i * 80}>
              <Link href={tool.href} className="block h-full">
                <div className="glass-card p-6 md:p-8 h-full flex flex-col gap-4 group transition-all duration-200 hover:-translate-y-1 hover:border-ac/[0.14] hover:shadow-[var(--nx-glass-glow)] cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${tool.color} ${tool.accent} group-hover:scale-110 transition-transform duration-200 shrink-0`}
                    >
                      {tool.icon}
                    </div>
                    <h3 className="text-tx font-semibold text-base">
                      {t[tool.nameKey] as string}
                    </h3>
                  </div>

                  <div className="flex-1">
                    <p className="text-tx2 text-sm leading-relaxed">
                      {t[tool.descKey] as string}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-ac text-sm font-medium group-hover:gap-2.5 transition-all duration-200">
                    {t.tools_explore}
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
