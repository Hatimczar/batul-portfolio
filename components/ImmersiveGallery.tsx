"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";

const SLIDE_DURATION = 6000;

type CubicBezier = [number, number, number, number];
const ease: CubicBezier = [0.25, 0.1, 0.25, 1];
const easeOut: CubicBezier = [0.0, 0.0, 0.2, 1];

const imageVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    scale: 1.1,
    x: dir > 0 ? 60 : -60,
    filter: "blur(8px)",
  }),
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: easeOut },
  },
  exit: (dir: number) => ({
    opacity: 0,
    scale: 0.94,
    x: dir > 0 ? -60 : 60,
    filter: "blur(4px)",
    transition: { duration: 0.7, ease },
  }),
};

const textVariants = {
  enter: { opacity: 0, y: 32, filter: "blur(4px)" },
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.35, ease },
  },
  exit: { opacity: 0, y: -20, filter: "blur(4px)", transition: { duration: 0.4 } },
};

export default function ImmersiveGallery({ projects }: { projects: Project[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(goNext, SLIDE_DURATION);
    return () => clearInterval(t);
  }, [goNext, paused]);

  const project = projects[current];

  return (
    <section
      className="relative h-screen overflow-hidden cursor-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-cursor="gallery"
    >
      {/* ── Background image ── */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={`img-${current}`}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Cinematic gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0906]/90 via-[#0A0906]/15 to-[#0A0906]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0906]/30 via-transparent to-transparent pointer-events-none" />

      {/* ── Progress bars ── */}
      <div className="absolute top-0 left-0 right-0 flex gap-0.5 z-10 pointer-events-none">
        {projects.map((_, i) => (
          <div key={i} className="h-[1px] flex-1 bg-white/[0.12] overflow-hidden">
            {i === current && !paused && (
              <motion.div
                className="h-full bg-[#C9A96E]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                key={`bar-${current}`}
              />
            )}
            {i < current && (
              <div className="h-full bg-white/30 w-full" />
            )}
          </div>
        ))}
      </div>

      {/* ── Section label ── */}
      <div className="absolute top-8 left-8 md:left-14 flex items-center gap-5 z-10">
        <span className="h-px w-6 bg-white/25" />
        <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-white/35">
          Selected Work
        </span>
      </div>

      {/* ── Project info card ── */}
      <div className="absolute bottom-20 left-8 md:left-14 z-10 max-w-[380px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <p className="text-[9px] tracking-[0.55em] uppercase font-sans text-[#C9A96E] mb-4 flex items-center gap-3">
              <span className="h-px w-5 bg-[#C9A96E]" />
              {project.category}
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] text-[#F5F2EE] leading-tight mb-3">
              {project.name}
            </h2>
            <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-white/35 mb-8">
              {project.location}
              {project.building && ` · ${project.building}`}
            </p>
            <Link
              href={`/projects/${project.slug}`}
              className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-sans text-white/50 hover:text-[#C9A96E] transition-colors duration-300"
            >
              View Project
              <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
              <ArrowRight size={10} />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Arrow navigation ── */}
      <div className="absolute bottom-20 right-8 md:right-14 z-10 flex items-center gap-5">
        <button
          onClick={goPrev}
          aria-label="Previous project"
          className="flex items-center justify-center w-12 h-12 border border-white/[0.12] text-white/40 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
        >
          <ArrowLeft size={14} />
        </button>
        <span className="font-display text-[clamp(1.5rem,3vw,2rem)] text-white/[0.06] tabular-nums select-none">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="text-[10px] text-white/20 font-sans">/</span>
        <span className="font-sans text-[10px] text-white/20 tabular-nums">
          {String(projects.length).padStart(2, "0")}
        </span>
        <button
          onClick={goNext}
          aria-label="Next project"
          className="flex items-center justify-center w-12 h-12 border border-white/[0.12] text-white/40 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
        >
          <ArrowRight size={14} />
        </button>
      </div>

      {/* ── Vertical dot navigation ── */}
      <div className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2.5">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`rounded-full transition-all duration-400 ${
              i === current
                ? "w-px h-8 bg-[#C9A96E]"
                : "w-px h-2 bg-white/20 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
