import type { AnalyticsEventMap } from "./types";

export function createAnalyticsEvent<Name extends keyof AnalyticsEventMap>(
  event: Name,
  parameters: AnalyticsEventMap[Name],
): { event: Name } & AnalyticsEventMap[Name] {
  return { event, ...parameters };
}

export function pushAnalyticsEvent<Name extends keyof AnalyticsEventMap>(
  event: Name,
  parameters: AnalyticsEventMap[Name],
) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", event, parameters);
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(createAnalyticsEvent(event, parameters));
}
