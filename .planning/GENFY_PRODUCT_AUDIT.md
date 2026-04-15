# Genfy Product Audit

Date: 2026-04-11

Source of truth: the live authenticated UI at `https://genfy.studio`, not older helper copy, FAQ text, or legacy product descriptions.

Evidence folder:

- `.planning/genfy-audit/`
- Screenshots: `.planning/genfy-audit/screens/`
- Route and interaction dumps: `route-scan.json`, `hub-actions.json`, `product-tools.json`, `social-profile.json`

## Audit Method

- Logged into the live product in a real Chrome session.
- Attached Playwright to the logged-in browser.
- Visited the main authenticated routes and button-driven tool surfaces.
- Tested the product-analysis tools with a real TikTok Shop product link.
- Reviewed screenshots to document both behavior and visual direction.
- Avoided irreversible or credit-consuming actions when they would spend tokens, trigger posting, or start purchase flows.

## Product Thesis From The Working UI

The live product is not just an AI video generator.

The working UI presents Genfy as a TikTok Shop operating surface that helps users:

- discover trending products
- browse high-performing sellers
- validate product potential before creating
- analyze price, stock, sales, and merchant signals
- create AI videos from products or product links
- edit generated videos
- manage a gallery/work queue
- connect TikTok for deeper workflow integration
- participate in a lightweight community/social layer
- request access to automated posting and scheduling

This lines up strongly with the strategy theory: Genfy is closer to a commerce workflow platform than a single-purpose video tool.

## Screen Map

Primary authenticated routes confirmed:

- `/hub`
- `/studio`
- `/gallery`
- `/social/community` via `/social`
- `/profile`
- `/hub/trending`
- `/hub/sellers`
- `/hub/validate`
- `/hub/calculator`
- `/editor`

Hub tool-card routing confirmed:

- `Criar Vídeo` -> `/studio`
- `Postagem & Agendamento Automático` -> premium modal on `/hub`
- `Produtos em Alta` -> `/hub/trending`
- `Vendedores em Alta` -> `/hub/sellers`
- `Validação de Produto` -> `/hub/validate`
- `Análise de Produto` -> `/hub/calculator`
- `Editor de Vídeo` -> `/editor`

## Product Areas

### 1. Hub

Route: `/hub`

Purpose in the working UI:

- serves as the product dashboard
- introduces the main value proposition
- acts as the launcher for the core tools

Observed behavior:

- hero area rotates between different product messages
- primary CTA is `Criar Vídeo`
- tool cards are the real information architecture of the product

Visual notes:

- dark, premium, glow-heavy interface
- rounded cards with soft gradients and colored edge treatments
- mobile-first composition even on desktop
- floating bottom dock is the primary navigation anchor

Assessment:

- the hub makes the product feel broader than the current landing strategy copy likely communicates
- the tool-card stack is clear in-app, but it also fragments the story if mirrored too literally on the landing page

### 2. Studio

Route: `/studio`

Purpose in the working UI:

- main creation surface for product-to-video generation

Observed behavior:

- user can choose from trending products or create a custom flow
- custom flow supports a product link/input plus optional description
- config surface includes avatar, engine mode, duration, and token cost
- visible engine/duration options observed:
  - `Comparar`
  - `Fast`
  - `Quality`
  - `8s = 175 tokens`
  - `16s = 350 tokens`
- queue panel exists in the same screen
- account tested had `0` tokens, so generation was not executed

Visual notes:

- strongest screen in terms of “this is the real product”
- horizontal product rail at top creates immediate proof
- creation form is split into a short 3-step setup
- bottom dock remains visible, reinforcing app-shell continuity

Assessment:

- this is a better homepage proof asset than abstract landing-page cards
- the actual workflow is product-first and operational, not “AI creativity” first

### 3. Produtos em Alta

Route: `/hub/trending`

Purpose in the working UI:

- discovery surface for high-performing TikTok Shop products

Observed behavior:

- category filters present:
  - `Todos`
  - `Futebol`
  - `Decoração`
  - `Casa`
  - `Tech`
  - `Acessórios`
  - `Roupas Masculinas`
  - `Roupas Femininas`
  - `Skincare`
  - `Fitness`
  - `Pets`
- sort controls present:
  - `Mais vendidos`
  - `Maior desconto`
  - `Menor preço`
  - `Maior preço`
- tested `Skincare` + `Maior desconto`
- each product card shows price, original price, discount, sales volume, merchant, and `Gerar Vídeo`
- `Gerar Vídeo` opens an inline quick-choice state with `Fast`, `Quality`, and `Confirmar`

Visual notes:

- commerce-first grid with strong visual proof
- easier to understand than a generic “feature card” section
- feels very promotable for landing-page demos

Assessment:

- this is a major differentiator and should be one of the homepage’s clearest proof sections

### 4. Vendedores em Alta

Routes:

- `/hub/sellers`
- seller detail route tested: `/hub/sellers/7494354632521713166`

Purpose in the working UI:

- curated seller discovery layer
- seller drill-down reveals product inventory and per-product video actions

Observed behavior:

- seller directory shows store identity and product count
- seller detail shows real product cards with pricing, sales counts, and `Gerar Vídeo`
- first fast capture showed loading skeletons
- longer wait loaded the actual seller product list correctly

Visual notes:

- consistent with the dark commerce-app style
- seller pages feel more catalog-like than the hub
- detail page remains product-rich and concrete once loaded

Assessment:

- this strengthens the positioning that Genfy is connected to TikTok Shop opportunity discovery, not only content generation

### 5. Validação de Produto

Route: `/hub/validate`

Test status: tested with a real TikTok Shop product link

Sample product used:

- `https://www.tiktok.com/shop/pdp/1731589216128173331`

Purpose in the working UI:

- quick go/no-go validation before creating videos

Observed output:

- product summary card
- `GENFY SCORE`
- validation status (`Validado`)
- factor breakdowns:
  - `Demanda`
  - `Segurança Operacional`
  - `Prova Social`
  - `Força de Conteúdo`
- seller information
- related-video section with real examples
- `Gerar Vídeo` CTA from the validated product

Visual notes:

- one of the clearest value screens in the product
- score ring and factor cards make the tool feel opinionated and useful
- strong candidate for landing-page proof because it translates raw marketplace data into decision support

Assessment:

- this is central to the “validate before creating” story in the strategy document

### 6. Análise de Produto

Route: `/hub/calculator`

Test status: tested with the same real TikTok Shop product link

Purpose in the working UI:

- deeper economic/product intelligence screen

Observed output:

- product overview
- merchant identity
- price, original price, rating, review count
- sold units
- stock
- historical revenue
- seller info
- creator/video section

Important nuance:

- this screen explicitly frames some metrics as approximations
- for the tested product, creator/video data came back empty here even though the validation tool showed related videos

Visual notes:

- cleaner and more analytical than the validation page
- feels more “decision tool” than “marketing page”
- lower emotional impact than validation, but stronger business depth

Assessment:

- this supports the strategy’s “analyze margins, commission, and opportunity before investing” narrative

### 7. Postagem & Agendamento Automático

Surface: premium modal opened from `/hub`

Purpose in the working UI:

- gated distribution/operations layer

Observed behavior:

- opens a modal, not a route
- messaging highlights:
  - automatic posting from Genfy
  - scheduled publishing
  - bulk posting
- CTA is `Solicitar acesso`
- access is manually reviewed

Visual notes:

- visually polished premium-modal treatment
- clearly framed as an advanced capability, not a default entry path

Assessment:

- should appear later in the marketing story, after the core workflow is understood

### 8. Editor de Vídeo

Route: `/editor`

Purpose in the working UI:

- edit videos after they exist in the gallery

Observed behavior:

- empty-state screen in the tested account
- asks user to select a gallery video to edit
- `Criar Novo Vídeo` CTA present
- `Enviar vídeo (em breve)` is visible but disabled/unfinished

Visual notes:

- much more minimal than the rest of the app
- loses the persistent bottom dock visible elsewhere
- feels like a secondary tool rather than a central product proof surface

Assessment:

- meaningful feature, but not a homepage-leading differentiator

### 9. Gallery

Route: `/gallery`

Purpose in the working UI:

- collection and status management for generated assets

Observed behavior:

- filter tabs:
  - `Todos`
  - `Concluído`
  - `Falhou`
  - `Em Progresso`
- empty state in tested account
- `Criar Novo Vídeo` CTA present

Visual notes:

- clean empty-state composition
- useful for communicating production workflow, but weak as proof if shown without filled examples

Assessment:

- best marketed as part of the workflow after proof of creation, not before it

### 10. Social / Community

Route: `/social/community`

Purpose in the working UI:

- community feed for questions, tips, and app feedback

Observed behavior:

- sort tabs:
  - `Popular`
  - `Recentes`
  - `Discutidos`
- filter drawer with tags such as:
  - `Tutorial`
  - `Resultado`
  - `Dica`
  - `Produto`
  - `Review`
  - `Tendência`
  - `Ajuda`
  - `Promoção`
  - `Inspiração`
  - `Negócio`
  - `Erro`
  - `Novidade`
- feed shows post cards with reactions and share/repost affordances
- social compose field is visible but was not submitted

Visual notes:

- denser and more utilitarian than the commerce/product screens
- feels like a support/community layer, not a core hero feature
- still consistent with the dark shell and floating dock

Assessment:

- should not lead the landing narrative
- can support trust/community later in the page or on a secondary page

### 11. Profile / Account

Route: `/profile`

Purpose in the working UI:

- account overview, connections, purchases, support, and settings

Observed behavior:

- account summary shows token balance, generated count, used tokens
- TikTok connection CTA works and routes to TikTok OAuth login
- edit profile modal works
- support modal works
- token packs are visible
- affiliate block is visible

Visual notes:

- profile keeps the same premium shell
- support and edit-profile modals are functional but more basic than the polished commerce surfaces

Assessment:

- profile proves there is a real account system and monetization model
- not a landing-page lead, but useful for pricing/onboarding/support clarity

## Visual System Summary

The live product’s visual identity is stronger and more distinctive than a typical generic AI SaaS.

Recurring visual traits:

- near-black background
- large soft glows in blue, green, orange, and purple
- rounded glassy cards
- floating bottom dock with frosted translucent treatment
- bold section titles with colored accent words
- product-heavy layouts rather than abstract empty shapes
- mobile-app feel even when viewed on desktop

What visually works well:

- product cards make the app feel concrete
- validation and analysis screens look useful, not decorative
- color accents help each product area feel distinct
- the dock makes the product feel like an app, not a website

What visually feels weaker or less consistent:

- some screens feel much richer than others
- the editor is noticeably barer than the rest of the product
- support/help content is visually plainer and less product-native
- mixed PT/EN labels slightly break polish
- some routes rely on loading skeletons long enough to weaken confidence

## Inconsistencies To Fix

These are places where the working UI contradicts helper text, support copy, or another working surface.

### A. `Sobre o Genfy` / support modal is stale

Observed in profile support modal:

- says the flow is:
  - `Envie um print de produto`
  - `Adicione instruções`
  - `Escolha o motor`
  - `Receba vídeo + legenda!`

Why it is inconsistent:

- the current Studio UI is not primarily “print-first”
- the current UI is strongly link-first, product-first, and trending-product-first
- the product now includes discovery, validation, analysis, editing, seller browsing, community, and posting access

Current UI truth:

- Genfy starts from product opportunity and TikTok Shop context
- Genfy supports product discovery and validation before creation
- creation includes engine and duration choices inside a broader workflow

### B. Token FAQ is outdated

Observed in support modal FAQ:

- `1 vídeo = 100 tokens`

Why it is inconsistent:

- live Studio shows `8s = 175 tokens`
- live Studio shows `16s = 350 tokens`

Current UI truth:

- token pricing displayed in the Studio should be treated as correct

### C. “Video + legenda” is too narrow

Observed in support modal:

- implies the main outcome is simply a generated video plus caption

Why it is inconsistent:

- the live UI now spans:
  - discovery
  - seller browsing
  - product validation
  - product analysis
  - video creation
  - editing
  - gallery workflow
  - TikTok connection
  - posting automation access

Current UI truth:

- Genfy is broader than a captioned-video generator

### D. Validation and analysis tools disagree on creator/video evidence

Tested with the same product link.

Validation tool output:

- showed `14` related videos and visible creator/video examples

Analysis tool output:

- showed `VÍDEOS VINCULADOS 0`
- `Nenhum vídeo encontrado`

Why it matters:

- these two tools appear to describe overlapping product evidence, but they do not agree

Current UI truth:

- both surfaces are live, so this is a real cross-tool inconsistency to review

### E. Minor data mismatches between product tools

For the same tested product, small metric differences appeared across surfaces, including counts like sold units and reviews.

Why it matters:

- even if caused by timing or separate snapshots, the user sees inconsistent business data inside the same product

### F. Language consistency is incomplete

Observed mixed labels:

- `Fast`
- `Quality`
- `Open leaderboard`
- `Close`
- `Business`

Why it matters:

- the app defaults to Portuguese in the tested session
- mixed-language UI reduces polish and clarity

Current UI truth:

- the product is bilingual-capable, but the current PT experience is not fully language-consistent

### G. Seller detail perceived as half-loaded on fast pass

Observed behavior:

- first capture showed mostly skeleton cards
- second longer wait showed loaded products

Why it matters:

- the route may be working, but the initial perceived quality is weaker than the finished state

## Landing Implications

The live product supports the strategy theory very strongly.

Best homepage story based on what actually works:

1. discover or import a product
2. validate whether it is worth pursuing
3. create a video from that opportunity
4. manage the content flow and connect to TikTok

Best proof elements to promote:

- trending product discovery
- seller discovery
- validation score
- analysis metrics
- Studio creation flow with token/duration choices

What should be delayed in the landing narrative:

- community/social
- support/help copy
- premium posting access
- token-purchase detail
- editor as a primary differentiator

## What Was Not Fully Executed

- video generation was not submitted because the tested account had zero tokens
- premium posting request was not submitted
- TikTok connection was opened but not completed
- token purchase flow was not completed
- social posting was not submitted

## Recommended Next Step

Use this audit as the factual product baseline, then rewrite the landing around the working workflow:

- product discovery
- product validation
- product-to-video creation
- TikTok Shop relevance
- faster publishing/operations as a secondary layer
