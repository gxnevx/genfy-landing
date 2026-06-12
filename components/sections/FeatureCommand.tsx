"use client";

import type React from "react";
import { ArrowRight, Layers3 } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { APP_URL } from "@/lib/constants";
import { landingPillars, pipelineStats } from "@/data/landing";
import { GenfyCommandCenter } from "@/components/visuals/GenfyCommandCenter";
import { trackHeroCta } from "@/lib/analytics";

export function FeatureCommand() {
  const { lang } = useLang();

  return (
    <section id="features" className="feature-command visual-section">
      <div className="visual-inner">
        <div className="feature-command-head">
          <div>
            <span className="eyebrow-chip">
              <Layers3 size={14} />
              {lang === "pt" ? "O produto inteiro" : "The whole product"}
            </span>
            <h2>
              {lang === "pt"
                ? "Do produto ao vídeo, sem virar uma operação manual."
                : "From product to video without turning it into manual ops."}
            </h2>
          </div>
          <p>
            {lang === "pt"
              ? "Cole um link, escolha o produto com mais potencial, gere o criativo e siga para rascunho. O fluxo fica curto para você testar mais ideias no mesmo dia."
              : "Genfy is not just a video generator. It is a decision pipeline: opportunity radar, score, AI Studio, gallery, editor, and assisted publishing for TikTok Shop."}
          </p>
        </div>

        <div className="feature-command-grid">
          <div className="feature-command-copy">
            <div className="pipeline-strip" aria-label={lang === "pt" ? "Pipeline Genfy" : "Genfy pipeline"}>
              {pipelineStats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.value}
                    className="pipeline-node"
                    style={{ "--i": index } as React.CSSProperties}
                  >
                    <Icon size={17} />
                    <span>{item.value}</span>
                    <strong>{lang === "pt" ? item.labelPt : item.labelEn}</strong>
                  </div>
                );
              })}
            </div>

            <div className="feature-pillar-grid">
              {landingPillars.slice(0, 4).map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.titlePt}
                    className="feature-pillar-card"
                    style={{ "--i": index } as React.CSSProperties}
                  >
                    <div className="feature-pillar-top">
                      <Icon size={18} />
                      <span>{item.stat}</span>
                    </div>
                    <h3>{lang === "pt" ? item.titlePt : item.titleEn}</h3>
                    <p>{lang === "pt" ? item.textPt : item.textEn}</p>
                  </article>
                );
              })}
            </div>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="feature-command-cta"
              onClick={() => trackHeroCta("start_creating_free")}
            >
              {lang === "pt" ? "Começar grátis" : "Start for free"}
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="feature-command-visual">
            <GenfyCommandCenter lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
