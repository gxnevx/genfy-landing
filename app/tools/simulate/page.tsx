"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/cn";
import { ArrowLeft, Calculator, Gauge, Zap, Star, Crown, Check } from "lucide-react";
import Link from "next/link";

interface Engine {
  name: string;
  tag: string;
  cost: number;
  quality: string;
  speed: string;
  accent: string;
  accentBg: string;
  badge?: "popular" | "quality";
  features: string[];
}

const ENGINES: Engine[] = [
  {
    name: "Genfy Engine",
    tag: "Standard",
    cost: 100,
    quality: "720p",
    speed: "Fastest",
    accent: "rgba(59,130,246,1)",
    accentBg: "rgba(59,130,246,0.08)",
    features: ["High volume", "Fast turnaround", "Basic quality"],
  },
  {
    name: "Genfy Ultra",
    tag: "Sora 2",
    cost: 150,
    quality: "1080p",
    speed: "Fast",
    accent: "rgba(139,92,246,1)",
    accentBg: "rgba(139,92,246,0.08)",
    badge: "popular",
    features: ["Cinematic motion", "Smooth transitions", "Sora 2 powered"],
  },
  {
    name: "Genfy Prime",
    tag: "VEO 3.1",
    cost: 150,
    quality: "4K",
    speed: "Standard",
    accent: "rgba(16,185,129,1)",
    accentBg: "rgba(16,185,129,0.08)",
    features: ["4K output", "Premium campaigns", "Highest visual quality"],
  },
  {
    name: "Genfy Advanced",
    tag: "VEO 3 Fast",
    cost: 200,
    quality: "1080p",
    speed: "Fast",
    accent: "rgba(245,158,11,1)",
    accentBg: "rgba(245,158,11,0.08)",
    badge: "quality",
    features: ["Best balance", "Demanding creators", "Quality + speed"],
  },
];

const PRESETS = [500, 2000, 5000, 10000] as const;

export default function SimulatePage() {
  const { t } = useLang();
  const [selectedTokens, setSelectedTokens] = useState<number>(2000);
  const [customInput, setCustomInput] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const activeTokens = isCustom
    ? Math.max(0, parseInt(customInput) || 0)
    : selectedTokens;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back link */}
        <RevealOnScroll>
          <Link
            href="/#models"
            className="inline-flex items-center gap-1.5 text-tx3 text-sm hover:text-tx transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            {t.nav_engines}
          </Link>
        </RevealOnScroll>

        {/* Hero */}
        <RevealOnScroll>
          <div className="flex items-start gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 shrink-0">
              <Calculator size={26} className="text-ac" />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-tx tracking-tight mb-2">
                {t.sim_title}
              </h1>
              <p className="text-tx2 text-sm md:text-base max-w-xl leading-relaxed">
                {t.sim_subtitle}
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Token presets */}
        <RevealOnScroll delay={60}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {PRESETS.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => {
                  setSelectedTokens(amount);
                  setIsCustom(false);
                }}
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer",
                  !isCustom && selectedTokens === amount
                    ? "bg-ac/20 text-ac border border-ac/30"
                    : "glass-card text-tx2 hover:text-tx hover:border-ac/20"
                )}
              >
                {amount.toLocaleString("en-US")}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setCustomInput(String(selectedTokens));
                setIsCustom(true);
              }}
              className={cn(
                "px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer",
                isCustom
                  ? "bg-ac/20 text-ac border border-ac/30"
                  : "glass-card text-tx2 hover:text-tx hover:border-ac/20"
              )}
            >
              {t.sim_custom}
            </button>
          </div>

          {isCustom && (
            <div className="flex justify-center mb-4">
              <input
                type="number"
                min={1}
                max={100000}
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder={t.sim_custom_placeholder as string}
                className="glass-card px-4 py-2.5 text-center text-tx text-sm font-semibold w-44 focus:outline-none focus:border-ac/40"
              />
            </div>
          )}
        </RevealOnScroll>

        {/* Video count cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {ENGINES.map((engine, i) => {
            const videoCount = activeTokens > 0 ? Math.floor(activeTokens / engine.cost) : 0;
            return (
              <RevealOnScroll key={engine.name} delay={80 + i * 60}>
                <div className="glass-card p-6 text-center h-full flex flex-col items-center justify-center">
                  <div
                    className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center"
                    style={{ background: engine.accentBg }}
                  >
                    <Gauge size={18} style={{ color: engine.accent }} />
                  </div>
                  <p className="text-tx font-semibold text-sm mb-0.5">{engine.name}</p>
                  <p className="text-tx3 text-[10px] mb-4">
                    {engine.cost} {t.sim_engine_label}
                  </p>
                  <p
                    className="text-3xl font-bold transition-all duration-300"
                    style={{ color: engine.accent }}
                  >
                    {videoCount}
                  </p>
                  <p className="text-tx3 text-xs mt-1">{t.sim_videos_label}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Comparison section */}
        <RevealOnScroll delay={200}>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-tx tracking-tight mb-2">
              {t.sim_compare_title}
            </h2>
            <p className="text-tx2 text-sm">{t.sim_compare_subtitle}</p>
          </div>
        </RevealOnScroll>

        {/* Comparison table — mobile: stacked cards, desktop: table */}
        <RevealOnScroll delay={250}>
          {/* Desktop table */}
          <div className="hidden md:block glass-card overflow-hidden mb-16">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left text-tx3 text-[10px] uppercase tracking-wider font-semibold p-4">Engine</th>
                  <th className="text-center text-tx3 text-[10px] uppercase tracking-wider font-semibold p-4">Quality</th>
                  <th className="text-center text-tx3 text-[10px] uppercase tracking-wider font-semibold p-4">Speed</th>
                  <th className="text-center text-tx3 text-[10px] uppercase tracking-wider font-semibold p-4">Cost</th>
                  <th className="text-left text-tx3 text-[10px] uppercase tracking-wider font-semibold p-4">Highlights</th>
                </tr>
              </thead>
              <tbody>
                {ENGINES.map((engine) => (
                  <tr key={engine.name} className="border-b border-white/[0.04] last:border-0">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                          style={{ background: engine.accentBg }}
                        >
                          <Gauge size={14} style={{ color: engine.accent }} />
                        </div>
                        <div>
                          <span className="text-tx font-semibold text-sm">{engine.name}</span>
                          {engine.badge && (
                            <span
                              className="ml-2 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] font-bold"
                              style={{ background: engine.accentBg, color: engine.accent }}
                            >
                              {engine.badge === "popular" ? <Star size={8} /> : <Crown size={8} />}
                              {engine.badge === "popular" ? "Popular" : "Top Quality"}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center text-tx font-semibold">{engine.quality}</td>
                    <td className="p-4 text-center">
                      <div className="inline-flex items-center gap-1">
                        <Zap size={11} style={{ color: engine.accent }} />
                        <span className="text-tx font-semibold">{engine.speed}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center text-tx font-semibold">{engine.cost} tokens</td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1">
                        {engine.features.map((f) => (
                          <span key={f} className="text-tx2 text-xs flex items-center gap-1.5">
                            <Check size={10} className="text-ac shrink-0" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden flex flex-col gap-4 mb-16">
            {ENGINES.map((engine) => (
              <div key={engine.name} className="glass-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: engine.accentBg }}
                  >
                    <Gauge size={16} style={{ color: engine.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-tx font-semibold text-sm">{engine.name}</span>
                      {engine.badge && (
                        <span
                          className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] font-bold"
                          style={{ background: engine.accentBg, color: engine.accent }}
                        >
                          {engine.badge === "popular" ? <Star size={8} /> : <Crown size={8} />}
                          {engine.badge === "popular" ? "Popular" : "Top Quality"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div>
                    <p className="text-tx3 text-[9px] uppercase tracking-wider font-semibold">Quality</p>
                    <p className="text-tx font-semibold text-sm">{engine.quality}</p>
                  </div>
                  <div>
                    <p className="text-tx3 text-[9px] uppercase tracking-wider font-semibold">Speed</p>
                    <div className="flex items-center gap-1">
                      <Zap size={11} style={{ color: engine.accent }} />
                      <span className="text-tx font-semibold text-sm">{engine.speed}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-tx3 text-[9px] uppercase tracking-wider font-semibold">Cost</p>
                    <p className="text-tx font-semibold text-sm">{engine.cost} tok</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  {engine.features.map((f) => (
                    <span key={f} className="text-tx2 text-xs flex items-center gap-1.5">
                      <Check size={10} className="text-ac shrink-0" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
