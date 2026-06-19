import { posthog } from "./posthog";
import { pushAnalyticsEvent } from "./analytics/data-layer";
import { APP_URL } from "./constants";

type CtaLocation = "hero" | "final_cta" | "navbar" | "footer";
type ToolName = "trending-products" | "trending-sellers" | "product-validation";
type Lang = "pt" | "en";

export function trackHeroCta(cta: "start_creating_free" | "explore_tools") {
  posthog.capture("hero_cta_clicked", { cta });
  pushAnalyticsEvent("cta_click", {
    cta_name: cta,
    cta_location: "hero",
    destination: cta === "explore_tools" ? "#dlp-results" : APP_URL,
  });
}

export function trackToolExplored(tool: ToolName) {
  posthog.capture("tool_explored", { tool });
  pushAnalyticsEvent("tool_explored", { tool });
}

export function trackSimulatorUsed(tokens: number, engine: string) {
  posthog.capture("simulator_used", { tokens, engine });
  pushAnalyticsEvent("simulator_used", { tokens, engine });
}

export function trackGetStarted(location: CtaLocation) {
  posthog.capture("get_started_clicked", { location });
  pushAnalyticsEvent("cta_click", {
    cta_name: "get_started",
    cta_location: location,
    destination: APP_URL,
  });
}

export function trackLanguageSwitched(from: Lang, to: Lang) {
  posthog.capture("language_switched", { from, to });
  pushAnalyticsEvent("language_switched", { from, to });
}
