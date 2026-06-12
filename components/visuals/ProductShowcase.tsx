"use client";

import type React from "react";
import { useState } from "react";
import { CheckCircle2, CircleDot, Music, Play, Scissors, Star, Trophy, UploadCloud } from "lucide-react";
import { showcasePanels } from "@/data/landing";
import { useLang } from "@/contexts/LangContext";
import { MockupFrame } from "@/components/visuals/MockupFrame";
import { cn } from "@/lib/cn";

type PanelKey = (typeof showcasePanels)[number]["key"];

function HubMock() {
  const products = [
    { name: "Skincare viral", score: 91, tone: "from-cyan-300/45 via-blue-400/20 to-emerald-300/10" },
    { name: "Gadget de cozinha", score: 86, tone: "from-violet-300/38 via-blue-300/18 to-cyan-300/10" },
    { name: "Casa inteligente", score: 81, tone: "from-emerald-300/35 via-cyan-300/16 to-blue-400/10" },
  ];

  return (
    <div className="showcase-hub-grid grid gap-3 sm:grid-cols-3">
      {products.map((item, index) => (
        <div key={item.name} className="showcase-product-tile rounded-[8px] border border-white/[0.08] bg-black/25 p-3">
          <div className={`relative mb-3 h-28 overflow-hidden rounded-[7px] bg-gradient-to-br ${item.tone}`}>
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[12px] border border-white/20 bg-white/10 shadow-[0_0_38px_rgba(125,211,252,0.22)]" />
            <div className="absolute bottom-2 left-2 right-2 flex items-end gap-1">
              {[44, 68, 52, 88, 74].map((height, barIndex) => (
                <span
                  key={`${item.name}-${barIndex}`}
                  className="block flex-1 rounded-full bg-white/35"
                  style={{ height: `${height - index * 5}px` }}
                />
              ))}
            </div>
          </div>
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-white">{item.name}</p>
              <p className="mt-1 text-xs text-white/45">Sinal TikTok Shop</p>
            </div>
            <strong className="rounded-full bg-emerald-300/10 px-2 py-1 text-sm text-emerald-100">
              {item.score}
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
}

function StudioMock() {
  return (
    <div className="showcase-studio-grid grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
      <div className="showcase-upload-plane rounded-[8px] border border-white/[0.08] bg-white/[0.04] p-3">
        <UploadCloud size={18} className="mb-8 text-blue-200" />
        <p className="text-sm font-bold text-white">Imagem do produto</p>
        <div className="mt-3 h-2 rounded-full bg-blue-300/70" />
      </div>
      <div className="space-y-2">
        {["Prompt salvo", "Avatar creator", "Fila em tempo real"].map((item) => (
          <div key={item} className="flex items-center gap-2 rounded-[8px] bg-black/20 p-3 text-sm font-semibold text-white/75">
            <CheckCircle2 size={15} className="text-emerald-200" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreMock() {
  return (
    <div className="showcase-score-grid grid gap-3 sm:grid-cols-[180px_1fr]">
      <div className="showcase-score-orb rounded-[8px] border border-emerald-300/15 bg-emerald-300/[0.08] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-100/60">Genfy Score</p>
        <strong className="mt-4 block text-6xl leading-none text-white">91</strong>
      </div>
      <div className="grid gap-2">
        {["Demanda", "Segurança", "Social", "Conteúdo"].map((item, index) => (
          <div key={item} className="rounded-[8px] bg-white/[0.045] p-3">
            <div className="mb-2 flex items-center justify-between text-xs font-bold text-white/70">
              <span>{item}</span>
              <span>{92 - index * 4}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-emerald-300" style={{ width: `${92 - index * 4}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RankingMock() {
  return (
    <div className="showcase-ranking space-y-2">
      {["Creator Alpha", "Genfy Pro", "Video Lab"].map((name, index) => (
        <div key={name} className="flex items-center gap-3 rounded-[8px] border border-white/[0.08] bg-black/20 p-3">
          <Trophy size={18} className={index === 0 ? "text-amber-200" : "text-white/42"} />
          <span className="flex-1 text-sm font-bold text-white">{name}</span>
          <span className="text-xs font-bold text-blue-200">{2400 - index * 420} pts</span>
        </div>
      ))}
    </div>
  );
}

function EditorMock() {
  return (
    <div className="showcase-editor grid gap-3 sm:grid-cols-[1fr_180px]">
      <div className="showcase-editor-preview flex aspect-video items-center justify-center rounded-[8px] bg-gradient-to-br from-white/10 to-blue-300/10">
        <Play size={34} className="text-white/80" />
      </div>
      <div className="grid gap-2">
        {[Scissors, Music, Star].map((Icon, index) => (
          <div key={index} className="flex items-center gap-2 rounded-[8px] bg-black/20 p-3 text-sm font-semibold text-white/72">
            <Icon size={15} className="text-blue-200" />
            {["Cortes", "Música", "Stickers"][index]}
          </div>
        ))}
      </div>
    </div>
  );
}

const mocks: Record<PanelKey, React.ReactNode> = {
  hub: <HubMock />,
  studio: <StudioMock />,
  score: <ScoreMock />,
  ranking: <RankingMock />,
  editor: <EditorMock />,
};

export function ProductShowcase() {
  const { lang } = useLang();
  const [active, setActive] = useState<PanelKey>("hub");
  const panel = showcasePanels.find((item) => item.key === active) ?? showcasePanels[0];

  return (
    <section id="product" className="visual-section">
      <div className="visual-inner grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
        <div className="showcase-copy-panel">
          <span className="eyebrow-chip">{lang === "pt" ? "Produto em ação" : "Product in action"}</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
            {lang === "pt" ? "Produto, score e vídeo no mesmo ritmo." : "Product, score, and video at the same pace."}
          </h2>
          <div className="showcase-signal-line" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <div className="mt-6 grid gap-2">
            {showcasePanels.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(item.key)}
                  className={cn("flex min-h-12 items-center gap-3 rounded-[8px] border px-3 text-left", active === item.key ? "border-blue-300/35 bg-blue-300/10 text-white" : "border-white/[0.08] bg-white/[0.035] text-white/58")}
                >
                  <Icon size={17} />
                  <span className="font-bold">{lang === "pt" ? item.labelPt : item.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>
        <MockupFrame label={lang === "pt" ? panel.labelPt : panel.labelEn}>
          <div className="mb-5 flex items-start gap-3">
            <CircleDot size={18} className="mt-1 shrink-0 text-blue-200" />
            <div>
              <h3 className="text-xl font-bold text-white">{lang === "pt" ? panel.titlePt : panel.titleEn}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {(lang === "pt" ? panel.bulletsPt : panel.bulletsEn).map((bullet) => (
                  <span key={bullet} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-white/54">
                    {bullet}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {mocks[active]}
        </MockupFrame>
      </div>
    </section>
  );
}
