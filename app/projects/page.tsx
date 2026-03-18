import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";


export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore JAY Interior's portfolio across 8 design categories — Kitchen, Bedroom, Living Room, Office, Villa, Hotel, Banquet, and Home Interiors. 300+ projects delivered across Mumbai.",
  openGraph: {
    title: "Our Projects | Jay Interior",
    description:
      "Explore JAY Interior's portfolio across 8 design categories — 300+ projects delivered across Mumbai.",
  },
};

export default function Projects() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#2C3E50] py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-3">
            300+ Projects Delivered
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Our Project Portfolio
          </h1>
          <p className="text-base text-white/60 leading-relaxed max-w-xl">
            From compact Mumbai apartments to luxury villas and commercial fit-outs — every
            space tells a story of thoughtful design, quality execution, and clients who love
            where they live and work.
          </p>
        </div>
      </div>

      {/* Category grid */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-3">
              Browse by Category
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2C3E50]">
              Explore Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-14 bg-[#C9A96E]">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
              Have a project in mind?
            </h2>
            <p className="text-white/80 text-sm">
              Let&apos;s design something extraordinary together.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#2C3E50] px-7 py-3 rounded-full font-semibold hover:bg-[#2C3E50] hover:text-white transition-colors duration-300"
          >
            Get Free Consultation
          </a>
        </div>
      </section>

    </>
  );
}
