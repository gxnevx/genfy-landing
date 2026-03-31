"use client";

import { Search, TrendingUp, Shield, MessageCircle, Video, ImageIcon } from "lucide-react";

const PILLARS = [
  { name: "Demand", score: 85, icon: <TrendingUp size={14} />, color: "text-blue-400 bg-blue-500/10" },
  { name: "Safety", score: 92, icon: <Shield size={14} />, color: "text-emerald-400 bg-emerald-500/10" },
  { name: "Social", score: 78, icon: <MessageCircle size={14} />, color: "text-pink-400 bg-pink-500/10" },
  { name: "Content", score: 88, icon: <Video size={14} />, color: "text-purple-400 bg-purple-500/10" },
];

export function ProductValidationMockup() {
  return (
    <div>
      {/* URL Input */}
      <div className="flex gap-2 mb-6">
        <div className="flex-1 glass rounded-lg px-3 py-2.5 flex items-center gap-2">
          <Search size={14} className="text-tx3" />
          <span className="text-tx3 text-[11px]">https://tiktok.com/product/example-product...</span>
        </div>
        <button className="bg-ac/20 text-ac px-4 py-2.5 rounded-lg text-[11px] font-semibold border border-ac/30">
          Analyze
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Product Info with image */}
        <div className="glass rounded-xl p-4">
          <div className="aspect-square rounded-lg bg-gradient-to-br from-yellow-500/10 to-amber-500/5 mb-3 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl">💡</span>
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 rounded-md bg-white/[0.08] flex items-center justify-center">
              <ImageIcon size={12} className="text-tx3" />
            </div>
          </div>
          <p className="text-tx text-[11px] font-medium mb-1">LED Ring Light Professional Kit</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-ac text-xs font-bold">$24.99</span>
            <span className="text-tx3 text-[10px] line-through">$39.99</span>
          </div>
          <p className="text-tx3 text-[10px] mt-1">2.4K sold</p>
          <div className="mt-2 flex items-center gap-1.5">
            <Shield size={10} className="text-emerald-400" />
            <span className="text-emerald-400 text-[9px] font-medium">Low violation risk</span>
          </div>
        </div>

        {/* Genfy Score */}
        <div className="glass rounded-xl p-4 flex flex-col items-center justify-center">
          <p className="text-tx3 text-[10px] uppercase tracking-wider mb-3">Genfy Score</p>
          {/* Score ring */}
          <div className="relative w-28 h-28 mb-3">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="6" className="text-white/[0.05]" />
              <circle
                cx="50" cy="50" r="42" fill="none" strokeWidth="6"
                strokeDasharray={`${86 * 2.64} ${264 - 86 * 2.64}`}
                strokeLinecap="round"
                className="text-emerald-400"
                stroke="currentColor"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-tx text-2xl font-bold">86</span>
            </div>
          </div>
          <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-semibold mb-2">
            Validated
          </div>
          <p className="text-tx3 text-[9px] text-center leading-relaxed">
            Safe for video creation. Low ban risk.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 gap-2">
          {PILLARS.map((p) => (
            <div key={p.name} className="glass rounded-xl p-3 flex flex-col gap-2">
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${p.color}`}>
                {p.icon}
              </div>
              <p className="text-tx3 text-[9px] uppercase tracking-wider">{p.name}</p>
              <p className="text-tx text-sm font-bold">{p.score}</p>
              {/* Mini progress bar */}
              <div className="w-full h-1 rounded-full bg-white/[0.05]">
                <div
                  className="h-full rounded-full bg-current opacity-60"
                  style={{ width: `${p.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
