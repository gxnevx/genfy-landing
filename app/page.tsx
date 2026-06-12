import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { VisualLanding } from "@/components/sections/VisualLanding";

export default function Home() {
  return (
    <div className="landing-shell min-h-screen">
      <Navbar />
      <main>
        <VisualLanding />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
