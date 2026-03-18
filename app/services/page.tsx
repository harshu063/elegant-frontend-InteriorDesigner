import type { Metadata } from "next";
import { Feature72 } from "@/components/ui/feature-72";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "End-to-end interior solutions by Jay Interior — residential, commercial, and turnkey services across Mumbai with quality you can see, feel, and live with every day.",
  openGraph: {
    title: "Our Services | Jay Interior",
    description:
      "End-to-end interior solutions by Jay Interior — residential, commercial, and turnkey services across Mumbai.",
  },
};

export default function Services() {
  return (
    <>
      <div className="bg-[#2C3E50] py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-3">
            End-to-End Interior Solutions
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Our Services
          </h1>
          <p className="text-base text-white/60 leading-relaxed max-w-xl">
            From the first site visit to the final styling walk-through — Jay
            Interior delivers residential, commercial, and turnkey interior
            services across Mumbai with quality you can see, feel, and live with
            every day.
          </p>
        </div>
      </div>
      <Feature72 />
    </>
  );
}
