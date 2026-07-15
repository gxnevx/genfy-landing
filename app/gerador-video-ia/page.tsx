import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { VisualLanding } from "@/components/sections/VisualLanding";
import { APP_NAME, SITE_URL } from "@/lib/constants";

const pageUrl = `${SITE_URL}/gerador-video-ia`;
const description =
  "Gerador de vídeo com IA para transformar links e imagens de produtos em criativos com Veo 3.1 ou Seedance 2.0, sem gravar e sem editar.";

export const metadata: Metadata = {
  title: "Gerador de Vídeo com IA para Produtos",
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    siteName: APP_NAME,
    title: "Gerador de Vídeo com IA para Produtos | Genfy",
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: APP_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador de Vídeo com IA para Produtos | Genfy",
    description,
    images: ["/og-image.png"],
  },
};

export default function AiVideoGeneratorPage() {
  return (
    <div className="landing-shell min-h-screen">
      <Navbar />
      <main>
        <VisualLanding variant="ai-video" />
      </main>
      <Footer />
    </div>
  );
}
