"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { getFeaturedProjects, getAllProjects, type Project } from "@/lib/projects";

const featured = getFeaturedProjects();
const all = getAllProjects();

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yLeft = useTransform(scrollYProgress, [0, 1], ["7%", "-7%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  const imgB = project.galleryImages[0] ?? project.heroImage;

  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <section ref={ref} className="relative h-[100svh] overflow-hidden">

        {/* Mobile: single image + gradient */}
        <div className="md:hidden absolute inset-0">
          <motion.div style={{ y: yLeft }} className="absolute inset-[-8%]">
            <Image
              src={project.heroImage}
              alt={project.name}
              fill
              className="object-cover"
              sizes="100vw"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>

        {/* Desktop: split two images */}
        <div className="hidden md:flex absolute inset-0">
          <div className="relative flex-1 overflow-hidden">
            <motion.div style={{ y: yLeft }} className="absolute inset-[-8%]">
              <Image
                src={project.heroImage}
                alt={project.name}
                fill
                className="object-cover"
                sizes="50vw"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          </div>
          <div className="relative flex-1 overflow-hidden">
            <motion.div style={{ y: yRight }} className="absolute inset-[-8%]">
              <Image
                src={imgB}
                alt={`${project.name} — detail`}
                fill
                className="object-cover"
                sizes="50vw"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          </div>
        </div>

        {/* Liquid glass info card */}
        <div className="absolute inset-0 flex items-end md:items-center justify-center px-6 pb-14 md:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
            className="liquid-glass-dark w-full max-w-[500px] px-7 py-6"
          >
            <div className="flex items-start justify-between mb-5">
              <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.6rem)] text-white leading-none">
                {project.name}
              </h2>
              <ArrowUpRight size={18} className="text-[#C9A96E] shrink-0 mt-1.5 ml-4" />
            </div>
            <div className="h-px w-full bg-white/10 mb-4" />
            <div className="flex items-center justify-between">
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/50">
                {project.location}
              </span>
              <div className="text-right">
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/35">
                  {project.category}
                </p>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#C9A96E] mt-0.5">
                  {project.year === "Needs Clarification" ? "—" : project.year}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Link>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden">
        <motion.div style={{ scale: heroScale, y: heroY }} className="absolute inset-0">
          <Image
            src="/images/gita/02_modern_luxury_living_room_design.png"
            alt="Interior by Batul Champeli"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative h-full flex flex-col items-center justify-center text-center text-white px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[11px] tracking-[0.35em] uppercase font-sans mb-6 text-white/70"
          >
            Mumbai, India
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-display text-[clamp(3rem,10vw,8rem)] leading-none tracking-wide mb-4"
          >
            Batul Champeli
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-[11px] tracking-[0.4em] uppercase font-sans text-white/70"
          >
            Interior Designer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-white/50">
              Scroll
            </span>
            <ArrowDown size={14} className="text-white/50 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── PROJECT PANELS — MERSI STYLE ──────────────────────── */}
      {featured.map((project, i) => (
        <ProjectPanel key={project.slug} project={project} index={i} />
      ))}

      {/* ── ALL PROJECTS CTA ──────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#1A1A18]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-3">
              Full Portfolio
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-[#F5F2EE] leading-tight">
              {all.length} Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-4 text-[#F5F2EE] border border-[#F5F2EE]/20 hover:border-[#C9A96E] px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans transition-colors duration-300"
          >
            View All Projects
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
