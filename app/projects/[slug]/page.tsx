"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  const all = getAllProjects();
  const currentIndex = all.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? all[currentIndex - 1] : null;
  const next = currentIndex < all.length - 1 ? all[currentIndex + 1] : null;

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative h-[70vh] md:h-screen min-h-[500px] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />

        {/* Back button */}
        <Link
          href="/projects"
          className="absolute top-24 left-6 md:left-12 flex items-center gap-2 text-white/70 hover:text-white text-[11px] tracking-[0.2em] uppercase font-sans transition-colors duration-300"
        >
          <ArrowLeft size={12} /> All Projects
        </Link>

        {/* Project title */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-white/60 mb-3">
              {project.category}
            </p>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] text-white leading-none mb-3">
              {project.name}
            </h1>
            <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-white/60">
              {project.type}
              {project.location && ` · ${project.location}`}
              {project.building && `, ${project.building}`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECT META ──────────────────────────────────────── */}
      <section className="py-16 px-6 md:px-12 border-b border-[#E8E4DF]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#8C7B6B] mb-2">
                Location
              </p>
              <p className="font-sans text-[15px] text-[#1A1A18]">
                {project.location}
                {project.building && (
                  <>
                    <br />
                    <span className="text-[#8C7B6B] text-[13px]">
                      {project.building}
                    </span>
                  </>
                )}
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#8C7B6B] mb-2">
                Type
              </p>
              <p className="font-sans text-[15px] text-[#1A1A18]">
                {project.type}
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#8C7B6B] mb-2">
                Status
              </p>
              <p className="font-sans text-[15px] text-[#1A1A18]">
                {project.status}
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#8C7B6B] mb-2">
                Year
              </p>
              <p className="font-sans text-[15px] text-[#1A1A18]">
                {project.year === "Needs Clarification" ? "—" : project.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONCEPT + STORY ───────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-5">
              <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-6">
                Concept
              </p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="font-display text-[clamp(1.4rem,2.5vw,2rem)] leading-snug text-[#1A1A18]"
              >
                {project.concept}
              </motion.p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-6">
                Project Story
              </p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="font-sans text-[15px] leading-relaxed text-[#8C7B6B]"
              >
                {project.story}
              </motion.p>

              {/* Scope */}
              <div className="mt-10">
                <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-4">
                  Scope of Work
                </p>
                <ul className="space-y-2">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-sans text-[13px] text-[#1A1A18]/80"
                    >
                      <span className="mt-[6px] h-1 w-1 rounded-full bg-[#C9A96E] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────── */}
      {project.galleryImages.length > 1 && (
        <section className="pb-20 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-6 mb-12">
              <span className="h-px w-12 bg-[#C9A96E]" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B]">
                Gallery
              </span>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {project.galleryImages.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
                  className="break-inside-avoid overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`${project.name} — image ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── DRAWINGS (if available & different from gallery) ──── */}
      {project.drawingImages.length > 0 &&
        project.category !== "Residential" && (
          <section className="py-16 px-6 md:px-12 bg-[#F5F2EE] border-t border-[#E8E4DF]">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex items-center gap-6 mb-12">
                <span className="h-px w-12 bg-[#C9A96E]" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B]">
                  Drawings &amp; Plans
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.drawingImages.map((src, i) => (
                  <div key={i} className="overflow-hidden border border-[#E8E4DF]">
                    <Image
                      src={src}
                      alt={`${project.name} drawing ${i + 1}`}
                      width={900}
                      height={640}
                      className="w-full h-auto object-contain bg-white"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* ── NEXT / PREV NAV ───────────────────────────────────── */}
      <section className="border-t border-[#E8E4DF]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col p-8 md:p-12 border-r border-[#E8E4DF] hover:bg-[#F5F2EE] transition-colors duration-300"
            >
              <span className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-sans text-[#8C7B6B] mb-3">
                <ArrowLeft size={12} /> Previous
              </span>
              <span className="font-display text-xl md:text-2xl text-[#1A1A18] group-hover:text-[#C9A96E] transition-colors duration-300">
                {prev.name}
              </span>
              <span className="font-sans text-[12px] text-[#8C7B6B] mt-1">
                {prev.location}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col items-end p-8 md:p-12 hover:bg-[#F5F2EE] transition-colors duration-300"
            >
              <span className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-sans text-[#8C7B6B] mb-3">
                Next <ArrowRight size={12} />
              </span>
              <span className="font-display text-xl md:text-2xl text-[#1A1A18] group-hover:text-[#C9A96E] transition-colors duration-300 text-right">
                {next.name}
              </span>
              <span className="font-sans text-[12px] text-[#8C7B6B] mt-1">
                {next.location}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </>
  );
}
