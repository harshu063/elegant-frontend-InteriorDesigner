"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-[#FAFAF8]">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-3">
            Gallery
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2C3E50]">
            Project Showcase
          </h2>
        </div>

        {/* Main image */}
        <div className="relative w-full h-[400px] md:h-[580px] rounded-xl overflow-hidden mb-4 shadow-lg">
          <Image
            src={images[activeIndex]}
            alt={`${title} – image ${activeIndex + 1}`}
            fill
            className="object-cover transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={activeIndex === 0}
          />
          {/* Navigation arrows */}
          <button
            onClick={() => setActiveIndex((i) => (i - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-[#C9A96E] hover:text-white transition-colors duration-300 group"
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-[#C9A96E] hover:text-white transition-colors duration-300"
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full">
            {activeIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                i === activeIndex
                  ? "ring-2 ring-[#C9A96E] ring-offset-2 scale-105"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${title} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="128px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
