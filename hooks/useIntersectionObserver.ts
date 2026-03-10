"use client";

import { useCallback, useRef, useState } from "react";

export function useIntersectionObserver(
  threshold = 0.15,
  once = true
): [(node: HTMLDivElement | null) => void, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback(
    (node: HTMLDivElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (!node) return;

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observerRef.current?.disconnect();
          } else if (!once) {
            setIsVisible(false);
          }
        },
        { threshold }
      );
      observerRef.current.observe(node);
    },
    [threshold, once]
  );

  return [ref, isVisible];
}
