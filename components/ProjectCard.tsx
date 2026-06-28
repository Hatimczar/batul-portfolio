"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={`/projects/${project.slug}`} className="group block active:opacity-80 transition-opacity duration-150">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] bg-[#E8E4DF] mb-5">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-[#1A1A18]/0 group-hover:bg-[#1A1A18]/20 transition-colors duration-500" />

          {/* Status badge */}
          {project.status !== "Completed" && (
            <div className="absolute top-4 left-4">
              <span className="bg-[#C9A96E] text-white text-[10px] tracking-[0.15em] uppercase font-sans px-3 py-1.5">
                {project.status}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl md:text-2xl leading-tight group-hover:text-[#C9A96E] transition-colors duration-300">
              {project.name}
            </h3>
            <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#8C7B6B] shrink-0 mt-1">
              {project.category}
            </span>
          </div>
          <p className="text-[12px] tracking-[0.15em] uppercase font-sans text-[#8C7B6B]">
            {project.location}
            {project.building && ` · ${project.building}`}
          </p>
          <p className="font-sans text-sm text-[#1A1A18]/70 leading-relaxed line-clamp-2 mt-3">
            {project.concept}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
