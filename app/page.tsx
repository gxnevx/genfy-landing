import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { AnimatedOrbs } from "@/components/ui/AnimatedOrbs";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { RecentUpdates } from "@/components/sections/RecentUpdates";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AnimatedOrbs />
      {/* Noise grain overlay */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <div className="accent-line max-w-4xl mx-auto" />
        <HowItWorks />
        <div className="accent-line max-w-4xl mx-auto" />
        <Features />
        <div className="accent-line max-w-4xl mx-auto" />
        <Pricing />
        <div className="accent-line max-w-4xl mx-auto" />
        <RecentUpdates />
        <CallToAction />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}
