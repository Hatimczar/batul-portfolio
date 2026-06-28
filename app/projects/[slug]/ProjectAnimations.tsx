"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import ProjectSlider from "@/components/ProjectSlider";

export default function ProjectAnimations({ project }: { project: Project }) {
  return (
    <>
      {/* ── CONCEPT + STORY ───────────────────────────────────── */}
      <section className="py-12 md:py-28 px-6 md:px-12">
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

      {/* ── DRAWINGS SLIDER ───────────────────────────────────── */}
      {project.drawingImages.length > 0 && (
        <section>
          <div className="px-6 md:px-12 pb-6">
            <div className="max-w-[1400px] mx-auto flex items-center gap-6">
              <span className="h-px w-12 bg-[#C9A96E]" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B]">
                Working Drawings &amp; Renders
              </span>
            </div>
          </div>
          <ProjectSlider slides={project.drawingImages} />
        </section>
      )}

      {/* ── PHOTO GALLERY ─────────────────────────────────────── */}
      {project.galleryImages.length > 0 && (
        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-6 mb-10">
              <span className="h-px w-12 bg-[#C9A96E]" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B]">
                Photography
              </span>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {project.galleryImages.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                  className="break-inside-avoid overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`${project.name} — ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
