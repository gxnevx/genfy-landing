"use client";

import type React from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { APP_URL } from "@/lib/constants";
import { trackHeroCta } from "@/lib/analytics";

const engines = [
  ["Veo 3.1", "Disponível"],
  ["Seedance 2.0", "Disponível"],
] as const;

export function DesktopSellerMomentum() {
  return (
    <section className="desktop-momentum">
      <div className="desktop-momentum-inner">
        <div className="desktop-pullquote">
          <p>
            “Produto bom perde força quando o criativo demora. O Genfy encurta esse caminho.”
          </p>
          <span>produto, score e vídeo no mesmo fluxo</span>
        </div>

        <div className="desktop-kicker">
          <div className="eyebrow-chip">
            <Zap size={13} />
            Mais teste, menos achismo
          </div>
          <h2>
            Vídeo bom é vídeo que <em>sobe hoje</em>.
          </h2>
          <p>
            O Genfy junta produto, score e criativo no mesmo fluxo para você empilhar mais testes por dia em vez de gastar a semana editando um vídeo só.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="desktop-kicker-cta"
            onClick={() => trackHeroCta("start_creating_free")}
          >
            Bora gerar o primeiro?
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="desktop-engines-flow" aria-label="Genfy engines and signals">
          <Sparkles size={18} />
          {engines.map(([name, status], index) => (
            <div key={name} style={{ "--i": index } as React.CSSProperties}>
              <strong>{name}</strong>
              <span>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
