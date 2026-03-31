"use client";

import { ToolPageLayout } from "@/components/tools/ToolPageLayout";
import { Users } from "lucide-react";
import { TrendingSellersMockup } from "@/components/tools/TrendingSellersMockup";

const STEPS = [
  { num: 1, titleKey: "tool_sellers_step1_title", descKey: "tool_sellers_step1_desc" },
  { num: 2, titleKey: "tool_sellers_step2_title", descKey: "tool_sellers_step2_desc" },
  { num: 3, titleKey: "tool_sellers_step3_title", descKey: "tool_sellers_step3_desc" },
] as const;

const FEATURES = [
  { key: "tool_sellers_f1" },
  { key: "tool_sellers_f2" },
  { key: "tool_sellers_f3" },
  { key: "tool_sellers_f4" },
] as const;

export default function TrendingSellersPage() {
  return (
    <ToolPageLayout
      heroKey="tool_sellers_hero"
      heroSubKey="tool_sellers_hero_sub"
      icon={<Users size={24} className="text-purple-400" />}
      iconColor="from-purple-500/20 to-purple-500/5"
      steps={STEPS}
      features={FEATURES}
      mockup={<TrendingSellersMockup />}
    />
  );
}
