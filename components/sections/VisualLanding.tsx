import { MobileLanding } from "@/components/sections/MobileLanding";
import { DesktopLanding } from "@/components/sections/DesktopLanding";
import type { LandingVariant } from "@/components/sections/landing-types";

/**
 * Single entry point for the landing page.
 *
 * Mobile and desktop are two siblings with the same content + same design
 * language (organic glow blobs + single italic gradient + pure typography)
 * but different layouts (single column 430px vs centered ~1100px grid).
 *
 * The previous desktop stacked 7 separate components (VisualHero,
 * FeatureCommand, ResultVideos, DesktopSellerMomentum, EngineRail,
 * CountdownPanel, BrazilOrigin) which drifted into 4-5 different visual
 * styles — DesktopLanding consolidates the whole page in one component.
 * The orphan components stay in the repo for now in case any are still
 * imported elsewhere (legal pages, tools, etc.) but home only uses these
 * two.
 */
export function VisualLanding({ variant = "default" }: { variant?: LandingVariant }) {
  return (
    <>
      <div className="md:hidden">
        <MobileLanding variant={variant} />
      </div>
      <div className="hidden md:block">
        <DesktopLanding variant={variant} />
      </div>
    </>
  );
}
