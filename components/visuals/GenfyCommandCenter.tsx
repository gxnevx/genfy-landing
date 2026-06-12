import { BadgeCheck, Gauge, ImagePlus, PackageCheck, PlayCircle, Scissors } from "lucide-react";
import { productRows } from "@/data/landing";
import { MockupFrame } from "@/components/visuals/MockupFrame";

type CommandCenterLang = "pt" | "en";

const copy = {
  pt: {
    label: "Central Genfy",
    feedTitle: "Produtos em alta",
    feedSub: "TikTok Shop Brasil",
    sold: "vendidos",
    score: "Score",
    scoreText: "Priorize produtos com demanda e prova social.",
    studio: "Studio IA",
    studioText: "Imagem, prompt e vídeo vertical em um só fluxo.",
    draft: "Rascunho",
    draftText: "Legenda e link do produto prontos para revisão.",
    editor: "Editor",
    editorText: "Corte, texto, música e exportação sem sair do Genfy.",
  },
  en: {
    label: "Genfy center",
    feedTitle: "Trending products",
    feedSub: "TikTok Shop Brazil",
    sold: "sold",
    score: "Score",
    scoreText: "Prioritize products with demand and social proof.",
    studio: "AI Studio",
    studioText: "Image, prompt, and vertical video in one flow.",
    draft: "Draft",
    draftText: "Caption and product link ready for review.",
    editor: "Editor",
    editorText: "Trim, text, music, and export without leaving Genfy.",
  },
} as const;

export function GenfyCommandCenter({ lang }: { lang: CommandCenterLang }) {
  const t = copy[lang];

  return (
    <MockupFrame className="command-center command-center-clean" label={t.label}>
      <div className="command-center-layout">
        <div className="command-panel command-products">
          <div className="command-panel-title">
            <PackageCheck size={17} />
            <div>
              <strong>{t.feedTitle}</strong>
              <span>{t.feedSub}</span>
            </div>
          </div>
          <div className="command-product-list">
            {productRows.map((row) => (
              <div key={row.product} className="command-product-row">
                <div>
                  <strong>{row.product}</strong>
                  <span>{row.sold} {t.sold}</span>
                </div>
                <b>{row.score}</b>
              </div>
            ))}
          </div>
        </div>

        <div className="command-side-stack">
          {[
            { icon: Gauge, title: t.score, body: t.scoreText, tone: "blue", value: "91" },
            { icon: ImagePlus, title: t.studio, body: t.studioText, tone: "cyan", value: "9:16" },
            { icon: BadgeCheck, title: t.draft, body: t.draftText, tone: "green", value: "OK" },
            { icon: Scissors, title: t.editor, body: t.editorText, tone: "amber", value: "HD" },
          ].map((item) => (
            <article key={item.title} className={`command-mini-card command-${item.tone}`}>
              <item.icon size={16} />
              <div>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </div>
              <b>{item.value}</b>
            </article>
          ))}
        </div>

        <div className="command-progress">
          {[32, 54, 71, 88].map((width, index) => (
            <span key={width} style={{ "--w": `${width}%`, "--i": index } as React.CSSProperties} />
          ))}
          <div>
            <PlayCircle size={16} />
            {lang === "pt" ? "Vídeo sendo gerado" : "Video rendering"}
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}
