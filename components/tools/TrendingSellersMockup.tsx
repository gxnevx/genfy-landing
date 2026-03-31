"use client";

import { Star } from "lucide-react";

const SELLERS = [
  { name: "TechGadgets Store", rating: 4.9, followers: "52.3K", sales: "128K", products: 342, color: "bg-blue-500/20 text-blue-400" },
  { name: "GlowUp Beauty", rating: 4.8, followers: "38.1K", sales: "95K", products: 215, color: "bg-pink-500/20 text-pink-400" },
  { name: "FitLife Essentials", rating: 4.7, followers: "29.4K", sales: "67K", products: 178, color: "bg-emerald-500/20 text-emerald-400" },
  { name: "HomeVibes Co", rating: 4.8, followers: "44.2K", sales: "112K", products: 290, color: "bg-amber-500/20 text-amber-400" },
  { name: "StreetWear Hub", rating: 4.6, followers: "61.8K", sales: "203K", products: 456, color: "bg-purple-500/20 text-purple-400" },
  { name: "PetPals Official", rating: 4.9, followers: "22.7K", sales: "45K", products: 134, color: "bg-orange-500/20 text-orange-400" },
];

export function TrendingSellersMockup() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {SELLERS.map((s) => (
        <div key={s.name} className="glass rounded-xl p-4">
          {/* Avatar + Name */}
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${s.color}`}>
              {s.name[0]}
            </div>
            <div className="min-w-0">
              <p className="text-tx text-[12px] font-semibold truncate">{s.name}</p>
              <div className="flex items-center gap-1">
                <Star size={10} className="text-amber-400 fill-amber-400" />
                <span className="text-tx2 text-[10px]">{s.rating}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <p className="text-tx text-[11px] font-bold">{s.followers}</p>
              <p className="text-tx3 text-[9px]">followers</p>
            </div>
            <div className="text-center">
              <p className="text-tx text-[11px] font-bold">{s.sales}</p>
              <p className="text-tx3 text-[9px]">sales</p>
            </div>
            <div className="text-center">
              <p className="text-tx text-[11px] font-bold">{s.products}</p>
              <p className="text-tx3 text-[9px]">products</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
