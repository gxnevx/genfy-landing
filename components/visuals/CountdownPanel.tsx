"use client";

import { ArrowRight, Bell, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useLang } from "@/contexts/LangContext";

export function CountdownPanel() {
  const { lang } = useLang();

  return (
    <section className="visual-section">
      <div className="visual-inner">
        <div className="notify-card">
          <div>
            <span className="eyebrow-chip">
              <Bell size={14} />
              {lang === "pt" ? "Próximas automações" : "Next automations"}
            </span>
            <h2>
              {lang === "pt" ? "Quer ficar por dentro das próximas liberações?" : "Want to follow the next releases?"}
            </h2>
            <p>
              {lang === "pt"
                ? "Acompanhe a comunidade para ver novidades de rascunho, publicação e motores de IA assim que forem liberadas."
                : "Join the community to follow draft, publishing, and AI engine updates as they ship."}
            </p>
          </div>
          <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="notify-cta">
            <MessageCircle size={18} />
            {lang === "pt" ? "Entrar na comunidade" : "Join the community"}
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
