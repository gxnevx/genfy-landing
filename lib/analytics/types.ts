export type ConsentState = "granted" | "denied";

export interface ConsentPreferences {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
}

export interface GoogleConsentState {
  analytics_storage: ConsentState;
  ad_storage: ConsentState;
  ad_user_data: ConsentState;
  ad_personalization: ConsentState;
}

export interface AttributionTouch {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  landing_url: string;
  referrer?: string;
  captured_at: string;
}

export interface Attribution {
  first_touch: AttributionTouch;
  last_touch: AttributionTouch;
}

export interface AnalyticsEventMap {
  cta_click: {
    cta_name: string;
    cta_location: string;
    destination: string;
  };
  language_switched: {
    from: "pt" | "en";
    to: "pt" | "en";
  };
  simulator_used: {
    tokens: number;
    engine: string;
  };
  tool_explored: {
    tool: string;
  };
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

