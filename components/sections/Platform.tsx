"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/cn";
import {
  Clapperboard,
  GalleryHorizontalEnd,
  LayoutDashboard,
  Store,
  Users,
  Share2,
} from "lucide-react";

interface PlatformItem {
  nameKey: keyof import("@/lib/i18n").Translations;
  descKey: keyof import("@/lib/i18n").Translations;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  colSpan?: 2;
}

const PLATFORM_ITEMS: PlatformItem[] = [
  {
    nameKey: "platform_studio_name",
    descKey: "platform_studio_desc",
    icon: <Clapperboard size={18} />,
    iconBg: "rgba(59,130,246,0.12)",
    iconColor: "#3B82F6",
    colSpan: 2,
  },
  {
    nameKey: "platform_gallery_name",
    descKey: "platform_gallery_desc",
    icon: <GalleryHorizontalEnd size={18} />,
    iconBg: "rgba(139,92,246,0.12)",
    iconColor: "#8B5CF6",
  },
  {
    nameKey: "platform_hub_name",
    descKey: "platform_hub_desc",
    icon: <LayoutDashboard size={18} />,
    iconBg: "rgba(245,158,11,0.12)",
    iconColor: "#F59E0B",
  },
  {
    nameKey: "platform_marketplace_name",
    descKey: "platform_marketplace_desc",
    icon: <Store size={18} />,
    iconBg: "rgba(16,185,129,0.12)",
    iconColor: "#10B981",
  },
  {
    nameKey: "platform_community_name",
    descKey: "platform_community_desc",
    icon: <Users size={18} />,
    iconBg: "rgba(236,72,153,0.12)",
    iconColor: "#EC4899",
  },
  {
    nameKey: "platform_social_name",
    descKey: "platform_social_desc",
    icon: <Share2 size={18} />,
    iconBg: "rgba(59,130,246,0.12)",
    iconColor: "#3B82F6",
  },
];

export function Platform() {
  const { t } = useLang();

  return (
    <section id="platform" className="relative z-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-4">
              {t.platform_title}
            </h2>
            <p className="text-tx2 text-sm max-w-xl mx-auto leading-relaxed">
              {t.platform_subtitle}
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLATFORM_ITEMS.map((item, i) => (
            <RevealOnScroll key={item.nameKey} delay={i * 60} className={cn("h-full", item.colSpan === 2 && "md:col-span-2")}>
              <div
                className="glass-card p-6 h-full flex flex-col gap-3 group transition-all duration-200 hover:-translate-y-1 hover:border-ac/[0.14] hover:shadow-[var(--nx-glass-glow)] cursor-default"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: item.iconBg, color: item.iconColor }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-tx font-semibold text-sm">
                    {t[item.nameKey] as string}
                  </span>
                </div>
                <p className="text-tx2 text-sm leading-relaxed">
                  {t[item.descKey] as string}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
