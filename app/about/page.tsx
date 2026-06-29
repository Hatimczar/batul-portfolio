"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  return (
    <>
      {/* ── HEADER ────────────────────────────────────────────── */}
      <section className="pt-28 pb-10 md:pt-36 md:pb-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-4">
            The Designer
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-[#1A1A18]">
            About
          </h1>
        </div>
      </section>

      {/* ── BIO + IMAGE ───────────────────────────────────────── */}
      <section className="pb-14 md:pb-28 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Portrait placeholder — will be replaced with Batul's photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative aspect-[3/4] bg-[#E8E4DF] overflow-hidden"
            >
              <Image
                src="/images/batul-portrait.jpeg"
                alt="Batul Champeli"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A18]/60 to-transparent p-8">
                <p className="font-display text-2xl text-white">
                  Batul Champeli
                </p>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/60 mt-1">
                  Interior Designer · Mumbai
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="pt-4 md:pt-8"
            >
              <p className="font-display text-[clamp(1.4rem,2.5vw,2rem)] leading-snug text-[#1A1A18] mb-8">
                Interior designer with a passion for creating spaces that balance
                function, beauty, and personal meaning.
              </p>

              <div className="space-y-5 font-sans text-[15px] leading-relaxed text-[#8C7B6B]">
                <p>
                  Based in Mumbai, I work across residential, commercial,
                  renovation, and turnkey execution projects — bringing each
                  client's vision to life through careful planning, considered
                  material choices, and meticulous on-site coordination.
                </p>
                <p>
                  My approach begins with listening. Before a single line is
                  drawn, I invest time in understanding how a family lives,
                  what a client values, and what the space needs to become. From
                  there, the design process unfolds — from initial concept and
                  space planning through material selection, vendor coordination,
                  and final handover.
                </p>
                <p>
                  Trained at SNDT Women's University and currently working with
                  Kumpal & Associates, I have delivered completed residential
                  interiors across Bandra, Prabhadevi, Santacruz, and beyond.
                  Each project is approached with the same commitment: to create
                  spaces that feel entirely their own.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-sans bg-[#1A1A18] text-[#F5F2EE] px-8 py-4 hover:bg-[#C9A96E] transition-colors duration-300"
                >
                  Start a Project <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ────────────────────────────────────────── */}
      <section className="py-14 md:py-24 px-6 md:px-12 bg-[#1A1A18]">
        <div className="max-w-[1400px] mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-8"
          >
            My Approach
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-[clamp(1.6rem,3.5vw,2.8rem)] text-[#F5F2EE] leading-snug"
          >
            &ldquo;Successful interiors are created through a balance of
            functionality, aesthetics, and attention to detail. Every project
            begins with understanding the client&apos;s lifestyle —and ends
            with a space that is both practical and visually engaging.&rdquo;
          </motion.blockquote>
        </div>
      </section>

      {/* ── SKILLS ────────────────────────────────────────────── */}
      <section className="py-14 md:py-24 px-6 md:px-12 border-b border-[#E8E4DF]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-4">
                Expertise
              </p>
            </div>
            <div className="md:col-span-9">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] tracking-[0.15em] uppercase font-sans text-[#1A1A18] border border-[#E8E4DF] px-4 py-2.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────────────── */}
      <section className="py-14 md:py-24 px-6 md:px-12 border-b border-[#E8E4DF]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-4">
                Experience
              </p>
            </div>
            <div className="md:col-span-9 space-y-14">
              {experience.map((exp) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-xl text-[#1A1A18]">
                        {exp.role}
                      </h3>
                      <p className="font-sans text-[13px] text-[#C9A96E]">
                        {exp.company}
                      </p>
                    </div>
                    <p className="font-sans text-[12px] tracking-wide text-[#8C7B6B] shrink-0">
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 font-sans text-[13px] text-[#8C7B6B]"
                      >
                        <span className="mt-[7px] h-1 w-1 rounded-full bg-[#C9A96E] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ─────────────────────────────────────────── */}
      <section className="py-14 md:py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-4">
                Education
              </p>
            </div>
            <div className="md:col-span-9 space-y-10">
              {education.map((edu) => (
                <div key={edu.institution} className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl text-[#1A1A18]">
                      {edu.degree}
                    </h3>
                    <p className="font-sans text-[13px] text-[#8C7B6B]">
                      {edu.institution}
                    </p>
                  </div>
                  <p className="font-sans text-[12px] tracking-wide text-[#8C7B6B] shrink-0">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
