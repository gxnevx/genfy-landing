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
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav_tools,       href: "/#tools" },
    { label: t.nav_engines,     href: "/#models" },
    { label: t.nav_social,      href: "/#social" },
    { label: t.nav_updates,     href: "/#updates" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong py-3 shadow-nx" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
          <GenfyLogo size={28} />
          <span className="text-tx font-semibold text-sm tracking-[8px] uppercase">GENFY</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-tx3 text-[13px] font-medium hover:text-tx transition-colors duration-200"
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
            className="btn-accent hidden md:inline-flex text-[13px] px-4 py-2 min-h-0"
            onClick={() => trackGetStarted("navbar")}
          >
            {t.nav_getStarted}
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-tx3 hover:text-tx transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 p-4 animate-fade-in-up">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-tx2 text-sm font-medium py-2 hover:text-tx transition-colors"
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
              {t.nav_getStarted}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
