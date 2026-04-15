import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { AnimatedOrbs } from "@/components/ui/AnimatedOrbs";
import { LandingPage } from "@/components/sections/LandingPage";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,rgba(63,190,255,0.06),transparent_24%),radial-gradient(circle_at_18%_28%,rgba(250,204,21,0.08),transparent_20%),radial-gradient(circle_at_76%_18%,rgba(115,127,255,0.08),transparent_22%),#07080c]">
      <AnimatedOrbs />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      <Navbar />
      <LandingPage />
      <Footer />
      <CookieConsent />
    </div>
  );
}
