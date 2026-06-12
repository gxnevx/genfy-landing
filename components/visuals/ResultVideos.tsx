"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { CircleDot } from "lucide-react";
import { resultVideos } from "@/data/landing";
import { useLang } from "@/contexts/LangContext";

export function ResultVideos() {
  const { lang } = useLang();
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;
      video.muted = true;
      void video.play().catch(() => undefined);
    });
  }, []);

  return (
    <section id="results" className="visual-section result-videos-section">
      <div className="visual-inner">
        <div className="result-videos-heading">
          <span className="eyebrow-chip">
            <CircleDot size={14} />
            {lang === "pt" ? "Saiu do Genfy" : "Made with Genfy"}
          </span>
          <h2>
            {lang === "pt" ? "Cada vídeo abaixo virou teste no TikTok Shop." : "Each video below became a TikTok Shop test."}
          </h2>
          <p>
            {lang === "pt"
              ? "Produto real, contexto real e IA no formato vertical. A prova visual precisa aparecer antes da promessa."
              : "Real videos generated through Genfy: product, context, AI, and a format ready to test on TikTok Shop."}
          </p>
        </div>

        <div className="result-video-grid">
          {resultVideos.map((item, index) => (
            <article className="result-video-card" key={item.src} style={{ "--i": index } as React.CSSProperties}>
              <div className="result-video-frame">
                <video
                  ref={(node) => {
                    videoRefs.current[index] = node;
                  }}
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onCanPlay={(event) => {
                    event.currentTarget.muted = true;
                    void event.currentTarget.play().catch(() => undefined);
                  }}
                />
              </div>
              <div className="result-video-copy">
                <h3>{lang === "pt" ? item.titlePt : item.titleEn}</h3>
                <p>{lang === "pt" ? item.textPt : item.textEn}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
