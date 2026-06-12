import type React from "react";
import { cn } from "@/lib/cn";

interface MockupFrameProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export function MockupFrame({ children, className, label }: MockupFrameProps) {
  return (
    <div className={cn("genfy-mockup-frame", className)}>
      <div className="genfy-mockup-topbar" aria-hidden>
        <span />
        <span />
        <span />
        {label && <strong>{label}</strong>}
      </div>
      <div className="genfy-mockup-body">{children}</div>
    </div>
  );
}
