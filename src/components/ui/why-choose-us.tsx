import Image from "next/image";

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "10+ Years of Experience",
    description:
      "A decade of transforming spaces across Mumbai — residential, commercial, and hospitality projects executed with mastery.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Custom Design for Every Client",
    description:
      "No two projects are alike. We craft unique design narratives tailored to your personality, lifestyle, and vision.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Premium Materials Only",
    description:
      "We source the finest materials — imported laminates, solid wood, designer hardware — to ensure lasting quality and beauty.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "98% Client Satisfaction",
    description:
      "Our reputation is built on relationships. Over 250 happy clients who returned for new projects and referred their loved ones.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner, Mira Road",
    quote:
      "JAY Interiors completely transformed our 3BHK. The attention to detail, quality of materials, and the team's professionalism were outstanding. Our home is now our favourite place.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohit Mehta",
    role: "Business Owner, Borivali",
    quote:
      "They redesigned our entire office and the results were phenomenal. Productivity went up, clients are impressed, and our team actually loves coming to work now.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-3">
            Why Us
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2C3E50] max-w-xl">
            Why Choose JAY Interiors
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A96E] mt-4" />
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 p-6 rounded-xl border border-gray-100 hover:border-[#C9A96E]/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-white transition-colors duration-300">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#2C3E50] mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-[#2C3E50] rounded-2xl p-8 md:p-12">
          <h3 className="text-lg font-semibold text-[#C9A96E] mb-8 tracking-wide uppercase text-sm">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 rounded-xl p-6 border border-white/10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-[#C9A96E]">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
