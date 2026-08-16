"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getAllProjects } from "@/lib/projects";
import ImmersiveGallery from "@/components/ImmersiveGallery";

const all = getAllProjects();

const metrics = [
  { value: "08", label: "Projects\nDelivered" },
  { value: "02+", label: "Years\nActive" },
  { value: "Mumbai", label: "Base of\nOperations" },
  { value: "100%", label: "End-to-End\nApproach" },
];

const METRIC_BORDERS = [
  "border-r border-b border-white/[0.06] md:border-b-0",
  "border-b border-white/[0.06] md:border-r md:border-b-0",
  "border-r border-white/[0.06]",
  "",
];

const process = [
  {
    num: "01",
    title: "Discovery",
    desc: "Client brief, lifestyle goals, and spatial requirements define the foundation.",
  },
  {
    num: "02",
    title: "Concept",
    desc: "Moodboarding, material palette, and space planning bring the vision to life.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Working drawings, specifications, and full procurement coordination.",
  },
  {
    num: "04",
    title: "Delivery",
    desc: "Site supervision, installation, and final handover — start to finish.",
  },
];

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
  const words = text.split(" ");
  let globalIdx = 0;
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, wi) => {
        const wordStart = globalIdx;
        globalIdx += word.length + 1;
        return (
          <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {wi > 0 && <span style={{ display: "inline-block", width: "0.28em" }} />}
            {word.split("").map((char, ci) => (
              <span key={ci} style={{ display: "inline-block", overflow: "hidden" }}>
                <span
                  style={{
                    display: "inline-block",
                    animation: "charReveal 0.75s cubic-bezier(0.22, 1, 0.36, 1) both",
                    animationDelay: `${delay + (wordStart + ci) * 0.025}s`,
                  }}
                >
                  {char}
                </span>
              </span>
            ))}
          </span>
        );
      })}
    </Tag>
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

  /* Mouse parallax on hero image — desktop only */
  useEffect(() => {
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

  /* Scroll reveal via IntersectionObserver */
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
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
            style={{ position: "absolute", inset: "-4%", willChange: "transform" }}
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

        {/* Cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0906] via-[#0A0906]/40 to-[#0A0906]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0906]/40 via-transparent to-transparent" />

        {/* Top-left: location */}
        <div
          className="absolute top-28 left-8 md:left-16 flex items-center gap-4 z-10"
          style={{ animation: "fadeInUp 1s cubic-bezier(0.25,0.1,0.25,1) 0.2s both" }}
        >
          <span className="h-px w-6 bg-[#C9A96E]" />
          <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-white/40">
            Mumbai, India
          </span>
        </div>

        {/* Center: title */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10"
        >
          <div className="mb-3">
            <SplitReveal
              text="Batul Champeli"
              tag="h1"
              className="font-display text-[clamp(2.6rem,11vw,9rem)] text-[#F5F2EE] leading-none tracking-wide block"
              delay={0.3}
            />
          </div>
          <div
            className="flex items-center gap-5 mt-5"
            style={{ animation: "fadeInUp 1s cubic-bezier(0.25,0.1,0.25,1) 1.1s both" }}
          >
            <span className="h-px w-10 bg-white/20" />
            <span className="text-[10px] tracking-[0.5em] uppercase font-sans text-white/50">
              Interior Designer
            </span>
            <span className="h-px w-10 bg-white/20" />
          </div>
        </motion.div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-10 right-8 md:right-16 z-10 flex flex-col items-center gap-3"
          style={{ animation: "fadeInUp 1s ease 1.8s both" }}
        >
          <span
            className="text-[8px] tracking-[0.5em] uppercase font-sans text-white/25"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <div className="w-px bg-white/20 overflow-hidden" style={{ height: 48 }}>
            <div
              className="w-full bg-[#C9A96E]"
              style={{
                height: "100%",
                animation: "expandDown 1.2s ease 2s both",
                transformOrigin: "top",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── METRICS ───────────────────────────────────────────────── */}
      <section className="bg-[#0A0906] border-b border-white/[0.06] py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-14 md:mb-18" data-reveal>
            <span className="h-px w-8 bg-[#C9A96E]" />
            <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E]/60">
              The Studio
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
            {metrics.map(({ value, label }, i) => (
              <div
                key={i}
                className={[
                  METRIC_BORDERS[i],
                  i > 0 ? "md:pl-12" : "",
                  i < 3 ? "md:pr-12" : "",
                ].filter(Boolean).join(" ")}
                data-reveal
                data-reveal-delay={i > 0 ? String(i) : undefined}
              >
                <div className="font-display text-[clamp(2.8rem,4.5vw,4.8rem)] text-[#F5F2EE] leading-none mb-5">
                  {value}
                </div>
                <div className="text-[8px] tracking-[0.52em] uppercase font-sans text-white/25 whitespace-pre-line leading-relaxed">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO — LEFT EDITORIAL ────────────────────────────────── */}
      <section className="bg-[#0A0906] py-28 md:py-44 px-8 md:px-16 border-b border-white/[0.06] relative overflow-hidden">
        {/* Ghost section number */}
        <div
          aria-hidden
          className="absolute top-0 right-8 md:right-16 font-display leading-none select-none pointer-events-none text-white/[0.028]"
          style={{ fontSize: "clamp(9rem, 22vw, 24rem)" }}
        >
          01
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 md:gap-20 items-end relative">
          {/* Left: eyebrow + quote */}
          <div className="md:col-span-8 mb-12 md:mb-0">
            <div className="flex items-center gap-4 mb-12" data-reveal>
              <span className="h-px w-8 bg-[#C9A96E]" />
              <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E]/60">
                Philosophy
              </span>
            </div>
            <p
              className="font-display text-[clamp(1.9rem,4vw,3.6rem)] leading-snug text-[#F5F2EE]"
              data-reveal
              data-reveal-delay="1"
            >
              Every space begins with a conversation — and ends with a home
              that feels entirely its own.
            </p>
          </div>

          {/* Right: bio + cta */}
          <div className="md:col-span-4">
            <p
              className="font-sans text-[15px] leading-[1.85] text-white/40 mb-10"
              data-reveal
              data-reveal-delay="2"
            >
              Interior designer based in Mumbai, working across residential,
              commercial, and renovation projects. Specialising in thoughtful
              space planning, material selection, and end-to-end execution.
            </p>
            <div data-reveal data-reveal-delay="3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-sans text-[#F5F2EE]/50 hover:text-[#C9A96E] transition-colors duration-300"
              >
                About Batul
                <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
                <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMMERSIVE GALLERY ─────────────────────────────────────── */}
      <ImmersiveGallery projects={all.slice(0, 6)} />

      {/* ── PROCESS STRIP ─────────────────────────────────────────── */}
      <section className="bg-[#0A0906] border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {process.map(({ num, title, desc }, i) => (
              <div
                key={i}
                className={[
                  "py-14 md:py-16",
                  i < 3 ? "border-b border-white/[0.06] md:border-b-0 md:border-r md:pr-10" : "",
                  i > 0 ? "md:pl-10" : "",
                ].filter(Boolean).join(" ")}
                data-reveal
                data-reveal-delay={i > 0 ? String(i) : undefined}
              >
                <div
                  className="font-display text-[clamp(1.8rem,2.8vw,2.6rem)] text-white/[0.1] leading-none mb-7"
                >
                  {num}
                </div>
                <div className="text-[10px] tracking-[0.32em] uppercase font-sans text-[#F5F2EE]/65 mb-4">
                  {title}
                </div>
                <p className="font-sans text-[14px] leading-[1.8] text-white/33">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#0A0906] py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div className="flex items-center gap-4 mb-8" data-reveal>
              <span className="h-px w-8 bg-[#C9A96E]" />
              <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E]/60">
                Full Portfolio
              </span>
            </div>
            <h2
              className="font-display text-[clamp(3.5rem,9vw,8rem)] text-[#F5F2EE] leading-none"
              data-reveal
              data-reveal-delay="1"
            >
              {all.length} Projects
            </h2>
          </div>

          <div className="flex-shrink-0" data-reveal data-reveal-delay="2">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-5 text-[#F5F2EE]/60 border border-white/[0.12] hover:border-[#C9A96E] hover:text-[#C9A96E] px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-sans transition-all duration-300"
            >
              View All Projects
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY — LIGHT BREAK ─────────────────────────────── */}
      <section className="bg-[#F5F2EE] py-24 md:py-44 px-8 md:px-16 relative overflow-hidden">
        {/* Ghost section number */}
        <div
          aria-hidden
          className="absolute top-0 left-8 md:left-16 font-display leading-none select-none pointer-events-none text-[#1A1A18]/[0.03]"
          style={{ fontSize: "clamp(9rem, 22vw, 24rem)" }}
        >
          02
        </div>

        <div className="max-w-[1400px] mx-auto relative">
          <div className="flex items-center gap-4 mb-16 md:mb-20" data-reveal>
            <span className="h-px w-8 bg-[#C9A96E]" />
            <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#8C7B6B]">
              Design Approach
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Image — 7 cols */}
            <div
              className="md:col-span-7 relative overflow-hidden"
              style={{ aspectRatio: "4 / 5" }}
              data-reveal
            >
              <Image
                src="/images/gita/08_modern_marble_still_life_vignette.png"
                alt="Design detail"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 58vw, 100vw"
              />
            </div>

            {/* Text — 5 cols */}
            <div className="md:col-span-5 md:pt-8">
              <blockquote
                className="font-display text-[clamp(1.5rem,2.8vw,2.6rem)] leading-snug text-[#1A1A18] mb-10"
                data-reveal
                data-reveal-delay="1"
              >
                &ldquo;Successful interiors are created through a balance of
                functionality, aesthetics, and attention to detail.&rdquo;
              </blockquote>
              <p
                className="font-sans text-[15px] leading-[1.85] text-[#8C7B6B] mb-14"
                data-reveal
                data-reveal-delay="2"
              >
                Every project begins with understanding the client&apos;s
                lifestyle and requirements, followed by thoughtful planning,
                material selection, and careful execution to create spaces that
                are both practical and visually engaging.
              </p>
              <div data-reveal data-reveal-delay="3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-sans bg-[#1A1A18] text-[#F5F2EE] px-10 py-5 hover:bg-[#C9A96E] transition-colors duration-300"
                >
                  Start a Project
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
