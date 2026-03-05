import { memo } from "react";

/** Static Genfy isometric logo – pass className for sizing */
export const GenfyLogo = memo(function GenfyLogo({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="75 130 250 235"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a5a7a" />
          <stop offset="100%" stopColor="#1e2d4e" />
        </linearGradient>
        <linearGradient id="gd" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a2540" />
          <stop offset="100%" stopColor="#0a1228" />
        </linearGradient>
        <linearGradient id="gs" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a3858" />
          <stop offset="100%" stopColor="#080e1e" />
        </linearGradient>
        <radialGradient id="gsg" cx="32%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#e0e8f8" />
          <stop offset="100%" stopColor="#9aaac8" />
        </radialGradient>
        <filter id="gsh">
          <feDropShadow dx="1" dy="4" stdDeviation="5" floodColor="#00000035" />
        </filter>
      </defs>

      {/* Left column (4 cubes) */}
      <g filter="url(#gsh)">
        <polygon points="90,290 126,270 162,290 126,310" fill="url(#gl)" />
        <polygon points="90,290 126,310 126,350 90,330" fill="url(#gs)" />
        <polygon points="126,310 162,290 162,330 126,350" fill="url(#gd)" />
      </g>
      <g filter="url(#gsh)">
        <polygon points="90,250 126,230 162,250 126,270" fill="url(#gl)" />
        <polygon points="90,250 126,270 126,310 90,290" fill="url(#gs)" />
        <polygon points="126,270 162,250 162,290 126,310" fill="url(#gd)" />
      </g>
      <g filter="url(#gsh)">
        <polygon points="90,210 126,190 162,210 126,230" fill="url(#gl)" />
        <polygon points="90,210 126,230 126,270 90,250" fill="url(#gs)" />
        <polygon points="126,230 162,210 162,250 126,270" fill="url(#gd)" />
      </g>
      <g filter="url(#gsh)">
        <polygon points="90,170 126,150 162,170 126,190" fill="url(#gl)" />
        <polygon points="90,170 126,190 126,230 90,210" fill="url(#gs)" />
        <polygon points="126,190 162,170 162,210 126,230" fill="url(#gd)" />
      </g>

      {/* Top right (2 cubes) */}
      <g filter="url(#gsh)">
        <polygon points="162,170 198,150 234,170 198,190" fill="url(#gl)" />
        <polygon points="162,170 198,190 198,230 162,210" fill="url(#gs)" />
        <polygon points="198,190 234,170 234,210 198,230" fill="url(#gd)" />
      </g>
      <g filter="url(#gsh)">
        <polygon points="234,170 270,150 306,170 270,190" fill="url(#gl)" />
        <polygon points="234,170 270,190 270,230 234,210" fill="url(#gs)" />
        <polygon points="270,190 306,170 306,210 270,230" fill="url(#gd)" />
      </g>

      {/* Bottom right (2 cubes) */}
      <g filter="url(#gsh)">
        <polygon points="162,290 198,270 234,290 198,310" fill="url(#gl)" />
        <polygon points="162,290 198,310 198,350 162,330" fill="url(#gs)" />
        <polygon points="198,310 234,290 234,330 198,350" fill="url(#gd)" />
      </g>
      <g filter="url(#gsh)">
        <polygon points="234,290 270,270 306,290 270,310" fill="url(#gl)" />
        <polygon points="234,290 270,310 270,350 234,330" fill="url(#gs)" />
        <polygon points="270,310 306,290 306,330 270,350" fill="url(#gd)" />
      </g>

      {/* Sphere */}
      <ellipse cx="270" cy="288" rx="28" ry="12" fill="#00000015" />
      <circle cx="270" cy="254" r="36" fill="url(#gsg)" filter="url(#gsh)" />
      <ellipse cx="258" cy="241" rx="10" ry="8" fill="white" opacity="0.8" />
    </svg>
  );
});

/** Animated loading version – bouncing ball */
export const GenfyLoadingLogo = memo(function GenfyLoadingLogo({
  size = 120,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <style>{`
          #gf-ball-move{animation:gf-move 1.4s infinite linear!important}
          #gf-ball-squash{transform-origin:center;animation:gf-squash 1.4s infinite cubic-bezier(.4,0,.2,1)!important}
          #gf-cube-l{transform-origin:198px 310px;animation:gf-tiltL 1.4s infinite ease-in-out!important}
          #gf-cube-r{transform-origin:270px 310px;animation:gf-tiltR 1.4s infinite ease-in-out!important}
        `}</style>
        <defs>
          <linearGradient id="al" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a5a7a" />
            <stop offset="100%" stopColor="#1e2d4e" />
          </linearGradient>
          <linearGradient id="ad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a2540" />
            <stop offset="100%" stopColor="#0a1228" />
          </linearGradient>
          <linearGradient id="as" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a3858" />
            <stop offset="100%" stopColor="#080e1e" />
          </linearGradient>
          <radialGradient id="asg" cx="32%" cy="28%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#e0e8f8" />
            <stop offset="100%" stopColor="#9aaac8" />
          </radialGradient>
          <filter id="ash" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="6" stdDeviation="6" floodColor="#00000040" />
          </filter>
        </defs>

        <g>
          <polygon points="90,290 126,270 162,290 126,310" fill="url(#al)" />
          <polygon points="90,290 126,310 126,350 90,330" fill="url(#as)" />
          <polygon points="126,310 162,290 162,330 126,350" fill="url(#ad)" />
          <polygon points="90,250 126,230 162,250 126,270" fill="url(#al)" />
          <polygon points="90,250 126,270 126,310 90,290" fill="url(#as)" />
          <polygon points="126,270 162,250 162,290 126,310" fill="url(#ad)" />
          <polygon points="90,210 126,190 162,210 126,230" fill="url(#al)" />
          <polygon points="90,210 126,230 126,270 90,250" fill="url(#as)" />
          <polygon points="126,230 162,210 162,250 126,270" fill="url(#ad)" />
          <polygon points="90,170 126,150 162,170 126,190" fill="url(#al)" />
          <polygon points="90,170 126,190 126,230 90,210" fill="url(#as)" />
          <polygon points="126,190 162,170 162,210 126,230" fill="url(#ad)" />
        </g>
        <g>
          <polygon points="162,170 198,150 234,170 198,190" fill="url(#al)" />
          <polygon points="162,170 198,190 198,230 162,210" fill="url(#as)" />
          <polygon points="198,190 234,170 234,210 198,230" fill="url(#ad)" />
          <polygon points="234,170 270,150 306,170 270,190" fill="url(#al)" />
          <polygon points="234,170 270,190 270,230 234,210" fill="url(#as)" />
          <polygon points="270,190 306,170 306,210 270,230" fill="url(#ad)" />
        </g>
        <g id="gf-cube-l">
          <polygon points="162,290 198,270 234,290 198,310" fill="url(#al)" />
          <polygon points="162,290 198,310 198,350 162,330" fill="url(#as)" />
          <polygon points="198,310 234,290 234,330 198,350" fill="url(#ad)" />
        </g>
        <g id="gf-cube-r">
          <polygon points="234,290 270,270 306,290 270,310" fill="url(#al)" />
          <polygon points="234,290 270,310 270,350 234,330" fill="url(#as)" />
          <polygon points="270,310 306,290 306,330 270,350" fill="url(#ad)" />
        </g>
        <g id="gf-ball-move">
          <g id="gf-ball-squash">
            <circle cx="198" cy="260" r="30" fill="url(#asg)" filter="url(#ash)" />
          </g>
        </g>
      </svg>
    </div>
  );
});
