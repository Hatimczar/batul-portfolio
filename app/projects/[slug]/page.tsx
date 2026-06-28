import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import ProjectAnimations from "./ProjectAnimations";

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

        <Link
          href="/projects"
          className="absolute top-24 left-6 md:left-12 flex items-center gap-2 text-white/70 hover:text-white text-[11px] tracking-[0.2em] uppercase font-sans transition-colors duration-300"
        >
          <ArrowLeft size={12} /> All Projects
        </Link>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
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
        </div>
      </section>

      {/* ── PROJECT META ──────────────────────────────────────── */}
      <section className="py-16 px-6 md:px-12 border-b border-[#E8E4DF]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#8C7B6B] mb-2">Location</p>
              <p className="font-sans text-[15px] text-[#1A1A18]">
                {project.location}
                {project.building && (
                  <>
                    <br />
                    <span className="text-[#8C7B6B] text-[13px]">{project.building}</span>
                  </>
                )}
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#8C7B6B] mb-2">Type</p>
              <p className="font-sans text-[15px] text-[#1A1A18]">{project.type}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#8C7B6B] mb-2">Status</p>
              <p className="font-sans text-[15px] text-[#1A1A18]">{project.status}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#8C7B6B] mb-2">Year</p>
              <p className="font-sans text-[15px] text-[#1A1A18]">
                {project.year === "Needs Clarification" ? "—" : project.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONCEPT + STORY + GALLERY (animated) ──────────────── */}
      <ProjectAnimations project={project} />

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
              <span className="font-sans text-[12px] text-[#8C7B6B] mt-1">{prev.location}</span>
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
              <span className="font-sans text-[12px] text-[#8C7B6B] mt-1">{next.location}</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </>
  );
}
