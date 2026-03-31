"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import { GitBranch, Sparkles, Wrench, TrendingUp, ArrowRight } from "lucide-react";
import updatesData from "@/data/updates.json";

export interface Update {
  version: string;
  date: string;
  type: string;
  title_en: string;
  title_pt: string;
  items_en: string[];
  items_pt: string[];
}

export const TYPE_META: Record<string, { icon: React.ReactNode; color: string; bg: string }> = {
  feature:     { icon: <Sparkles size={13} />,   color: "text-blue-400",   bg: "bg-blue-500/10" },
  improvement: { icon: <TrendingUp size={13} />, color: "text-purple-400", bg: "bg-purple-500/10" },
  fix:         { icon: <Wrench size={13} />,      color: "text-amber-400",  bg: "bg-amber-500/10" },
};

export function UpdateCard({ update, index }: { key?: string; update: Update; index: number }) {
  const { lang } = useLang();
  const title = lang === "pt" ? update.title_pt : update.title_en;
  const items = lang === "pt" ? update.items_pt : update.items_en;
  const meta = TYPE_META[update.type] ?? TYPE_META.improvement;

  return (
    <RevealOnScroll delay={index * 80}>
      <div className="glass-card p-6 group hover:-translate-y-0.5 hover:border-ac/[0.14] transition-all duration-200">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className={`w-7 h-7 rounded-md flex items-center justify-center ${meta.bg} ${meta.color}`}>
              {meta.icon}
            </div>
            <div>
              <span className="text-tx font-semibold text-sm">{title}</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-mono text-ac bg-ac-s px-1.5 py-0.5 rounded-sm">{update.version}</span>
                <span className="text-tx3 text-[10px]">{update.date}</span>
              </div>
            </div>
          </div>
          <GitBranch size={13} className="text-tx3 opacity-0 group-hover:opacity-60 transition-opacity mt-1 shrink-0" />
        </div>
        <ul className="flex flex-col gap-1.5 pl-[38px]">
          {items.map((item) => (
            <li key={item} className="text-tx2 text-xs flex items-start gap-2">
              <span className="mt-1.5 block w-1 h-1 rounded-full bg-tx3 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </RevealOnScroll>
  );
}

export function RecentUpdates() {
  const { t } = useLang();
  const updates: Update[] = updatesData.updates.slice(0, 3);

  return (
    <section id="updates" className="relative z-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-4">{t.updates_title}</h2>
            <p className="text-tx2 text-sm max-w-lg mx-auto">{t.updates_subtitle}</p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-4">
          {updates.map((update, i) => (
            <UpdateCard key={update.version} update={update} index={i} />
          ))}
        </div>

        <RevealOnScroll delay={280}>
          <div className="text-center mt-8">
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 text-sm text-ac hover:text-ac/80 transition-colors font-medium"
            >
              {t.updates_show_more}
              <ArrowRight size={14} />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
