import { posthog } from "./posthog";

type CtaLocation = "hero" | "final_cta" | "navbar" | "footer";
type ToolName = "trending-products" | "trending-sellers" | "product-validation";
type Lang = "pt" | "en";

export function trackHeroCta(cta: "start_creating_free" | "explore_tools") {
  posthog.capture("hero_cta_clicked", { cta });
}

export function trackToolExplored(tool: ToolName) {
  posthog.capture("tool_explored", { tool });
}

export function trackSimulatorUsed(tokens: number, engine: string) {
  posthog.capture("simulator_used", { tokens, engine });
}

export function trackGetStarted(location: CtaLocation) {
  posthog.capture("get_started_clicked", { location });
}

export function trackLanguageSwitched(from: Lang, to: Lang) {
  posthog.capture("language_switched", { from, to });
}
