# Genfy Landing Page

## What This Is
A public-facing marketing landing page for Genfy — our AI video generation SaaS at nexus.studio. It serves as the product's "cover letter": modern, tech, creative, and artistic.

## Core Value
Convert visitors into Genfy users by showcasing the product's value, building trust with professional design and legal compliance, and providing a direct path to sign up.

## Requirements
### Active
- [ ] Glassmorphism design system matching nexus.studio
- [ ] Hero section with animated gradient text and CTA
- [ ] Product explanation (what is Genfy, how it works)
- [ ] Features showcase (bento grid)
- [ ] Pricing plans
- [ ] Recent updates from git repos
- [ ] Legal compliance (privacy policy, terms, cookie consent)
- [ ] SEO optimization (OG tags, favicon, sitemap)
- [ ] Mobile responsive
- [ ] Cross-project integration (CTA → nexus.studio, home button in app)

### Out of Scope
- User authentication — handled by nexus.studio
- Payment processing — handled by nexus.studio
- Blog/content management — future consideration

## Context
Genfy has two existing repos: nexus-workflow (FastAPI backend) and nexusvideogenerator (Next.js frontend). The landing page is a standalone Next.js project that shares the same visual identity via ported CSS design tokens.

## Constraints
- **Design**: Must match existing Genfy glassmorphism aesthetic (dark-first, blue accent, glass utilities)
- **Tech**: Next.js + Tailwind CSS v4 + TypeScript (matching nexusvideogenerator stack)
- **Legal**: Privacy policy, terms of service, cookie consent required
- **Performance**: Lighthouse > 90 for Performance and Accessibility

## Key Decisions
| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Standalone project (not monorepo) | Independent deployment, simpler CI/CD | genfy-landing/ at D:\projetos\ |
| CSS-only animations | Consistency with nexusvideogenerator, smaller bundle | No Framer Motion |
| Static generation with ISR for updates | Fast page loads, fresh data without rebuilds | revalidate: 3600 |
| Port CSS, don't share package | Landing page deploys independently, CSS changes are rare | Copy globals.css |
