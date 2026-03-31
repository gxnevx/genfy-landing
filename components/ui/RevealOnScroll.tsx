"use client";

import { cn } from "@/lib/cn";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  threshold = 0.15,
}: RevealOnScrollProps) {
  const [ref, isVisible] = useIntersectionObserver(threshold);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
