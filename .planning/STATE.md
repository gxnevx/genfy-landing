# Project State

## Project Reference
See: .planning/PROJECT.md
**Core value:** Convert visitors into Genfy users by communicating the full ecosystem
**Current focus:** v2.0 — Major Refurbishment & AI Update Sync

## Current Position
Milestone: v2.0
Status: In Progress
Progress: [██░░░░░░░░] 20%

## Active Work
- Implementing AI update sync system (scripts/sync-updates.mjs + GitHub Actions)
- Full landing page refurbishment: AIModels, Platform, TargetUsers sections
- Pricing correction: token packages, not monthly subscriptions
- Design system upgrade: Plus Jakarta Sans, improved layout

## Accumulated Context

### Decisions
- CSS-only animations (no Framer Motion)
- Port CSS from nexusvideogenerator (copy, not shared package)
- Static JSON (data/updates.json) populated by daily CI script
- APP_URL = https://genfy.studio (fixed from nexus.studio)
- Design system: glassmorphism dark + Plus Jakarta Sans (via ui-ux-pro-max skill)
- Design system persisted to design-system/genfy/MASTER.md

### Real Feature Data (from nexusvideogenerator)
**Engines:**
- Genfy Engine (standard/telegram) — Sora2API, 100 tokens
- Genfy Ultra (pro/sora) — Kie.ai Sora 2, 150 tokens, 1080p
- Genfy Prime (veo3) — Vidgo VEO 3.1-fast, 150 tokens, portrait 9:16
- Genfy Advanced (advanced/veo) — Kie.ai VEO 3 Fast, 200 tokens

**Platform Sections:** Studio, Gallery, Hub, Marketplace, Community, Social
**Token Pricing:** Dynamic (DB), representative packages on landing
**Business Tier:** 50,000+ tokens, contact admin

### Blockers
None

## Session Continuity
Last session: 2026-03-05
