"use client";

import type { Project } from "@/lib/projects";
import ProjectWalkthrough from "@/components/ProjectWalkthrough";
import ProjectSlider from "@/components/ProjectSlider";

export default function ProjectContent({ project }: { project: Project }) {
  // Use gallery images if available, else fall back to drawing images
  const walkthroughImages =
    project.galleryImages.length > 0
      ? project.galleryImages.slice(0, 12).map((src) => ({ src }))
      : project.drawingImages.slice(0, 8).map((d) => ({ src: d.src, label: d.label }));

  return (
    <>
      {/* ── 3D WALKTHROUGH ──────────────────────────────────────── */}
      {walkthroughImages.length > 0 && (
        <ProjectWalkthrough
          images={walkthroughImages}
          projectName={project.name}
        />
      )}

      {/* ── WORKING DRAWINGS ─────────────────────────────────────── */}
      {project.drawingImages.length > 0 && (
        <section className="border-t border-white/[0.06]">
          <div className="px-8 md:px-16 py-8 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <span className="h-px w-8 bg-[#C9A96E]" />
              <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-white/30">
                Working Drawings &amp; Renders
              </span>
            </div>
            <span className="font-sans text-[10px] tracking-[0.2em] text-white/15">
              {project.drawingImages.length} SHEETS
            </span>
          </div>

          {/* Slider with dark styling */}
          <ProjectSlider slides={project.drawingImages} />
        </section>
      )}

      {/* ── FULL PHOTO GALLERY (additional) ──────────────────────── */}
      {project.galleryImages.length > 12 && (
        <section className="px-8 md:px-16 py-16 md:py-24 border-t border-white/[0.06]">
          <div className="flex items-center gap-5 mb-12">
            <span className="h-px w-8 bg-[#C9A96E]" />
            <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-white/30">
              Photography
            </span>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
            {project.galleryImages.slice(12).map((src, i) => (
              <div
                key={src}
                className="break-inside-avoid overflow-hidden"
                style={{
                  animation: "fadeInUp 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) both",
                  animationDelay: `${(i % 3) * 0.07 + 0.1}s`,
                }}
              >
                <img
                  src={src}
                  alt={`${project.name} — ${i + 13}`}
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
