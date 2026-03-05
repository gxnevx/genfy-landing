export const SITE_URL = "https://home.genfy.studio";
export const APP_URL = "https://genfy.studio";
export const APP_NAME = "Genfy";
export const APP_DESCRIPTION =
  "Create professional AI-generated videos from product images in seconds. Upload, generate, download — it's that simple.";

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/genfy.studio",
  linkedin: "https://linkedin.com/company/genfy-app",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Updates", href: "#updates" },
] as const;

export const FEATURES = [
  {
    icon: "Upload",
    label: "Image to Video",
    description: "Upload any product image and get a professional video in seconds.",
    iconBg: "rgba(59,130,246,0.1)",
    colSpan: 2,
  },
  {
    icon: "Sparkles",
    label: "AI-Powered",
    description: "Advanced AI models generate compelling video content automatically.",
    iconBg: "rgba(139,92,246,0.1)",
  },
  {
    icon: "Zap",
    label: "Multiple Engines",
    description: "Choose from Sora, VEO 3, and more — each optimized for different styles.",
    iconBg: "rgba(245,158,11,0.1)",
  },
  {
    icon: "Download",
    label: "Instant Download",
    description: "Download your videos immediately or access them from your gallery anytime.",
    iconBg: "rgba(34,197,94,0.1)",
    colSpan: 2,
  },
  {
    icon: "Captions",
    label: "Auto Captions",
    description: "AI generates engaging captions and hashtags for social media.",
    iconBg: "rgba(236,72,153,0.1)",
  },
  {
    icon: "Shield",
    label: "No Watermarks",
    description: "Clean, professional output ready to share on any platform.",
    iconBg: "rgba(59,130,246,0.1)",
  },
  {
    icon: "Globe",
    label: "Multi-Language",
    description: "Generate prompts and captions in any language you need.",
    iconBg: "rgba(168,85,247,0.1)",
  },
] as const;

export const PRICING_PLANS = [
  {
    name: "Free",
    price: "R$ 0",
    period: "",
    description: "Try Genfy with limited tokens",
    features: [
      "5 free tokens",
      "Standard engine",
      "720p output",
      "Community support",
    ],
    cta: "Get Started",
    href: APP_URL,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$ 29",
    period: "/month",
    description: "For creators who need more",
    features: [
      "100 tokens / month",
      "All engines (Sora, VEO 3)",
      "1080p output",
      "Priority generation",
      "Auto captions",
    ],
    cta: "Start Creating",
    href: APP_URL,
    highlighted: true,
  },
  {
    name: "Ultra",
    price: "R$ 79",
    period: "/month",
    description: "Unlimited creative power",
    features: [
      "Unlimited tokens",
      "All engines + early access",
      "4K output",
      "Fastest generation",
      "Priority support",
      "API access",
    ],
    cta: "Go Ultra",
    href: APP_URL,
    highlighted: false,
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Upload",
    description: "Take a photo or upload any product image",
    icon: "Upload",
  },
  {
    step: 2,
    title: "Generate",
    description: "AI creates a professional video with your product",
    icon: "Wand2",
  },
  {
    step: 3,
    title: "Download",
    description: "Get your video instantly — ready to post anywhere",
    icon: "Download",
  },
] as const;
