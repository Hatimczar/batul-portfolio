"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";

function labelFromSrc(src: string): string {
  const filename = src.split("/").pop()?.split(".")[0] ?? "";
  return filename
    .replace(/^\d+_?/, "")
    .replace(/_/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 4)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function WalkthroughSlide({
  src,
  label,
  index,
  total,
  scrollYProgress,
}: {
  src: string;
  label: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const t = Math.min(0.12, 1 / total / 2);

  const isFirst = index === 0;
  const isLast = index === total - 1;

  const inputOpacity = isFirst
    ? [0, end - t, end]
    : [start, start + t, end - t, end];
  const outputOpacity = isFirst
    ? [1, 1, total === 1 ? 1 : 0]
    : [0, 1, 1, isLast ? 1 : 0];

  const opacity = useTransform(scrollYProgress, inputOpacity, outputOpacity);
  const scale = useTransform(scrollYProgress, [start, end], [1.08, 1.0]);
  const imgY = useTransform(scrollYProgress, [start, end], ["-6%", "6%"]);

  const textOpacity = useTransform(
    scrollYProgress,
    isFirst
      ? [0, 0.01, end - t * 0.8, end]
      : [start, start + t * 0.6, end - t * 0.8, end],
    [1, 1, 1, 0]
  );
  const textY = useTransform(
    scrollYProgress,
    isFirst ? [0, end] : [start, end],
    ["0px", "-16px"]
  );

  return (
    <motion.div className="absolute inset-0" style={{ opacity, zIndex: index }}>
      {/* Parallax image layer */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ scale }}>
        <motion.div className="absolute inset-[-5%]" style={{ y: imgY }}>
          <Image
            src={src}
            alt={label}
            fill
            className="object-cover"
            sizes="100vw"
            priority={isFirst}
          />
        </motion.div>
      </motion.div>

      {/* Cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0906]/85 via-[#0A0906]/10 to-[#0A0906]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0906]/30 via-transparent to-transparent pointer-events-none" />

      {/* Architectural label — bottom left */}
      <motion.div
        className="absolute bottom-20 left-8 md:left-16 z-10"
        style={{ opacity: textOpacity, y: textY }}
      >
        <p className="text-[9px] tracking-[0.55em] uppercase font-sans text-[#C9A96E] mb-3 flex items-center gap-3">
          <span className="h-px w-6 bg-[#C9A96E]" />
          Interior
        </p>
        <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.6rem)] text-[#F5F2EE] leading-tight max-w-xs">
          {label}
        </h3>
      </motion.div>

      {/* Frame number — bottom right */}
      <motion.div
        className="absolute bottom-20 right-8 md:right-16 z-10 text-right"
        style={{ opacity: textOpacity }}
      >
        <span className="font-display text-[clamp(3rem,8vw,5.5rem)] text-white/[0.06] leading-none select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectWalkthrough({
  images,
  projectName,
}: {
  images: { src: string; label?: string }[];
  projectName: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setCurrentIdx(
      Math.min(images.length - 1, Math.floor(v * images.length))
    );
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (images.length === 0) return null;

  return (
    <section>
      {/* Section header */}
      <div className="bg-[#0A0906] px-8 md:px-16 py-8 flex items-center justify-between border-b border-white/[0.06]">
        <div className="flex items-center gap-5">
          <span className="h-px w-8 bg-[#C9A96E]" />
          <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-white/40">
            Walkthrough
          </span>
        </div>
        <span className="font-sans text-[10px] tracking-[0.3em] text-white/20">
          {images.length} VIEWS
        </span>
      </div>

      {/* Scroll container — creates scroll space */}
      <div ref={containerRef} style={{ height: `${images.length * 100}vh` }}>
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0A0906]">
          {/* Image slides */}
          {images.map((img, i) => (
            <WalkthroughSlide
              key={img.src + i}
              src={img.src}
              label={img.label ?? labelFromSrc(img.src)}
              index={i}
              total={images.length}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* Top-left: project name */}
          <div className="absolute top-8 left-8 md:left-16 z-20 flex items-center gap-4 pointer-events-none">
            <span className="h-px w-5 bg-white/20" />
            <span className="text-[9px] tracking-[0.4em] uppercase font-sans text-white/30">
              {projectName}
            </span>
          </div>

          {/* Top-right: counter */}
          <div className="absolute top-8 right-8 md:right-16 z-20 pointer-events-none">
            <span className="font-sans text-[11px] tracking-[0.2em] text-white/30 tabular-nums">
              {String(currentIdx + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>
          </div>

          {/* Gold progress bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.06] z-20">
            <motion.div
              className="h-full bg-[#C9A96E]"
              style={{ width: progressWidth }}
            />
          </div>

          {/* Vertical scroll hint */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
            <div className="h-8 w-px bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full bg-[#C9A96E]/60"
                style={{ height: progressWidth }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
