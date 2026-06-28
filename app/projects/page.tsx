"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";

const all = getAllProjects();
const categories = ["All", "Residential", "Commercial", "Renovation", "Furniture Design"] as const;

export default function ProjectsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? all : all.filter((p) => p.category === active);

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 md:px-12 border-b border-[#E8E4DF]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-4">
            Portfolio
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-[#1A1A18] mb-10">
            Projects
          </h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[11px] tracking-[0.15em] uppercase font-sans px-5 py-2.5 border transition-colors duration-300 ${
                  active === cat
                    ? "bg-[#1A1A18] text-[#F5F2EE] border-[#1A1A18]"
                    : "bg-transparent text-[#8C7B6B] border-[#E8E4DF] hover:border-[#1A1A18] hover:text-[#1A1A18]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-10 md:gap-y-16"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="font-sans text-[#8C7B6B] text-center py-20">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
