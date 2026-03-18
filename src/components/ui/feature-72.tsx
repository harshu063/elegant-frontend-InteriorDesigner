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

const furnitureServices: Feature[] = [
  {
    id: "custom-furniture",
    title: "Bespoke Custom Furniture",
    description: "Your home has its own story — your furniture should tell it. We craft pieces precisely to your space, style, and budget, with every dimension, finish, and carving detail yours to choose in Grade A teak, sheesham, or mango wood. No catalogue sizes, no compromises.",
    image: "/images/img-14.jpeg",
  },
  {
    id: "bedroom-sets",
    title: "Bedroom Sets & Wardrobes",
    description: "Complete bedroom suites built with traditional mortise-and-tenon joinery — king beds with hand-carved headboards, spacious wardrobes with premium brass fittings, matching dressers, and bedside tables. Furniture you will still be proud of in 30 years.",
    image: "/images/img-15.jpeg",
  },
  {
    id: "living-room",
    title: "Living Room Furniture",
    description: "Handcrafted sofa frames, centre tables, TV units, and display shelves that blend clean contemporary aesthetics with authentic Rajasthani craft. Warm, refined, and unmistakably solid wood — never a veneer in sight.",
    image: "/images/img-16.jpeg",
  },
  {
    id: "office-furniture",
    title: "Office & Commercial Furniture",
    description: "Solid wood in a workspace sends a clear message: permanence and quality. We manufacture conference tables, executive desks, reception counters, and modular storage for corporate offices and co-working spaces — built for daily use while retaining their warmth.",
    image: "/images/img-17.jpeg",
  },
  {
    id: "kitchen-cabinets",
    title: "Kitchen Cabinets & Modular Interiors",
    description: "Modular kitchen cabinets, overhead storage, pantry organisers, and countertop frameworks in solid wood and quality ply. We maximise your kitchen's efficiency while adding the warmth that no laminate sheet will ever replicate.",
    image: "/images/img-18.jpeg",
  },
  {
    id: "wooden-decor",
    title: "Wooden Handicrafts & Décor",
    description: "Carved wall panels, jhoola swings, hand-painted almirahs, door panels, and bespoke art objects rooted in Rajasthani tradition. Pieces that make a room complete rather than merely furnished — each one a conversation starter.",
    image: "/images/img-19.jpeg",
  },
];

export const Feature72 = ({
  heading = "Our Services",
  description = "Every service is delivered with Grade A solid wood, skilled Rajasthani craftsmanship, and a no-middleman promise. We don't make furniture in batches — we make it the right way, one piece at a time, built to outlast trends and pass between generations.",
  linkUrl = "/contact",
  linkText = "Get a Free Quote",
  features = furnitureServices,
}: Feature72Props) => {
  return (
    <section className="py-14 md:py-24 bg-[#F8F8F2]">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col gap-14">
        {/* Section header */}
        <div className="max-w-lg">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#88734C] block mb-3">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202e44] mb-4">{heading}</h2>
          <p className="text-base text-[#202e44]/70 leading-relaxed mb-6">{description}</p>
          <Link
            to={linkUrl}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#88734C] hover:text-[#202e44] transition-colors group"
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
              className="flex flex-col overflow-hidden rounded-2xl border border-[#202e44]/10 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-4 py-4 md:px-7 md:py-7">
                <h3 className="text-lg font-semibold text-[#202e44] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#202e44]/70 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
