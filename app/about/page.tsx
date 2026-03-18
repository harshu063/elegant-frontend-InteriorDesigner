import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footerdemo } from "@/components/ui/footer-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about JAY Interiors — 10+ years of premium interior design in Mumbai. Meet our team and discover our design philosophy.",
  openGraph: {
    title: "About Us | Jay Interior",
    description:
      "10+ years of premium interior design in Mumbai. Craftsmanship, personalization, and luxury — at every scale.",
  },
};

const stats = [
  { value: "300+", label: "Projects Delivered" },
  { value: "250+", label: "Happy Clients" },
  { value: "10+", label: "Years of Experience" },
  { value: "98%", label: "On-Time Completion" },
];

const values = [
  {
    title: "Craftsmanship",
    description:
      "Every element we design is executed with precision. We hold ourselves to the highest standards of quality — from material selection to final installation.",
  },
  {
    title: "Personalization",
    description:
      "No two clients are the same. We take time to understand your lifestyle, preferences, and aspirations before a single line is drawn.",
  },
  {
    title: "Premium Design",
    description:
      "We believe luxury is not about price — it's about the thoughtfulness behind every decision. Our designs feel elevated because they are deeply considered.",
  },
  {
    title: "Transparency",
    description:
      "From quotations to timelines, we keep you informed at every step. Trust is the foundation of every project we take on.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#2C3E50] py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-3">
            Our Story
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            About JAY Interiors
          </h1>
          <p className="text-base text-white/60 leading-relaxed max-w-xl">
            A decade of transforming spaces across Mumbai — driven by a passion for beautiful,
            functional design and an unwavering commitment to client satisfaction.
          </p>
        </div>
      </div>

      {/* Story section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-4">
                Who We Are
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2C3E50] mb-5 leading-snug">
                Designing Spaces That Tell Your Story
              </h2>
              <div className="w-12 h-0.5 bg-[#C9A96E] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                JAY Interiors was founded with a simple belief: that every space — regardless of
                size or budget — deserves thoughtful, beautiful design. Over the past decade, we
                have grown from a small design studio to one of Mumbai&apos;s most trusted interior
                design firms.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Led by Om Prakash Chauhan, our team brings together seasoned designers, skilled
                craftsmen, and dedicated project managers who work in concert to deliver projects
                of exceptional quality — on time, every time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From compact Mira Road apartments to sprawling villas in Vasai, from boutique
                offices in Borivali to luxury hotel suites — we approach every project with the
                same passion and precision.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/img-18.jpeg"
                alt="JAY Interiors studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-[#FAFAF8]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#C9A96E] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-3">
              What Drives Us
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2C3E50]">
              Our Design Philosophy
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="flex gap-5 p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#C9A96E]/30 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#C9A96E] text-white flex items-center justify-center font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50] mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="py-0 overflow-hidden">
        <div className="flex gap-2">
          {["/images/img-01.jpeg", "/images/img-02.jpeg", "/images/img-03.jpeg", "/images/img-04.jpeg", "/images/img-05.jpeg"].map(
            (src, i) => (
              <div key={i} className="relative flex-1 h-48 md:h-64 shrink-0 min-w-0">
                <Image src={src} alt={`Interior ${i + 1}`} fill className="object-cover" sizes="20vw" />
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#2C3E50]">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/60 text-base max-w-lg mx-auto mb-8">
            Let&apos;s create something extraordinary together. Get in touch for a free design
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#b8965e] transition-colors duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footerdemo />
    </>
  );
}
