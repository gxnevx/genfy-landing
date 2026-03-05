# Roadmap: Genfy Landing Page

## Overview
Build Genfy's public landing page from foundation to deployment in 4 phases: scaffold and design system, content sections, legal/SEO polish, and cross-project integration.

## Phases
- [ ] **Phase 1: Foundation & Design System** - Project scaffold, ported design tokens, layout shell
- [ ] **Phase 2: Landing Page Sections** - Hero, features, pricing, updates, all content
- [ ] **Phase 3: Legal, SEO & Polish** - Privacy, terms, cookies, OG tags, responsive
- [ ] **Phase 4: Integration & Deploy** - CTA links, git updates, nexus.studio home button, Vercel

## Phase Details

### Phase 1: Foundation & Design System
**Goal**: Working Next.js app with ported Genfy design system, logo, and layout shell
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05, FOUND-06, FOUND-07, FOUND-08
**Success Criteria**:
  1. `npm run dev` serves the app with dark theme active
  2. All CSS variables render correctly
  3. GenfyLogo renders on the page
  4. Navbar and Footer are visible
  5. Dark/light theme toggle works
**Plans**: 3 plans
- [ ] 01-01: Project scaffold (Next.js, configs, dependencies)
- [ ] 01-02: Design system port (globals.css, themes, utilities)
- [ ] 01-03: Layout shell (root layout, Navbar, Footer, Providers)

### Phase 2: Landing Page Sections
**Goal**: All content sections built and visually complete with animations
**Depends on**: Phase 1
**Requirements**: SECT-01, SECT-02, SECT-03, SECT-04, SECT-05, SECT-06, SECT-07, SECT-08
**Success Criteria**:
  1. Hero section displays animated gradient text and CTA
  2. Features section shows bento grid with 6+ cards
  3. Pricing section displays plan cards
  4. How it works section explains product flow
  5. All sections have scroll-reveal animations
**Plans**: 3 plans
- [ ] 02-01: Hero + WhatIsGenfy + HowItWorks
- [ ] 02-02: Features bento grid + Pricing cards
- [ ] 02-03: RecentUpdates + CallToAction

### Phase 3: Legal, SEO & Polish
**Goal**: Legal compliance, SEO optimization, responsive polish
**Depends on**: Phase 2
**Requirements**: LEGAL-01 through LEGAL-06, SEO-01 through SEO-04
**Success Criteria**:
  1. Privacy and Terms pages render correctly
  2. Cookie consent banner appears and dismisses
  3. OG meta tags present in page source
  4. Fully responsive at 375px, 768px, 1024px, 1440px
  5. Lighthouse > 90 Performance and Accessibility
**Plans**: 3 plans
- [ ] 03-01: Legal pages + cookie consent
- [ ] 03-02: SEO optimization
- [ ] 03-03: Responsive polish + accessibility

### Phase 4: Integration & Deploy
**Goal**: Landing page connects to nexus.studio, updates work, deployed
**Depends on**: Phase 3
**Requirements**: INTG-01, INTG-02, INTG-03, INTG-04
**Success Criteria**:
  1. CTA buttons redirect to nexus.studio
  2. Recent Updates displays release notes
  3. Home button in nexusvideogenerator links to landing page
  4. Site deployed and accessible
**Plans**: 3 plans
- [ ] 04-01: CTA integration + Recent Updates data
- [ ] 04-02: nexusvideogenerator home button
- [ ] 04-03: Vercel deployment config

## Progress
| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| Phase 1 | 0/3 | In Progress | - |
| Phase 2 | 0/3 | Pending | - |
| Phase 3 | 0/3 | Pending | - |
| Phase 4 | 0/3 | Pending | - |
