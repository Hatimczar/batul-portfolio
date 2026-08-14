import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import ProjectContent from "./ProjectContent";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  const all = getAllProjects();
  const currentIndex = all.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? all[currentIndex - 1] : null;
  const next = currentIndex < all.length - 1 ? all[currentIndex + 1] : null;

  return (
    <div className="bg-[#0A0906] min-h-screen">
      {/* ── CINEMATIC HERO ──────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Deep cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0906] via-[#0A0906]/30 to-[#0A0906]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0906]/50 via-transparent to-transparent" />

        {/* Back link */}
        <Link
          href="/projects"
          className="absolute top-24 left-8 md:left-16 flex items-center gap-3 text-white/40 hover:text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase font-sans transition-colors duration-300 z-10 group"
        >
          <span className="h-px w-5 bg-current transition-all duration-300 group-hover:w-8" />
          All Projects
        </Link>

        {/* Category pill — top right */}
        <div className="absolute top-24 right-8 md:right-16 z-10">
          <span className="text-[9px] tracking-[0.4em] uppercase font-sans text-[#C9A96E]/70">
            {project.category}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-16 z-10">
          {/* Thin gold rule */}
          <div className="h-px w-12 bg-[#C9A96E] mb-8" />

          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-[#F5F2EE] leading-none tracking-wide mb-4">
            {project.name}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-white/40">
              {project.type}
            </span>
            {project.location && (
              <>
                <span className="text-white/15">·</span>
                <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-white/40">
                  {project.location}
                  {project.building && `, ${project.building}`}
                </span>
              </>
            )}
            <span className="text-white/15">·</span>
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#C9A96E]/60">
              {project.status}
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-8 md:right-16 z-10 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-white/15" />
          <span className="text-[8px] tracking-[0.4em] uppercase font-sans text-white/20"
            style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
        </div>
      </section>

      {/* ── META STRIP ──────────────────────────────────────────── */}
      <section className="border-y border-white/[0.06]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { label: "Location", value: project.location + (project.building ? `, ${project.building}` : "") },
            { label: "Type", value: project.type },
            { label: "Status", value: project.status },
            { label: "Year", value: project.year === "Needs Clarification" ? "—" : project.year },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`px-8 md:px-12 py-7 ${i < 3 ? "border-r border-white/[0.06]" : ""}`}
            >
              <p className="text-[8px] tracking-[0.4em] uppercase font-sans text-white/25 mb-2">
                {item.label}
              </p>
              <p className="font-sans text-[13px] text-[#F5F2EE]/70">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONCEPT PULL QUOTE ──────────────────────────────────── */}
      <section className="px-8 md:px-16 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-start gap-8 mb-10">
            <span className="h-px w-10 bg-[#C9A96E] mt-3 shrink-0" />
            <p className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E]/60">
              Concept
            </p>
          </div>
          <p className="font-display text-[clamp(1.6rem,3.5vw,2.8rem)] text-[#F5F2EE] leading-snug max-w-[900px]">
            &ldquo;{project.concept}&rdquo;
          </p>
        </div>
      </section>

      {/* ── WALKTHROUGH + ANIMATIONS ─────────────────────────────── */}
      <ProjectContent project={project} />

      {/* ── SCOPE SECTION ──────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-16 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-5 mb-10">
              <span className="h-px w-8 bg-[#C9A96E]" />
              <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-white/30">
                Project Story
              </span>
            </div>
            <p className="font-sans text-[15px] leading-[1.85] text-white/50">
              {project.story}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-5 mb-10">
              <span className="h-px w-8 bg-[#C9A96E]" />
              <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-white/30">
                Scope of Work
              </span>
            </div>
            <ul className="space-y-4">
              {project.scope.map((item, i) => (
                <li key={item} className="flex items-start gap-4 font-sans text-[13px] text-white/40">
                  <span className="text-[#C9A96E]/60 font-sans text-[10px] tracking-wider mt-0.5 tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── NEXT / PREV NAV ──────────────────────────────────────── */}
      <section className="border-t border-white/[0.06]">
        <div className="grid grid-cols-2">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group relative flex flex-col p-8 md:p-14 border-r border-white/[0.06] overflow-hidden hover:bg-white/[0.02] transition-colors duration-500"
            >
              <span className="flex items-center gap-3 text-[9px] tracking-[0.35em] uppercase font-sans text-white/25 mb-5 group-hover:text-[#C9A96E]/60 transition-colors duration-300">
                <ArrowLeft size={10} className="group-hover:-translate-x-1 transition-transform duration-300" />
                Previous
              </span>
              <span className="font-display text-xl md:text-3xl text-[#F5F2EE]/70 group-hover:text-[#F5F2EE] transition-colors duration-300">
                {prev.name}
              </span>
              <span className="font-sans text-[11px] text-white/25 mt-2 tracking-wide">
                {prev.location}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col items-end p-8 md:p-14 overflow-hidden hover:bg-white/[0.02] transition-colors duration-500"
            >
              <span className="flex items-center gap-3 text-[9px] tracking-[0.35em] uppercase font-sans text-white/25 mb-5 group-hover:text-[#C9A96E]/60 transition-colors duration-300">
                Next
                <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="font-display text-xl md:text-3xl text-[#F5F2EE]/70 group-hover:text-[#F5F2EE] transition-colors duration-300 text-right">
                {next.name}
              </span>
              <span className="font-sans text-[11px] text-white/25 mt-2 tracking-wide">
                {next.location}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
}
