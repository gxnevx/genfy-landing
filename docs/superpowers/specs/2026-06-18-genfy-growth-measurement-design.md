# Genfy Growth Measurement - Phase 1 Design

**Date:** 2026-06-18

## Goal

Build a consent-aware measurement foundation across `home.genfy.studio` and
`genfy.studio` before paid acquisition scales. The system must connect campaign
clicks to product activation and token purchases without sending personal data
to Google Analytics.

## Google Assets

- Google Tag Manager account: `Genfy`
- Web container: `GTM-WQTS7NDD`
- GA4 account: `Genfy`
- GA4 property: `Genfy - LP + Studio`
- GA4 web stream: `Genfy Web - LP + Studio`
- GA4 measurement ID: `G-G0GT75QCN6`
- Reporting currency: BRL
- Primary domains: `home.genfy.studio`, `genfy.studio`

The GTM workspace must remain unpublished until both applications have the
container installed, consent defaults are present, and Preview mode passes.

## Architecture

Both Next.js applications receive the same small analytics layer:

1. A pre-GTM consent bootstrap sets all optional Google consent states to
   `denied`.
2. The GTM container loads once per page.
3. A first-party consent preference updates Google Consent Mode v2 and controls
   PostHog initialization.
4. A first-party attribution cookie preserves first-touch and last-touch
   campaign parameters across Genfy subdomains.
5. Product code emits typed events to `window.dataLayer`.
6. GTM forwards approved events to the single GA4 property.
7. Stripe purchase confirmation sends the canonical `purchase` event from the
   webhook, using `order_id` as `transaction_id`.

## Consent Model

Cookie: `genfy_consent_v2`

Categories:

- `necessary`: always enabled.
- `analytics`: controls GA4 analytics storage and PostHog.
- `marketing`: controls Google advertising storage, user data, and
  personalization.

Default before GTM loads:

```js
gtag("consent", "default", {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  wait_for_update: 500,
});
```

The banner offers:

- Accept all
- Reject optional
- Manage preferences

Changing preferences must immediately update Consent Mode and PostHog without
requiring a page reload.

## Attribution Model

Cookie: `genfy_attribution_v1`

Lifetime: 90 days

Scope in production: `.genfy.studio`

Stored fields:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `gclid`
- `gbraid`
- `wbraid`
- landing URL
- referrer
- capture timestamp

The object stores `first_touch` and `last_touch`. No email, name, prompt,
product URL, image URL, or other personal/user-generated content may be sent as
GA4 event parameters.

## Event Dictionary

| Event | Source | Purpose | GA4 key event |
|---|---|---|---|
| `page_view` | GTM/GA4 | Traffic measurement | No |
| `cta_click` | Landing | CTA performance by location | No |
| `sign_up` | Studio auth | Account creation by method | Secondary |
| `login` | Studio auth | Returning-user access | No |
| `product_validated` | Hub validation | High-intent product research | Secondary |
| `generation_started` | Studio/Hub | Video job accepted | Secondary |
| `video_completed` | Studio realtime | Successful generated asset | No |
| `first_video_completed` | Studio realtime | Product-qualified activation | Primary |
| `begin_checkout` | Token package UI | Monetization intent | Secondary |
| `purchase` | Stripe webhook | Canonical revenue with BRL value | Primary |
| `tiktok_connected` | TikTok OAuth | Advanced activation | Secondary |
| `draft_published` | TikTok draft flow | Product outcome | Secondary |

### Required event parameters

`cta_click`

- `cta_name`
- `cta_location`
- `destination`

`sign_up`

- `method`: `email`, `google`, or `tiktok`

`product_validated`

- `source`: `hub_validate`, `trending`, `for_you`, or `seller`
- `score_band`: `low`, `medium`, or `high`

`generation_started`

- `engine`
- `duration_seconds`
- `source`
- `has_avatar`
- `has_product_link`

`video_completed`

- `engine`
- `duration_seconds`
- `source`

`first_video_completed`

- same non-personal parameters as `video_completed`

`begin_checkout`

- `currency`: `BRL`
- `value`
- `items`: package key, token quantity, and item price

`purchase`

- `transaction_id`: order UUID
- `currency`: `BRL`
- `value`
- `items`: package key, token quantity, and item price

## Purchase Delivery

The browser includes these non-sensitive fields when starting checkout:

- GA client ID
- first-touch attribution
- last-touch attribution

The checkout route stores them in the existing `orders.metadata` JSON field.
After Stripe confirms payment, the webhook:

1. approves the order and grants tokens;
2. sends one GA4 Measurement Protocol `purchase`;
3. uses the order UUID for deduplication;
4. logs analytics delivery failure without failing or rolling back payment.

Required server environment variables:

- `GA4_MEASUREMENT_ID=G-G0GT75QCN6`
- `GA4_API_SECRET=<created in GA4>`

## Privacy Requirements

The landing privacy policy must be corrected before marketing tags are
published:

- replace obsolete `nexus.studio` references;
- replace obsolete AbacatePay references with Stripe;
- disclose Google Tag Manager, Google Analytics, Google Ads, PostHog, and
  first-party attribution cookies;
- explain consent categories and preference withdrawal;
- state that advertising identifiers may be processed only after consent;
- keep LGPD data-subject rights and contact information visible.

## Validation

Before publishing GTM:

1. Verify no Google or PostHog storage is granted before consent.
2. Verify Accept all and Reject optional update consent correctly.
3. Verify one `page_view` per route load.
4. Verify custom events in GTM Preview.
5. Verify events in GA4 DebugView.
6. Verify attribution survives LP to Studio navigation.
7. Run a Stripe test-mode purchase and verify one server-side `purchase`.
8. Confirm no PII or product/user-generated text appears in event payloads.

