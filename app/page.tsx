import type { Metadata } from "next";
import IntroAnimation from "@/components/ui/scroll-morph-hero";
import AboutUsSection from "@/components/ui/about-us-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import { Footerdemo } from "@/components/ui/footer-section";

export const metadata: Metadata = {
  title: "Jay Interior – Premium Interior Design in Mumbai",
  description:
    "Discover Jay Interior's portfolio of 300+ residential and commercial interior design projects across Mumbai. 10+ years of experience, 250+ happy clients.",
};

export default function Home() {
  return (
    <>
      <section
        className="w-full h-[62vh] md:h-[88vh] md:max-h-[900px]"
        style={{ minHeight: "360px" }}
      >
        <IntroAnimation />
      </section>
      <AboutUsSection />
      <TestimonialsSection />
      <Footerdemo />
    </>
  );
}
