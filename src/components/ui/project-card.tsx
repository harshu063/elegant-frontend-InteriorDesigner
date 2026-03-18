import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.bannerImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/80 via-[#2C3E50]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white bg-[#C9A96E] px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Hover arrow */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#C9A96E] flex items-center justify-center translate-x-14 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-4 h-4 text-white"
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#2C3E50] mb-2 group-hover:text-[#C9A96E] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-semibold">
          <span>Explore Projects</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
