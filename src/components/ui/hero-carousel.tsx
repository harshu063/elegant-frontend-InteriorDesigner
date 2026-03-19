"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const IMAGES = [
  "/images/img-01.jpeg",
  "/images/img-02.jpeg",
  "/images/img-03.jpeg",
  "/images/img-04.jpeg",
  "/images/img-05.jpeg",
  "/images/img-06.jpeg",
  "/images/img-07.jpeg",
  "/images/img-08.jpeg",
  "/images/img-09.jpeg",
  "/images/img-10.jpeg",
  "/images/img-11.jpeg",
  "/images/img-12.jpeg",
  "/images/img-13.jpeg",
  "/images/img-14.jpeg",
  "/images/img-15.jpeg",
  "/images/img-16.jpeg",
  "/images/img-17.jpeg",
];

const stats = [
  { value: "300+", label: "Projects" },
  { value: "250+", label: "Clients" },
  { value: "10+", label: "Years" },
];

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1800);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F9F7F4] via-[#F5F0EA] to-[#FAFAF8] overflow-hidden">
      {/* Brand overlay */}
      <div className="relative z-10 pt-16 pb-10 md:pt-24 md:pb-14 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-5">
            <div className="h-px w-8 bg-[#C9A96E]" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#C9A96E] uppercase">
              Premium Interior Design
            </span>
            <div className="h-px w-8 bg-[#C9A96E]" />
          </div>

          {/* Brand */}
          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-semibold text-[#2C3E50] tracking-[-0.02em] leading-none mb-2">
            JAY Interiors
          </h1>

          {/* Gold rule */}
          <div className="w-14 h-0.5 bg-[#C9A96E] my-5" />

          {/* Tagline */}
          <p className="text-sm md:text-base text-[#2C3E50]/55 font-light tracking-wide max-w-md leading-relaxed mb-6">
            Residential · Commercial · Turnkey
            <br />
            <span className="text-[#2C3E50]/40 text-xs md:text-sm">
              Mumbai&apos;s trusted design studio — Est. 2014
            </span>
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-8 mb-8">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-6 md:gap-8">
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-semibold text-[#2C3E50] tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#2C3E50]/40 mt-0.5">
                    {s.label}
                  </p>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 bg-[#C9A96E]/25" />
                )}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2C3E50] hover:bg-[#C9A96E] text-white text-xs md:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Free Consultation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#2C3E50] hover:text-[#C9A96E] text-xs md:text-sm font-semibold px-5 py-3 rounded-full border border-[#2C3E50]/20 hover:border-[#C9A96E]/50 transition-all duration-300 bg-white/60 backdrop-blur-sm"
            >
              View Projects
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-3.5 h-3.5"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative z-0 pb-10 md:pb-16">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent>
            {IMAGES.map((src, index) => (
              <CarouselItem
                className="basis-1/3 sm:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                key={index}
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md group cursor-pointer mx-1">
                  <img
                    src={src}
                    alt={`Interior project ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable={false}
                  />
                  {/* Hover tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#F5F0EA] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FAFAF8] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
