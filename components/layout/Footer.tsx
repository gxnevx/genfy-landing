"use client";

import type { ReactNode } from "react";
import { GenfyLogo } from "@/components/app/GenfyLogo";
import { useLang } from "@/contexts/LangContext";
import { SOCIAL_LINKS, APP_URL } from "@/lib/constants";
import { Instagram, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { trackGetStarted } from "@/lib/analytics";

export function Footer() {
  const { lang } = useLang();

  const content =
    lang === "pt"
      ? {
          tagline:
            "O Genfy reúne produto, score e vídeo para transformar oportunidade em criativo com mais velocidade.",
          homeLinks: [
            { label: "Resultados", href: "#dlp-results" },
            { label: "Como funciona", href: "#dlp-cycle" },
            { label: "Recursos", href: "#dlp-features" },
            { label: "Planos", href: "#dlp-plans" },
          ],
          toolLinks: [
            { label: "Produtos em alta", href: "/tools/trending-products" },
            { label: "Lojas em alta", href: "/tools/trending-sellers" },
            { label: "Validação de produto", href: "/tools/product-validation" },
          ],
          legalLinks: [
            { label: "Política de Privacidade", href: "/privacy" },
            { label: "Termos de Serviço", href: "/terms" },
          ],
          launch: "Abrir o Genfy",
          rights: "Todos os direitos reservados.",
        }
      : {
          tagline:
            "Genfy connects product, score, and video to turn opportunity into creative faster.",
          homeLinks: [
            { label: "Results", href: "#dlp-results" },
            { label: "How it works", href: "#dlp-cycle" },
            { label: "Features", href: "#dlp-features" },
            { label: "Pricing", href: "#dlp-plans" },
          ],
          toolLinks: [
            { label: "Trending products", href: "/tools/trending-products" },
            { label: "Trending stores", href: "/tools/trending-sellers" },
            { label: "Product validation", href: "/tools/product-validation" },
          ],
          legalLinks: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
          ],
          launch: "Open Genfy",
          rights: "All rights reserved.",
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
            <FooterColumn title="Home" links={content.homeLinks} />
            <FooterColumn title={lang === "pt" ? "Ferramentas" : "Tools"} links={content.toolLinks} />
            <FooterColumn title="Legal" links={content.legalLinks} />
          </div>
        </div>

        <div className="accent-line my-8" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram">
              <Instagram size={16} />
            </SocialIcon>
            <SocialIcon href={SOCIAL_LINKS.linkedin} label="LinkedIn">
              <Linkedin size={16} />
            </SocialIcon>
            <SocialIcon href={SOCIAL_LINKS.whatsapp} label="WhatsApp Community">
              <MessageCircle size={16} />
            </SocialIcon>
            <SocialIcon href={SOCIAL_LINKS.twitter} label="X / Twitter">
              <Twitter size={16} />
            </SocialIcon>
          </div>
          <p className="text-xs text-tx3">© 2026 Genfy. {content.rights}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-tx3">{title}</h4>
      <div className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="text-sm text-tx2 transition-colors hover:text-tx">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-tx3 transition-colors hover:text-tx"
      aria-label={label}
    >
      {children}
    </a>
  );
}
