"use client"

import { motion } from "motion/react"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"

const testimonials = [
  {
    text: "I had been searching for a proper sheesham dining table for almost a year — everything in Delhi showrooms was either overpriced or poorly finished. Maa Ashapura understood exactly what I wanted. The craftsmanship is genuinely beautiful — my guests comment on it every time.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Priya Mehra",
    role: "South Delhi — Custom Sheesham Table",
  },
  {
    text: "We furnished our entire 4BHK through them — bedroom sets for three rooms, a dining set, and a custom study unit. Every dimension was exactly as specified. The teak has a richness you simply don't get from factory furniture.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Rajeev Singhania",
    role: "Ahmedabad — Full 4BHK Package",
  },
  {
    text: "Being from Rajasthan myself, I have high standards for wood craftsmanship. Maa Ashapura is the real thing — you can see the hand-finishing, the carving is crisp, the joints are mortise-and-tenon the old way. Furniture your grandchildren will still be using.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Harshvardhan Ranka",
    role: "Jaipur — Farmhouse Furnishing",
  },
  {
    text: "We run a boutique restaurant and needed furniture that matched our Rajasthani-heritage concept. Maa Ashapura delivered exactly that — 14 dining tables and 60 chairs in carved sheesham. Customers ask about the furniture specifically.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Amit Kulkarni",
    role: "Pune — 60-Cover Restaurant Interior",
  },
  {
    text: "Very happy with the quality of the mango wood console and bookshelf I ordered — the natural grain is stunning. The installation team was professional and careful. Would absolutely recommend to anyone looking for real solid wood at an honest price.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Sunita Joshi",
    role: "Hyderabad — Mango Wood Console",
  },
  {
    text: "I ordered a custom wardrobe and sheesham bed frame as gifts for my daughter's new home. The carved detail on the headboard is extraordinary — it looks like something from a heritage haveli but designed for a modern apartment.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Meena Rathore",
    role: "Ahmedabad — Custom Wardrobe & Carved Bed",
  },
  {
    text: "Ordered a teak king bed and matching wardrobe for our new home. The delivery team was careful, installation was clean, and the quality is outstanding. This is furniture you can see will last decades — not the disposable kind.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Vikram Malhotra",
    role: "Chandigarh — Teak Bedroom Suite",
  },
  {
    text: "Maa Ashapura made a custom sheesham study unit for my home office. The finish is immaculate and the dimensions were perfectly matched to my space. Communication was clear throughout and they delivered exactly on time.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Kavitha Nair",
    role: "Bengaluru — Custom Study Unit",
  },
  {
    text: "Direct from the workshop means no showroom markup and you're dealing with the people who actually make the furniture. Our dining set arrived in perfect condition — the quality is far above what you find in any Delhi store at twice the price.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Deepak Arora",
    role: "New Delhi — Dining & Living Set",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export default function TestimonialsSection() {
  return (
    <section className="py-14 md:py-24 bg-[#202e44] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c4a97a] block mb-3">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base text-white/60 max-w-xl mx-auto leading-relaxed">
            From homeowners in Hyderabad to restaurant owners in Mumbai — real experiences from people who chose solid wood over shortcuts.
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-white/40 text-sm">
          500+ happy clients across India &amp; internationally — direct from our workshop in Sojat Road, Rajasthan.
        </p>
      </motion.div>
    </section>
  )
}
