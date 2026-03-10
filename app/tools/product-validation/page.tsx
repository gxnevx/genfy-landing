"use client";

import { ToolPageLayout } from "@/components/tools/ToolPageLayout";
import { ShieldCheck } from "lucide-react";
import { ProductValidationMockup } from "@/components/tools/ProductValidationMockup";

const STEPS = [
  { num: 1, titleKey: "tool_validation_step1_title", descKey: "tool_validation_step1_desc" },
  { num: 2, titleKey: "tool_validation_step2_title", descKey: "tool_validation_step2_desc" },
  { num: 3, titleKey: "tool_validation_step3_title", descKey: "tool_validation_step3_desc" },
] as const;

const FEATURES = [
  { key: "tool_validation_f1" },
  { key: "tool_validation_f2" },
  { key: "tool_validation_f3" },
  { key: "tool_validation_f4" },
] as const;

export default function ProductValidationPage() {
  return (
    <ToolPageLayout
      heroKey="tool_validation_hero"
      heroSubKey="tool_validation_hero_sub"
      icon={<ShieldCheck size={24} className="text-emerald-400" />}
      iconColor="from-emerald-500/20 to-emerald-500/5"
      steps={STEPS}
      features={FEATURES}
      mockup={<ProductValidationMockup />}
    />
  );
}
