# Requirements: Genfy Landing Page

## v1 Requirements

### Foundation
- [ ] **FOUND-01**: Next.js project initializes and builds without errors
- [ ] **FOUND-02**: Tailwind CSS v4 with `@import "tailwindcss"` and `@theme` block works
- [ ] **FOUND-03**: All `--nx-*` CSS variables from nexusvideogenerator are ported
- [ ] **FOUND-04**: `glass`, `glass-card`, `glass-strong`, `btn-accent`, `btn-ghost` utilities exist
- [ ] **FOUND-05**: `next-themes` provides dark-first theme with class-based toggling
- [ ] **FOUND-06**: GenfyLogo (static, icon, loading) components render correctly
- [ ] **FOUND-07**: System font stack matches nexusvideogenerator
- [ ] **FOUND-08**: GSD artifacts are initialized in `.planning/`

### Sections
- [ ] **SECT-01**: Hero section displays animated heading, subtext, and CTA button
- [ ] **SECT-02**: "What is Genfy" section explains the product with visual elements
- [ ] **SECT-03**: "How it works" section shows step-by-step flow with icons
- [ ] **SECT-04**: Features section uses bento grid layout with glass-card cells
- [ ] **SECT-05**: Pricing section displays plan cards with clear differentiation
- [ ] **SECT-06**: Recent Updates tab displays release notes
- [ ] **SECT-07**: Footer contains social links, legal links, branding
- [ ] **SECT-08**: Floating glass Navbar with logo and "Get Started" CTA button

### Legal
- [ ] **LEGAL-01**: Privacy Policy page at `/privacy` with full content
- [ ] **LEGAL-02**: Terms of Service page at `/terms` with full content
- [ ] **LEGAL-03**: Cookie consent banner appears on first visit
- [ ] **LEGAL-04**: Cookie preference is persisted in localStorage
- [ ] **LEGAL-05**: All external links use `rel="noopener noreferrer"`
- [ ] **LEGAL-06**: HTTPS enforced in all links

### SEO
- [ ] **SEO-01**: OG meta tags (title, description, image) on all pages
- [ ] **SEO-02**: Favicon (ico, svg, apple-touch-icon) present
- [ ] **SEO-03**: `robots.txt` and sitemap generated
- [ ] **SEO-04**: Structured data (JSON-LD) for organization

### Integration
- [ ] **INTG-01**: CTA buttons redirect to `https://nexus.studio`
- [ ] **INTG-02**: Recent Updates section fetches release data from GitHub repos
- [ ] **INTG-03**: nexusvideogenerator Sidebar includes "Home" link to landing page
- [ ] **INTG-04**: Site deploys to Vercel with custom domain configuration

## v2 Requirements (Deferred)
- Blog / content management system
- Multi-language support (pt/en)
- A/B testing for CTA copy
- Analytics dashboard integration
- Testimonials / case studies section

## Out of Scope
| Feature | Reason |
|---------|--------|
| User authentication | Handled by nexus.studio |
| Payment processing | Handled by nexus.studio |
| Video generation demo | Complex, requires backend integration |

## Traceability
| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 to FOUND-08 | Phase 1 | Pending |
| SECT-01 to SECT-08 | Phase 2 | Pending |
| LEGAL-01 to LEGAL-06 | Phase 3 | Pending |
| SEO-01 to SEO-04 | Phase 3 | Pending |
| INTG-01 to INTG-04 | Phase 4 | Pending |
