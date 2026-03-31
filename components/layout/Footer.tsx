"use client";

import { GenfyLogo } from "@/components/app/GenfyLogo";
import { useLang } from "@/contexts/LangContext";
import { SOCIAL_LINKS, APP_URL } from "@/lib/constants";
import { Instagram, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative z-10 border-t border-bd mt-0">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <GenfyLogo size={24} />
              <span className="text-tx font-semibold text-xs tracking-[8px] uppercase">GENFY</span>
            </div>
            <p className="text-tx3 text-xs leading-relaxed">{t.footer_tagline}</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-tx text-[11px] font-semibold tracking-[1px] uppercase mb-4">{t.footer_product}</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#models" className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_engines}</a>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_launchApp}</a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-tx text-[11px] font-semibold tracking-[1px] uppercase mb-4">{t.footer_tools}</h4>
            <div className="flex flex-col gap-2.5">
              <a href="/tools/trending-products" className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_trendingProducts}</a>
              <a href="/tools/trending-sellers" className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_trendingSellers}</a>
              <a href="/tools/product-validation" className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_productValidation}</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-tx text-[11px] font-semibold tracking-[1px] uppercase mb-4">{t.footer_legal}</h4>
            <div className="flex flex-col gap-2.5">
              <a href="/privacy" className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_privacy}</a>
              <a href="/terms"   className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_terms}</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-tx text-[11px] font-semibold tracking-[1px] uppercase mb-4">{t.footer_connect}</h4>
            <div className="flex gap-3 mb-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-pill glass-card text-tx3 hover:text-ac transition-colors cursor-pointer" aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-pill glass-card text-tx3 hover:text-ac transition-colors cursor-pointer" aria-label="LinkedIn">
                <Linkedin size={15} />
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-pill glass-card text-tx3 hover:text-green-400 transition-colors cursor-pointer" aria-label="WhatsApp Community">
                <MessageCircle size={15} />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-pill glass-card text-tx3 hover:text-ac transition-colors cursor-pointer" aria-label="X / Twitter">
                <Twitter size={15} />
              </a>
            </div>
            <a
              href="mailto:support@genfy.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-tx3 text-xs hover:text-ac transition-colors"
            >
              <Mail size={13} />
              {t.footer_contact}
            </a>
          </div>
        </div>

        <div className="accent-line mt-10 mb-6" />
        <p className="text-tx3 text-[11px] text-center">
          &copy; {new Date().getFullYear()} Genfy. {t.footer_copyright}
        </p>
      </div>
    </footer>
  );
}
