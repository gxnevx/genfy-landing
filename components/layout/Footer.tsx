"use client";

import { GenfyLogo } from "@/components/app/GenfyLogo";
import { useLang } from "@/contexts/LangContext";
import { SOCIAL_LINKS, APP_URL } from "@/lib/constants";
import { Instagram, Linkedin } from "lucide-react";

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
              <a href="#features"  className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_features}</a>
              <a href="#models"    className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_models}</a>
              <a href="#pricing"   className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_pricing}</a>
              <a href="#updates"   className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_updates}</a>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_launchApp}</a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-tx text-[11px] font-semibold tracking-[1px] uppercase mb-4">{t.footer_platform}</h4>
            <div className="flex flex-col gap-2.5">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_studio}</a>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_gallery}</a>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_hub}</a>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_marketplace}</a>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-tx3 text-xs hover:text-tx transition-colors">{t.footer_community}</a>
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
            <div className="flex gap-3">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-pill glass-card text-tx3 hover:text-ac transition-colors cursor-pointer" aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-pill glass-card text-tx3 hover:text-ac transition-colors cursor-pointer" aria-label="LinkedIn">
                <Linkedin size={15} />
              </a>
            </div>
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
