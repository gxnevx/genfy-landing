<p align="center">
  <img src="public/favicon.svg" width="80" alt="Genfy Logo" />
</p>

<h1 align="center">Genfy Landing</h1>

<p align="center">
  <strong>Marketing website for <a href="https://genfy.studio">Genfy</a> — the AI video generation platform for TikTok Shop sellers and creators.</strong>
</p>

<p align="center">
  <a href="https://home.genfy.studio">Website</a> · <a href="https://genfy.studio">Launch App</a> · <a href="https://chat.whatsapp.com/CVKDchoK3BZJH0NaGmcpvy">WhatsApp Community</a>
</p>

---

## About Genfy

Genfy is an AI-powered video generation platform built for TikTok Shop sellers and content creators. Upload a product image, pick an AI engine, and get a professional video ready to post — in seconds.

The platform combines multiple AI video engines (Sora 2, VEO 3.1, Grok Imagine) with TikTok Shop intelligence tools to help creators find trending products, validate them, and produce high-converting video ads at scale.

This repository contains the **landing page and marketing website** served at [home.genfy.studio](https://home.genfy.studio). The main application lives at [genfy.studio](https://genfy.studio).

## What's on the website

- **Hero & product overview** — value prop, stats, and CTA to the app
- **Tools showcase** — Trending Products, Trending Sellers, Product Validation pages with how-it-works flows
- **AI Engines comparison** — Genfy Engine (Standard), Ultra (Sora 2), Prime (Grok Imagine), Advanced (VEO 3.1) with specs
- **Token Cost Simulator** — interactive calculator for engine cost estimation
- **Recent Updates** — auto-synced changelog from the platform repos
- **Community & Social** — links to WhatsApp, Instagram, LinkedIn, X
- **Legal pages** — Privacy Policy & Terms of Service
- **i18n** — full Portuguese (BR) and English support

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Theming | next-themes (dark/light) |
| Hosting | Vercel |

## Project Structure

```
genfy-landing/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout + metadata
│   ├── globals.css           # Design tokens & Tailwind
│   ├── providers.tsx         # Theme + lang providers
│   ├── tools/                # Tool detail pages
│   ├── privacy/              # Privacy Policy
│   ├── terms/                # Terms of Service
│   └── updates/              # Full changelog page
├── components/
│   ├── sections/             # Hero, Tools, AIModels, Social, CTA
│   ├── layout/               # Navbar, Footer, CookieConsent
│   ├── tools/                # Tool-specific components
│   └── ui/                   # AnimatedOrbs, RevealOnScroll
├── contexts/                 # Language context (PT/EN)
├── data/                     # Updates JSON feed
├── design-system/            # Genfy design master doc
├── hooks/                    # Intersection observer
├── lib/                      # Constants, i18n, utilities
├── messages/                 # en.json, pt.json translations
├── public/                   # Favicon, OG image
└── scripts/                  # Update sync automation
```

## Getting Started

```bash
# Clone
git clone https://github.com/gxnevx/genfy-landing.git
cd genfy-landing

# Install
npm install

# Dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript check |

## Environment

No environment variables required — the landing page is fully static. All URLs and constants are defined in `lib/constants.ts`.

## Links

| | URL |
|-|-----|
| 🌐 Website | [home.genfy.studio](https://home.genfy.studio) |
| 🚀 App | [genfy.studio](https://genfy.studio) |
| 📸 Instagram | [@genfy.studio](https://instagram.com/genfy.studio) |
| 💼 LinkedIn | [genfy-app](https://linkedin.com/company/genfy-app) |
| 🐦 X | [@genfy_studio](https://x.com/genfy_studio) |
| 💬 WhatsApp | [Community Channel](https://chat.whatsapp.com/CVKDchoK3BZJH0NaGmcpvy) |

## Author

**Guilherme Neves Ferreira** — [@gxnevx](https://github.com/gxnevx)

## License

Proprietary. All rights reserved.
