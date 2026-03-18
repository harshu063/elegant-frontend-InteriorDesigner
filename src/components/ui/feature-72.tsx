import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Feature72Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

const interiorServices: Feature[] = [
  {
    id: "residential",
    title: "Residential Interior Design",
    description: "Whether it's a 1BHK in Mira Road or a duplex in Vasai, we design homes that reflect your personality. Every layout is optimised for how you actually live — from morning routines to weekend hosting — with Vastu compliance built in where needed.",
    image: "/images/img-19.jpeg",
  },
  {
    id: "commercial",
    title: "Commercial & Office Interiors",
    description: "Your office is your brand's first impression. We design corporate offices, retail showrooms, clinics, and co-working spaces across Mumbai that project authority, comfort, and purpose — delivered without disrupting your day-to-day operations.",
    image: "/images/img-20.jpeg",
  },
  {
    id: "modular",
    title: "Modular Kitchen & Wardrobe",
    description: "Engineered for Mumbai kitchens — compact, clever, and built to last. Soft-close hinges, anti-slam drawers, waterproof carcasses, and finishes from matte to high-gloss. Wardrobes designed to the last centimetre of your room.",
    image: "/images/img-21.jpeg",
  },
  {
    id: "false-ceiling",
    title: "False Ceiling & Lighting Design",
    description: "The right ceiling changes everything. Gypsum coffered ceilings, POP cove lighting, recessed downlights, and warm accent strips — we layer light and architecture to make every room feel larger, warmer, and intentionally designed.",
    image: "/images/img-22.jpeg",
  },
  {
    id: "furniture",
    title: "Custom Furniture & Built-Ins",
    description: "Furniture built around your space, not the other way around. TV units with hidden wiring, beds with hydraulic storage, study nooks in awkward corners — every piece is made to measure and finished to match the complete design scheme.",
    image: "/images/img-23.jpeg",
  },
  {
    id: "turnkey",
    title: "Turnkey Interior Projects",
    description: "From bare walls to move-in ready — we handle everything. Civil work, false ceilings, flooring, electrical, carpentry, painting, furnishing, and final styling. One point of contact, zero coordination stress, and a home delivered on schedule.",
    image: "/images/img-24.jpeg",
  },
];

export const Feature72 = ({
  heading = "What We Do",
  description = "Six disciplines. One team. No juggling between contractors, no coordination gaps — just a single studio that takes your project from blank walls to move-in ready.",
  linkUrl = "/contact",
  linkText = "Book a Free Site Visit",
  features = interiorServices,
}: Feature72Props) => {
  return (
    <section className="py-14 md:py-24 bg-[#FDF0EE]">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col gap-14">
        {/* Section header */}
        <div className="max-w-lg">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-3">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E50] mb-4">{heading}</h2>
          <p className="text-base text-[#2C3E50]/70 leading-relaxed mb-6">{description}</p>
          <Link
            to={linkUrl}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A96E] hover:text-[#2C3E50] transition-colors group"
          >
            {linkText}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Feature grid */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-7">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#2C3E50]/10 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-4 py-4 md:px-7 md:py-7">
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#2C3E50]/70 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
