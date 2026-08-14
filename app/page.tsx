"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getAllProjects } from "@/lib/projects";
import ImmersiveGallery from "@/components/ImmersiveGallery";

const all = getAllProjects();

/* ── Character-reveal text ──────────────────────────────────────── */
function SplitReveal({
  text,
  className,
  delay = 0,
  tag: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "p" | "span";
}) {
  return (
    <Tag className={className} aria-label={text}>
      {text.split("").map((char, i) =>
        char === " " ? (
          <span key={i} style={{ display: "inline-block", width: "0.28em" }} />
        ) : (
          <span key={i} style={{ display: "inline-block", overflow: "hidden" }}>
            <span
              style={{
                display: "inline-block",
                animation: "charReveal 0.75s cubic-bezier(0.22, 1, 0.36, 1) both",
                animationDelay: `${delay + i * 0.025}s`,
              }}
            >
              {char}
            </span>
          </span>
        )
      )}
    </Tag>
  );
}

/* ── Stat counter ────────────────────────────────────────────────── */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col gap-1"
    >
      <span className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#F5F2EE] leading-none">
        {value}
      </span>
      <span className="text-[9px] tracking-[0.45em] uppercase font-sans text-white/30">
        {label}
      </span>
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    // Mouse parallax on hero image — desktop only
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const img = heroImgRef.current;
    if (!img) return;
    let rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      rx = (e.clientX / window.innerWidth - 0.5) * 24;
      ry = (e.clientY / window.innerHeight - 0.5) * 16;
    };
    let raf = 0;
    let cx = 0, cy = 0;
    const tick = () => {
      cx += (rx - cx) * 0.06;
      cy += (ry - cy) * 0.06;
      img.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[640px] overflow-hidden bg-[#0A0906]"
      >
        {/* Parallax image */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ scale: heroScale, y: heroY }}
        >
          <div
            ref={heroImgRef}
            style={{
              position: "absolute",
              inset: "-4%",
              willChange: "transform",
            }}
          >
            <Image
              src="/images/gita/02_modern_luxury_living_room_design.png"
              alt="Interior by Batul Champeli"
              fill
              priority
              className="object-cover"
              sizes="115vw"
            />
          </div>
        </motion.div>

        {/* Deep cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0906] via-[#0A0906]/40 to-[#0A0906]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0906]/40 via-transparent to-transparent" />

        {/* Top-left: location */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute top-28 left-8 md:left-16 flex items-center gap-4 z-10"
        >
          <span className="h-px w-6 bg-[#C9A96E]" />
          <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-white/40">
            Mumbai, India
          </span>
        </motion.div>

        {/* Center: Main title */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10"
        >
          {/* Name */}
          <div className="overflow-hidden mb-3">
            <SplitReveal
              text="Batul Champeli"
              tag="h1"
              className="font-display text-[clamp(3.5rem,11vw,9rem)] text-[#F5F2EE] leading-none tracking-wide block"
              delay={0.3}
            />
          </div>

          {/* Sub-label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-5 mt-5"
          >
            <span className="h-px w-10 bg-white/20" />
            <span className="text-[10px] tracking-[0.5em] uppercase font-sans text-white/50">
              Interior Designer
            </span>
            <span className="h-px w-10 bg-white/20" />
          </motion.div>
        </motion.div>

        {/* Bottom-right: scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-10 right-8 md:right-16 z-10 flex flex-col items-center gap-3"
        >
          <span
            className="text-[8px] tracking-[0.5em] uppercase font-sans text-white/25"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <motion.div
            className="w-px bg-white/20 overflow-hidden"
            style={{ height: 48 }}
          >
            <motion.div
              className="w-full bg-[#C9A96E]"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.2, delay: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── DARK STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-[#0A0906] border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            <Stat value="08" label="Projects Delivered" />
            <Stat value="02+" label="Years Active" />
            <Stat value="Mumbai" label="Base" />
            <Stat value="End-to-End" label="Approach" />
          </div>
        </div>
      </section>

      {/* ── INTRO — EDITORIAL DARK ───────────────────────────────── */}
      <section className="bg-[#0A0906] py-20 md:py-36 px-8 md:px-16 border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Left: quote */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-5 mb-10">
              <span className="h-px w-8 bg-[#C9A96E]" />
              <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E]/60">
                Philosophy
              </span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-[clamp(1.8rem,4vw,3.2rem)] leading-snug text-[#F5F2EE]"
            >
              Every space begins with a conversation — and ends with a home
              that feels entirely its own.
            </motion.p>
          </div>

          {/* Right: bio + link */}
          <div className="md:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-sans text-[15px] leading-[1.85] text-white/45 mb-10"
            >
              Interior designer based in Mumbai, working across residential,
              commercial, and renovation projects. Specialising in thoughtful
              space planning, material selection, and end-to-end execution —
              from concept to handover.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-sans text-[#F5F2EE]/60 hover:text-[#C9A96E] transition-colors duration-300"
              >
                About Batul
                <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
                <ArrowRight size={11} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── IMMERSIVE GALLERY ─────────────────────────────────────── */}
      <ImmersiveGallery projects={all.slice(0, 6)} />

      {/* ── ALL PROJECTS CTA ──────────────────────────────────────── */}
      <section className="bg-[#0A0906] py-20 md:py-28 px-8 md:px-16 border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[9px] tracking-[0.5em] uppercase font-sans text-white/25 mb-4"
            >
              Full Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#F5F2EE] leading-none"
            >
              {all.length} Projects
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-5 text-[#F5F2EE]/60 border border-white/[0.12] hover:border-[#C9A96E] hover:text-[#C9A96E] px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-sans transition-all duration-400"
            >
              View All Projects
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY — LIGHT BREAK ─────────────────────────────── */}
      <section className="py-20 md:py-36 px-8 md:px-16 bg-[#F5F2EE] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src="/images/gita/4bd4102e-851d-48a7-8f6d-ce92df999c1e.jpg"
                alt="Design detail"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center gap-5 mb-10">
                <span className="h-px w-8 bg-[#C9A96E]" />
                <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#8C7B6B]">
                  Design Approach
                </span>
              </div>
              <blockquote className="font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-snug text-[#1A1A18] mb-10">
                &ldquo;Successful interiors are created through a balance of
                functionality, aesthetics, and attention to detail.&rdquo;
              </blockquote>
              <p className="font-sans text-[15px] leading-[1.85] text-[#8C7B6B] mb-12">
                Every project begins with understanding the client&apos;s
                lifestyle and requirements, followed by thoughtful planning,
                material selection, and careful execution to create spaces that
                are both practical and visually engaging.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-sans bg-[#1A1A18] text-[#F5F2EE] px-10 py-5 hover:bg-[#C9A96E] transition-colors duration-400"
              >
                Start a Project
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
