"use client";

import { GenfyLogo } from "@/components/app/GenfyLogo";
import { useLang } from "@/contexts/LangContext";
import { SOCIAL_LINKS, APP_URL } from "@/lib/constants";
import { Instagram, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";
import { trackGetStarted } from "@/lib/analytics";

export function Footer() {
  const { lang } = useLang();

  const content =
    lang === "pt"
      ? {
          tagline:
            "A Genfy reúne produtos em alta, validação e criação para transformar oportunidade em vídeo com mais clareza.",
          labels: {
            home: ["Resultados", "Como funciona", "App", "Começar"],
            tools: "Ferramentas",
            legal: ["Política de Privacidade", "Termos de Serviço"],
          },
          toolLinks: [
            { label: "Produtos em Alta", href: "/tools/trending-products" },
            { label: "Lojas em Alta", href: "/tools/trending-sellers" },
            { label: "Validação de Produto", href: "/tools/product-validation" },
            { label: "Editor de Vídeo", href: `${APP_URL}/editor` },
          ],
          contact: "Falar com a equipe",
          launch: "Abrir app",
          copyright: "Todos os direitos reservados.",
        }
      : {
          tagline:
            "Genfy brings together trending products, validation, and creation to turn opportunity into video with more clarity.",
          labels: {
            home: ["Results", "How it works", "Product", "Start"],
            tools: "Tools",
            legal: ["Privacy Policy", "Terms of Service"],
          },
          toolLinks: [
            { label: "Trending Products", href: "/tools/trending-products" },
            { label: "Trending Stores", href: "/tools/trending-sellers" },
            { label: "Product Validation", href: "/tools/product-validation" },
            { label: "Video Editor", href: `${APP_URL}/editor` },
          ],
          contact: "Talk to the team",
          launch: "Open app",
          copyright: "All rights reserved.",
        };

  return (
    <footer className="relative z-10 border-t border-bd bg-black/10">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <GenfyLogo size={24} />
              <span className="text-xs font-semibold uppercase tracking-[0.42em] text-tx">GENFY</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-tx2">{content.tagline}</p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mt-6 inline-flex px-5 py-3 text-[13px]"
              onClick={() => trackGetStarted("footer")}
            >
              {content.launch}
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-tx3">Home</h4>
              <div className="mt-4 flex flex-col gap-3">
                {content.labels.home.map((label) => (
                  <span key={label} className="text-sm text-tx3">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-tx3">{content.labels.tools}</h4>
              <div className="mt-4 flex flex-col gap-3">
                {content.toolLinks.map((link) =>
                  link.href ? (
                    <a key={link.label} href={link.href} className="text-sm text-tx2 transition-colors hover:text-tx">
                      {link.label}
                    </a>
                  ) : (
                    <span key={link.label} className="text-sm text-tx3">
                      {link.label}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-tx3">Legal</h4>
              <div className="mt-4 flex flex-col gap-3">
                {content.labels.legal.map((label) => (
                  <span key={label} className="text-sm text-tx3">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="accent-line my-8" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-tx3 transition-colors hover:text-tx"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-tx3 transition-colors hover:text-tx"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-tx3 transition-colors hover:text-tx"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-tx3 transition-colors hover:text-tx"
              aria-label="X"
            >
              <Twitter size={16} />
            </a>
            <a href="mailto:support@genfy.studio" className="inline-flex items-center gap-2 text-sm text-tx2 transition-colors hover:text-tx">
              <Mail size={14} />
              {content.contact}
            </a>
          </div>

          <p className="text-sm text-tx3">
            &copy; {new Date().getFullYear()} Genfy. {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
