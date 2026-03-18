"use client";

import dynamic from "next/dynamic";

const ScrollMorphHero = dynamic(
  () => import("./scroll-morph-hero"),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full h-screen"
        style={{
          background: "linear-gradient(160deg, #F9F7F4 0%, #F2EDE6 100%)",
        }}
      />
    ),
  }
);

export default function HeroWrapper() {
  return (
    <div className="w-full h-screen">
      <ScrollMorphHero />
    </div>
  );
}