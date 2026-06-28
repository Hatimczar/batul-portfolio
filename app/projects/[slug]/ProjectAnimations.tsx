"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectAnimations({ project }: { project: Project }) {
  return (
    <>
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

      {/* ── DRAWINGS ──────────────────────────────────────────── */}
      {project.drawingImages.length > 0 && project.category !== "Residential" && (
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
    </>
  );
}
