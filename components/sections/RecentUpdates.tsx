"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import { GitBranch, ExternalLink } from "lucide-react";

interface ReleaseNote {
  version: string;
  date: string;
  title_en: string;
  title_pt: string;
  items_en: string[];
  items_pt: string[];
}

const UPDATES: ReleaseNote[] = [
  {
    version: "v1.4.0",
    date: "2026-03-05",
    title_en: "VEO 3.1 Engine Support",
    title_pt: "Suporte ao Motor VEO 3.1",
    items_en: [
      "Added Vidgo VEO 3.1 as a new video generation engine",
      "Improved error handling for all video providers",
      "Better task loss detection for Kie.ai engine",
    ],
    items_pt: [
      "Adicionado Vidgo VEO 3.1 como novo motor de geração de vídeo",
      "Melhoria no tratamento de erros para todos os provedores",
      "Melhor detecção de perda de tarefa no motor Kie.ai",
    ],
  },
  {
    version: "v1.3.0",
    date: "2026-02-20",
    title_en: "Token System Overhaul",
    title_pt: "Reformulação do Sistema de Tokens",
    items_en: [
      "New atomic token deduction via RPC",
      "Automatic refund on generation failure",
      "Admin bypass for unlimited generation",
    ],
    items_pt: [
      "Nova dedução atômica de tokens via RPC",
      "Reembolso automático em falha de geração",
      "Bypass de admin para geração ilimitada",
    ],
  },
  {
    version: "v1.2.0",
    date: "2026-02-10",
    title_en: "Auto Captions & Multi-Engine",
    title_pt: "Legendas Automáticas e Multi-Motor",
    items_en: [
      "AI-generated captions and hashtags for each video",
      "Choose between Sora, VEO, and Telegram engines",
      "Improved product recognition accuracy",
    ],
    items_pt: [
      "Legendas e hashtags geradas por IA para cada vídeo",
      "Escolha entre motores Sora, VEO e Telegram",
      "Melhoria na precisão de reconhecimento de produto",
    ],
  },
];

export function RecentUpdates() {
  const { t, lang } = useLang();

  return (
    <section id="updates" className="relative z-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-4">{t.updates_title}</h2>
            <p className="text-tx2 text-sm max-w-lg mx-auto">{t.updates_subtitle}</p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-4">
          {UPDATES.map((update, i) => {
            const title = lang === "pt" ? update.title_pt : update.title_en;
            const items = lang === "pt" ? update.items_pt : update.items_en;
            return (
              <RevealOnScroll key={update.version} delay={i * 80}>
                <div className="glass-card p-5 group hover:-translate-y-0.5 hover:border-ac/[0.14] transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-md flex items-center justify-center bg-ac-s">
                        <GitBranch size={14} className="text-ac" />
                      </div>
                      <div>
                        <span className="text-tx font-semibold text-sm">{title}</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] font-mono text-ac bg-ac-s px-1.5 py-0.5 rounded-sm">{update.version}</span>
                          <span className="text-tx3 text-[10px]">{update.date}</span>
                        </div>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-tx3 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                  </div>
                  <ul className="flex flex-col gap-1.5 pl-[38px]">
                    {items.map((item) => (
                      <li key={item} className="text-tx2 text-xs flex items-start gap-2">
                        <span className="text-tx3 mt-1.5 block w-1 h-1 rounded-full bg-tx3 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
