"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "hover" | "gallery" | "drag";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<CursorMode>("default");
  const [hidden, setHidden] = useState(false);
  const pos = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setHidden(false);

      const t = e.target as HTMLElement;
      const closest = t.closest("[data-cursor]") as HTMLElement | null;
      if (closest) {
        setMode(closest.dataset.cursor as CursorMode);
      } else if (t.closest("a, button, [role='button']")) {
        setMode("hover");
      } else {
        setMode("default");
      }
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const animate = () => {
      // Dot: instant snap
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;
      }
      // Ring: lerp behind
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        const size =
          mode === "hover" ? 52
          : mode === "gallery" || mode === "drag" ? 80
          : 34;
        ringRef.current.style.transform = `translate(${ring.current.x - size / 2}px, ${ring.current.y - size / 2}px)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf.current);
    };
  }, [mode]);

  const isGallery = mode === "gallery" || mode === "drag";
  const isHover = mode === "hover";

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: isGallery ? "#C9A96E" : isHover ? "#C9A96E" : "#C9A96E",
          opacity: hidden ? 0 : 1,
          transition: "opacity 0.3s, background-color 0.2s",
          willChange: "transform",
          boxShadow: "0 0 8px rgba(201,169,110,0.6)",
        }}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{
          borderRadius: "50%",
          border: `1px solid ${isGallery ? "rgba(201,169,110,0.5)" : isHover ? "rgba(201,169,110,0.6)" : "rgba(201,169,110,0.25)"}`,
          backgroundColor: isHover ? "rgba(201,169,110,0.08)" : "transparent",
          opacity: hidden ? 0 : 1,
          transition:
            "width 0.4s cubic-bezier(0.25,0.1,0.25,1), height 0.4s cubic-bezier(0.25,0.1,0.25,1), border-color 0.3s, background-color 0.3s, opacity 0.3s",
          willChange: "transform, width, height",
          backdropFilter: isHover ? "blur(2px)" : "none",
        }}
      />

      {/* Label for gallery/drag mode */}
      {isGallery && (
        <div
          ref={labelRef}
          className="fixed top-0 left-0 z-[9997] pointer-events-none hidden md:flex items-center justify-center"
          style={{
            width: 80,
            height: 80,
            marginLeft: -40,
            marginTop: -40,
            opacity: hidden ? 0 : 1,
            transition: "opacity 0.3s",
          }}
        >
          <span
            className="font-sans text-[8px] tracking-[0.3em] uppercase text-[#C9A96E]"
          >
            {mode === "drag" ? "drag" : "view"}
          </span>
        </div>
      )}
    </>
  );
}
