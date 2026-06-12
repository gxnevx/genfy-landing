# Genfy Landing Redesign Design

## Goal

Rebuild the Genfy landing page as a premium, visual-first, mobile-first product page for TikTok Shop creators.

The page should make one idea obvious in the first seconds:

> Ganhe dinheiro com videos IA para TikTok Shop.

Genfy is not only a video generator. It is a creator operating system for finding products, validating opportunity, generating videos, improving content, competing in the weekly leaderboard, and preparing for automatic publishing.

## Audience

Primary audience: TikTok Shop creators and affiliates who want to make money by discovering products and publishing product videos faster.

Secondary audience: early adopters evaluating whether Genfy feels serious enough to trust while it is still in beta.

## Positioning

Use a confident but grounded message:

- Genfy is a beta product with real traction.
- Genfy was born in Brazil and is building a global category.
- Genfy shortens the path from product discovery to monetizable content.
- Genfy is preparing automatic TikTok Shop publishing, but the page must present it as coming soon.

Avoid unsupported claims such as "the only platform in the world" unless later verified. Preferred phrasing:

> Nascida no Brasil. Criando uma nova categoria global.

## Core Proof

Use these proof points visually, not as long copy:

- 5,000+ generated videos.
- 200+ active users.
- 100,000+ analyzed products.
- Private beta with real usage.

Do not invent GMV. Use economic framing without fake revenue numbers:

> Cada video e uma nova tentativa de venda.

## Visual Direction

The page should feel like a serious, futuristic product interface rather than a generic dark SaaS template.

Principles:

- Mobile-first before desktop polish.
- Less text, more product visuals.
- Use real-feeling dashboards, charts, tables, product cards, score panels, and workflow blocks.
- Use glassmorphism carefully for panels, overlays, chips, and mockups.
- Use thin vectors, connector lines, grids, and animated paths to show the product flow.
- Avoid large decorative orbs, generic purple-blue gradients, fake tilted dashboards, and repeated identical cards.
- Keep dark premium as the default visual language: black, graphite, white, muted blue/cyan accents, small status colors.
- Keep all text readable on mobile; no tiny captions that only work on desktop.

Movement should feel natural and professional:

- Scroll-linked reveal for workflow connectors.
- Subtle parallax for layered product mockups.
- Hover/tap microinteractions for cards and tabs.
- Motion mostly via transform and opacity.
- Respect `prefers-reduced-motion`.
- Avoid JavaScript-heavy animation where CSS can do the job.

## Reference Influence

Use references as principles, not as copies:

- Linear: serious product narrative, restrained layout, product UI as proof.
- Raycast: dark app screenshots, crisp surfaces, premium microinteractions.
- Cursor: direct AI positioning and confidence.
- Modern CSS scroll-driven animation: lightweight scroll-linked motion.

## Page Structure

### 1. Hero

Purpose: establish money outcome, product category, traction, and visual quality immediately.

Hero copy:

> Ganhe dinheiro com videos IA para TikTok Shop.

Short subcopy:

> Produto. Score. Video. Publicacao.

Hero visual:

- One large responsive "Genfy command center" mockup.
- The visual combines product feed, Genfy Score, queued video, and publishing-coming-soon chip.
- On mobile, it should be a tall compact interface panel.
- On desktop, it can expand into a layered dashboard composition.

Hero proof:

- Three compact metric chips: videos generated, active users, analyzed products.
- Beta badge.
- CTA to open Genfy.

### 2. The Genfy Cycle

Purpose: show the core loop without heavy explanation.

Visual format:

- Four connected blocks: Produto, Score, Video, Publicacao.
- Mobile: vertical stacked blocks connected by a thin animated line.
- Desktop: horizontal flow with vector connectors.

Each block gets one short caption:

- Produto encontrado.
- Score validado.
- Video gerado.
- Postagem em breve.

Feature mapping:

- Produto: Hub For You, trending products, sellers.
- Score: validation, demand, safety, social proof, content potential.
- Video: Studio, prompts, avatars, mass generation, queue.
- Publicacao: TikTok drafts today, automatic posting soon.

### 3. Product In Action

Purpose: communicate many features without creating clutter.

Visual format:

- Tabbed or carousel product showcase.
- Mobile: one feature panel at a time, swipe/tap friendly.
- Desktop: central mockup with side labels and small supporting panels.

Panels:

1. Hub
   - Personalized For You feed.
   - Trending products.
   - Seller/product signals.
   - Quick generate from product.

2. Studio
   - Product link or image.
   - Prompt modes and saved prompts.
   - Avatars.
   - 8s and 16s duration.
   - Real-time queue.

3. Score
   - Genfy Score.
   - Demand, safety, social, content.
   - Product detail, videos, reviews, seller context.

4. Ranking
   - Weekly leaderboard.
   - Points from completed videos.
   - Token prizes for top creators.

5. Editor
   - Text, music, captions, stickers, filters, trim, export.

Keep copy per panel extremely short. Let the mockup do most of the work.

### 4. Metrics Dashboard

Purpose: prove traction visually.

Use:

- KPI cards.
- A small line/bar chart for generated videos.
- A product analysis table with realistic columns such as product, score, sold units, creator signal.

This should replace raw screenshots when screenshots are visually weak.

### 5. AI Production Layer

Purpose: show that Genfy has serious AI infrastructure.

Visual format:

- Compact engine rail or comparison strip.
- No long explanation.

Engines:

- Veo 3.1 Fast.
- Veo 3.1 Quality.
- Nano Banana 2 for first-frame/product enhancement.
- SeaDance 2.0, coming soon.

### 6. Automatic Posting Coming Soon

Purpose: tease the major upcoming differentiator without overpromising.

Copy:

> Postagem automatica no TikTok Shop esta chegando.

Countdown target:

- 2026-06-26.

Visual:

- Countdown module.
- Small publishing pipeline graphic.
- Mention "Disponivel em breve" clearly.

Do not present automatic posting as available today.

### 7. Born In Brazil

Purpose: create emotional pride and differentiation.

Copy:

> Nascida no Brasil. Criando uma nova categoria global.

Visual:

- Elegant Brazil-origin marker, not flag-heavy or patriotic clutter.
- Could use a subtle map coordinate, origin stamp, or latitude/longitude motif.

### 8. FAQ And Final CTA

FAQ should stay short and practical:

- What is Genfy?
- Is it still beta?
- Does it guarantee money?
- Does it post automatically today?
- What does the TikTok integration do today?
- What are tokens?

Final CTA:

> Abrir Genfy

Optional secondary:

> Ver como funciona

## Mobile Requirements

Mobile is the primary experience.

Hard requirements:

- No section may depend on desktop-only layout to make sense.
- Hero text must fit on narrow screens without awkward wrapping.
- Mockups must be legible on mobile or intentionally simplified.
- Tabs/carousels need large touch targets.
- Cookie banner must not cover the main CTA.
- No horizontal overflow.
- No tiny text inside key product visuals.
- Use stable dimensions for mockups to prevent layout shift.
- Test at 375px, 390px, 430px, 768px, and desktop.

## Technical Direction

Use the current Next.js landing repo patterns where possible.

Likely implementation approach:

- Rebuild `app/page.tsx` around new sections.
- Keep i18n structure, updating `messages/pt.json` and `messages/en.json`.
- Replace decorative orb background with a restrained grid/vector field.
- Create reusable visual components:
  - MetricCard
  - GenfyCycle
  - ProductShowcase
  - MockupFrame
  - EngineRail
  - Countdown
  - VisualConnector
- Keep analytics hooks for CTAs.
- Use CSS animations for simple motion.
- Use progressive enhancement for scroll-driven effects.
- Respect reduced motion.

## Assets

Prefer product-inspired custom UI mockups over raw screenshots when screenshots look weak.

If real screenshots are used:

- Crop and frame them inside designed mockups.
- Ensure text is readable.
- Avoid overlapping browser chrome or cookie banners.
- Use current app screenshots only when they strengthen trust.

If custom visuals are built:

- They must be truthful representations of real product capabilities.
- They should use real feature names and plausible data.
- They should not imply unavailable features are live.

## Copy Tone

Short, direct, premium.

Avoid:

- Long paragraphs.
- Generic "AI-powered platform" language.
- Fake revenue promises.
- Hype that sounds like a get-rich-quick scheme.

Prefer:

- "Ganhe dinheiro com videos IA para TikTok Shop."
- "Produto. Score. Video. Publicacao."
- "Cada video e uma nova tentativa de venda."
- "Beta privado com tracao real."
- "Disponivel em breve."

## Validation

Before calling the redesign complete:

- Run type-check/build.
- Open the page locally.
- Verify desktop and mobile screenshots.
- Check for overlapping text, horizontal scroll, broken mobile tabs, and unreadable mockups.
- Verify reduced-motion styles do not leave content hidden.
- Verify CTA links still point to the Genfy app.

