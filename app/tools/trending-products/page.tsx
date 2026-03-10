"use client";

import { ToolPageLayout } from "@/components/tools/ToolPageLayout";
import { TrendingUp } from "lucide-react";
import { TrendingProductsMockup } from "@/components/tools/TrendingProductsMockup";

const STEPS = [
  { num: 1, titleKey: "tool_trending_step1_title", descKey: "tool_trending_step1_desc" },
  { num: 2, titleKey: "tool_trending_step2_title", descKey: "tool_trending_step2_desc" },
  { num: 3, titleKey: "tool_trending_step3_title", descKey: "tool_trending_step3_desc" },
] as const;

const FEATURES = [
  { key: "tool_trending_f1" },
  { key: "tool_trending_f2" },
  { key: "tool_trending_f3" },
  { key: "tool_trending_f4" },
] as const;

export default function TrendingProductsPage() {
  return (
    <ToolPageLayout
      heroKey="tool_trending_hero"
      heroSubKey="tool_trending_hero_sub"
      icon={<TrendingUp size={24} className="text-blue-400" />}
      iconColor="from-blue-500/20 to-blue-500/5"
      steps={STEPS}
      features={FEATURES}
      mockup={<TrendingProductsMockup />}
    />
  );
}
