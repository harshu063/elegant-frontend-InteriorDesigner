"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
}

const interiorProjects: Gallery4Item[] = [
  {
    id: "project-1",
    title: "3BHK Full Makeover — Mira Road East",
    description: "1,200 sq.ft. apartment, bare walls to move-in ready. Open-plan living room with built-in TV unit, matte-white modular kitchen with walnut accents, master bedroom with floor-to-ceiling concealed wardrobe, and cove lighting throughout.",
    href: "#",
    image: "/images/img-25.jpeg",
  },
  {
    id: "project-2",
    title: "Corporate Office Fit-Out — Borivali West",
    description: "3,500 sq.ft. office for a financial services firm. Executive cabins in smoked oak veneer, open-plan workstations with cable management, a branded reception lobby, and a glass-partition boardroom — completed in 6 weeks, zero operational downtime.",
    href: "#",
    image: "/images/img-26.jpeg",
  },
  {
    id: "project-3",
    title: "Luxury Villa Interior — Vasai East",
    description: "4,200 sq.ft. bungalow, turnkey delivery. Double-height foyer with backlit stone panels, chef's kitchen with island counter, dedicated home theatre, and custom furniture designed to order across all 5 rooms.",
    href: "#",
    image: "/images/img-27.jpeg",
  },
  {
    id: "project-4",
    title: "Café Interior Design — Mira Road",
    description: "1,800 sq.ft. specialty café: warm terracotta palette, reclaimed wood tables, layered Edison pendant lighting, and a custom barista bar. The redesign increased average dwell time by 35% and became the owner's most photographed location.",
    href: "#",
    image: "/images/img-28.jpeg",
  },
  {
    id: "project-5",
    title: "2BHK Space Optimisation — Dahisar East",
    description: "780 sq.ft. apartment redesigned to feel twice its size. Floor-to-ceiling storage in every room, fold-away dining table, modular kitchen with full-height loft units, and a warm lighting scheme that makes small feel generous.",
    href: "#",
    image: "/images/img-29.jpeg",
  },
  {
    id: "project-6",
    title: "Retail Showroom — Bhayandar West",
    description: "Fashion brand showroom: zoned product displays, backlit feature wall with brand logo, recessed track lighting on adjustable rails, and a seamless checkout counter — a space that lets the merchandise do the talking.",
    href: "#",
    image: "/images/img-30.jpeg",
  },
  {
    id: "project-7",
    title: "New Possession Turnkey — Nalasopara West",
    description: "First possession to fully furnished in 11 weeks. Civil corrections, tile selection, false ceilings, modular kitchen and wardrobes, bathroom vanities, complete furniture, and final décor styling — handed over spotless and move-in ready.",
    href: "#",
    image: "/images/img-31.jpeg",
  },
];

const Gallery4 = ({
  title = "Selected Projects",
  description = "Apartments, offices, cafés, villas — each one different, each one built to the same standard. Here's a selection of work from across the Mumbai region.",
  items = interiorProjects,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => { carouselApi.off("select", updateSelection); };
  }, [carouselApi]);

  return (
    <section className="py-14 md:py-24 bg-[#F9F7F4]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-0">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E]">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E50]">{title}</h2>
            <p className="text-base text-[#2C3E50]/70 leading-relaxed max-w-xl mt-1">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon" variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="rounded-full disabled:pointer-events-auto border-[#2C3E50]/20 hover:bg-[#C9A96E] hover:text-white hover:border-[#C9A96E] disabled:opacity-30 transition-all"
            >
              <ArrowLeft className="size-4" />
            </Button>
            <Button
              size="icon" variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="rounded-full disabled:pointer-events-auto border-[#2C3E50]/20 hover:bg-[#C9A96E] hover:text-white hover:border-[#C9A96E] disabled:opacity-30 transition-all"
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{ breakpoints: { "(max-width: 768px)": { dragFree: true } } }}
        >
          <CarouselContent className="ml-[max(1rem,calc(50vw-680px))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="max-w-[260px] pl-3 md:max-w-[320px] md:pl-5 lg:max-w-[400px]">
                <a href={item.href} className="group block">
                  <div className="relative h-[20rem] overflow-hidden rounded-xl md:rounded-2xl md:h-[27rem] lg:aspect-[16/9] lg:h-auto">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/85 via-[#2C3E50]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                      <p className="text-[#C9A96E] text-xs font-semibold tracking-widest uppercase mb-2">Completed Project</p>
                      <h3 className="text-lg font-semibold text-white mb-2 leading-snug">{item.title}</h3>
                      <p className="text-white/70 text-sm line-clamp-2 leading-relaxed mb-4">{item.description}</p>
                      <span className="inline-flex items-center text-xs font-semibold text-white bg-[#C9A96E] px-3 py-1.5 rounded-full gap-1.5 transition-all group-hover:bg-white group-hover:text-[#C9A96E]">
                        View Project <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 flex justify-center gap-1.5">
          {items.map((_, index) => (
            <button
              key={index}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#C9A96E] w-5 h-2"
                  : "bg-[#2C3E50]/20 w-2 h-2 hover:bg-[#C9A96E]/40"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
