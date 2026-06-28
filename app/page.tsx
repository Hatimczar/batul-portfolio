"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { getFeaturedProjects, getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

const featured = getFeaturedProjects();
const all = getAllProjects();

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
      <section
        ref={heroRef}
        className="relative h-screen min-h-[600px] overflow-hidden"
      >
        <motion.div
          style={{ scale: heroScale, y: heroY }}
          className="absolute inset-0"
        >
          <Image
            src="/images/gita/57dc177d-3eb0-4b87-8148-33b3380aaa2a.jpg"
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

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="font-display text-[clamp(1.8rem,4vw,3.2rem)] leading-snug text-[#1A1A18]"
              >
                Every space begins with a conversation — and ends with a home
                that feels entirely its own.
              </motion.p>
            </div>
            <div className="md:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="font-sans text-[15px] leading-relaxed text-[#8C7B6B]"
              >
                Interior designer based in Mumbai, working across residential,
                commercial, and renovation projects. Specialising in thoughtful
                space planning, material selection, and end-to-end execution —
                from concept to handover.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="mt-8"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-sans text-[#1A1A18] border-b border-[#C9A96E] pb-1 hover:text-[#C9A96E] transition-colors duration-300"
                >
                  About Batul <ArrowRight size={12} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────────── */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-6 mb-16"
          >
            <span className="h-px w-12 bg-[#C9A96E]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B]">
              Featured Projects
            </span>
          </motion.div>

          {/* Large hero project */}
          {featured[0] && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="mb-20"
            >
              <Link
                href={`/projects/${featured[0].slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden aspect-[16/9] bg-[#E8E4DF] mb-6">
                  <Image
                    src={featured[0].heroImage}
                    alt={featured[0].name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-[#1A1A18]/0 group-hover:bg-[#1A1A18]/15 transition-colors duration-500" />
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight group-hover:text-[#C9A96E] transition-colors duration-300">
                      {featured[0].name}
                    </h2>
                    <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#8C7B6B] mt-2">
                      {featured[0].type} · {featured[0].location},{" "}
                      {featured[0].building}
                    </p>
                  </div>
                  <span className="shrink-0 text-[11px] tracking-[0.2em] uppercase font-sans text-[#C9A96E] border-b border-[#C9A96E] pb-1 inline-flex items-center gap-2">
                    View Project <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Two-column featured */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {featured.slice(1).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL PROJECTS CTA ──────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-[#1A1A18]">
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
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </section>

      {/* ── PHILOSOPHY ────────────────────────────────────────── */}
      <section className="py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative aspect-[3/4] bg-[#E8E4DF] overflow-hidden"
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
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-8">
                Philosophy
              </p>
              <blockquote className="font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-snug text-[#1A1A18] mb-10">
                &ldquo;Successful interiors are created through a balance of
                functionality, aesthetics, and attention to detail.&rdquo;
              </blockquote>
              <p className="font-sans text-[15px] leading-relaxed text-[#8C7B6B] mb-10">
                Every project begins with understanding the client&apos;s
                lifestyle and requirements, followed by thoughtful planning,
                material selection, and careful execution to create spaces that
                are both practical and visually engaging.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-sans bg-[#1A1A18] text-[#F5F2EE] px-8 py-4 hover:bg-[#C9A96E] transition-colors duration-300"
              >
                Start a Project <ArrowRight size={12} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
