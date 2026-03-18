import { type ReactNode, useEffect, useState } from "react";
import {
    ArrowRight,
    BarChart2,
    ChevronDown,
    Home,
    PieChart,
    Pen,
    PaintBucket,
    Ruler,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export function ShiftingDropDown() {
    return (
        <section id="services-section" className="w-full bg-[#F8F8F2] py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-10">
                    <span className="text-[#88734C] font-medium text-sm tracking-widest uppercase">What We Offer</span>
                    <h2 className="text-3xl md:text-4xl font-light text-[#202e44] mt-2 mb-4">Our Services</h2>
                    <p className="text-[#202e44]/70 max-w-xl mx-auto text-sm">
                        Explore our full range of design and architecture services through our interactive menu below.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Tabs />
                </div>
            </div>
        </section>
    );
}

const Tabs = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const [dir, setDir] = useState<null | "l" | "r">(null);

    const handleSetSelected = (val: number | null) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
        } else if (val === null) {
            setDir(null);
        }
        setSelected(val);
    };

    return (
        <div
            onMouseLeave={() => handleSetSelected(null)}
            className="relative flex h-fit gap-2"
        >
            {TABS.map((t) => (
                <Tab
                    key={t.id}
                    selected={selected}
                    handleSetSelected={handleSetSelected}
                    tab={t.id}
                >
                    {t.title}
                </Tab>
            ))}

            <AnimatePresence>
                {selected && <Content dir={dir} selected={selected} />}
            </AnimatePresence>
        </div>
    );
};

const Tab = ({
    children,
    tab,
    handleSetSelected,
    selected,
}: {
    children: ReactNode;
    tab: number;
    handleSetSelected: (val: number | null) => void;
    selected: number | null;
}) => {
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className={`
                flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium
                transition-all duration-200 border
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88734C]
                ${selected === tab
                    ? "bg-[#202e44] text-white border-[#202e44] shadow-sm"
                    : "text-[#202e44] hover:bg-[#202e44]/10 border-[#202e44]/20 hover:border-[#202e44]/40"
                }
            `}
        >
            <span>{children}</span>
            <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${selected === tab ? "rotate-180" : ""}`}
            />
        </button>
    );
};

const Content = ({
    selected,
    dir,
}: {
    selected: number | null;
    dir: null | "l" | "r";
}) => {
    return (
        <motion.div
            id="overlay-content"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute left-0 top-[calc(100%_+_16px)] w-96 rounded-xl border border-[#202e44]/10 bg-white text-[#202e44] shadow-xl p-4 z-50"
        >
            <Bridge />
            <Nub selected={selected} />

            {TABS.map((t) => (
                <div className="overflow-hidden" key={t.id}>
                    {selected === t.id && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                            <t.Component />
                        </motion.div>
                    )}
                </div>
            ))}
        </motion.div>
    );
};

const Bridge = () => (
    <div className="absolute -top-[16px] left-0 right-0 h-[16px]" />
);

const Nub = ({ selected }: { selected: number | null }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");
            if (!hoveredTab || !overlayContent) return;
            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();
            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
            setLeft(tabCenter);
        }
    };

    return (
        <motion.span
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)" }}
            animate={{ left }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white border border-[#202e44]/10 shadow-sm"
        />
    );
};

const InteriorServices = () => (
    <div>
        <div className="flex gap-6">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-[#88734C] flex items-center gap-1">
                    <Pen size={14} /> Interior
                </h3>
                <a href="#" className="mb-1 block text-sm text-[#202e44]/70 hover:text-[#202e44]">Living Spaces</a>
                <a href="#" className="block text-sm text-[#202e44]/70 hover:text-[#202e44]">Bedrooms</a>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-[#88734C] flex items-center gap-1">
                    <PaintBucket size={14} /> Decoration
                </h3>
                <a href="#" className="mb-1 block text-sm text-[#202e44]/70 hover:text-[#202e44]">Color Schemes</a>
                <a href="#" className="mb-1 block text-sm text-[#202e44]/70 hover:text-[#202e44]">Furniture</a>
                <a href="#" className="block text-sm text-[#202e44]/70 hover:text-[#202e44]">Textiles</a>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-[#88734C] flex items-center gap-1">
                    <Ruler size={14} /> Planning
                </h3>
                <a href="#" className="mb-1 block text-sm text-[#202e44]/70 hover:text-[#202e44]">Space Planning</a>
                <a href="#" className="mb-1 block text-sm text-[#202e44]/70 hover:text-[#202e44]">3D Visualization</a>
                <a href="#" className="block text-sm text-[#202e44]/70 hover:text-[#202e44]">Consultation</a>
            </div>
        </div>
        <button className="ml-auto mt-4 flex items-center gap-1 text-sm font-medium text-[#88734C] transition-colors hover:text-[#202e44]">
            <span>View all interior services</span>
            <ArrowRight size={16} />
        </button>
    </div>
);

const Pricing = () => (
    <div className="grid grid-cols-3 gap-4 divide-x divide-[#202e44]/10">
        <a href="#" className="flex w-full flex-col items-center justify-center py-2 text-[#202e44]/70 transition-colors hover:text-[#202e44]">
            <Home className="mb-2 h-5 w-5 text-[#88734C]" />
            <span className="text-xs font-medium">Essential</span>
            <span className="text-xs text-[#202e44]/50 mt-1">From $2,000</span>
        </a>
        <a href="#" className="flex w-full flex-col items-center justify-center py-2 text-[#202e44]/70 transition-colors hover:text-[#202e44]">
            <BarChart2 className="mb-2 h-5 w-5 text-[#88734C]" />
            <span className="text-xs font-medium">Premium</span>
            <span className="text-xs text-[#202e44]/50 mt-1">From $5,000</span>
        </a>
        <a href="#" className="flex w-full flex-col items-center justify-center py-2 text-[#202e44]/70 transition-colors hover:text-[#202e44]">
            <PieChart className="mb-2 h-5 w-5 text-[#88734C]" />
            <span className="text-xs font-medium">Luxury</span>
            <span className="text-xs text-[#202e44]/50 mt-1">Custom</span>
        </a>
    </div>
);

const Portfolio = () => (
    <div>
        <div className="grid grid-cols-2 gap-2">
            <a href="#" className="group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88734C]">
                <img
                    className="mb-2 h-14 w-full rounded-md object-cover"
                    src="/images/img-05.jpeg"
                    alt="Portfolio item 1"
                />
                <h4 className="mb-0.5 text-sm font-medium text-[#202e44] group-hover:underline">
                    Modern Living Room
                </h4>
                <p className="text-xs text-[#202e44]/60">
                    Contemporary interior design with minimalist aesthetics.
                </p>
            </a>
            <a href="#" className="group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88734C]">
                <img
                    className="mb-2 h-14 w-full rounded-md object-cover"
                    src="/images/img-10.jpeg"
                    alt="Portfolio item 2"
                />
                <h4 className="mb-0.5 text-sm font-medium text-[#202e44] group-hover:underline">
                    Luxury Bedroom
                </h4>
                <p className="text-xs text-[#202e44]/60">
                    Elegant bedroom design with warm tones and textures.
                </p>
            </a>
        </div>
        <button className="ml-auto mt-4 flex items-center gap-1 text-sm font-medium text-[#88734C] transition-colors hover:text-[#202e44]">
            <span>View full portfolio</span>
            <ArrowRight size={16} />
        </button>
    </div>
);

const TABS = [
    { title: "Services", Component: InteriorServices },
    { title: "Pricing", Component: Pricing },
    { title: "Portfolio", Component: Portfolio },
].map((n, idx) => ({ ...n, id: idx + 1 }));
