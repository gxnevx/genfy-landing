"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedOrbs } from "@/components/ui/AnimatedOrbs";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { UpdateCard } from "@/components/sections/RecentUpdates";
import { useLang } from "@/contexts/LangContext";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import updatesData from "@/data/updates.json";

import type { Update } from "@/components/sections/RecentUpdates";

export default function UpdatesPage() {
  const { t } = useLang();
  const updates: Update[] = updatesData.updates;

  return (
    <div className="min-h-screen relative">
      <AnimatedOrbs />
      <Navbar />
      <main className="relative z-10 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <Link
              href="/#updates"
              className="inline-flex items-center gap-1.5 text-xs text-tx3 hover:text-ac transition-colors mb-8"
            >
              <ArrowLeft size={12} />
              {t.updates_back}
            </Link>

            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-4">{t.updates_page_title}</h1>
              <p className="text-tx2 text-sm max-w-lg mx-auto">{t.updates_page_subtitle}</p>
            </div>
          </RevealOnScroll>

          <div className="flex flex-col gap-4">
            {updates.map((update, i) => (
              <UpdateCard key={update.version} update={update} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
