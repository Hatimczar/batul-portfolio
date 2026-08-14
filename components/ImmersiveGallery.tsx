"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import TiltCard from "./TiltCard";

const SLIDE_DURATION = 6000;

type CubicBezier = [number, number, number, number];
const ease: CubicBezier = [0.25, 0.1, 0.25, 1];

const imageVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    scale: 1.06,
    x: dir > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, ease },
  },
  exit: (dir: number) => ({
    opacity: 0,
    scale: 0.96,
    x: dir > 0 ? -40 : 40,
    transition: { duration: 0.6, ease },
  }),
};

const textVariants = {
  enter: { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3, ease } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.4 } },
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
      className="relative h-screen overflow-hidden cursor-none group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35 pointer-events-none" />

      {/* ── Progress bars ── */}
      <div className="absolute top-0 left-0 right-0 flex gap-1 px-6 md:px-14 pt-24 z-10 pointer-events-none">
        {projects.map((_, i) => (
          <div
            key={i}
            className="h-[2px] flex-1 bg-white/20 overflow-hidden rounded-full"
          >
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
              <div className="h-full bg-white/50 w-full" />
            )}
          </div>
        ))}
      </div>

      {/* ── Section label ── */}
      <div className="absolute top-24 left-6 md:left-14 flex items-center gap-4 z-10">
        <span className="h-px w-8 bg-white/40" />
        <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-white/50">
          Selected Work
        </span>
      </div>

      {/* ── Project info card ── */}
      <div className="absolute bottom-16 left-6 md:left-14 z-10 max-w-[340px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <TiltCard
              className="glass-dark rounded-2xl p-6 md:p-8"
              max={6}
              glare={true}
              maxGlare={0.06}
              scale={1.01}
            >
              <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#C9A96E] mb-3">
                {project.category}
              </p>
              <h2 className="font-display text-[1.6rem] md:text-[2rem] text-white leading-tight mb-2">
                {project.name}
              </h2>
              <p className="font-sans text-[12px] tracking-[0.12em] uppercase text-white/55 mb-6">
                {project.location}
                {project.building && ` · ${project.building}`}
              </p>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-sans text-white/70 border-b border-white/25 pb-1 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors duration-300"
              >
                View Project <ArrowRight size={11} />
              </Link>
            </TiltCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Navigation ── */}
      <div className="absolute bottom-16 right-6 md:right-14 z-10 flex items-center gap-5">
        <button
          onClick={goPrev}
          aria-label="Previous project"
          className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white/60 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
        >
          <ArrowLeft size={15} />
        </button>
        <span className="font-sans text-[11px] text-white/40 tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
        <button
          onClick={goNext}
          aria-label="Next project"
          className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white/60 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
        >
          <ArrowRight size={15} />
        </button>
      </div>

      {/* ── Dot navigation ── */}
      <div className="absolute right-6 md:right-14 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-1.5 h-5 bg-[#C9A96E]"
                : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
