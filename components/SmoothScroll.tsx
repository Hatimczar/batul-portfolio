"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Don't apply Lenis on touch devices — native momentum scroll is smoother
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !isTouch,
      wheelMultiplier: 0.9,
      touchMultiplier: isTouch ? 1 : 1.8,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
