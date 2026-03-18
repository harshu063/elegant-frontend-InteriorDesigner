import { Gallery4 } from "@/components/ui/gallery4"
import { Footerdemo } from "@/components/ui/footer-section"

export default function Projects() {
  return (
    <>
      {/* Page hero banner — consistent with Services page */}
      <div className="bg-[#2C3E50] py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-3">300+ Projects Delivered</span>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">Completed Projects</h1>
          <p className="text-base text-white/60 leading-relaxed max-w-xl">
            From compact Mumbai apartments to luxury villas and commercial fit-outs — every space tells a story of thoughtful design, quality execution, and clients who love where they live and work.
          </p>
        </div>
      </div>

      <Gallery4 />
      <Footerdemo />
    </>
  )
}
