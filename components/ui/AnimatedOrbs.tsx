import { memo } from "react";

export const AnimatedOrbs = memo(function AnimatedOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute top-[5%] left-[8%] w-[600px] h-[600px] rounded-full blur-[40px] animate-orb-float-1"
        style={{ background: "radial-gradient(circle, var(--nx-orb1) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full blur-[50px] animate-orb-float-2"
        style={{ background: "radial-gradient(circle, var(--nx-orb2) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[450px] h-[450px] rounded-full blur-[60px] animate-orb-float-3"
        style={{ background: "radial-gradient(circle, var(--nx-orb3) 0%, transparent 70%)" }}
      />
    </div>
  );
});
