import type { Metadata } from "next";
import HeroCarousel from "@/components/ui/hero-carousel";
import AboutUsSection from "@/components/ui/about-us-section";
import TestimonialsSection from "@/components/ui/testimonials-section";

export const metadata: Metadata = {
  title: "Jay Interior – Premium Interior Design in Mumbai",
  description:
    "Discover Jay Interior's portfolio of 300+ residential and commercial interior design projects across Mumbai.",
};

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutUsSection />
      <TestimonialsSection />
    </>
  );
}