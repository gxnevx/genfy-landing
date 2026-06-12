"use client";

import { BarChart3 } from "lucide-react";
import { landingMetrics, productRows } from "@/data/landing";
import { useLang } from "@/contexts/LangContext";
import { MetricCard } from "@/components/visuals/MetricCard";

export function MetricsDashboard() {
  const { lang } = useLang();

  return (
    <section id="traction" className="visual-section">
      <div className="visual-inner">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow-chip">{lang === "pt" ? "Tração real" : "Live traction"}</span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              {lang === "pt" ? "Tração real, sem inflar promessa." : "Real traction, no inflated promise."}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/48">
            {lang === "pt" ? "Mais criativos, mais testes, mais velocidade para achar o ângulo vencedor." : "More creative tests, faster signal."}
          </p>
        </div>

        <div className="metrics-stat-strip grid gap-3 md:grid-cols-3">
          {landingMetrics.map((metric) => (
            <MetricCard key={metric.value} value={metric.value} label={lang === "pt" ? metric.labelPt : metric.labelEn} />
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="vector-card metrics-chart-card p-4">
            <div className="mb-5 flex items-center gap-2 text-sm font-bold text-white">
              <BarChart3 size={17} className="text-blue-200" />
              {lang === "pt" ? "Vídeos gerados" : "Generated videos"}
            </div>
            <div className="metrics-bars flex h-44 items-end gap-2">
              {[28, 42, 51, 63, 74, 86, 100].map((height, index) => (
                <div key={index} className="flex-1 rounded-t-[6px] bg-gradient-to-t from-blue-400/70 to-cyan-200/80" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="vector-card metrics-table overflow-hidden">
            <div className="grid grid-cols-[1fr_70px_70px_82px] gap-2 border-b border-white/[0.08] p-3 text-[11px] font-bold uppercase tracking-[0.08em] text-white/36">
              <span>{lang === "pt" ? "Produto" : "Product"}</span>
              <span>Score</span>
              <span>{lang === "pt" ? "Vend." : "Sold"}</span>
              <span>{lang === "pt" ? "Sinal" : "Signal"}</span>
            </div>
            {productRows.map((row) => (
              <div key={row.product} className="grid grid-cols-[1fr_70px_70px_82px] gap-2 border-b border-white/[0.06] p-3 text-sm last:border-b-0">
                <span className="truncate font-semibold text-white">{row.product}</span>
                <span className="font-bold text-blue-200">{row.score}</span>
                <span className="text-white/58">{row.sold}</span>
                <span className="font-semibold text-emerald-200">{lang === "pt" ? row.signalPt : row.signalEn}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
