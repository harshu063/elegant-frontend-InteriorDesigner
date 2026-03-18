"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
  src: string;
  index: number;
  total: number;
  phase: AnimationPhase;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- Card dimensions ---
const IMG_WIDTH = 64;
const IMG_HEIGHT = 92;

function FlipCard({ src, index, target }: FlipCardProps) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{ type: "spring", stiffness: 36, damping: 16 }}
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.55, type: "spring", stiffness: 240, damping: 22 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 overflow-hidden rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={src}
            alt={`interior-${index}`}
            className="h-full w-full object-cover"
            draggable={false}
          />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 overflow-hidden rounded-lg bg-[#2C3E50] flex flex-col items-center justify-center gap-1.5 border border-[#C9A96E]/30"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Gold diamond icon */}
          <div className="w-5 h-5 border border-[#C9A96E] rotate-45 mb-0.5" />
          <p className="text-[7px] font-bold text-[#C9A96E] uppercase tracking-[0.18em]">JAY</p>
          <p className="text-[7px] font-medium text-white/60 uppercase tracking-[0.12em]">Interiors</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Hero ---
const TOTAL_IMAGES = 17;

const IMAGES = [
  "/images/img-01.jpeg", "/images/img-02.jpeg", "/images/img-03.jpeg",
  "/images/img-04.jpeg", "/images/img-05.jpeg", "/images/img-06.jpeg",
  "/images/img-07.jpeg", "/images/img-08.jpeg", "/images/img-09.jpeg",
  "/images/img-10.jpeg", "/images/img-11.jpeg", "/images/img-12.jpeg",
  "/images/img-13.jpeg", "/images/img-14.jpeg", "/images/img-15.jpeg",
  "/images/img-16.jpeg", "/images/img-17.jpeg",
];

const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

// Ease in-out cubic
const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function IntroAnimation() {
  const [phase, setPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [morphValue, setMorphValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  // Container size tracking
  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new ResizeObserver((entries) => {
      for (const e of entries) {
        setContainerSize({ width: e.contentRect.width, height: e.contentRect.height });
      }
    });
    obs.observe(containerRef.current);
    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });
    return () => obs.disconnect();
  }, []);

  // Phase timeline
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("line"), 350);
    const t2 = setTimeout(() => setPhase("circle"), 1900);
    const t3 = setTimeout(() => setPhase("bottom-strip"), 3700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Morph animation (circle → arc)
  useEffect(() => {
    if (phase !== "circle") return;
    let start: number | null = null;
    const duration = 1700;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const raw = Math.min((ts - start) / duration, 1);
      setMorphValue(easeInOut(raw));
      if (raw < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [phase]);

  // Mouse parallax
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const norm = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      setParallaxValue(norm * 70);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const scatter = useMemo(() => IMAGES.map(() => ({
    x: (Math.random() - 0.5) * 1400,
    y: (Math.random() - 0.5) * 900,
    rotation: (Math.random() - 0.5) * 180,
    scale: 0.4,
    opacity: 0,
  })), []);

  // Content visibility
  const showContent = phase === "bottom-strip" || (phase === "circle" && morphValue > 0.82);
  const contentOpacity = phase === "bottom-strip" ? 1 : Math.max(0, (morphValue - 0.82) / 0.18);
  const taglineOpacity = phase === "circle" && morphValue < 0.55 ? Math.max(0, (0.55 - morphValue) / 0.55) : 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F9F7F4 0%, #F2EDE6 100%)" }}
    >
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="flex h-full w-full flex-col items-center justify-center">

        {/* Central tagline — circle phase */}
        <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 px-6">
          <motion.div
            animate={{ opacity: taglineOpacity, y: taglineOpacity > 0 ? 0 : 6 }}
            initial={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-3"
          >
            {/* Decorative mark */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              <div className="h-px w-10 bg-[#C9A96E]" />
            </div>
            <h1 className="text-[22px] md:text-[36px] font-light tracking-[0.04em] text-[#2C3E50] leading-snug">
              Designing Spaces.{" "}
              <span className="font-semibold text-[#C9A96E] italic">Crafting Experiences.</span>
            </h1>
            <p className="text-[10px] font-semibold tracking-[0.28em] text-[#2C3E50]/40 uppercase mt-1">
              Mumbai · Est. 2014
            </p>
          </motion.div>
        </div>

        {/* Main brand overlay — arc phase */}
        <motion.div
          animate={{ opacity: contentOpacity, y: showContent ? 0 : 18 }}
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[4%] md:top-[6%] z-10 flex flex-col items-center text-center pointer-events-none px-4 w-full"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-px w-8 bg-[#C9A96E]" />
            <span className="text-[9px] font-bold tracking-[0.3em] text-[#C9A96E] uppercase">
              Premium Interior Design
            </span>
            <div className="h-px w-8 bg-[#C9A96E]" />
          </div>

          {/* Brand name */}
          <h2 className="text-[40px] sm:text-[52px] md:text-[64px] font-semibold text-[#2C3E50] tracking-[-0.02em] leading-none mb-1">
            JAY Interiors
          </h2>

          {/* Gold rule */}
          <motion.div
            animate={{ scaleX: showContent ? 1 : 0 }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-0.5 bg-[#C9A96E] origin-center my-4"
          />

          {/* Tagline */}
          <p className="text-sm md:text-base text-[#2C3E50]/60 font-light tracking-wide max-w-sm leading-relaxed mb-5 md:mb-7">
            Residential · Commercial · Turnkey
            <br className="hidden md:block" />
            <span className="text-[#2C3E50]/40 text-xs md:text-sm">Mumbai&apos;s trusted design studio</span>
          </p>

          {/* Stats */}
          <div className="hidden md:flex items-center gap-8 mb-7">
            {[
              { n: "300+", l: "Projects" },
              { n: "250+", l: "Clients" },
              { n: "10+", l: "Years" },
            ].map((s, i, arr) => (
              <React.Fragment key={s.l}>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-[#2C3E50] tracking-tight">{s.n}</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#2C3E50]/40 mt-0.5">{s.l}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-px h-8 bg-[#C9A96E]/30" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 pointer-events-auto">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2C3E50] hover:bg-[#C9A96E] text-white text-xs md:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Free Consultation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#2C3E50] hover:text-[#C9A96E] text-xs md:text-sm font-semibold px-5 py-3 rounded-full border border-[#2C3E50]/20 hover:border-[#C9A96E]/50 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              View Projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Image cards */}
        <div className="relative flex items-center justify-center w-full h-full">
          {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (phase === "scatter") {
              target = scatter[i];
            } else if (phase === "line") {
              const spacing = 70;
              const lineX = i * spacing - (TOTAL_IMAGES * spacing) / 2;
              target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              // circle → arc morph
              const isMobile = containerSize.width < 768;
              const minDim = Math.min(containerSize.width, containerSize.height);
              const circleRadius = Math.min(minDim * 0.34, 310);
              const circleAngle = (i / TOTAL_IMAGES) * 360;
              const cRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(cRad) * circleRadius,
                y: Math.sin(cRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              const arcRadius = isMobile
                ? containerSize.width * 0.46
                : Math.min(containerSize.width, containerSize.height * 1.5) * 1.08;
              const arcApexY = containerSize.height * (isMobile ? 0.16 : 0.1);
              const arcCenterY = arcApexY + arcRadius;
              const spreadAngle = isMobile ? 108 : 128;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / (TOTAL_IMAGES - 1);
              const arcAngle = startAngle + i * step;
              const aRad = (arcAngle * Math.PI) / 180;
              const arcScale = isMobile ? 0.7 : 1.65;

              const arcPos = {
                x: Math.cos(aRad) * arcRadius + parallaxValue,
                y: Math.sin(aRad) * arcRadius + arcCenterY,
                rotation: arcAngle + 90,
                scale: arcScale,
              };

              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return (
              <FlipCard
                key={i}
                src={src}
                index={i}
                total={TOTAL_IMAGES}
                phase={phase}
                target={target}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
}
