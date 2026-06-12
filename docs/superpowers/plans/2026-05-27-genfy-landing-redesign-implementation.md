# Genfy Landing Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Genfy landing page into a visual-first, mobile-first, dark premium product page for TikTok Shop creators.

**Architecture:** Replace the current section stack with a smaller set of focused visual sections powered by structured content data and reusable mockup components. Keep the existing Next.js App Router, i18n context, analytics helpers, CTA destination, and legal pages intact. Prefer product-inspired custom UI mockups over raw screenshots, with animation handled through CSS and small React state only where tabs/countdown need it.

**Tech Stack:** Next.js 16, React 18, TypeScript, Tailwind CSS 4, lucide-react, existing Genfy i18n/context/analytics utilities.

**Important constraint:** Do not commit any implementation changes without explicit user approval. Each task ends with a review/approval checkpoint instead of an automatic commit.

---

## File Structure

Create:

- `data/landing.ts` — structured source of truth for metrics, cycle steps, showcase panels, AI engines, FAQ, and countdown target.
- `components/visuals/MetricCard.tsx` — compact KPI card used in hero and metrics dashboard.
- `components/visuals/MockupFrame.tsx` — reusable browser/app/device-like frame for product visuals.
- `components/visuals/GenfyCommandCenter.tsx` — hero visual combining product feed, score, queue, and publishing status.
- `components/visuals/GenfyCycle.tsx` — connected product -> score -> video -> publish workflow.
- `components/visuals/ProductShowcase.tsx` — mobile-first tabbed showcase for Hub, Studio, Score, Ranking, Editor.
- `components/visuals/MetricsDashboard.tsx` — visual proof section with KPI cards, chart, and product table.
- `components/visuals/EngineRail.tsx` — compact AI engine strip with SeaDance 2.0 coming soon.
- `components/visuals/CountdownPanel.tsx` — client countdown to 2026-06-26.
- `components/visuals/BrazilOrigin.tsx` — restrained Brazil-origin visual.
- `components/sections/VisualHero.tsx` — new hero section.
- `components/sections/VisualLanding.tsx` — orchestrates the redesigned home page sections.

Modify:

- `app/page.tsx` — render the new visual landing instead of the old section stack.
- `app/globals.css` — add restrained visual tokens, scroll-safe animation utilities, reduced-motion fallbacks, and remove/stop using orb-heavy design on the home page.
- `components/layout/Navbar.tsx` — simplify nav anchors to the new section ids if needed.
- `components/layout/CookieConsent.tsx` — ensure mobile cookie banner does not cover the primary CTA.
- `messages/pt.json` — update landing copy.
- `messages/en.json` — update landing copy.
- `lib/constants.ts` — update stale feature/engine copy only if still used by landing after the redesign.

Test/verify:

- `npm run type-check`
- `npm run build`
- Browser verification at `375x812`, `390x844`, `430x932`, `768x1024`, and desktop.

---

### Task 1: Landing Content Data

**Files:**
- Create: `data/landing.ts`

- [ ] **Step 1: Create structured landing content**

Create `data/landing.ts` with this content:

```ts
import {
  BarChart3,
  Bot,
  Boxes,
  Brain,
  Film,
  Flag,
  Gauge,
  Image,
  Medal,
  Rocket,
  Scissors,
  ShieldCheck,
  Sparkles,
  Store,
  Trophy,
  UploadCloud,
  Video,
  Wand2,
  Zap,
} from "lucide-react";

export const landingMetrics = [
  { value: "5.000+", labelPt: "videos gerados", labelEn: "videos generated" },
  { value: "200+", labelPt: "usuarios ativos", labelEn: "active users" },
  { value: "100.000+", labelPt: "produtos analisados", labelEn: "products analyzed" },
] as const;

export const genfyCycleSteps = [
  {
    key: "product",
    icon: Store,
    titlePt: "Produto",
    titleEn: "Product",
    captionPt: "Produto encontrado",
    captionEn: "Product found",
    detailPt: "Hub For You, tendencias e sellers.",
    detailEn: "For You hub, trends, and sellers.",
  },
  {
    key: "score",
    icon: Gauge,
    titlePt: "Score",
    titleEn: "Score",
    captionPt: "Score validado",
    captionEn: "Score validated",
    detailPt: "Demanda, seguranca, social e conteudo.",
    detailEn: "Demand, safety, social, and content.",
  },
  {
    key: "video",
    icon: Video,
    titlePt: "Video",
    titleEn: "Video",
    captionPt: "Video gerado",
    captionEn: "Video generated",
    detailPt: "Studio, avatar, prompts e fila.",
    detailEn: "Studio, avatar, prompts, and queue.",
  },
  {
    key: "publish",
    icon: Rocket,
    titlePt: "Publicacao",
    titleEn: "Publishing",
    captionPt: "Postagem em breve",
    captionEn: "Posting soon",
    detailPt: "Rascunhos hoje. Automacao em breve.",
    detailEn: "Drafts today. Automation soon.",
  },
] as const;

export const showcasePanels = [
  {
    key: "hub",
    icon: Boxes,
    labelPt: "Hub",
    labelEn: "Hub",
    titlePt: "Produtos que ja chegam com contexto.",
    titleEn: "Products that already come with context.",
    bulletsPt: ["For You personalizado", "Tendencias por sinais", "Gerar com um toque"],
    bulletsEn: ["Personalized For You", "Signal-ranked trends", "Generate in one tap"],
  },
  {
    key: "studio",
    icon: Wand2,
    labelPt: "Studio",
    labelEn: "Studio",
    titlePt: "Da imagem ao video em uma fila visual.",
    titleEn: "From image to video in a visual queue.",
    bulletsPt: ["Link ou imagem", "Prompts salvos", "Avatar e duracao"],
    bulletsEn: ["Link or image", "Saved prompts", "Avatar and duration"],
  },
  {
    key: "score",
    icon: ShieldCheck,
    labelPt: "Score",
    labelEn: "Score",
    titlePt: "Valide antes de apostar seu tempo.",
    titleEn: "Validate before spending your time.",
    bulletsPt: ["Demanda", "Seguranca", "Prova social"],
    bulletsEn: ["Demand", "Safety", "Social proof"],
  },
  {
    key: "ranking",
    icon: Trophy,
    labelPt: "Ranking",
    labelEn: "Ranking",
    titlePt: "Crie, pontue e dispute tokens.",
    titleEn: "Create, score, and compete for tokens.",
    bulletsPt: ["Ranking semanal", "Premios em tokens", "Criadores ativos"],
    bulletsEn: ["Weekly leaderboard", "Token prizes", "Active creators"],
  },
  {
    key: "editor",
    icon: Scissors,
    labelPt: "Editor",
    labelEn: "Editor",
    titlePt: "Finalize o video sem sair do Genfy.",
    titleEn: "Finish the video without leaving Genfy.",
    bulletsPt: ["Texto", "Musica", "Cortes e exportacao"],
    bulletsEn: ["Text", "Music", "Trim and export"],
  },
] as const;

export const aiEngines = [
  { key: "veo-fast", icon: Zap, name: "Veo 3.1 Fast", statusPt: "Disponivel", statusEn: "Available" },
  { key: "veo-quality", icon: Sparkles, name: "Veo 3.1 Quality", statusPt: "Disponivel", statusEn: "Available" },
  { key: "nano-banana", icon: Image, name: "Nano Banana 2", statusPt: "Primeira imagem", statusEn: "First frame" },
  { key: "seadance", icon: Brain, name: "SeaDance 2.0", statusPt: "Em breve", statusEn: "Coming soon" },
] as const;

export const productRows = [
  { product: "Skincare viral", score: 91, sold: "18.4k", signal: "Alto" },
  { product: "Tech gadget", score: 86, sold: "12.8k", signal: "Forte" },
  { product: "Casa inteligente", score: 79, sold: "9.6k", signal: "Estavel" },
] as const;

export const faqItems = [
  {
    qPt: "O Genfy garante dinheiro?",
    qEn: "Does Genfy guarantee money?",
    aPt: "Nao. O Genfy reduz o tempo entre encontrar produtos, validar sinais e criar videos. Resultado depende de produto, criativo, conta e mercado.",
    aEn: "No. Genfy reduces the time between finding products, validating signals, and creating videos. Results depend on product, creative, account, and market.",
  },
  {
    qPt: "A postagem automatica ja esta disponivel?",
    qEn: "Is automatic posting available today?",
    aPt: "Ainda nao. Hoje o Genfy suporta rascunhos e fluxos de publicacao assistida. A postagem automatica esta marcada como disponivel em breve.",
    aEn: "Not yet. Today Genfy supports drafts and assisted publishing flows. Automatic posting is marked as coming soon.",
  },
  {
    qPt: "O produto ja esta disponivel?",
    qEn: "Is the product available?",
    aPt: "Sim. O Genfy ja tem tracao real, e novas automacoes e motores entram de forma gradual.",
    aEn: "Yes. Genfy already has real traction, and new automations and engines roll out gradually.",
  },
] as const;

export const countdownTarget = "2026-06-26T00:00:00-03:00";

export const landingVisualIcons = {
  Bot,
  BarChart3,
  Film,
  Flag,
  Medal,
  UploadCloud,
} as const;
```

- [ ] **Step 2: Run type-check**

Run: `npm run type-check`

Expected: PASS. If it fails with unused imports, remove any icon that is not referenced by an exported value.

- [ ] **Step 3: Approval checkpoint**

Show the diff for `data/landing.ts` and wait for approval before any commit.

---

### Task 2: Visual System And Base Mockup Components

**Files:**
- Create: `components/visuals/MockupFrame.tsx`
- Create: `components/visuals/MetricCard.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Create `MockupFrame`**

Create `components/visuals/MockupFrame.tsx`:

```tsx
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MockupFrameProps {
  children: ReactNode;
  className?: string;
  label?: string;
}

export function MockupFrame({ children, className, label }: MockupFrameProps) {
  return (
    <div className={cn("genfy-mockup-frame", className)}>
      <div className="genfy-mockup-topbar" aria-hidden>
        <span />
        <span />
        <span />
        {label && <strong>{label}</strong>}
      </div>
      <div className="genfy-mockup-body">{children}</div>
    </div>
  );
}
```

- [ ] **Step 2: Create `MetricCard`**

Create `components/visuals/MetricCard.tsx`:

```tsx
import { cn } from "@/lib/cn";

interface MetricCardProps {
  value: string;
  label: string;
  className?: string;
}

export function MetricCard({ value, label, className }: MetricCardProps) {
  return (
    <div className={cn("metric-card", className)}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
```

- [ ] **Step 3: Add visual CSS utilities**

Append to `app/globals.css`:

```css
.landing-shell {
  position: relative;
  overflow-x: clip;
  background:
    linear-gradient(180deg, rgba(10, 10, 10, 0.98) 0%, rgba(7, 9, 12, 1) 42%, rgba(10, 10, 10, 1) 100%);
}

.landing-shell::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,0.75), transparent 78%);
  z-index: 0;
}

.visual-section {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: clamp(56px, 10vw, 120px) 20px;
}

.visual-inner {
  width: min(1160px, 100%);
  margin: 0 auto;
}

.eyebrow-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.045);
  color: rgba(255,255,255,0.72);
  border-radius: 999px;
  padding: 7px 11px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.metric-card {
  min-width: 0;
  border: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.035));
  border-radius: 8px;
  padding: 12px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
}

.metric-card strong {
  display: block;
  color: rgba(255,255,255,0.94);
  font-size: clamp(20px, 6vw, 30px);
  line-height: 1;
  letter-spacing: 0;
}

.metric-card span {
  display: block;
  margin-top: 6px;
  color: rgba(255,255,255,0.46);
  font-size: 11px;
  line-height: 1.25;
}

.genfy-mockup-frame {
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.1);
  background:
    linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.035)),
    rgba(9, 11, 15, 0.92);
  box-shadow:
    0 24px 80px rgba(0,0,0,0.5),
    inset 0 1px 0 rgba(255,255,255,0.08);
  backdrop-filter: blur(18px);
}

.genfy-mockup-topbar {
  display: flex;
  align-items: center;
  gap: 7px;
  height: 34px;
  padding: 0 12px;
  border-bottom: 1px solid rgba(255,255,255,0.075);
}

.genfy-mockup-topbar span {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: rgba(255,255,255,0.22);
}

.genfy-mockup-topbar strong {
  margin-left: 6px;
  color: rgba(255,255,255,0.46);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.genfy-mockup-body {
  padding: clamp(12px, 3vw, 18px);
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(16px);
  animation: reveal-up both;
  animation-timeline: view();
  animation-range: entry 8% cover 32%;
}

@keyframes reveal-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
```

- [ ] **Step 4: Run type-check**

Run: `npm run type-check`

Expected: PASS.

- [ ] **Step 5: Approval checkpoint**

Show changed files and wait for approval before any commit.

---

### Task 3: Hero Command Center

**Files:**
- Create: `components/visuals/GenfyCommandCenter.tsx`
- Create: `components/sections/VisualHero.tsx`

- [ ] **Step 1: Create hero visual**

Create `components/visuals/GenfyCommandCenter.tsx`:

```tsx
import { CheckCircle2, Clock3, Gauge, Play, Rocket, ShoppingBag, Sparkles } from "lucide-react";
import { MockupFrame } from "@/components/visuals/MockupFrame";

const products = [
  { name: "Skincare viral", score: 91, sold: "18.4k" },
  { name: "Tech gadget", score: 86, sold: "12.8k" },
  { name: "Casa inteligente", score: 79, sold: "9.6k" },
] as const;

export function GenfyCommandCenter() {
  return (
    <MockupFrame label="Genfy Command Center" className="command-center">
      <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-[8px] border border-white/[0.08] bg-white/[0.04] p-3">
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.14em] text-white/35">For You</p>
              <h3 className="m-0 mt-1 text-[16px] font-bold text-white">Produtos prontos para virar video</h3>
            </div>
            <Sparkles size={18} className="text-blue-300" />
          </div>
          <div className="space-y-2">
            {products.map((product) => (
              <div key={product.name} className="grid grid-cols-[34px_1fr_auto] items-center gap-3 rounded-[8px] border border-white/[0.07] bg-black/20 p-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-blue-400/12 text-blue-300">
                  <ShoppingBag size={15} />
                </div>
                <div className="min-w-0">
                  <p className="m-0 truncate text-[12px] font-semibold text-white/86">{product.name}</p>
                  <p className="m-0 mt-0.5 text-[10px] text-white/36">{product.sold} vendidos</p>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2 py-1 text-[10px] font-bold text-emerald-200">
                  {product.score}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-[8px] border border-emerald-300/15 bg-emerald-300/[0.07] p-3">
            <div className="mb-3 flex items-center gap-2 text-[11px] font-bold text-emerald-200">
              <Gauge size={14} />
              Genfy Score
            </div>
            <div className="text-[42px] font-black leading-none text-white">91</div>
            <div className="mt-3 grid grid-cols-4 gap-1">
              {["Demanda", "Seguro", "Social", "Criativo"].map((label) => (
                <div key={label} className="h-1.5 rounded-full bg-emerald-300/70" title={label} />
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border border-blue-300/15 bg-blue-300/[0.08] p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-100">
                <Play size={13} /> Video na fila
              </span>
              <span className="text-[10px] text-white/40">82%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
              <div className="h-full w-[82%] rounded-full bg-blue-300" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-[8px] border border-white/[0.08] bg-white/[0.04] p-2.5 text-[11px] text-white/60">
              <CheckCircle2 size={14} className="mb-1 text-emerald-300" />
              Draft oficial hoje
            </div>
            <div className="rounded-[8px] border border-cyan-300/15 bg-cyan-300/[0.07] p-2.5 text-[11px] text-cyan-100">
              <Rocket size={14} className="mb-1" />
              Auto-post em breve
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-[8px] border border-white/[0.08] bg-black/20 p-2.5 text-[11px] text-white/50">
            <Clock3 size={13} />
            SeaDance 2.0 entrando na linha de producao
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}
```

- [ ] **Step 2: Create visual hero section**

Create `components/sections/VisualHero.tsx`:

```tsx
"use client";

import { ArrowRight } from "lucide-react";
import { GenfyCommandCenter } from "@/components/visuals/GenfyCommandCenter";
import { MetricCard } from "@/components/visuals/MetricCard";
import { useLang } from "@/contexts/LangContext";
import { APP_URL } from "@/lib/constants";
import { trackHeroCta } from "@/lib/analytics";
import { landingMetrics } from "@/data/landing";

export function VisualHero() {
  const { lang } = useLang();
  const pt = lang === "pt";

  return (
    <section className="visual-section min-h-[100svh] pt-28 md:pt-32">
      <div className="visual-inner grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-[620px]">
          <span className="eyebrow-chip">{pt ? "Produto disponivel com tracao real" : "Live product with real traction"}</span>
          <h1 className="mt-6 text-[48px] font-black leading-[0.92] tracking-normal text-white md:text-[72px] lg:text-[84px]">
            {pt ? "Ganhe dinheiro com videos IA para TikTok Shop." : "Make money with AI videos for TikTok Shop."}
          </h1>
          <p className="mt-5 text-[18px] font-semibold text-white/52 md:text-[22px]">
            {pt ? "Produto. Score. Video. Publicacao." : "Product. Score. Video. Publishing."}
          </p>
          <div className="mt-7 grid grid-cols-3 gap-2.5">
            {landingMetrics.map((metric) => (
              <MetricCard
                key={metric.value}
                value={metric.value}
                label={pt ? metric.labelPt : metric.labelEn}
              />
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent min-h-12 px-5"
              onClick={() => trackHeroCta("visual_open_genfy")}
            >
              {pt ? "Abrir Genfy" : "Open Genfy"}
              <ArrowRight size={16} />
            </a>
            <a href="#cycle" className="btn-ghost min-h-12 justify-center px-5">
              {pt ? "Ver ciclo" : "See flow"}
            </a>
          </div>
        </div>
        <div className="scroll-reveal">
          <GenfyCommandCenter />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add command center CSS**

Append to `app/globals.css`:

```css
.command-center {
  transform: translateZ(0);
}

@media (max-width: 640px) {
  .command-center .genfy-mockup-body {
    padding: 10px;
  }
}
```

- [ ] **Step 4: Run type-check**

Run: `npm run type-check`

Expected: PASS.

- [ ] **Step 5: Approval checkpoint**

Show the hero in browser at mobile and desktop widths. Wait for approval before any commit.

---

### Task 4: Cycle, Showcase, Metrics, Engines, Countdown, Brazil, FAQ

**Files:**
- Create: `components/visuals/GenfyCycle.tsx`
- Create: `components/visuals/ProductShowcase.tsx`
- Create: `components/visuals/MetricsDashboard.tsx`
- Create: `components/visuals/EngineRail.tsx`
- Create: `components/visuals/CountdownPanel.tsx`
- Create: `components/visuals/BrazilOrigin.tsx`

- [ ] **Step 1: Implement visual components**

Implement each component using `data/landing.ts`, `MockupFrame`, lucide icons, and short PT/EN labels. Requirements:

- `GenfyCycle` renders four connected blocks and uses section id `cycle`.
- `ProductShowcase` is a client component with local `activePanel` state and large touch targets.
- `MetricsDashboard` renders KPI cards, a small generated-videos bar chart, and `productRows`.
- `EngineRail` renders all `aiEngines` and marks SeaDance 2.0 as coming soon.
- `CountdownPanel` is a client component that calculates days/hours/minutes to `countdownTarget`.
- `BrazilOrigin` renders the Brazil-origin statement with an abstract coordinate/origin marker.

Keep each component under 180 lines. If a component grows larger, split small internal presentational helpers in the same file.

- [ ] **Step 2: Add component-specific CSS**

Append concise classes to `app/globals.css`:

```css
.vector-card {
  border: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(180deg, rgba(255,255,255,0.065), rgba(255,255,255,0.03));
  border-radius: 8px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
}

.connector-line {
  background: linear-gradient(180deg, rgba(96,165,250,0.18), rgba(34,211,238,0.7), rgba(96,165,250,0.18));
}

@media (min-width: 768px) {
  .connector-line {
    background: linear-gradient(90deg, rgba(96,165,250,0.18), rgba(34,211,238,0.7), rgba(96,165,250,0.18));
  }
}
```

- [ ] **Step 3: Run type-check**

Run: `npm run type-check`

Expected: PASS.

- [ ] **Step 4: Approval checkpoint**

Show section screenshots for mobile and desktop. Wait for approval before any commit.

---

### Task 5: Compose The New Home Page

**Files:**
- Create: `components/sections/VisualLanding.tsx`
- Modify: `app/page.tsx`
- Modify: `components/layout/Navbar.tsx`

- [ ] **Step 1: Create `VisualLanding`**

Create `components/sections/VisualLanding.tsx`:

```tsx
import { VisualHero } from "@/components/sections/VisualHero";
import { BrazilOrigin } from "@/components/visuals/BrazilOrigin";
import { CountdownPanel } from "@/components/visuals/CountdownPanel";
import { EngineRail } from "@/components/visuals/EngineRail";
import { GenfyCycle } from "@/components/visuals/GenfyCycle";
import { MetricsDashboard } from "@/components/visuals/MetricsDashboard";
import { ProductShowcase } from "@/components/visuals/ProductShowcase";

export function VisualLanding() {
  return (
    <>
      <VisualHero />
      <GenfyCycle />
      <ProductShowcase />
      <MetricsDashboard />
      <EngineRail />
      <CountdownPanel />
      <BrazilOrigin />
    </>
  );
}
```

- [ ] **Step 2: Replace home page composition**

Modify `app/page.tsx` to use the new visual landing:

```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { VisualLanding } from "@/components/sections/VisualLanding";

export default function Home() {
  return (
    <div className="landing-shell min-h-screen">
      <Navbar />
      <main>
        <VisualLanding />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
```

- [ ] **Step 3: Update navbar anchors**

Modify `components/layout/Navbar.tsx` so nav links point to:

```ts
const navLinks = [
  { label: pt ? "Ciclo" : "Flow", href: "/#cycle" },
  { label: pt ? "Produto" : "Product", href: "/#product" },
  { label: pt ? "IA" : "AI", href: "/#engines" },
  { label: pt ? "Tracao" : "Traction", href: "/#traction" },
];
```

Use the existing `useLang()` return shape. If the context does not expose `pt`, derive it with `const pt = t.nav_getStarted === "Começar";` or use existing language state if available.

- [ ] **Step 4: Run type-check**

Run: `npm run type-check`

Expected: PASS.

- [ ] **Step 5: Approval checkpoint**

Open the page locally and review the full home flow. Wait for approval before any commit.

---

### Task 6: Copy, i18n, FAQ, And Cookie Banner

**Files:**
- Modify: `messages/pt.json`
- Modify: `messages/en.json`
- Modify: `components/layout/CookieConsent.tsx`
- Modify: `components/layout/Footer.tsx` only if stale section links remain visible.

- [ ] **Step 1: Update i18n keys**

Add or replace landing-specific strings in both message files. Keep all existing keys required by other pages. Do not delete keys unless `rg "key_name"` confirms no usage.

Required PT values:

```json
{
  "visual_hero_badge": "Produto disponivel com tracao real",
  "visual_hero_title": "Ganhe dinheiro com videos IA para TikTok Shop.",
  "visual_hero_subtitle": "Produto. Score. Video. Publicacao.",
  "visual_cta_primary": "Abrir Genfy",
  "visual_cta_secondary": "Ver ciclo",
  "visual_brazil": "Nascida no Brasil. Criando uma nova categoria global.",
  "visual_auto_posting": "Postagem automatica no TikTok Shop esta chegando.",
  "visual_coming_soon": "Disponivel em breve"
}
```

Required EN values:

```json
{
  "visual_hero_badge": "Live product with real traction",
  "visual_hero_title": "Make money with AI videos for TikTok Shop.",
  "visual_hero_subtitle": "Product. Score. Video. Publishing.",
  "visual_cta_primary": "Open Genfy",
  "visual_cta_secondary": "See flow",
  "visual_brazil": "Born in Brazil. Building a global category.",
  "visual_auto_posting": "Automatic TikTok Shop posting is coming.",
  "visual_coming_soon": "Coming soon"
}
```

- [ ] **Step 2: Fix cookie banner mobile obstruction**

Inspect `components/layout/CookieConsent.tsx`. Ensure the banner:

- Uses `bottom: env(safe-area-inset-bottom)` spacing.
- Does not exceed `calc(100vw - 24px)` on mobile.
- Stacks buttons vertically only when necessary.
- Does not cover hero CTA after accepted/declined state.

- [ ] **Step 3: Run type-check**

Run: `npm run type-check`

Expected: PASS.

- [ ] **Step 4: Approval checkpoint**

Show mobile screenshot with cookie banner visible and hidden. Wait for approval before any commit.

---

### Task 7: Build And Browser QA

**Files:**
- Modify implementation files only for fixes found during QA.

- [ ] **Step 1: Run validation commands**

Run:

```bash
npm run type-check
npm run build
```

Expected:

- Type-check PASS.
- Build PASS.

- [ ] **Step 2: Start local server**

Run:

```bash
npm run dev
```

Expected: Next.js dev server starts. Use the printed localhost URL.

- [ ] **Step 3: Browser QA desktop**

Open the local URL in the in-app browser and verify:

- Hero visual is visible above the fold.
- CTA links work.
- No console-breaking render errors.
- No text overlap.
- No unreadable product mockup text.

- [ ] **Step 4: Browser QA mobile**

Test these viewport widths:

- 375x812
- 390x844
- 430x932
- 768x1024

Verify:

- No horizontal scroll.
- Hero headline wraps cleanly.
- Metrics fit.
- Product showcase tabs are tappable.
- Cookie banner does not block CTA permanently.
- Countdown fits.
- Final CTA/footer are reachable.

- [ ] **Step 5: Reduced motion check**

Emulate reduced motion or temporarily enable the CSS branch. Verify content is visible without animation.

- [ ] **Step 6: Approval checkpoint**

Share screenshots and validation output summary. Wait for explicit user approval before any commit.

---

### Task 8: Final Review And Commit Gate

**Files:**
- Review all changed files.

- [ ] **Step 1: Show final diff summary**

Run:

```bash
git status --short
git diff --stat
```

Expected: Only landing redesign files are changed.

- [ ] **Step 2: Ask for commit approval**

Ask the user explicitly:

> Posso commitar essas mudancas agora?

- [ ] **Step 3: Commit only after approval**

Only if the user approves, run:

```bash
git add app/page.tsx app/globals.css components data messages lib
git commit -m "Redesign Genfy landing page"
```

Expected: Commit succeeds.

If the user does not approve, leave the working tree uncommitted.

---

## Self-Review

- Spec coverage: covered mobile-first visual redesign, metrics, cycle, product showcase, AI engines, SeaDance 2.0 coming soon, automatic posting countdown, Brazil positioning, FAQ/copy, cookie banner, and QA.
- Placeholder scan: no TBD/TODO/later placeholders. Task 4 intentionally defines component requirements rather than pasting six full components because the exact component code should be produced by the implementation subagent while preserving the specified interfaces and constraints.
- Type consistency: shared data keys are defined in Task 1 and consumed by later tasks. Countdown target is a string constant. Components use existing `cn`, `useLang`, `APP_URL`, and analytics helpers.
- User constraint: no commits without approval. Commit steps are approval gates.
