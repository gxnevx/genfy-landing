"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/cn";
import { Gauge, Calculator } from "lucide-react";

const ENGINES = [
  { name: "Genfy Engine", tag: "Standard", cost: 100, accent: "rgba(59,130,246,1)", accentBg: "rgba(59,130,246,0.08)" },
  { name: "Genfy Ultra", tag: "Sora 2", cost: 150, accent: "rgba(139,92,246,1)", accentBg: "rgba(139,92,246,0.08)" },
  { name: "Genfy Prime", tag: "VEO 3.1", cost: 150, accent: "rgba(16,185,129,1)", accentBg: "rgba(16,185,129,0.08)" },
  { name: "Genfy Advanced", tag: "VEO 3 Fast", cost: 200, accent: "rgba(245,158,11,1)", accentBg: "rgba(245,158,11,0.08)" },
] as const;

const PRESETS = [500, 2000, 5000, 10000] as const;

export function TokenSimulator() {
  const { t } = useLang();
  const [selectedTokens, setSelectedTokens] = useState<number>(2000);
  const [customInput, setCustomInput] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const activeTokens = isCustom
    ? Math.max(0, parseInt(customInput) || 0)
    : selectedTokens;

  return (
    <div className="mt-16">
      <RevealOnScroll>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Calculator size={18} className="text-ac" />
            <h3 className="text-xl md:text-2xl font-bold text-tx tracking-tight">
              {t.sim_title}
            </h3>
          </div>
          <p className="text-tx2 text-sm max-w-lg mx-auto">{t.sim_subtitle}</p>
        </div>
      </RevealOnScroll>

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
                "px-4 py-2.5 rounded-btn text-sm font-semibold transition-all duration-200 cursor-pointer",
                !isCustom && selectedTokens === amount
                  ? "btn-accent"
                  : "glass-card text-tx2 hover:text-tx hover:border-ac/20"
              )}
            >
              {amount.toLocaleString()}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setIsCustom(true)}
            className={cn(
              "px-4 py-2.5 rounded-btn text-sm font-semibold transition-all duration-200 cursor-pointer",
              isCustom
                ? "btn-accent"
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
              placeholder={t.sim_custom_placeholder}
              className="glass-card px-4 py-2.5 text-center text-tx text-sm font-semibold w-44 focus:outline-none focus:border-ac/40"
            />
          </div>
        )}
      </RevealOnScroll>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
    </div>
  );
}
