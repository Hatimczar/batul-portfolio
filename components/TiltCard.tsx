"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  max?: number;
  perspective?: number;
  glare?: boolean;
  maxGlare?: number;
  scale?: number;
  speed?: number;
  disabled?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  max = 7,
  perspective = 1000,
  glare = true,
  maxGlare = 0.08,
  scale = 1.02,
  speed = 400,
  disabled = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled || !ref.current) return;

    // Only on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    let el: HTMLElement | null = ref.current;
    import("vanilla-tilt").then(({ default: VanillaTilt }) => {
      if (!el) return;
      VanillaTilt.init(el, {
        max,
        speed,
        glare,
        "max-glare": maxGlare,
        perspective,
        scale,
        easing: "cubic-bezier(.03,.98,.52,.99)",
      });
    });

    return () => {
      (el as any)?.vanillaTilt?.destroy();
      el = null;
    };
  }, [disabled, max, speed, glare, maxGlare, perspective, scale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
