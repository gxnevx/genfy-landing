"use client";

import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/cn";
import { Upload, BrainCircuit, Layers, ShoppingBag, Captions, GalleryHorizontalEnd, Shield, Globe } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Upload:                <Upload size={18} className="text-blue-400" />,
  BrainCircuit:          <BrainCircuit size={18} className="text-purple-400" />,
  Layers:                <Layers size={18} className="text-amber-400" />,
  ShoppingBag:           <ShoppingBag size={18} className="text-emerald-400" />,
  Captions:              <Captions size={18} className="text-pink-400" />,
  GalleryHorizontalEnd:  <GalleryHorizontalEnd size={18} className="text-violet-400" />,
  Shield:                <Shield size={18} className="text-blue-400" />,
  Globe:                 <Globe size={18} className="text-indigo-400" />,
};

export function Features() {
  const { t } = useLang();

  const features = [
    { icon: "Upload",               label: t.feature_imageToVideo,  desc: t.feature_imageToVideo_desc,  iconBg: "rgba(59,130,246,0.1)",  colSpan: 2 as const },
    { icon: "BrainCircuit",         label: t.feature_aiPowered,     desc: t.feature_aiPowered_desc,     iconBg: "rgba(139,92,246,0.1)" },
    { icon: "Layers",               label: t.feature_multiEngine,   desc: t.feature_multiEngine_desc,   iconBg: "rgba(245,158,11,0.1)" },
    { icon: "ShoppingBag",          label: t.feature_tiktokShop,    desc: t.feature_tiktokShop_desc,    iconBg: "rgba(16,185,129,0.1)",  colSpan: 2 as const },
    { icon: "Captions",             label: t.feature_captions,      desc: t.feature_captions_desc,      iconBg: "rgba(236,72,153,0.1)" },
    { icon: "GalleryHorizontalEnd", label: t.feature_gallery,       desc: t.feature_gallery_desc,       iconBg: "rgba(139,92,246,0.1)" },
    { icon: "Shield",               label: t.feature_noWatermark,   desc: t.feature_noWatermark_desc,   iconBg: "rgba(59,130,246,0.1)" },
    { icon: "Globe",                label: t.feature_multiLang,     desc: t.feature_multiLang_desc,     iconBg: "rgba(99,102,241,0.1)" },
  ];

  return (
    <section id="features" className="relative z-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-4">{t.features_title}</h2>
          <p className="text-tx2 text-sm max-w-lg mx-auto">{t.features_subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.icon}
              className={cn(
                "glass-card flex flex-col gap-3 p-6 h-full relative overflow-hidden will-change-transform transition-all duration-200 group hover:-translate-y-1 hover:border-ac/[0.14] hover:shadow-[var(--nx-glass-glow)] animate-[bento-in_0.4s_ease-out_both] cursor-default",
                f.colSpan === 2 && "md:col-span-2"
              )}
              style={{ animationDelay: `${i * 55}ms` }}
            >
              <div className="flex items-center gap-2.5">
                <div className="rounded-lg flex items-center justify-center shrink-0 w-9 h-9" style={{ background: f.iconBg }}>
                  {ICON_MAP[f.icon]}
                </div>
                <span className="text-[10px] text-tx3 tracking-[0.6px] uppercase font-semibold">{f.label}</span>
              </div>
              <p className="text-tx2 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
