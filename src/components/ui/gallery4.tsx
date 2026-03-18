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

const furnitureProjects: Gallery4Item[] = [
  {
    id: "project-1",
    title: "Heritage Haveli Hotel — Suite Collection, Jaisalmer",
    description: "48 hand-carved teak four-poster beds with jali headboards, brass-inlay wardrobes, and custom dining sets for a 24-room boutique hotel. Delivered and installed over 8 weeks.",
    href: "#",
    image: "/images/img-20.jpeg",
  },
  {
    id: "project-2",
    title: "Tech Firm HQ — Executive Interiors, Gurgaon",
    description: "Custom sheesham workstations, conference tables, and reception counter for a 120-seat corporate campus. 240+ pieces delivered across 3 floors in 10 weeks.",
    href: "#",
    image: "/images/img-21.jpeg",
  },
  {
    id: "project-3",
    title: "Lakeside Private Villa — Collector's Home, Udaipur",
    description: "End-to-end furnishing for a 6,000 sq.ft. residence: 14-seater carved teak dining suite, hand-painted bedroom sets for 4 rooms, and a floor-to-ceiling sheesham home library.",
    href: "#",
    image: "/images/img-22.jpeg",
  },
  {
    id: "project-4",
    title: "Rajasthani Fine Dining Restaurant — Bandra, Mumbai",
    description: "60-cover restaurant interior with carved sheesham dining chairs, hand-blocked fabric seats, teak bar counter with brass fittings, and Marwari motif wall panel installations.",
    href: "#",
    image: "/images/img-23.jpeg",
  },
  {
    id: "project-5",
    title: "NRI Home — Export Delivery, Toronto, Canada",
    description: "A complete sheesham bedroom set, carved console table, and traditional takhat with storage — crafted, ISPM-15 certified, and shipped to a Rajasthani family's home in Canada.",
    href: "#",
    image: "/images/img-24.jpeg",
  },
];

const Gallery4 = ({
  title = "Completed Projects",
  description = "From heritage hotels in Jaisalmer to corporate campuses in Gurgaon — each project is a testament to craft that outlasts trends. Residential, hospitality, commercial, and export work across 18+ states.",
  items = furnitureProjects,
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
    <section className="py-14 md:py-24 bg-[#F8F8F2]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-0">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#88734C]">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#202e44]">{title}</h2>
            <p className="text-base text-[#202e44]/70 leading-relaxed max-w-xl mt-1">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon" variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="rounded-full disabled:pointer-events-auto border-[#202e44]/20 hover:bg-[#88734C] hover:text-white hover:border-[#88734C] disabled:opacity-30 transition-all"
            >
              <ArrowLeft className="size-4" />
            </Button>
            <Button
              size="icon" variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="rounded-full disabled:pointer-events-auto border-[#202e44]/20 hover:bg-[#88734C] hover:text-white hover:border-[#88734C] disabled:opacity-30 transition-all"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#202e44]/85 via-[#202e44]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                      <p className="text-[#88734C] text-xs font-semibold tracking-widest uppercase mb-2">Completed Project</p>
                      <h3 className="text-lg font-semibold text-white mb-2 leading-snug">{item.title}</h3>
                      <p className="text-white/70 text-sm line-clamp-2 leading-relaxed mb-4">{item.description}</p>
                      <span className="inline-flex items-center text-xs font-semibold text-white bg-[#88734C] px-3 py-1.5 rounded-full gap-1.5 transition-all group-hover:bg-white group-hover:text-[#88734C]">
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
                  ? "bg-[#88734C] w-5 h-2"
                  : "bg-[#202e44]/20 w-2 h-2 hover:bg-[#88734C]/40"
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
