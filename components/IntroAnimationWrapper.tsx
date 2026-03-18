"use client";

import dynamic from "next/dynamic";

const IntroAnimation = dynamic(
    () => import("@/components/ui/scroll-morph-hero"),
    {
        ssr: false,
        loading: () => (
            <div
                className="w-full h-[500px]"
                style={{
                    background: "linear-gradient(160deg, #F9F7F4 0%, #F2EDE6 100%)",
                }}
            />
        ),
    }
);

export default function IntroAnimationWrapper() {
    return <IntroAnimation />;
}