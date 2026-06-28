"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { DrawingImage } from "@/lib/projects";

export default function ProjectSlider({ slides }: { slides: DrawingImage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const total = slides.length;

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement;
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setCurrent(index);
  }, []);

  const prev = () => scrollTo(Math.max(0, current - 1));
  const next = () => scrollTo(Math.min(total - 1, current + 1));

  // Keep current in sync with scroll position
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const w = track.clientWidth;
      const idx = Math.round(track.scrollLeft / w);
      setCurrent(Math.min(Math.max(idx, 0), total - 1));
      // Hide swipe hint once user has swiped
      if (track.scrollLeft > 20) setShowHint(false);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [total]);

  // Auto-hide swipe hint after 2.5s
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 2500);
    return () => clearTimeout(t);
  }, []);

  if (total === 0) return null;

  return (
    <div className="relative bg-[#1A1A18] select-none">
      {/* Track */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="flex-shrink-0 w-full snap-start flex items-center justify-center"
            style={{ minHeight: "60vh" }}
          >
            <div className="relative w-full" style={{ minHeight: "60vh" }}>
              <Image
                src={slide.src}
                alt={slide.label}
                fill
                className="object-contain"
                sizes="100vw"
                loading={i === 0 ? "eager" : "lazy"}
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Swipe hint — mobile only, fades out */}
      {total > 1 && (
        <div
          className={`md:hidden absolute inset-0 pointer-events-none flex items-center justify-center transition-opacity duration-700 ${showHint ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-full px-5 py-2.5">
            <ChevronLeft size={14} className="text-white/80" />
            <span className="text-[11px] tracking-[0.2em] uppercase font-sans text-white/80">Swipe</span>
            <ChevronRight size={14} className="text-white/80" />
          </div>
        </div>
      )}

      {/* Bottom bar: label + counter + arrows */}
      <div className="flex items-center justify-between px-5 md:px-12 py-4 border-t border-white/10">
        <p className="font-sans text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-white/60 truncate pr-3">
          {slides[current]?.label}
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-sans text-[11px] text-white/40 tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous"
            className="w-10 h-10 md:w-9 md:h-9 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-white/50 active:bg-white/10 disabled:opacity-20 transition-all duration-200"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            disabled={current === total - 1}
            aria-label="Next"
            className="w-10 h-10 md:w-9 md:h-9 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-white/50 active:bg-white/10 disabled:opacity-20 transition-all duration-200"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Dot indicators (only up to 20 dots) */}
      {total <= 20 && (
        <div className="flex justify-center gap-1.5 pb-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-px transition-all duration-300 ${
                i === current
                  ? "w-6 bg-[#C9A96E]"
                  : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
