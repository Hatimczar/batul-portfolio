"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllProjects } from "@/lib/projects";

const all = getAllProjects();
const categories = ["All", "Residential", "Commercial", "Renovation", "Furniture Design"] as const;

export default function ProjectsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? all : all.filter((p) => p.category === active);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  /* Scroll reveal — re-runs when filter changes (new DOM nodes) */
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
  }, [active]);

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <section className="bg-[#0A0906] pt-32 pb-20 px-8 md:px-16 border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-8 bg-[#C9A96E]" />
            <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E]/60">
              Portfolio
            </span>
          </div>
          <h1 className="font-display text-[clamp(4rem,10vw,8rem)] leading-none text-[#F5F2EE] mb-14">
            Projects
          </h1>

          {/* Category filters */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[11px] tracking-[0.28em] uppercase font-sans pb-1 transition-all duration-300 border-b ${
                  active === cat
                    ? "text-[#F5F2EE] border-[#C9A96E]"
                    : "text-white/30 border-transparent hover:text-white/60 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ───────────────────────────────────────────────── */}
      <section className="bg-[#F5F2EE] py-20 md:py-28 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          {filtered.length === 0 ? (
            <p className="font-sans text-[#8C7B6B] py-24 text-center tracking-wide">
              No projects in this category yet.
            </p>
          ) : (
            <>
              {/* ── Featured — horizontal split ── */}
              {featured && (
                <Link
                  href={`/projects/${featured.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-24 md:mb-32 items-end"
                  data-reveal
                >
                  {/* Image */}
                  <div
                    className="md:col-span-7 relative overflow-hidden"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <Image
                      src={featured.heroImage}
                      alt={featured.name}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 58vw, 100vw"
                    />
                    {featured.status !== "Completed" && (
                      <div className="absolute top-5 left-5">
                        <span className="bg-[#C9A96E] text-white text-[10px] tracking-[0.15em] uppercase font-sans px-3 py-1.5">
                          {featured.status}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Editorial text */}
                  <div className="md:col-span-5 md:pb-4">
                    <div
                      aria-hidden
                      className="font-display text-[clamp(4rem,7vw,6rem)] text-[#1A1A18]/[0.05] leading-none mb-6 select-none"
                    >
                      01
                    </div>
                    <p className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E] mb-5">
                      {featured.category}
                    </p>
                    <h2 className="font-display text-[clamp(2rem,3.5vw,3.2rem)] leading-tight text-[#1A1A18] mb-4 group-hover:text-[#C9A96E] transition-colors duration-300">
                      {featured.name}
                    </h2>
                    <p className="text-[11px] tracking-[0.25em] uppercase font-sans text-[#8C7B6B] mb-8">
                      {featured.location}
                      {featured.building && ` · ${featured.building}`}
                    </p>
                    <p className="font-sans text-[14px] leading-[1.85] text-[#8C7B6B] mb-10 line-clamp-3">
                      {featured.concept}
                    </p>
                    <span className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-sans text-[#1A1A18]/40 group-hover:text-[#C9A96E] transition-colors duration-300">
                      View Project
                      <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
                      <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              )}

              {/* ── Remaining — 2-col grid ── */}
              {rest.length > 0 && (
                <>
                  {/* Divider */}
                  <div className="h-px bg-[#1A1A18]/[0.08] mb-16 md:mb-20" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
                    {rest.map((project, i) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group"
                        data-reveal
                        data-reveal-delay={i % 2 === 1 ? "1" : undefined}
                      >
                        {/* Image */}
                        <div
                          className="relative overflow-hidden mb-6"
                          style={{ aspectRatio: "4/3" }}
                        >
                          <Image
                            src={project.heroImage}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            sizes="(min-width: 768px) 45vw, 100vw"
                          />
                          {project.status !== "Completed" && (
                            <div className="absolute top-4 left-4">
                              <span className="bg-[#C9A96E] text-white text-[10px] tracking-[0.15em] uppercase font-sans px-3 py-1.5">
                                {project.status}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E] mb-3">
                              {project.category}
                            </p>
                            <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.2rem)] leading-tight text-[#1A1A18] group-hover:text-[#C9A96E] transition-colors duration-300 mb-2">
                              {project.name}
                            </h3>
                            <p className="text-[11px] tracking-[0.2em] uppercase font-sans text-[#8C7B6B]">
                              {project.location}
                              {project.building && ` · ${project.building}`}
                            </p>
                          </div>
                          <span
                            aria-hidden
                            className="font-display text-[3rem] text-[#1A1A18]/[0.05] leading-none shrink-0 select-none tabular-nums"
                          >
                            {String(i + 2).padStart(2, "0")}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
