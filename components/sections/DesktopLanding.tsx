"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, MapPin, Play, Sparkles } from "lucide-react";
import { APP_URL } from "@/lib/constants";
import { trackGetStarted, trackHeroCta } from "@/lib/analytics";
import { useLang } from "@/contexts/LangContext";
import { faqItems, landingMetrics, landingPillars, plans, resultVideos } from "@/data/landing";
import type { LandingVariant } from "@/components/sections/landing-types";

function HeroNumber({ metric, label }: { metric: (typeof landingMetrics)[number]; label: string }) {
  return (
    <article>
      <strong>{metric.value}</strong>
      <span>{label}</span>
    </article>
  );
}

/**
 * DesktopLanding — bilingual (PT default / EN via LangToggle).
 *
 * All copy lives in the `copy` dict below keyed by lang; data-driven strings
 * (metrics, videos, pillars, plans, faq) read their `*Pt` / `*En` fields.
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
    heroSideLeft: "produto → score → vídeo",
    heroSideRight: "São Paulo · 23.5505° S",
    heroChip: "Foto ou link · Vídeo 9:16 · TikTok Shop",
    heroTitle: ["Crie vídeos", "de produto.", "Sem gravar.", "Sem editar."],
    heroLede:
      "Envie uma foto ou cole o link do produto. O Genfy gera um vídeo vertical com IA pronto para testar no TikTok Shop.",
    heroCtaPrimary: "Criar conta grátis",
    heroCtaAside: "Sem cartão · Vídeos a partir de R$ 4,90",
    heroCtaGhost: "Ver exemplos reais",
    heroArtTop: "Genfy output · vertical",
    heroArtBottom: "gerado no Genfy",
    resultsEyebrow: "Gerados no Genfy",
    resultsTitle: ["Veja o produto ganhar ", "cara de anúncio."],
    resultsLede:
      "Cenas com movimento, contexto e linguagem de TikTok Shop. Tudo gerado no Genfy, sem gravar e sem editar.",
    cycleKicker: "Uma tarde. Um produto no ar.",
    cycleTitle: ["Do link ao vídeo ", "pronto para publicar."],
    cycleLede:
      "O Genfy mantém pesquisa, decisão e criação no mesmo fluxo para você publicar enquanto a oportunidade ainda está quente.",
    cycleSignalProduct: "Produto encontrado",
    cycleSignalProductValue: "Sinal validado",
    cyclePhonePlay: "Criativo pronto",
    cyclePhonePublish: "Publicar rascunho",
    cycleScore: "Score Genfy",
    cycleCta: "Transformar meu produto em vídeo",
    featuresEyebrow: "O produto inteiro",
    featuresTitle: ["Tudo para criar o próximo viral. ", "Sem montar uma operação."],
    featuresLede:
      "Cole um link, escolha o produto com mais potencial, gere o criativo e siga para rascunho. O fluxo fica curto pra você publicar mais ideias no mesmo dia.",
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
      " já cai direto na sua caixa do TikTok depois de gerar. O ",
      "auto-post",
      " que publica automático sem você abrir o app está chegando — entra na comunidade pra receber primeiro.",
    ],
    notifyCta: "Me avisar no WhatsApp",
    plansEyebrow: "Comprar tokens",
    plansTitle: ["Compre tokens. ", "Gere sem assinatura."],
    plansNote: "Precisa de mais de 50.000 tokens? Fale com a gente sobre o pacote Business.",
    faqEyebrow: "Dúvidas comuns",
    brazilArtEyebrow: "São Paulo · Brasil",
    brazilArtTitle: "Nascida no Brasil.",
    brazilArtText: "Construindo a categoria de IA para TikTok Shop.",
    closingEyebrow: "Feito no Brasil",
    closingTitle: ["Seu próximo vídeo ", "começa com uma foto ou link."],
    closingLede:
      "Produto, score e vídeo no mesmo fluxo. Pra competir com quem está mais acima na esteira sem perder o dia editando.",
    closingCta: "Criar conta grátis",
    closingAside: "Sem cartão · Vídeos a partir de R$ 4,90",
  },
  en: {
    heroSideLeft: "product → score → video",
    heroSideRight: "São Paulo · 23.5505° S",
    heroChip: "Good product · Viral video · TikTok Shop",
    heroTitle: ["A good product", "won't wait.", "Turn it into", "a viral video."],
    heroLede:
      "Find the opportunity, validate the potential, and turn the link into a video built to grab attention on TikTok Shop.",
    heroCtaPrimary: "Generate my first video",
    heroCtaAside: "Free to start · No card",
    heroCtaGhost: "See Genfy videos",
    heroArtTop: "Genfy output · vertical",
    heroArtBottom: "made with Genfy",
    resultsEyebrow: "Made with Genfy",
    resultsTitle: ["Watch the product become ", "ad-ready."],
    resultsLede:
      "Scenes with motion, context, and TikTok Shop language. All generated in Genfy — no filming, no editing.",
    cycleKicker: "One afternoon. One product live.",
    cycleTitle: ["From link to a video ", "ready to go viral."],
    cycleLede:
      "Genfy keeps research, decision, and creation in one flow so you publish while the opportunity is still hot.",
    cycleSignalProduct: "Product found",
    cycleSignalProductValue: "+38% in sales",
    cyclePhonePlay: "Creative ready",
    cyclePhonePublish: "Publish draft",
    cycleScore: "Genfy score",
    cycleCta: "Turn my product into video",
    featuresEyebrow: "The whole product",
    featuresTitle: ["Everything to make the next viral. ", "Without building an operation."],
    featuresLede:
      "Paste a link, pick the highest-potential product, generate the creative, and send it to draft. The flow stays short so you ship more ideas in a day.",
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
      " lands straight in your TikTok inbox after generating. ",
      "Auto-post",
      " that publishes automatically without opening the app is on the way — join the community to get it first.",
    ],
    notifyCta: "Notify me on WhatsApp",
    plansEyebrow: "Buy tokens",
    plansTitle: ["Buy tokens. ", "Generate without a subscription."],
    plansNote: "Need more than 50,000 tokens? Talk to us about the Business pack.",
    faqEyebrow: "Common questions",
    brazilArtEyebrow: "São Paulo · Brazil",
    brazilArtTitle: "Born in Brazil.",
    brazilArtText: "Building the AI category for TikTok Shop.",
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
    heroSideLeft: "foto ou link → vídeo 9:16",
    heroChip: "Foto para vídeo IA · Produto · Anúncio",
    heroTitle: ["Transforme foto", "em vídeo com IA.", "Pronto para", "produto e anúncio."],
    heroLede:
      "Envie uma foto ou cole o link do produto. Gere um vídeo vertical com Veo 3.1 ou Seedance 2.0 — sem câmera e sem editar.",
    heroCtaPrimary: "Criar conta grátis",
    heroCtaGhost: "Ver exemplos reais",
  },
  en: {
    heroSideLeft: "link → AI video",
    heroChip: "AI video generator · Product · Creative",
    heroTitle: ["Generate AI", "product videos.", "From link to", "creative."],
    heroLede:
      "Paste a product link or use an image to generate AI videos with Veo 3.1 or Seedance 2.0 — no filming or editing.",
    heroCtaPrimary: "Create an AI video",
    heroCtaGhost: "See generated videos",
  },
} as const;

export function DesktopLanding({ variant = "default" }: { variant?: LandingVariant }) {
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
    <div className="dlp">
      {/* HERO ─────────────────────────────────────────────────────── */}
      <section
        className="dlp-section dlp-hero"
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          event.currentTarget.style.setProperty("--hero-x", `${(x + 0.5) * 100}%`);
          event.currentTarget.style.setProperty("--hero-y", `${(y + 0.5) * 100}%`);
          event.currentTarget.style.setProperty("--hero-shift-x", `${x * 28}px`);
          event.currentTarget.style.setProperty("--hero-shift-y", `${y * 22}px`);
          event.currentTarget.style.setProperty("--hero-rotate-x", `${-y * 7}deg`);
          event.currentTarget.style.setProperty("--hero-rotate-y", `${x * 8}deg`);
        }}
      >
        <span className="dlp-hero-side-note dlp-hero-side-note-left" aria-hidden>
          {c.heroSideLeft}
        </span>
        <span className="dlp-hero-side-note dlp-hero-side-note-right" aria-hidden>
          {c.heroSideRight}
        </span>
        <div className="dlp-glow dlp-glow-hero" aria-hidden>
          <span />
          <span />
        </div>
        <div className="dlp-hero-grid">
          <div className="dlp-hero-copy">
            <div className="dlp-chip">
              <span className="dlp-chip-dot" />
              {c.heroChip}
            </div>

            <h1 className="dlp-display dlp-hero-display">
              <span className="dlp-hero-line">{c.heroTitle[0]}</span>
              <span className="dlp-hero-line">{c.heroTitle[1]}</span>
              <em>
                <span className="dlp-hero-line">{c.heroTitle[2]}</span>
                <span className="dlp-hero-line">{c.heroTitle[3]}</span>
              </em>
            </h1>
            <p className="dlp-lede">{c.heroLede}</p>

            <div className="dlp-hero-actions">
              <div className="dlp-hero-cta-stack">
                <a
                  className="dlp-cta"
                  href={APP_URL}
                  onClick={() => trackHeroCta("start_creating_free")}
                >
                  {c.heroCtaPrimary}
                  <ArrowRight size={18} />
                </a>
                <span className="dlp-aside">{c.heroCtaAside}</span>
              </div>
              <a className="dlp-cta dlp-cta-ghost" href="#dlp-results">
                {c.heroCtaGhost}
              </a>
            </div>

            <div className="dlp-hero-numbers">
              {landingMetrics.slice(0, 3).map((metric) => (
                <HeroNumber
                  key={metric.value}
                  metric={metric}
                  label={pt ? metric.labelPt : metric.labelEn}
                />
              ))}
            </div>
          </div>

          <div className="dlp-hero-art">
            <span className="dlp-hero-art-label dlp-hero-art-label-top">{c.heroArtTop}</span>
            <div className="dlp-hero-video">
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
            <span className="dlp-hero-art-label dlp-hero-art-label-bottom">
              <i />
              {c.heroArtBottom}
            </span>
          </div>
        </div>
      </section>

      {/* RESULTS (videos) ─────────────────────────────────────────── */}
      <section id="dlp-results" className="dlp-section dlp-results">
        <div className="dlp-glow dlp-glow-results" aria-hidden>
          <span />
          <span />
        </div>
        <div className="dlp-results-head">
          <span className="dlp-eyebrow">
            <Sparkles size={12} />
            {c.resultsEyebrow}
          </span>
          <h2 className="dlp-headline">
            {c.resultsTitle[0]}
            <em>{c.resultsTitle[1]}</em>
          </h2>
          <p>{c.resultsLede}</p>
        </div>
        <div className="dlp-video-row dlp-seedance-reel">
          {resultVideos.map((item, index) => (
            <article key={item.src}>
              <div className="dlp-reel-frame">
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
              </div>
              <div className="dlp-reel-copy">
                <strong>{pt ? item.titlePt : item.titleEn}</strong>
                <span>{pt ? item.textPt : item.textEn}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FLOW — 4 steps with big numbers, no cards ───────────────── */}
      <section id="dlp-cycle" className="dlp-section dlp-flow">
        <div className="dlp-cycle-stage">
          <div className="dlp-cycle-intro">
            <span className="dlp-cycle-kicker">
              <Sparkles size={12} />
              {c.cycleKicker}
            </span>
            <h2>
              {c.cycleTitle[0]}
              <em>{c.cycleTitle[1]}</em>
            </h2>
            <p>{c.cycleLede}</p>
          </div>

          <div className="dlp-cycle-story">
            <ol className="dlp-cycle-steps dlp-cycle-steps-left">
              {steps.slice(0, 2).map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <h3>{pt ? step.titlePt : step.titleEn}</h3>
                  <p>{pt ? step.textPt : step.textEn}</p>
                </li>
              ))}
            </ol>

            <div className="dlp-cycle-device">
              <div className="dlp-cycle-device-glow" aria-hidden />
              <div className="dlp-cycle-signal dlp-cycle-signal-product">
                <span>{c.cycleSignalProduct}</span>
                <strong>{c.cycleSignalProductValue}</strong>
              </div>
              <div className="dlp-cycle-phone">
                <div className="dlp-cycle-phone-top">
                  <span>9:41</span>
                  <strong>genfy</strong>
                  <span>●●●</span>
                </div>
                <video
                  ref={(node) => {
                    videoRefs.current[resultVideos.length + 1] = node;
                  }}
                  src="/landing/videos/seedance-3.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="dlp-cycle-phone-bottom">
                  <span>
                    <Play size={11} fill="currentColor" />
                    {c.cyclePhonePlay}
                  </span>
                  <strong>{c.cyclePhonePublish}</strong>
                </div>
              </div>
              <div className="dlp-cycle-signal dlp-cycle-signal-score">
                <span>{c.cycleScore}</span>
                <strong>87</strong>
              </div>
            </div>

            <ol className="dlp-cycle-steps dlp-cycle-steps-right" start={3}>
              {steps.slice(2).map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <h3>{pt ? step.titlePt : step.titleEn}</h3>
                  <p>{pt ? step.textPt : step.textEn}</p>
                </li>
              ))}
            </ol>
          </div>

          <a
            className="dlp-cycle-cta"
            href={APP_URL}
            onClick={() => trackGetStarted("workflow")}
          >
            {c.cycleCta}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* FEATURES — o produto inteiro explicado ──────────────────── */}
      <section id="dlp-features" className="dlp-section dlp-features">
        <div className="dlp-glow dlp-glow-features" aria-hidden>
          <span />
          <span />
        </div>
        <div className="dlp-section-head">
          <span className="dlp-eyebrow">
            <Sparkles size={12} />
            {c.featuresEyebrow}
          </span>
          <h2 className="dlp-headline">
            {c.featuresTitle[0]}
            <em>{c.featuresTitle[1]}</em>
          </h2>
          <p className="dlp-lede dlp-lede-center">{c.featuresLede}</p>
        </div>

        <div className="dlp-features-grid">
          {landingPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.titlePt}
                className="dlp-feature-card dlp-tilt"
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  el.style.setProperty("--tilt-x", `${-y * 8}deg`);
                  el.style.setProperty("--tilt-y", `${x * 8}deg`);
                  el.style.setProperty("--gleam-x", `${(x + 0.5) * 100}%`);
                  el.style.setProperty("--gleam-y", `${(y + 0.5) * 100}%`);
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.setProperty("--tilt-x", "0deg");
                  el.style.setProperty("--tilt-y", "0deg");
                }}
              >
                <div className="dlp-feature-top">
                  <Icon size={20} />
                  <span>{pillar.stat}</span>
                </div>
                <h3>{pt ? pillar.titlePt : pillar.titleEn}</h3>
                <p>{pt ? pillar.textPt : pillar.textEn}</p>
                <div className="dlp-tilt-gleam" aria-hidden />
              </article>
            );
          })}
        </div>
      </section>

      {/* ENGINES ─────────────────────────────────────────────────── */}
      <section id="dlp-engines" className="dlp-section dlp-engines">
        <div className="dlp-glow dlp-glow-engines" aria-hidden>
          <span />
          <span />
        </div>
        <div className="dlp-section-head">
          <span className="dlp-eyebrow">
            <Sparkles size={12} />
            {c.enginesEyebrow}
          </span>
          <h2 className="dlp-headline">
            {c.enginesTitle[0]}
            <em>{c.enginesTitle[1]}</em>
          </h2>
        </div>
        <div
          className={`engine-depth-stage engine-focus-${activeEngine}`}
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty("--engine-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
            event.currentTarget.style.setProperty("--engine-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
          }}
        >
          <button
            type="button"
            className="engine-depth-card engine-depth-veo"
            onPointerEnter={() => setActiveEngine("veo")}
            onFocus={() => setActiveEngine("veo")}
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
            onPointerEnter={() => setActiveEngine("seedance")}
            onFocus={() => setActiveEngine("seedance")}
            onClick={() => setActiveEngine("seedance")}
          >
            <span>{c.engineAvailable}</span>
            <strong>Seedance 2.0</strong>
            <p>{c.engineSeedanceDesc}</p>
            <i aria-hidden><b /><b /><b /></i>
          </button>
        </div>
      </section>

      {/* AUTO-POST notify ────────────────────────────────────────── */}
      <section id="dlp-notify" className="dlp-section dlp-notify">
        <div className="dlp-glow dlp-glow-notify" aria-hidden>
          <span />
          <span />
        </div>
        <div className="dlp-section-head">
          <span className="dlp-eyebrow">
            <Sparkles size={12} />
            {c.notifyEyebrow}
          </span>
          <h2 className="dlp-headline">
            {c.notifyTitle[0]}
            <em>{c.notifyTitle[1]}</em>
          </h2>
        </div>
        <p className="dlp-lede dlp-lede-center">
          {c.notifyLede[0]}
          <strong>{c.notifyLede[1]}</strong>
          {c.notifyLede[2]}
          <strong>{c.notifyLede[3]}</strong>
          {c.notifyLede[4]}
        </p>
        <a
          className="dlp-cta dlp-cta-ghost dlp-cta-center"
          href={WA_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {c.notifyCta}
          <ArrowUpRight size={17} />
        </a>
      </section>

      {/* PLANS / PRICING ─────────────────────────────────────────── */}
      <section id="dlp-plans" className="gx-plans">
        <div className="dlp-glow dlp-glow-engines" aria-hidden>
          <span />
          <span />
        </div>
        <div className="gx-plans-head">
          <span className="dlp-eyebrow">
            <Sparkles size={12} />
            {c.plansEyebrow}
          </span>
          <h2 className="dlp-headline">
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

      {/* FAQ + BRAZIL MAP ────────────────────────────────────────── */}
      <section id="dlp-brazil-faq" className="dlp-section dlp-brazil-faq">
        <div className="dlp-glow dlp-glow-brazil" aria-hidden>
          <span />
          <span />
          <span />
        </div>

        <div className="dlp-brazil-grid">
          {/* São Paulo / Brazil art */}
          <article className="dlp-brazil-art">
            <span className="dlp-brazil-orbit dlp-brazil-orbit-wide" aria-hidden />
            <span className="dlp-brazil-orbit dlp-brazil-orbit-tight" aria-hidden />
            <span className="dlp-brazil-grid-bg" aria-hidden />
            <div className="dlp-brazil-map" aria-hidden>
              <svg className="dlp-sp-map-svg" viewBox="0 0 1000 500" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="sp-map-fill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
                  </linearGradient>
                  <radialGradient id="sp-map-glow" cx="62%" cy="62%" r="26%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.20" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <path
                  id="sp-state-shape"
                  className="dlp-sp-map-shape"
                  fill="url(#sp-map-fill)"
                  stroke="rgba(199, 210, 254, 0.20)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  transform="translate(0 25) scale(1 0.9)"
                  d="M 128 256 L 189 213 L 274 69 L 347 20 L 447 35 L 450 63 L 468 51 L 478 75 L 484 52 L 597 35 L 635 157 L 677 161 L 659 230 L 690 280 L 818 238 L 872 261 L 819 286 L 825 318 L 766 357 L 727 351 L 650 388 L 544 480 L 532 452 L 504 458 L 504 427 L 444 427 L 453 400 L 387 279 L 325 285 L 211 248 L 128 256 Z"
                />
                <use href="#sp-state-shape" fill="url(#sp-map-glow)" stroke="none" />
              </svg>
              <span className="dlp-brazil-node dlp-brazil-node-north" />
              <span className="dlp-brazil-node dlp-brazil-node-west" />
              <span className="dlp-brazil-node dlp-brazil-node-center" />
              <span className="dlp-brazil-node dlp-brazil-node-south" />
              <span className="dlp-brazil-node dlp-brazil-node-sp" />
              <span className="dlp-brazil-pulse" />
            </div>
            <div className="dlp-brazil-coords">
              <span>23.5505°S</span>
              <span>46.6333°W</span>
            </div>
            <div className="dlp-brazil-art-copy">
              <MapPin size={22} />
              <span className="dlp-brazil-art-eyebrow">{c.brazilArtEyebrow}</span>
              <h3>{c.brazilArtTitle}</h3>
              <p>{c.brazilArtText}</p>
            </div>
          </article>

          {/* FAQ list */}
          <div className="dlp-faq">
            <span className="dlp-eyebrow">
              <Sparkles size={12} />
              {c.faqEyebrow}
            </span>
            {faqItems.map((item) => (
              <article key={item.qEn} className="dlp-faq-item">
                <h4>{pt ? item.qPt : item.qEn}</h4>
                <p>{pt ? item.aPt : item.aEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING — final CTA ─────────────────────────────────────── */}
      <section id="dlp-brazil" className="dlp-section dlp-brazil">
        <div className="dlp-glow dlp-glow-brazil-cta" aria-hidden>
          <span />
          <span />
          <i />
        </div>
        <div className="dlp-section-head">
          <span className="dlp-eyebrow">
            <span aria-hidden>🇧🇷</span>
            {c.closingEyebrow}
          </span>
          <h2 className="dlp-display dlp-display-center">
            {c.closingTitle[0]}
            <em>{c.closingTitle[1]}</em>
          </h2>
        </div>
        <p className="dlp-lede dlp-lede-center">{c.closingLede}</p>
        <a
          className="dlp-cta dlp-cta-center"
          href={APP_URL}
          onClick={() => trackGetStarted("final_cta")}
        >
          {c.closingCta}
          <ArrowRight size={18} />
        </a>
        <span className="dlp-aside dlp-aside-center">{c.closingAside}</span>
      </section>
    </div>
  );
}
