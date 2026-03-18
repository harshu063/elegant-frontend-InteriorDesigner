import { Gallery4 } from "@/components/ui/gallery4"
import { Footerdemo } from "@/components/ui/footer-section"

export default function Projects() {
  return (
    <>
      {/* Page hero banner — consistent with Services page */}
      <div className="bg-[#202e44] py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c4a97a] block mb-3">1,200+ Projects Delivered</span>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">Completed Projects</h1>
          <p className="text-base text-white/60 leading-relaxed max-w-xl">
            From heritage hotels in Rajasthan to NRI homes abroad — each project is a testament to craft that outlasts trends. Residential, hospitality, commercial, and export work across 18+ states.
          </p>
        </div>
      </div>

      <Gallery4 />
      <Footerdemo />
    </>
  )
}
