import type { Metadata } from "next";
import HeroWrapper from "@/components/ui/hero-wrapper";
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
      <HeroWrapper />
      <AboutUsSection />
      <TestimonialsSection />
    </>
  );
}