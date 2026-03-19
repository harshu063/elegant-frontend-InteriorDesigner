"use client"

import { motion } from "motion/react"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"

const testimonials = [
  {
    text: "Jay Interior completely transformed our 3BHK in Mira Road. Om Prakash sir listened patiently to every little detail we had in mind — the living room turned out beyond what we imagined. Clean lines, warm tones, and everything delivered on schedule.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Priya Sharma",
    role: "Mira Road East — 3BHK Residential",
  },
  {
    text: "We hired Jay Interior for our office fit-out in Borivali and the results were phenomenal. The space feels premium without being flashy — exactly the brand image we wanted. Professional team, on-time delivery, and zero hassle throughout.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Rohit Desai",
    role: "Borivali West — Office Interior",
  },
  {
    text: "The modular kitchen they designed for us is absolutely stunning. Smart storage, quality shutters, and the colour palette ties the whole flat together. My mother-in-law, who is very particular, couldn't stop praising the work. That says everything.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Anita Verma",
    role: "Bhayandar East — Modular Kitchen",
  },
  {
    text: "I was nervous about giving someone full creative control over my home but Jay Interior put me at ease from the first meeting. The 3D renders were accurate — the final space looks exactly like what they showed me. No nasty surprises.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Suresh Pillai",
    role: "Dahisar — Full Home Renovation",
  },
  {
    text: "We run a café in Mira Road and wanted an aesthetic that felt curated, not generic. Jay Interior delivered a space that consistently gets photographed by customers. Footfall went up within weeks of reopening after the redesign.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Neha Gupta",
    role: "Mira Road — Café Interior",
  },
  {
    text: "The false ceiling and lighting work they did in our hall is the first thing every guest notices. Beautifully layered, warm ambient lighting — it transformed a plain flat into something that feels like a magazine shoot. Great value for money.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Vishal Tiwari",
    role: "Kandivali West — False Ceiling & Lighting",
  },
  {
    text: "The team was incredibly professional from start to finish. Weekly updates, proactive problem-solving, and they actually listened when I gave feedback mid-project. My 2BHK in Nalasopara now looks like a premium apartment twice its square footage.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Kavita Menon",
    role: "Nalasopara East — 2BHK Makeover",
  },
  {
    text: "What impressed me most was the attention to Vastu without compromising modern aesthetics. Jay Interior balanced both beautifully — the home feels harmonious and purposeful in every room. Highly recommended for anyone building new.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Manoj Joshi",
    role: "Vasai West — New Build Interiors",
  },
  {
    text: "I compared four studios before choosing Jay Interior. Their proposal was the most detailed — specific finishes, accurate timelines, and a clear breakdown of costs. No vague estimates, no scope creep. Exactly what they promised, delivered.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Deepa Nair",
    role: "Mira Road East — Turnkey 3BHK",
  },
]

const firstColumn  = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn  = testimonials.slice(6, 9)

export default function TestimonialsSection() {
  return (
    <section className="py-14 md:py-24 bg-[#2C3E50] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-3">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base text-white/60 max-w-xl mx-auto leading-relaxed">
            From Mira Road apartments to Borivali offices — real experiences from clients who trusted Jay Interior to design their spaces.
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[680px] overflow-hidden px-4">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
      </div>

      <motion.div
        className="text-center mt-10 md:mt-14"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-white/40 text-sm">
          250+ happy clients across Mira Road, Borivali, Bhayandar, Dahisar & beyond.
        </p>
      </motion.div>
    </section>
  )
}
