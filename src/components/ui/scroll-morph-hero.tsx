"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

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
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
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
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-[#F8F8F2]"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img src={src} alt={`interior-project-${index}`} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-[#2C3E50] flex flex-col items-center justify-center p-4 border border-[#2C3E50]/50"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-[#C9A96E] uppercase tracking-widest mb-1">View</p>
                        <p className="text-xs font-medium text-white">Project</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const TOTAL_IMAGES = 17;

const IMAGES = [
    "/images/img-01.jpeg", "/images/img-02.jpeg", "/images/img-03.jpeg",
    "/images/img-04.jpeg", "/images/img-05.jpeg", "/images/img-06.jpeg",
    "/images/img-07.jpeg", "/images/img-08.jpeg", "/images/img-09.jpeg",
    "/images/img-10.jpeg", "/images/img-11.jpeg", "/images/img-12.jpeg",
    "/images/img-13.jpeg", "/images/img-14.jpeg", "/images/img-15.jpeg",
    "/images/img-16.jpeg", "/images/img-17.jpeg",
];

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function IntroAnimation() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Track container size
    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setContainerSize({ width: entry.contentRect.width, height: entry.contentRect.height });
            }
        });
        observer.observe(containerRef.current);
        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });
        return () => observer.disconnect();
    }, []);

    // Timer-driven phase transitions — no scroll interception
    useEffect(() => {
        const t1 = setTimeout(() => setIntroPhase("line"), 400);
        const t2 = setTimeout(() => setIntroPhase("circle"), 2000);
        const t3 = setTimeout(() => setIntroPhase("bottom-strip"), 4000);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    // Timer-driven morph value (0→1) once circle phase starts
    const [morphValue, setMorphValue] = useState(0);
    useEffect(() => {
        if (introPhase !== "circle") return;
        let start: number | null = null;
        const duration = 1800;
        const animate = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setMorphValue(progress);
            if (progress < 1) requestAnimationFrame(animate);
        };
        const id = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(id);
    }, [introPhase]);

    // Mouse parallax — updates state directly, no motion value needed
    const [parallaxValue, setParallaxValue] = useState(0);
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            setParallaxValue(normalizedX * 80);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const scatterPositions = useMemo(() => IMAGES.map(() => ({
        x: (Math.random() - 0.5) * 1400,
        y: (Math.random() - 0.5) * 900,
        rotation: (Math.random() - 0.5) * 180,
        scale: 0.5,
        opacity: 0,
    })), []);

    // Derived state for content overlay
    const showContent = introPhase === "bottom-strip" || (introPhase === "circle" && morphValue > 0.85);
    const contentOpacity = introPhase === "bottom-strip" ? 1 : Math.max(0, (morphValue - 0.85) / 0.15);

    // Central tagline visible during circle phase, fades as morph progresses
    const showTagline = introPhase === "circle" && morphValue < 0.6;
    const taglineOpacity = showTagline ? Math.max(0, 0.6 - morphValue) / 0.6 : 0;

    return (
        <div ref={containerRef} className="relative w-full h-full bg-[#F9F7F4] overflow-hidden">
            <div className="flex h-full w-full flex-col items-center justify-center">

                {/* Central tagline — visible during circle phase */}
                <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                    <motion.h1
                        animate={{ opacity: taglineOpacity, y: 0, filter: "blur(0px)" }}
                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl font-semibold tracking-tight text-[#2C3E50] md:text-4xl px-4"
                    >
                        Designing Spaces.{" "}
                        <span className="text-[#C9A96E]">Crafting Experiences.</span>
                    </motion.h1>
                    <motion.p
                        animate={{ opacity: taglineOpacity * 0.7 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-3 text-xs font-semibold tracking-[0.2em] text-[#2C3E50]/60"
                    >
                        SCROLL TO EXPLORE
                    </motion.p>
                </div>

                {/* Brand content overlay — fades in after arc forms */}
                <motion.div
                    animate={{ opacity: contentOpacity, y: showContent ? 0 : 16 }}
                    initial={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.7 }}
                    className="absolute top-[6%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4 w-full"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#2C3E50] tracking-tight mb-3">
                        Jay Interior
                    </h2>
                    <p className="text-sm md:text-base text-[#2C3E50]/70 max-w-md leading-relaxed">
                        Premium interior design & turnkey projects across Mumbai —
                        <br className="hidden md:block" />
                        transforming homes, offices & commercial spaces since 2014.
                    </p>
                </motion.div>

                {/* Image cards */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 68;
                            const lineX = i * lineSpacing - (TOTAL_IMAGES * lineSpacing) / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            // circle → arc morph
                            const isMobile = containerSize.width < 768;
                            const minDim = Math.min(containerSize.width, containerSize.height);
                            const circleRadius = Math.min(minDim * 0.35, 320);
                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const cRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(cRad) * circleRadius,
                                y: Math.sin(cRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            // Mobile: compact arc that fits within the visible hero height
                            const arcRadius = isMobile
                                ? containerSize.width * 0.48
                                : Math.min(containerSize.width, containerSize.height * 1.5) * 1.1;
                            // arcApexY = distance below center for the arc's topmost point
                            const arcApexY = containerSize.height * (isMobile ? 0.04 : 0.28);
                            const arcCenterY = arcApexY + arcRadius;
                            const spreadAngle = isMobile ? 105 : 125;
                            const startAngle = -90 - spreadAngle / 2;
                            const step = spreadAngle / (TOTAL_IMAGES - 1);
                            const currentArcAngle = startAngle + i * step;
                            const aRad = (currentArcAngle * Math.PI) / 180;

                            const arcScale = isMobile ? 0.72 : 1.7;
                            const arcPos = {
                                x: Math.cos(aRad) * arcRadius + parallaxValue,
                                y: Math.sin(aRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
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
                                phase={introPhase}
                                target={target}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
