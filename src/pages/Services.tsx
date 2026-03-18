import { Feature72 } from "@/components/ui/feature-72"
import { Footerdemo } from "@/components/ui/footer-section"

export default function Services() {
  return (
    <>
      {/* Page hero banner — consistent with Projects page */}
      <div className="bg-[#202e44] py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c4a97a] block mb-3">Workshop to Your Home</span>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">Our Services</h1>
          <p className="text-base text-white/60 leading-relaxed max-w-xl">
            Every service delivered with Grade A solid wood, skilled craftsmanship, and a no-middleman promise — direct from Sojat Road, Rajasthan to your home or project site.
          </p>
        </div>
      </div>

      <Feature72 />
      <Footerdemo />
    </>
  )
}
