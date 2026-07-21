"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { APP_URL } from "@/lib/constants";
import { trackGetStarted, trackHeroCta } from "@/lib/analytics";
import { useLang } from "@/contexts/LangContext";
import { landingMetrics, plans, resultVideos } from "@/data/landing";
import type { LandingVariant } from "@/components/sections/landing-types";

/**
 * MobileLanding — bilingual (PT default / EN via LangToggle).
 * Typography-as-art with organic glow blobs; copy lives in the `copy` dict.
 */

const WA_COMMUNITY_URL = "https://chat.whatsapp.com/HxhJZmYZv8Z0lz2nDsf9yV"; // placeholder

const steps = [
  {
    number: "01",
    titlePt: "Encontre antes.",
    titleEn: "Find it first.",
    textPt: "Radar de tendências e sellers do TikTok Shop com produtos antes da concorrência colar.",
    textEn: "Trend and seller radar for TikTok Shop — spot products before competitors pile in.",
  },
  {
    number: "02",
    titlePt: "Valide antes de gastar.",
    titleEn: "Validate before spending.",
    textPt: "Demanda, prova social, risco e potencial de criativo na mesma tela. Decisão com dado.",
    textEn: "Demand, social proof, risk, and creative potential on one screen. Decide with data.",
  },
  {
    number: "03",
    titlePt: "Transforme em vídeo.",
    titleEn: "Turn it into video.",
    textPt: "Link do produto vira criativo vertical para TikTok Shop, sem editor, sem agência.",
    textEn: "The product link becomes a vertical creative for TikTok Shop — no editor, no agency.",
  },
  {
    number: "04",
    titlePt: "Publique e aprenda.",
    titleEn: "Publish and learn.",
    textPt: "Rascunho no TikTok já. Auto-post chegando para publicar mais enquanto o produto está quente.",
    textEn: "Draft to TikTok today. Auto-post is coming so you ship more while the product is hot.",
  },
] as const;

const copy = {
  pt: {
    heroChip: "Foto ou link · Vídeo 9:16 · TikTok Shop",
    heroTitle: ["Crie vídeos", "de produto.", "Sem gravar.", "Sem editar."],
    heroLede:
      "Envie uma foto ou cole o link do produto. O Genfy gera um vídeo vertical com IA pronto para testar no TikTok Shop.",
    heroCta: "Criar conta grátis",
    heroAside: "Sem cartão · Vídeos a partir de R$ 4,90",
    resultsEyebrow: "Saiu do Genfy",
    resultsTitle: ["Veja o produto ganhar ", "cara de anúncio."],
    cycleEyebrow: "O ciclo",
    cycleTitle: ["Do link ao vídeo ", "pronto para publicar."],
    enginesEyebrow: "Motores de vídeo",
    enginesTitle: ["Escolha o motor. ", "Prepare o próximo criativo."],
    engineAvailable: "Disponível agora",
    engineVeoDesc: "Realismo, áudio e cenas que parecem filmadas.",
    engineSeedanceDesc: "Movimento, ritmo e produto ganhando vida.",
    notifyEyebrow: "Em breve",
    notifyTitle: ["Gerou, revisou, publicou. ", "Auto-post vem aí."],
    notifyLede: [
      "O ",
      "rascunho",
      " já cai direto na sua caixa do TikTok. O ",
      "auto-post",
      " que publica automático sem abrir o app está chegando — entra na comunidade pra receber primeiro.",
    ],
    notifyCta: "Me avisar no WhatsApp",
    plansEyebrow: "Comprar tokens",
    plansTitle: ["Compre tokens. ", "Gere sem assinatura."],
    plansNote: "Precisa de mais de 50.000 tokens? Fale com a gente sobre o pacote Business.",
    closingEyebrow: "Feito no Brasil",
    closingTitle: ["Seu próximo vídeo ", "começa com uma foto ou link."],
    closingLede:
      "Produto, score e vídeo no mesmo fluxo. Pra competir com quem está mais acima na esteira sem perder o dia editando.",
    closingCta: "Criar conta grátis",
    closingAside: "Sem cartão · Vídeos a partir de R$ 4,90",
  },
  en: {
    heroChip: "Good product · Viral video · TikTok Shop",
    heroTitle: ["A good product", "won't wait.", "Turn it into", "a viral video."],
    heroLede:
      "Find the opportunity, validate the potential, and turn the link into a video built to grab attention on TikTok Shop.",
    heroCta: "Generate my first video",
    heroAside: "Free to start · No card",
    resultsEyebrow: "Made with Genfy",
    resultsTitle: ["Watch the product become ", "ad-ready."],
    cycleEyebrow: "The cycle",
    cycleTitle: ["From link to a video ", "ready to go viral."],
    enginesEyebrow: "Video engines",
    enginesTitle: ["Pick the engine. ", "Prep the next viral."],
    engineAvailable: "Available now",
    engineVeoDesc: "Realism, audio, and scenes that look filmed.",
    engineSeedanceDesc: "Motion, rhythm, and products coming to life.",
    notifyEyebrow: "Coming soon",
    notifyTitle: ["Generated, reviewed, published. ", "Auto-post is coming."],
    notifyLede: [
      "The ",
      "draft",
      " lands straight in your TikTok inbox. ",
      "Auto-post",
      " that publishes automatically without opening the app is on the way — join the community to get it first.",
    ],
    notifyCta: "Notify me on WhatsApp",
    plansEyebrow: "Buy tokens",
    plansTitle: ["Buy tokens. ", "Generate without a subscription."],
    plansNote: "Need more than 50,000 tokens? Talk to us about the Business pack.",
    closingEyebrow: "Made in Brazil",
    closingTitle: ["Your next viral ", "starts with a link."],
    closingLede:
      "Product, score, and video in one flow. To compete with whoever's ahead without losing a day editing.",
    closingCta: "Create my first video",
    closingAside: "Free to start · No card",
  },
} as const;

const aiVideoHeroCopy = {
  pt: {
    heroChip: "Foto para vídeo IA · Produto · Anúncio",
    heroTitle: ["Transforme foto", "em vídeo com IA.", "Pronto para", "produto e anúncio."],
    heroLede:
      "Envie uma foto ou cole o link do produto. Gere um vídeo vertical com Veo 3.1 ou Seedance 2.0 — sem câmera e sem editar.",
    heroCta: "Criar conta grátis",
  },
  en: {
    heroChip: "AI video generator",
    heroTitle: ["Generate AI", "product videos.", "From link to", "creative."],
    heroLede:
      "Paste a product link or use an image to generate AI videos with Veo 3.1 or Seedance 2.0 — no filming or editing.",
    heroCta: "Create an AI video",
  },
} as const;

export function MobileLanding({ variant = "default" }: { variant?: LandingVariant }) {
  const { lang } = useLang();
  const c = variant === "ai-video" ? { ...copy[lang], ...aiVideoHeroCopy[lang] } : copy[lang];
  const pt = lang === "pt";
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [activeEngine, setActiveEngine] = useState<"veo" | "seedance">("seedance");

  useEffect(() => {
    const videos = videoRefs.current.filter((v): v is HTMLVideoElement => v != null);
    videos.forEach((v) => {
      v.muted = true;
      void v.play().catch(() => undefined);
    });

    if (typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const v = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            v.muted = true;
            void v.play().catch(() => undefined);
          } else {
            v.pause();
          }
        }
      },
      { threshold: 0.25 },
    );
    videos.forEach((v) => obs.observe(v));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="mobile-lp">
      <div className="mobile-scroll-progress" aria-hidden />

      {/* HERO ───────────────────────────────────────────────────────────── */}
      <section className="mlp-section mlp-hero">
        <div className="mlp-glow mlp-glow-hero" aria-hidden>
          <span />
          <span />
          <span />
        </div>

        <div className="mlp-chip">
          <span className="mlp-chip-dot" />
          {c.heroChip}
        </div>

        <h1 className="mlp-display mlp-hero-display">
          <span className="mlp-hero-line">{c.heroTitle[0]}</span>
          <span className="mlp-hero-line">{c.heroTitle[1]}</span>
          <em>
            <span className="mlp-hero-line">{c.heroTitle[2]}</span>
            <span className="mlp-hero-line">{c.heroTitle[3]}</span>
          </em>
        </h1>
        <p className="mlp-lede">{c.heroLede}</p>

        <a
          className="mlp-cta"
          href={APP_URL}
          onClick={() => trackHeroCta("start_creating_free")}
        >
          {c.heroCta}
          <ArrowRight size={17} />
        </a>
        <span className="mlp-aside">{c.heroAside}</span>

        <div className="mlp-hero-video">
          <video
            ref={(node) => {
              videoRefs.current[0] = node;
            }}
            src="/landing/videos/seedance-1.mp4"
            poster="/landing/posters/seedance-1.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </section>

      {/* BIG NUMBERS ───────────────────────────────────────────────────── */}
      <section className="mlp-section mlp-numbers">
        <div className="mlp-glow mlp-glow-numbers" aria-hidden>
          <span />
          <span />
        </div>
        {landingMetrics.slice(0, 3).map((metric) => (
          <article key={metric.value}>
            <strong>{metric.value}</strong>
            <span>{pt ? metric.labelPt : metric.labelEn}</span>
          </article>
        ))}
      </section>

      {/* RESULTS (videos) ──────────────────────────────────────────────── */}
      <section id="mobile-results" className="mlp-section mlp-results">
        <div className="mlp-glow mlp-glow-results" aria-hidden>
          <span />
          <span />
        </div>
        <span className="mlp-eyebrow">
          <Sparkles size={11} />
          {c.resultsEyebrow}
        </span>
        <h2 className="mlp-headline">
          {c.resultsTitle[0]}
          <em>{c.resultsTitle[1]}</em>
        </h2>
        <div className="mlp-video-strip">
          {resultVideos.map((item, index) => (
            <article key={item.src}>
              <video
                ref={(node) => {
                  videoRefs.current[index + 1] = node;
                }}
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <strong>{pt ? item.titlePt : item.titleEn}</strong>
            </article>
          ))}
        </div>
      </section>

      {/* FLOW — 4 steps as floating typography */}
      <section id="mobile-cycle" className="mlp-section mlp-flow">
        <div className="mlp-glow mlp-glow-flow" aria-hidden>
          <span />
          <span />
        </div>
        <span className="mlp-eyebrow">
          <Sparkles size={11} />
          {c.cycleEyebrow}
        </span>
        <h2 className="mlp-headline">
          {c.cycleTitle[0]}
          <em>{c.cycleTitle[1]}</em>
        </h2>
        <ol className="mlp-steps">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="mlp-step-num">{step.number}</span>
              <h3>{pt ? step.titlePt : step.titleEn}</h3>
              <p>{pt ? step.textPt : step.textEn}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ENGINES */}
      <section id="mobile-engines" className="mlp-section mlp-engines">
        <div className="mlp-glow mlp-glow-engines" aria-hidden>
          <span />
          <span />
        </div>
        <span className="mlp-eyebrow">
          <Sparkles size={11} />
          {c.enginesEyebrow}
        </span>
        <h2 className="mlp-headline">
          {c.enginesTitle[0]}
          <em>{c.enginesTitle[1]}</em>
        </h2>
        <div className={`engine-depth-stage engine-focus-${activeEngine}`}>
          <button
            type="button"
            className="engine-depth-card engine-depth-veo"
            onClick={() => setActiveEngine("veo")}
          >
            <span>{c.engineAvailable}</span>
            <strong>Veo 3.1</strong>
            <p>{c.engineVeoDesc}</p>
            <i aria-hidden><b /><b /><b /></i>
          </button>
          <button
            type="button"
            className="engine-depth-card engine-depth-seedance"
            onClick={() => setActiveEngine("seedance")}
          >
            <span>{c.engineAvailable}</span>
            <strong>Seedance 2.0</strong>
            <p>{c.engineSeedanceDesc}</p>
            <i aria-hidden><b /><b /><b /></i>
          </button>
        </div>
      </section>

      {/* AUTO-POST notify */}
      <section id="mobile-notify" className="mlp-section mlp-notify">
        <div className="mlp-glow mlp-glow-notify" aria-hidden>
          <span />
          <span />
        </div>
        <span className="mlp-eyebrow">
          <Sparkles size={11} />
          {c.notifyEyebrow}
        </span>
        <h2 className="mlp-headline">
          {c.notifyTitle[0]}
          <em>{c.notifyTitle[1]}</em>
        </h2>
        <p className="mlp-lede">
          {c.notifyLede[0]}
          <strong>{c.notifyLede[1]}</strong>
          {c.notifyLede[2]}
          <strong>{c.notifyLede[3]}</strong>
          {c.notifyLede[4]}
        </p>
        <a
          className="mlp-cta mlp-cta-secondary"
          href={WA_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {c.notifyCta}
          <ArrowUpRight size={16} />
        </a>
      </section>

      {/* PLANS / PRICING */}
      <section id="mobile-plans" className="mlp-section mlp-plans gx-plans">
        <div className="mlp-glow mlp-glow-engines" aria-hidden>
          <span />
          <span />
        </div>
        <div className="gx-plans-head">
          <span className="mlp-eyebrow">
            <Sparkles size={11} />
            {c.plansEyebrow}
          </span>
          <h2 className="mlp-headline">
            {c.plansTitle[0]}
            <em>{c.plansTitle[1]}</em>
          </h2>
        </div>
        <div className="gx-plans-grid">
          {plans.map((plan) => {
            const badge = pt ? plan.badgePt : plan.badgeEn;
            const features = pt ? plan.featuresPt : plan.featuresEn;
            return (
              <article
                key={plan.key}
                className={`gx-plan${plan.featured ? " gx-plan-featured" : ""}`}
              >
                {badge && <span className="gx-plan-badge">{badge}</span>}
                <span className="gx-plan-name">{pt ? plan.namePt : plan.nameEn}</span>
                <div className="gx-plan-price">
                  <strong>R$ {plan.price}</strong>
                  {plan.cents && <span className="gx-plan-cents">{plan.cents}</span>}
                </div>
                <div className="gx-plan-tokens">{pt ? plan.tokensPt : plan.tokensEn}</div>
                <p className="gx-plan-desc">{pt ? plan.descPt : plan.descEn}</p>
                <ul className="gx-plan-features">
                  {features.map((f) => (
                    <li key={f}>
                      <Check size={15} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  className={`gx-plan-cta ${plan.featured ? "gx-plan-cta-solid" : "gx-plan-cta-ghost"}`}
                  href={APP_URL}
                  onClick={() => trackGetStarted("pricing")}
                >
                  {pt ? plan.ctaPt : plan.ctaEn}
                  <ArrowRight size={15} />
                </a>
              </article>
            );
          })}
        </div>
        <p className="gx-plans-note">{c.plansNote}</p>
      </section>

      {/* CLOSING */}
      <section id="mobile-brazil" className="mlp-section mlp-brazil">
        <div className="mlp-glow mlp-glow-brazil" aria-hidden>
          <span />
          <span />
          <span />
          <i />
        </div>
        <span className="mlp-eyebrow">
          <span aria-hidden>🇧🇷</span>
          {c.closingEyebrow}
        </span>
        <h2 className="mlp-display">
          {c.closingTitle[0]}
          <em>{c.closingTitle[1]}</em>
        </h2>
        <p className="mlp-lede">{c.closingLede}</p>
        <a
          className="mlp-cta"
          href={APP_URL}
          onClick={() => trackGetStarted("final_cta")}
        >
          {c.closingCta}
          <ArrowRight size={17} />
        </a>
        <span className="mlp-aside">{c.closingAside}</span>
      </section>
    </div>
  );
}
