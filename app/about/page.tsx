"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const skills = [
  "Space Planning",
  "Residential Interior Design",
  "Technical Drafting",
  "Furniture Layout",
  "Material Selection",
  "Site Supervision",
  "Client Coordination",
  "Vendor Management",
  "Design Presentation",
  "AutoCAD",
  "SketchUp",
  "V-Ray",
];

const experience = [
  {
    role: "Interior Designer",
    company: "Kumpal & Associates",
    period: "May 2025 — Present",
    highlights: [
      "Design concept development and space planning for residential projects",
      "AutoCAD layouts, furniture plans, and execution drawings",
      "Site visits and project supervision",
      "Client, contractor, and vendor coordination",
    ],
  },
  {
    role: "Interior Designer Intern",
    company: "Rohit Bhoite Design Studio",
    period: "November 2024 — February 2025",
    highlights: [
      "Residential AutoCAD layouts and working drawings",
      "Technical drafting and documentation",
      "Design development and coordination",
    ],
  },
  {
    role: "Lighting Design Trainee",
    company: "Unilights",
    period: "July — August 2024",
    highlights: [
      "Fundamentals of architectural lighting systems",
      "DALI systems, lighting drivers, and switching",
    ],
  },
];

const education = [
  {
    degree: "Diploma in Interior Designing",
    institution: "SNDT Women's University",
    period: "2022 — 2024",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "K.C. College",
    period: "2022",
  },
];

export default function AboutPage() {
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
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <section className="bg-[#0A0906] pt-32 pb-20 px-8 md:px-16 border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-8 bg-[#C9A96E]" />
            <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E]/60">
              The Designer
            </span>
          </div>
          <h1 className="font-display text-[clamp(4rem,10vw,8rem)] leading-none text-[#F5F2EE]">
            About
          </h1>
        </div>
      </section>

      {/* ── BIO + PORTRAIT ─────────────────────────────────────── */}
      <section className="bg-[#F5F2EE] py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 items-start">
          {/* Portrait — 5 cols */}
          <div
            className="md:col-span-5 relative overflow-hidden"
            style={{ aspectRatio: "3/4" }}
            data-reveal
          >
            <Image
              src="/images/batul-portrait.jpeg"
              alt="Batul Champeli"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 42vw, 100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0906]/70 to-transparent px-8 pb-8 pt-20">
              <p className="font-display text-2xl text-white leading-none">
                Batul Champeli
              </p>
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/50 mt-2">
                Interior Designer · Mumbai
              </p>
            </div>
          </div>

          {/* Text — 7 cols */}
          <div className="md:col-span-7 md:pt-4">
            <p
              className="font-display text-[clamp(1.5rem,2.8vw,2.4rem)] leading-snug text-[#1A1A18] mb-10"
              data-reveal
              data-reveal-delay="1"
            >
              Interior designer with a passion for creating spaces that balance
              function, beauty, and personal meaning.
            </p>

            <div
              className="space-y-5 font-sans text-[15px] leading-[1.9] text-[#8C7B6B] mb-14"
              data-reveal
              data-reveal-delay="2"
            >
              <p>
                Based in Mumbai, I work across residential, commercial,
                renovation, and turnkey execution projects — bringing each
                client&apos;s vision to life through careful planning, considered
                material choices, and meticulous on-site coordination.
              </p>
              <p>
                My approach begins with listening. Before a single line is drawn,
                I invest time in understanding how a family lives, what a client
                values, and what the space needs to become. From there, the
                design process unfolds — from initial concept and space planning
                through material selection, vendor coordination, and final
                handover.
              </p>
              <p>
                Trained at SNDT Women&apos;s University and currently working with
                Kumpal &amp; Associates, I have delivered completed residential
                interiors across Bandra, Prabhadevi, Santacruz, and beyond.
              </p>
            </div>

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
      </section>

      {/* ── PHILOSOPHY ─────────────────────────────────────────── */}
      <section className="bg-[#0A0906] py-24 md:py-36 px-8 md:px-16 border-y border-white/[0.06]">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center gap-4 mb-12" data-reveal>
            <span className="h-px w-8 bg-[#C9A96E]" />
            <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E]/60">
              My Approach
            </span>
          </div>
          <blockquote
            className="font-display text-[clamp(1.7rem,3.5vw,3rem)] text-[#F5F2EE] leading-snug"
            data-reveal
            data-reveal-delay="1"
          >
            &ldquo;Successful interiors are created through a balance of
            functionality, aesthetics, and attention to detail. Every project
            begins with understanding the client&apos;s lifestyle — and ends
            with a space that is both practical and visually engaging.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────────── */}
      <section className="bg-[#F5F2EE] py-24 md:py-28 px-8 md:px-16 border-b border-[#1A1A18]/[0.06]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-3" data-reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#C9A96E]" />
              <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E]/60">
                Expertise
              </span>
            </div>
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {skills.map((skill, i) => (
                <div
                  key={skill}
                  className="flex items-center gap-4 py-4 border-b border-[#1A1A18]/[0.06]"
                  data-reveal
                  data-reveal-delay={i % 2 === 1 ? "1" : undefined}
                >
                  <span className="h-px w-4 bg-[#C9A96E] shrink-0" />
                  <span className="font-sans text-[13px] tracking-[0.15em] uppercase text-[#1A1A18]/70">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ─────────────────────────────────────────── */}
      <section className="bg-[#F5F2EE] py-24 md:py-28 px-8 md:px-16 border-b border-[#1A1A18]/[0.06]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-3" data-reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#C9A96E]" />
              <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E]/60">
                Experience
              </span>
            </div>
          </div>
          <div className="md:col-span-9">
            {experience.map((exp, i) => (
              <div
                key={exp.company}
                className="py-10 border-b border-[#1A1A18]/[0.06]"
                data-reveal
                data-reveal-delay={i > 0 ? "1" : undefined}
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="font-display text-[clamp(1.3rem,2vw,1.8rem)] text-[#1A1A18] leading-tight">
                      {exp.role}
                    </h3>
                    <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#C9A96E] mt-1.5">
                      {exp.company}
                    </p>
                  </div>
                  <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C7B6B]/50 shrink-0">
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-4 font-sans text-[14px] leading-[1.75] text-[#8C7B6B]"
                    >
                      <span className="h-px w-4 bg-[#C9A96E] mt-[10px] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ──────────────────────────────────────────── */}
      <section className="bg-[#F5F2EE] py-24 md:py-28 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-3" data-reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#C9A96E]" />
              <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E]/60">
                Education
              </span>
            </div>
          </div>
          <div className="md:col-span-9">
            {education.map((edu, i) => (
              <div
                key={edu.institution}
                className="py-10 border-b border-[#1A1A18]/[0.06] flex flex-col md:flex-row md:items-baseline md:justify-between gap-3"
                data-reveal
                data-reveal-delay={i > 0 ? "1" : undefined}
              >
                <div>
                  <h3 className="font-display text-[clamp(1.3rem,2vw,1.8rem)] text-[#1A1A18] leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C7B6B] mt-1.5">
                    {edu.institution}
                  </p>
                </div>
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C7B6B]/50 shrink-0">
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
