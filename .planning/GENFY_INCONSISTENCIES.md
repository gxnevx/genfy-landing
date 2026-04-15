# Genfy Inconsistencies

Date: 2026-04-11

Rule for this checklist: the working live UI is correct. Any stale helper copy, outdated modal text, or conflicting secondary description should be updated to match the current product.

## High-Priority Mismatches

### 1. Support modal flow is outdated

Location:

- `/profile` -> `Ajuda & Suporte`

Currently says:

- `Envie um print de produto`
- `Adicione instruções`
- `Escolha o motor`
- `Receba vídeo + legenda!`

Why it is wrong:

- the current product is not just screenshot-in, video-out
- the live UI is centered on product discovery, validation, analysis, and product-based video creation

What should win:

- the current working Studio + discovery + validation flow

### 2. Token FAQ is outdated

Location:

- `/profile` -> `Ajuda & Suporte`

Currently says:

- `1 vídeo = 100 tokens`

Current UI says:

- `8s = 175 tokens`
- `16s = 350 tokens`

What should win:

- the current Studio token pricing

### 3. Product scope described too narrowly

Location:

- `/profile` -> `Ajuda & Suporte`

Currently implies:

- Genfy mainly gives you `vídeo + legenda`

Current UI actually includes:

- trending products
- top sellers
- product validation
- product analysis
- Studio creation
- editor
- gallery
- TikTok connection
- posting automation access

What should win:

- the broader current product scope shown in the working UI

### 4. Validation and analysis disagree on creator/video data

Tested with the same product link:

- `https://www.tiktok.com/shop/pdp/1731589216128173331`

Validation tool showed:

- `14` related videos and visible creator examples

Analysis tool showed:

- `VÍDEOS VINCULADOS 0`
- `Nenhum vídeo encontrado`

What should be checked:

- whether these two tools use different data sources
- whether one of them is stale or failing
- whether the labels should be clarified if they measure different things

### 5. Minor metric mismatch between product tools

Same tested product showed slightly different counts across validation and analysis surfaces.

Examples observed:

- sold units differed slightly
- review counts differed slightly

What should be checked:

- cache timing
- normalization/rounding
- whether both tools are reading the same snapshot

### 6. Portuguese UI still has mixed English labels

Examples observed:

- `Fast`
- `Quality`
- `Open leaderboard`
- `Close`
- `Business`

What should win:

- whichever language the current user session is set to

### 7. Seller detail can look broken on first impression

Location:

- `/hub/sellers/...`

Observed behavior:

- first fast capture showed skeleton cards
- longer wait loaded the products correctly

What should be checked:

- perceived performance
- loading feedback quality
- whether cards can render progressively with clearer placeholders
