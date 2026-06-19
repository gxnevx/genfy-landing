import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import {
  GoogleTagManagerHead,
  GoogleTagManagerNoScript,
} from "@/components/analytics/GoogleTagManager";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { APP_NAME, APP_DESCRIPTION, SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${APP_NAME} — Produto, score e vídeo para TikTok Shop`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} — Produto, score e vídeo para TikTok Shop`,
    description: APP_DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: APP_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} — Produto, score e vídeo para TikTok Shop`,
    description: APP_DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className="bg-bg font-sans text-tx">
        <GoogleTagManagerNoScript />
        <Providers>
          {children}
          <CookieConsent />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
