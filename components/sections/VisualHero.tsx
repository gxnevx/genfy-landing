"use client";

import type React from "react";
import { ArrowRight, Box, Flame, Gauge, PackageCheck, Play, Rocket, Sparkles } from "lucide-react";
import { landingMetrics } from "@/data/landing";
import { useLang } from "@/contexts/LangContext";
import { APP_URL } from "@/lib/constants";
import { trackHeroCta } from "@/lib/analytics";

const heroCopy = {
  pt: {
    badge: "Produto bom · Vídeo viral · TikTok Shop",
    titleLines: ["Achou produto bom.", "Faltava o vídeo."],
    subtitle: "Cole o link do produto, veja o potencial de venda e gere um vídeo 9:16 pronto para testar. Menos editor aberto, mais criativo na rua.",
    primary: "Quero testar agora",
    secondary: "Ver vídeos",
    aside: "Grátis para começar · Sem cartão",
    soon: "Publicação em breve",
    score: "Score 91",
    product: "Produto",
    video: "Vídeo IA",
    sales: "Teste",
    signal: "Produto validado",
    render: "Vídeo sendo gerado",
    publish: "Rascunho pronto",
    factory: "Esteira IA",
    trend: "Produto encontrado",
  },
  en: {
    badge: "AI video factory for TikTok Shop.",
    titleLines: ["From trend", "to selling video."],
    subtitle: "Find the product, validate the signal, and generate creative batches before the trend cools down.",
    primary: "Start creating",
    secondary: "See factory",
    aside: "Free to start · No card",
    soon: "Auto-post soon",
    score: "Score 91",
    product: "Product",
    video: "AI creative",
    sales: "Sale",
    signal: "Validated product",
    render: "Video generating",
    publish: "draft ready",
    factory: "AI factory",
    trend: "Trend captured",
  },
} as const;

const marqueeTokens = [
  "PRODUTO VALIDADO",
  "SCORE 91",
  "+18.4k VENDAS",
  "TIKTOK SHOP",
  "VÍDEO EM 60s",
  "PRODUTO VALIDADO",
  "VEO 3.1",
  "TENDÊNCIA AGORA",
] as const;

const flowSteps = [
  { icon: Box, key: "product" },
  { icon: Gauge, key: "score" },
  { icon: Play, key: "video" },
  { icon: Rocket, key: "sales" },
] as const;

export function VisualHero() {
  const { lang } = useLang();
  const copy = heroCopy[lang];

  return (
    <section className="visual-hero">
      <div className="desktop-marquee" aria-hidden>
        <div className="desktop-marquee-track">
          {[...marqueeTokens, ...marqueeTokens, ...marqueeTokens].map((token, index) => (
            <span key={`${token}-${index}`}>
              <Flame size={12} />
              {token}
            </span>
          ))}
        </div>
      </div>
      <div className="visual-hero-grid">
        <div className="visual-hero-copy">
          <div className="eyebrow-chip hero-chip">
            <Sparkles size={13} />
            {copy.badge}
          </div>

          <h1>
            {copy.titleLines.map((line, index) => (
              <span className={index === 1 ? "hero-title-accent" : "block"} key={line}>{line}</span>
            ))}
          </h1>
          <p>{copy.subtitle}</p>

          <div className="hero-actions">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-primary"
              onClick={() => trackHeroCta("start_creating_free")}
            >
              {copy.primary}
              <ArrowRight size={17} />
            </a>
            <a
              href="#results"
              className="hero-secondary"
              onClick={() => trackHeroCta("explore_tools")}
            >
              {copy.secondary}
            </a>
          </div>
          <span className="hero-cta-aside">{copy.aside}</span>

          <div className="hero-metrics" aria-label="Genfy traction">
            {landingMetrics.map((metric) => (
              <div key={metric.value}>
                <strong>{metric.value}</strong>
                <span>{lang === "pt" ? metric.labelPt : metric.labelEn}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-art-stage" aria-label="Genfy product to money flow">
          <div className="hero-scan-grid" />
          <div className="hero-kinetic-ribbons" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <div className="hero-signal-dots" aria-hidden>
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="hero-float-card hero-float-product">
            <PackageCheck size={17} />
            <span>{copy.signal}</span>
            <strong>91</strong>
          </div>

          <div className="hero-phone">
            <div className="hero-phone-screen">
              <div className="hero-reel">
                <div className="hero-reel-glow" />
                <div className="hero-scan-line" />
                <div className="hero-product-box">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="hero-play">
                  <Play size={24} fill="currentColor" />
                </div>
                <div className="hero-caption">
                  <span>{copy.video}</span>
                  <strong>{copy.render}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-flow">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.key} className="hero-flow-step" style={{ "--i": index } as React.CSSProperties}>
                  <Icon size={17} />
                  <span>{copy[step.key]}</span>
                </div>
              );
            })}
          </div>

          <div className="hero-revenue-wave" aria-hidden>
            {[34, 58, 46, 72, 88, 64, 96].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
