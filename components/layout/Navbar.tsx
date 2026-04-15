"use client";

import { useState, useEffect } from "react";
import { GenfyLogo } from "@/components/app/GenfyLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LangToggle } from "@/components/ui/LangToggle";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/cn";
import { APP_URL } from "@/lib/constants";
import { trackGetStarted } from "@/lib/analytics";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const content =
    lang === "pt"
      ? {
          navLinks: [
            { label: "Resultados", href: "/#results" },
            { label: "Como funciona", href: "/#workflow" },
            { label: "App", href: "/#product" },
            { label: "Começar", href: "/#start" },
          ],
          cta: "Abrir app",
        }
      : {
          navLinks: [
            { label: "Results", href: "/#results" },
            { label: "How it works", href: "/#workflow" },
            { label: "Product", href: "/#product" },
            { label: "Start", href: "/#start" },
          ],
          cta: "Open app",
        };

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/8 bg-[rgba(9,12,19,0.8)] py-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="/#" className="flex items-center gap-2.5 cursor-pointer">
          <GenfyLogo size={28} />
          <span className="text-sm font-semibold uppercase tracking-[0.45em] text-tx">GENFY</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {content.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-tx3 transition-colors duration-200 hover:text-tx"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LangToggle />
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent hidden min-h-0 px-4 py-2 text-[13px] md:inline-flex"
            onClick={() => trackGetStarted("navbar")}
          >
            {content.cta}
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 items-center justify-center text-tx3 transition-colors hover:text-tx md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="glass-strong mx-4 mt-2 animate-fade-in-up p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {content.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm font-medium text-tx2 transition-colors hover:text-tx"
              >
                {link.label}
              </a>
            ))}
            <div className="accent-line my-1" />
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-center text-[13px]"
              onClick={() => trackGetStarted("navbar")}
            >
              {content.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
