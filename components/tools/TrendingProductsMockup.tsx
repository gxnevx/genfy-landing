"use client";

import { ImageIcon } from "lucide-react";

const CATEGORIES = ["Football", "Decor", "Tech", "Fashion", "Skincare", "Fitness"];

const PRODUCTS = [
  { name: "LED Ring Light Pro", price: "$24.99", orig: "$39.99", sold: "2.4K", discount: "-37%", emoji: "💡", bg: "from-yellow-500/10 to-amber-500/5" },
  { name: "Wireless Earbuds V3", price: "$18.50", orig: "$29.99", sold: "5.1K", discount: "-38%", emoji: "🎧", bg: "from-blue-500/10 to-indigo-500/5" },
  { name: "Phone Holder Mount", price: "$9.99", orig: "$14.99", sold: "8.7K", discount: "-33%", emoji: "📱", bg: "from-slate-500/10 to-zinc-500/5" },
  { name: "Mini Projector HD", price: "$45.00", orig: "$69.99", sold: "1.2K", discount: "-36%", emoji: "📽️", bg: "from-purple-500/10 to-violet-500/5" },
  { name: "Skin Serum Vitamin C", price: "$12.99", orig: "$22.99", sold: "3.8K", discount: "-43%", emoji: "✨", bg: "from-orange-500/10 to-amber-500/5" },
  { name: "Resistance Bands Set", price: "$15.99", orig: "$24.99", sold: "4.5K", discount: "-36%", emoji: "💪", bg: "from-emerald-500/10 to-green-500/5" },
];

export function TrendingProductsMockup() {
  return (
    <div>
      {/* Category chips */}
      <div className="flex flex-wrap gap-2 mb-5">
        {CATEGORIES.map((cat, i) => (
          <div
            key={cat}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-medium ${
              i === 2
                ? "bg-ac/20 text-ac border border-ac/30"
                : "glass text-tx3"
            }`}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {PRODUCTS.map((p) => (
          <div key={p.name} className="glass rounded-xl overflow-hidden">
            {/* Product image area */}
            <div className={`relative aspect-square bg-gradient-to-br ${p.bg}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl">{p.emoji}</span>
              </div>
              <div className="absolute bottom-2 right-2 w-6 h-6 rounded-md bg-white/[0.08] flex items-center justify-center">
                <ImageIcon size={12} className="text-tx3" />
              </div>
              <div className="absolute top-2 left-2 bg-red-500/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                {p.discount}
              </div>
            </div>
            <div className="p-3">
              <p className="text-tx text-[11px] font-medium leading-tight mb-1.5 line-clamp-2">
                {p.name}
              </p>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-ac text-xs font-bold">{p.price}</span>
                <span className="text-tx3 text-[10px] line-through">{p.orig}</span>
              </div>
              <p className="text-tx3 text-[10px]">{p.sold} sold</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
