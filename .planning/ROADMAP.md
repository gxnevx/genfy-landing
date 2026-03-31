# Roadmap: Genfy Landing Page

## v1.0 — Foundation (Shipped: 2026-03-05)
- [x] Phase 1: Foundation & Design System — scaffold, design tokens, layout shell
- [x] Phase 2: Landing Page Sections — hero, features, pricing, updates, CTA
- [x] Phase 3: Legal, SEO & Polish — privacy, terms, cookies, responsive
- [x] Phase 4: Integration & Deploy — APP_URL corrected to genfy.studio

---

## v2.0 — Major Refurbishment & AI Sync (Active)

### Phase 5: GSD Setup ✓ (2026-03-05)
- [x] Read all three repos (nexus-workflow, nexusvideogenerator, genfy-landing)
- [x] Run ui-ux-pro-max design system generation → persisted to design-system/genfy/MASTER.md
- [x] Update .planning files (PROJECT.md, STATE.md, ROADMAP.md)

### Phase 6: AI Update Sync System
**Goal:** Automated changelog generation from commits using GPT-4 Mini
- [ ] scripts/sync-updates.mjs — fetches commits from both repos, calls GPT-4 Mini, writes data/updates.json
- [ ] .github/workflows/sync-updates.yml — daily cron (9am UTC) + manual dispatch
- [ ] data/updates.json — initial seeded data
- [ ] RecentUpdates.tsx — read from static JSON instead of hardcoded array

### Phase 7: Full Landing Page Refurbishment
**Goal:** Professional SaaS-level design, complete ecosystem representation
- [ ] messages/en.json + messages/pt.json — all new translation keys
- [ ] lib/constants.ts — remove outdated pricing plan data
- [ ] Hero.tsx — ecosystem framing, stats, stronger copy
- [ ] Features.tsx — expanded with real platform features from nexusvideogenerator
- [ ] NEW: AIModels.tsx — 4 engine cards (specs, quality, speed, use cases)
- [ ] NEW: Platform.tsx — Studio, Gallery, Hub, Marketplace, Community overview
- [ ] NEW: TargetUsers.tsx — creators, sellers, social managers, marketers, businesses
- [ ] Pricing.tsx — token packages (one-time), correct model, Business tier
- [ ] Navbar.tsx — add Models + Platform anchor links
- [ ] Footer.tsx — add new section links
- [ ] app/page.tsx — compose all sections in correct order

### Phase 8: Verify & Ship
- [ ] Preview server checks (snapshot, mobile, no console errors)
- [ ] Commit all changes with descriptive message
- [ ] Push to origin/main

## Progress
| Phase | Status |
|-------|--------|
| 1–4 (v1.0) | ✓ Shipped |
| 5 (GSD Setup) | ✓ Done |
| 6 (AI Sync) | In Progress |
| 7 (Refurbishment) | In Progress |
| 8 (Ship) | Pending |
