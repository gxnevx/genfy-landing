# Genfy Growth Measurement Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Install a consent-aware GTM/GA4 foundation across the Genfy landing page and Studio, with campaign attribution, activation events, and canonical server-side purchase measurement.

**Architecture:** Both Next.js repositories use the same browser analytics contract and GTM container. Consent defaults run before GTM, campaign attribution persists in a first-party cross-subdomain cookie, product events enter `dataLayer`, and Stripe sends the final purchase through GA4 Measurement Protocol.

**Tech Stack:** Next.js 16, TypeScript, Google Tag Manager, GA4, Google Consent Mode v2, PostHog, Supabase, Stripe, Vitest, Node test runner.

---

### Task 1: Landing analytics foundation

**Files:**
- Create: `_landing/lib/analytics/types.ts`
- Create: `_landing/lib/analytics/consent.ts`
- Create: `_landing/lib/analytics/attribution.ts`
- Create: `_landing/lib/analytics/data-layer.ts`
- Create: `_landing/components/analytics/GoogleTagManager.tsx`
- Modify: `_landing/app/layout.tsx`
- Modify: `_landing/components/layout/CookieConsent.tsx`
- Modify: `_landing/lib/posthog.ts`
- Modify: `_landing/lib/analytics.ts`
- Test: `_landing/tests/google-measurement.test.mjs`

- [ ] Write tests asserting the GTM ID, denied consent defaults, attribution keys, and CTA data-layer events.
- [ ] Run `node --test tests/google-measurement.test.mjs` and verify failure.
- [ ] Add the typed consent, attribution, and data-layer modules.
- [ ] Install GTM head and noscript snippets in the root layout.
- [ ] Upgrade the consent UI to necessary/analytics/marketing preferences.
- [ ] Bridge analytics consent to PostHog.
- [ ] Run the focused test and `npm run type-check`.

### Task 2: Studio analytics foundation

**Files:**
- Create: `nexusvideogenerator-main/lib/analytics/types.ts`
- Create: `nexusvideogenerator-main/lib/analytics/consent.ts`
- Create: `nexusvideogenerator-main/lib/analytics/attribution.ts`
- Create: `nexusvideogenerator-main/lib/analytics/data-layer.ts`
- Create: `nexusvideogenerator-main/components/analytics/GoogleTagManager.tsx`
- Create: `nexusvideogenerator-main/components/analytics/ConsentBanner.tsx`
- Modify: `nexusvideogenerator-main/app/layout.tsx`
- Test: `nexusvideogenerator-main/test/google-measurement.test.ts`

- [ ] Write Vitest coverage for consent mapping, attribution parsing, and event payload sanitization.
- [ ] Run the focused test and verify failure.
- [ ] Add the Studio analytics modules and root GTM installation.
- [ ] Add the consent banner to the root application.
- [ ] Run the focused test and type-check.

### Task 3: Authentication and activation events

**Files:**
- Modify: `nexusvideogenerator-main/app/(auth)/login/page.tsx`
- Modify: `nexusvideogenerator-main/app/(app)/studio/page.tsx`
- Modify: `nexusvideogenerator-main/hooks/useProductValidation.ts`
- Modify: `nexusvideogenerator-main/app/api/auth/tiktok/callback/route.ts`
- Test: `nexusvideogenerator-main/test/growth-events.test.tsx`

- [ ] Add failing tests for `sign_up`, `login`, `product_validated`, `generation_started`, `video_completed`, `first_video_completed`, and `tiktok_connected`.
- [ ] Emit only non-personal parameters from successful product states.
- [ ] Deduplicate completion events by video ID in browser storage.
- [ ] Mark first completion only when the pre-completion profile count is zero.
- [ ] Run focused tests and the full Studio test suite.

### Task 4: Checkout and server-side purchase

**Files:**
- Create: `nexusvideogenerator-main/lib/analytics/ga4-server.ts`
- Modify: `nexusvideogenerator-main/app/(app)/profile/_components/TokenPackages.tsx`
- Modify: `nexusvideogenerator-main/app/api/checkout/route.ts`
- Modify: `nexusvideogenerator-main/app/api/webhooks/stripe/route.ts`
- Test: `nexusvideogenerator-main/test/ga4-purchase.test.ts`

- [ ] Write failing tests for checkout metadata and Measurement Protocol payloads.
- [ ] Emit browser `begin_checkout`.
- [ ] Store GA client ID and attribution in `orders.metadata`.
- [ ] Send one non-blocking server-side `purchase` after successful token grant.
- [ ] Use `order.id` as `transaction_id`.
- [ ] Run focused tests, type-check, and build.

### Task 5: Privacy and project documentation

**Files:**
- Modify: `_landing/app/privacy/page.tsx`
- Modify: `_landing/messages/pt.json`
- Modify: `_landing/messages/en.json`
- Modify: `genfy-vault/06 - Knowledge Base/Landing/Landing Analytics.md`
- Create: `genfy-vault/06 - Knowledge Base/Analytics/Growth Measurement.md`

- [ ] Correct domains and payment provider references.
- [ ] Document GTM, GA4, Ads, PostHog, consent categories, attribution, and data rights.
- [ ] Document IDs, event dictionary, ownership, and environment variables in the vault.
- [ ] Run landing tests, type-check, and build.

### Task 6: Google configuration and QA

**External configuration:**
- GTM container `GTM-WQTS7NDD`
- GA4 property `Genfy - LP + Studio`
- GA4 measurement ID `G-G0GT75QCN6`

- [ ] Create a GA4 Measurement Protocol API secret.
- [ ] Add production environment variables to Vercel.
- [ ] Use GTM Preview against both domains.
- [ ] Validate consent before and after user choices.
- [ ] Validate custom events in GA4 DebugView.
- [ ] Correct the GA4 reporting timezone to São Paulo.
- [ ] Publish GTM version `Genfy Measurement Foundation v1` only after QA passes.

