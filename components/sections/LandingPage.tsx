"use client";

import { ArrowRight, Check, ChevronRight, CircleDot } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import { APP_URL } from "@/lib/constants";
import { trackGetStarted, trackHeroCta } from "@/lib/analytics";

const resultCards = [
  ["Cliente Genfy 01", "GMV, base de comissão e comissão estimada.", "/landing/proof/pagueimerreca-metrics.jpeg"],
  ["Cliente Genfy 02", "Volume forte de itens vendidos em operação real.", "/landing/proof/aiqueprecinho-metrics.jpeg"],
  ["Cliente Genfy 03", "Crescimento real com catálogo em movimento.", "/landing/proof/zonadabarganha-metrics.jpeg"],
] as const;

const outputVideos = [
  ["Vídeo criado no Estúdio Genfy", "Produto certo, contexto certo e saída pronta para publicar.", "/landing/videos/genfy-output-1.mp4"],
  ["Estátua de Maria para Vela", "Exemplo real de criativo saindo do fluxo do produto.", "/landing/videos/estatua-maria.mp4"],
  ["Escudo Palmeiras em MDF Verde", "Mais velocidade para transformar oportunidade em conteúdo.", "/landing/videos/escudo-palmeiras.mp4"],
] as const;

const copy = {
  pt: {
    heroEyebrow: "Produtos em alta, validação e criação no mesmo fluxo",
    heroTitle: "Encontre produtos validados e gere vídeos em segundos.",
    heroSubtitle:
      "A Genfy reúne oportunidades em alta, produtos acompanhados pela equipe e criação rápida para você publicar com mais clareza.",
    heroPrimary: "Abrir Genfy",
    heroSecondary: "Ver como funciona",
    heroPoints: [
      "Veja produtos e lojas que já estão chamando atenção",
      "Entenda melhor o produto antes de virar conteúdo",
      "Gere vídeos sem começar tudo do zero",
    ],
    outputsEyebrow: "Vídeos criados com Genfy",
    outputsTitle: "Do produto certo ao vídeo pronto.",
    outputsSubtitle:
      "Você encontra a oportunidade, entende melhor o contexto e transforma isso em conteúdo sem desmontar sua rotina.",
    resultsEyebrow: "Resultados reais",
    resultsTitle: "Clientes usando Genfy para movimentar catálogo e comissão.",
    resultsSubtitle: "Só recortes de resultado real. Sem perfil, sem vitrine, sem número inventado.",
    resultsBadge: "Resultado real",
    flowEyebrow: "Como a Genfy funciona",
    flowTitle: "Encontre, valide e crie no mesmo fluxo.",
    flowSubtitle:
      "Em vez de procurar produto, validar e criar em lugares diferentes, você faz o caminho todo com mais contexto.",
    flow: [
      [
        "1. Produtos em Alta",
        "Encontre o que já merece atenção.",
        "Produtos em Alta te ajuda a partir de algo mais promissor, sem perder tempo caçando produto no escuro.",
        ["Categorias para filtrar mais rápido", "Preço, desconto e vendidos no mesmo card", "Entrada direta para seguir o fluxo"],
        ["/landing/app/trending-mobile.png", "/landing/app/hub-mobile.png"],
      ],
      [
        "2. Validação de Produto",
        "Decida melhor antes de produzir.",
        "A validação te ajuda a ler o produto com mais clareza antes de gastar tempo com roteiro, edição ou postagem.",
        ["Leitura mais clara da oportunidade", "Demanda, oferta e prova social no mesmo lugar", "Referências visuais no mesmo fluxo"],
        ["/landing/app/validation-mobile.png"],
      ],
      [
        "3. Estúdio Genfy",
        "Transforme a oportunidade em vídeo.",
        "Quando o produto faz sentido, o Estúdio entra para acelerar a parte criativa sem quebrar o contexto do que você acabou de analisar.",
        ["Modos de criação no mesmo fluxo", "Duração e custo visíveis antes de gerar", "Editor e galeria no mesmo caminho"],
        ["/landing/app/studio-mobile.png", "/landing/app/editor-mobile.png"],
      ],
      [
        "4. Lojas em Alta",
        "Escalone por loja e catálogo.",
        "Uma loja boa pode render várias ideias. Você entra no catálogo e continua encontrando oportunidades sem voltar para o zero.",
        ["Lojas selecionadas pela equipe", "Catálogo navegável com ação por item", "Mais volume com menos quebra de fluxo"],
        ["/landing/app/sellers-mobile.png", "/landing/app/seller-detail-mobile.png"],
      ],
    ],
    productEyebrow: "O que muda na prática",
    productTitle: "Mais contexto para escolher. Mais agilidade para publicar.",
    productLead:
      "A Genfy encurta o caminho entre encontrar uma oportunidade e colocar um vídeo no ar sem te empurrar para uma tela vazia.",
    productPoints: [
      "Você pode começar por um link, por um produto em alta ou por uma boa loja.",
      "O app mantém o contexto do produto até a parte de criação.",
      "Sua rotina ganha velocidade sem virar um monte de abas soltas.",
    ],
    startEyebrow: "Comece do seu jeito",
    startTitle: "Comece por um link, produto ou loja.",
    startSubtitle: "Cole um link, abra um produto em alta ou entre por uma loja boa. A Genfy organiza o resto.",
    startList: [
      "Começar por um link de produto",
      "Escolher um item em Produtos em Alta",
      "Abrir uma loja e navegar pelo catálogo",
    ],
    startPrimary: "Abrir Genfy agora",
    startSecondary: "Ver resultados reais",
  },
  en: {
    heroEyebrow: "Trending products, validation, and creation in the same flow",
    heroTitle: "Find validated products and generate videos in seconds.",
    heroSubtitle:
      "Genfy brings together rising opportunities, products watched by the team, and fast creation so you can publish with more clarity.",
    heroPrimary: "Open Genfy",
    heroSecondary: "See how it works",
    heroPoints: [
      "See products and stores already getting attention",
      "Understand the product better before it becomes content",
      "Generate videos without starting everything from zero",
    ],
    outputsEyebrow: "Videos made with Genfy",
    outputsTitle: "From the right product to the video ready.",
    outputsSubtitle:
      "You find the opportunity, understand the context, and turn it into content without breaking your routine.",
    resultsEyebrow: "Real results",
    resultsTitle: "Clients using Genfy to move catalog and commission.",
    resultsSubtitle: "Only real result crops. No profiles, no vanity layer, no made-up numbers.",
    resultsBadge: "Real result",
    flowEyebrow: "How Genfy works",
    flowTitle: "Find, validate, and create in one flow.",
    flowSubtitle:
      "Instead of finding products, validating, and creating in different places, you move through the whole path with more context.",
    flow: [
      [
        "1. Trending Products",
        "Find what already deserves attention.",
        "Trending Products helps you start from something more promising instead of searching blindly.",
        ["Categories to filter faster", "Price, discount, and sold count on the same card", "Direct entry to continue the flow"],
        ["/landing/app/trending-mobile.png", "/landing/app/hub-mobile.png"],
      ],
      [
        "2. Product Validation",
        "Decide better before producing.",
        "Validation helps you read the product more clearly before spending time on scripting, editing, or posting.",
        ["Clearer read of the opportunity", "Demand, offer, and social proof in one place", "Visual references in the same flow"],
        ["/landing/app/validation-mobile.png"],
      ],
      [
        "3. Genfy Studio",
        "Turn the opportunity into video.",
        "When the product makes sense, Studio speeds up the creative part without breaking the context you just analyzed.",
        ["Creation modes in the same flow", "Duration and cost visible before generating", "Editor and gallery in the same path"],
        ["/landing/app/studio-mobile.png", "/landing/app/editor-mobile.png"],
      ],
      [
        "4. Trending Stores",
        "Scale through stores and catalog.",
        "One strong store can unlock multiple ideas. You move through the catalog and keep finding opportunities without going back to zero.",
        ["Stores selected by the team", "Navigable catalog with action per item", "More volume with less friction"],
        ["/landing/app/sellers-mobile.png", "/landing/app/seller-detail-mobile.png"],
      ],
    ],
    productEyebrow: "What changes in practice",
    productTitle: "More context to choose. More speed to publish.",
    productLead:
      "Genfy shortens the path between finding an opportunity and putting a video out without throwing you into an empty screen.",
    productPoints: [
      "You can start from a link, a trending product, or a strong store.",
      "The app keeps the product context all the way to creation.",
      "Your routine gets faster without turning into a pile of open tabs.",
    ],
    startEyebrow: "Start your way",
    startTitle: "Start from a link, product, or store.",
    startSubtitle: "Paste a link, open a trending product, or start from a strong store. Genfy organizes the rest.",
    startList: [
      "Start from a product link",
      "Choose an item inside Trending Products",
      "Open a store and browse the catalog",
    ],
    startPrimary: "Open Genfy now",
    startSecondary: "See real results",
  },
} as const;

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-tx2">
      <CircleDot className="h-3.5 w-3.5 text-[#62d2ff]" />
      {children}
    </div>
  );
}

function PhoneShot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[28px] border border-white/10 bg-[#090b10] shadow-[0_28px_70px_rgba(0,0,0,0.34)] ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover object-top" loading="lazy" />
    </div>
  );
}

export function LandingPage() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <main className="relative z-10 overflow-hidden">
      <section className="relative px-6 pb-16 pt-24 md:px-8 md:pb-24 md:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_18%_20%,rgba(255,208,86,0.16),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(86,190,255,0.14),transparent_24%),radial-gradient(circle_at_55%_62%,rgba(90,111,255,0.12),transparent_28%)]"
        />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14 lg:items-center">
          <RevealOnScroll>
            <div className="max-w-[32rem]">
              <SectionEyebrow>{c.heroEyebrow}</SectionEyebrow>
              <h1 className="mt-6 max-w-[13.5ch] text-balance text-[2.18rem] font-medium leading-[0.95] tracking-[-0.045em] text-tx sm:mt-7 sm:max-w-[10.8ch] sm:text-[4rem] sm:font-medium sm:leading-[0.92] sm:tracking-[-0.055em] lg:text-[4.75rem]">
                {c.heroTitle}
              </h1>
              <p className="mt-5 max-w-[30rem] text-[15px] leading-8 text-tx2 sm:mt-6 sm:text-lg">{c.heroSubtitle}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent px-7 py-4 text-sm"
                onClick={() => {
                  trackHeroCta("start_creating_free");
                  trackGetStarted("hero");
                }}
              >
                {c.heroPrimary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#workflow"
                className="inline-flex min-h-[48px] items-center justify-center rounded-[14px] border border-white/12 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-tx transition-colors hover:bg-white/[0.06]"
                onClick={() => trackHeroCta("explore_tools")}
              >
                {c.heroSecondary}
              </a>
            </div>

            <div className="hidden">
              <div
                aria-hidden
                className="absolute inset-x-0 top-[8%] h-[72%] bg-[radial-gradient(circle_at_60%_40%,rgba(86,190,255,0.16),transparent_45%),radial-gradient(circle_at_28%_70%,rgba(255,208,86,0.12),transparent_35%)] blur-2xl"
              />
              <div className="absolute left-[2%] top-[16%] w-[30%]">
                <PhoneShot src="/landing/app/studio-mobile.png" alt="Estúdio Genfy" className="aspect-[9/18.8] rounded-[22px]" />
              </div>
              <div className="absolute bottom-0 left-[10%] w-[34%]">
                <PhoneShot src="/landing/app/trending-mobile.png" alt="Produtos em alta Genfy" className="aspect-[9/18.8] rounded-[22px]" />
              </div>
              <div className="absolute right-0 top-0 w-[56%]">
                <PhoneShot src="/landing/app/validation-mobile.png" alt="Validação de produto Genfy" className="aspect-[9/18] rounded-[24px]" />
              </div>
            </div>

            <div className="mt-10 hidden gap-3 sm:grid">
              {c.heroPoints.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-tx2">
                  <span className="mt-2 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                    <Check className="h-3.5 w-3.5 text-[#8be4c8]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="lg:hidden" delay={80}>
            <div className="relative h-[410px]">
              <div
                aria-hidden
                className="absolute inset-x-0 top-[10%] h-[70%] bg-[radial-gradient(circle_at_68%_34%,rgba(86,190,255,0.15),transparent_42%),radial-gradient(circle_at_26%_66%,rgba(255,208,86,0.11),transparent_32%)] blur-2xl"
              />
              <div className="absolute left-[2%] top-[16%] w-[29%]">
                <PhoneShot src="/landing/app/studio-mobile.png" alt="Estúdio Genfy" className="aspect-[9/18.8] rounded-[22px]" />
              </div>
              <div className="absolute bottom-0 left-[9%] w-[34%]">
                <PhoneShot src="/landing/app/trending-mobile.png" alt="Produtos em alta Genfy" className="aspect-[9/18.8] rounded-[22px]" />
              </div>
              <div className="absolute right-[2%] top-0 w-[56%]">
                <PhoneShot src="/landing/app/validation-mobile.png" alt="Validação de produto Genfy" className="aspect-[9/18] rounded-[24px]" />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="relative hidden min-h-[820px] lg:block" delay={80}>
            <div className="absolute left-[4%] top-[2%] w-[72%] rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_38px_100px_rgba(0,0,0,0.45)]">
              <PhoneShot src="/landing/app/validation-mobile.png" alt="Validação de produto Genfy" className="aspect-[9/17.5]" />
            </div>
            <div className="absolute -bottom-1 left-0 w-[34%]">
              <PhoneShot src="/landing/app/trending-mobile.png" alt="Produtos em alta Genfy" className="aspect-[9/19]" />
            </div>
            <div className="absolute bottom-[7%] right-0 w-[36%]">
              <PhoneShot src="/landing/app/studio-mobile.png" alt="Estúdio Genfy" className="aspect-[9/19]" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="px-6 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="max-w-3xl">
            <SectionEyebrow>{c.outputsEyebrow}</SectionEyebrow>
            <h2 className="mt-6 max-w-[14ch] text-[2.45rem] font-semibold leading-[0.98] tracking-[-0.06em] text-tx sm:max-w-[16ch] sm:text-[3.45rem] md:text-[4.25rem]">
              {c.outputsTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-tx2">{c.outputsSubtitle}</p>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {outputVideos.map(([title, subtitle, src], index) => (
              <RevealOnScroll key={src} delay={index * 80}>
                <article className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
                  <div className="aspect-[9/16] overflow-hidden border-b border-white/8 bg-black">
                    <video className="h-full w-full object-cover object-center" src={src} autoPlay muted loop playsInline preload="metadata" />
                  </div>
                  <div className="flex min-h-[152px] flex-col justify-between space-y-4 p-6">
                    <p className="max-w-none text-[1.18rem] font-semibold leading-[1.1] text-tx md:text-[1.32rem]">{title}</p>
                    <p className="max-w-[30ch] text-[15px] leading-7 text-tx2 md:text-base">{subtitle}</p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="px-6 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="max-w-3xl">
            <SectionEyebrow>{c.resultsEyebrow}</SectionEyebrow>
            <h2 className="mt-6 max-w-[17ch] text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-tx sm:max-w-[18ch] md:text-5xl">
              {c.resultsTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-tx2">{c.resultsSubtitle}</p>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {resultCards.map(([label, meta, image], index) => (
              <RevealOnScroll key={image} delay={index * 80}>
                <article className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
                  <div className="overflow-hidden border-b border-white/8 bg-[#f5f5f2] p-3">
                    <img src={image} alt={`${label} resultados`} className="h-full w-full object-contain object-top" loading="lazy" />
                  </div>
                  <div className="space-y-3 p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-lg font-semibold text-tx">{label}</p>
                        <p className="mt-1 max-w-[28ch] text-sm leading-6 text-tx2">{meta}</p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-tx2">
                        {c.resultsBadge}
                      </div>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="px-6 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="max-w-3xl">
            <SectionEyebrow>{c.flowEyebrow}</SectionEyebrow>
            <h2 className="mt-6 max-w-[14ch] text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-tx md:max-w-[13ch] md:text-5xl">
              {c.flowTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-tx2">{c.flowSubtitle}</p>
          </RevealOnScroll>

          <div className="mt-14 space-y-16">
            {c.flow.map(([kicker, title, body, bullets, images], index) => {
              const reverse = index % 2 === 1;

              return (
                <div key={title} className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
                  <RevealOnScroll className={reverse ? "lg:order-2" : ""}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9ecfff]">{kicker}</p>
                    <h3 className="mt-4 max-w-[14ch] text-3xl font-semibold leading-tight tracking-[-0.04em] text-tx md:text-4xl">
                      {title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-tx2">{body}</p>
                    <div className="mt-8 space-y-3">
                      {bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3 text-sm leading-7 text-tx2">
                          <span className="mt-2 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                            <ChevronRight className="h-3.5 w-3.5 text-[#72d8ff]" />
                          </span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </RevealOnScroll>

                  <RevealOnScroll className={reverse ? "lg:order-1" : ""} delay={80}>
                    <div className={`grid gap-4 ${images.length > 1 ? "sm:grid-cols-2" : ""}`}>
                      {images.map((image) => (
                        <PhoneShot
                          key={image}
                          src={image}
                          alt={title}
                          className={`aspect-[9/19] ${images.length === 1 ? "mx-auto max-w-[420px]" : ""}`}
                        />
                      ))}
                    </div>
                  </RevealOnScroll>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="product" className="px-6 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,214,102,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(105,212,255,0.14),transparent_30%),linear-gradient(145deg,rgba(10,12,18,0.96),rgba(12,18,31,0.96))] p-8 md:p-12">
          <RevealOnScroll className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center">
            <div>
              <SectionEyebrow>{c.productEyebrow}</SectionEyebrow>
              <h2 className="mt-6 max-w-[12ch] text-4xl font-semibold leading-tight tracking-[-0.05em] text-tx md:text-5xl">
                {c.productTitle}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-tx2">{c.productLead}</p>

              <div className="mt-8 space-y-4">
                {c.productPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-white/8 pb-4 text-sm leading-7 text-tx2 last:border-b-0 last:pb-0">
                    <span className="mt-2 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                      <Check className="h-3.5 w-3.5 text-[#8be4c8]" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[0.86fr_1.14fr]">
              <PhoneShot src="/landing/app/hub-mobile.png" alt="Hub Genfy" className="aspect-[9/19]" />
              <PhoneShot src="/landing/app/seller-detail-mobile.png" alt="Catálogo de loja na Genfy" className="aspect-[9/19]" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="start" className="px-6 pb-28 pt-10 md:px-8 md:pb-36">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-end">
            <RevealOnScroll>
              <SectionEyebrow>{c.startEyebrow}</SectionEyebrow>
              <h2 className="mt-6 max-w-[13ch] text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-tx md:max-w-[12ch] md:text-5xl">
                {c.startTitle}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-tx2">{c.startSubtitle}</p>

              <div className="mt-8 space-y-3">
                {c.startList.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-[20px] border border-white/8 bg-black/20 px-4 py-4 text-sm text-tx2">
                    <ChevronRight className="h-4 w-4 shrink-0 text-[#72d8ff]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent px-7 py-4 text-sm"
                  onClick={() => trackGetStarted("final_cta")}
                >
                  {c.startPrimary}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#results"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-[14px] border border-white/12 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-tx transition-colors hover:bg-white/[0.06]"
                >
                  {c.startSecondary}
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="grid gap-4 sm:grid-cols-2">
                <PhoneShot src="/landing/app/validation-mobile.png" alt="Validação de produto Genfy" className="aspect-[9/19]" />
                <PhoneShot src="/landing/app/studio-mobile.png" alt="Estúdio Genfy" className="aspect-[9/19]" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
