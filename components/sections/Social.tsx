"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import { SOCIAL_LINKS } from "@/lib/constants";
import { MessageCircle, Store } from "lucide-react";

export function Social() {
  const { t } = useLang();

  return (
    <section id="social" className="relative z-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <RevealOnScroll>
          <div className="glass-card p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-pink-500/20 to-pink-500/5 text-pink-400">
                <MessageCircle size={20} />
              </div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-amber-500/5 text-amber-400">
                <Store size={20} />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-3">
              {t.social_title}
            </h2>
            <p className="text-tx2 text-sm max-w-lg mx-auto mb-6">
              {t.social_desc}
            </p>

            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600/20 text-green-400 text-sm font-semibold border border-green-500/20 hover:bg-green-600/30 hover:border-green-500/30 transition-all duration-200"
            >
              <MessageCircle size={16} />
              {t.social_join}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
