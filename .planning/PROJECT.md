# Genfy Landing Page

## What This Is
A public-facing marketing landing page for Genfy — a full AI video ecosystem at genfy.studio. It serves as the product's "cover letter": showcasing the complete platform (Studio, Gallery, Hub, Marketplace, Community), all available AI engines, and the token system.

## Core Value
Convert visitors into Genfy users by clearly communicating the full ecosystem value — not just "a video generator" but a complete platform for creators, sellers, and digital businesses.

## Requirements

### Validated
- ✓ Glassmorphism design system (dark-first, blue accent) — v1.0
- ✓ Hero section with animated gradient text and CTA — v1.0
- ✓ How it works (3-step) — v1.0
- ✓ Features bento grid — v1.0
- ✓ Pricing section — v1.0
- ✓ Recent updates / changelog — v1.0
- ✓ Legal compliance (privacy, terms, cookie consent) — v1.0
- ✓ Mobile responsive — v1.0
- ✓ APP_URL corrected to genfy.studio — v1.0.1

### Active
- [ ] AI-powered update sync system (GitHub commits → GPT-4 Mini → changelog JSON)
- [ ] Major landing page refurbishment — professional SaaS-level design
- [ ] AI Models section — 4 engines with specs, quality, use cases
- [ ] Platform section — full ecosystem overview (Studio, Gallery, Hub, Marketplace, Community)
- [ ] Target Users section — creators, sellers, marketers, businesses
- [ ] Pricing correction — token packages (one-time purchase), not monthly subscriptions; Business tier
- [ ] Expanded features from real nexusvideogenerator UI data
- [ ] Hero improvement — stats, ecosystem framing, stronger copy
- [ ] Navbar update — new nav anchors for Models and Platform sections
- [ ] Footer update — new section links
- [ ] Design system upgrade — Plus Jakarta Sans, improved spacing/typography

### Out of Scope
- User authentication — handled by genfy.studio
- Payment processing — handled by genfy.studio
- Blog/CMS — future consideration
- Real-time data dashboard — too complex for marketing page

## Context
Three repos: nexus-workflow (FastAPI backend), nexusvideogenerator (Next.js frontend app), genfy-landing (this project).
- 4 AI engines: Genfy Engine (Sora2API), Genfy Ultra (Kie.ai Sora 2), Genfy Prime (Vidgo VEO 3.1), Genfy Advanced (Kie.ai VEO 3 Fast)
- Token costs: Standard 100, Pro 150, VEO3 150, Advanced 200 tokens per video
- Token packages are dynamic (stored in DB), but landing should show representative examples
- Business tier exists: 50,000+ tokens, contact admin
- OpenAI GPT-4 Mini already used in nexus-workflow for prompt generation

## Constraints
- **Design**: Glassmorphism dark-first, Plus Jakarta Sans, blue accent (#3B82F6), glass utilities
- **Tech**: Next.js + Tailwind CSS v4 + TypeScript
- **Design System**: Persisted to design-system/genfy/MASTER.md via ui-ux-pro-max skill
- **No external DB**: Updates data served from static JSON file (data/updates.json), populated by CI script
- **Legal**: Existing privacy/terms pages must remain unchanged

## Key Decisions
| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Standalone project (not monorepo) | Independent deployment, simpler CI/CD | ✓ Good |
| CSS-only animations | Consistency with nexusvideogenerator, smaller bundle | ✓ Good |
| Static JSON for updates | No runtime DB queries on landing page, ISR refresh | — Pending |
| GPT-4 Mini for commit analysis | Already used in project, cost-effective | — Pending |
| Token packages (not subscriptions) | Correct representation of actual product | Active |

---
*Last updated: 2026-03-05 — v2.0 refurbishment milestone*
