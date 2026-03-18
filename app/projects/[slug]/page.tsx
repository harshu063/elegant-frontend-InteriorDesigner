import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/data/projects";
import { ProjectGallery } from "@/components/ui/project-gallery";
import { WhyChooseUs } from "@/components/ui/why-choose-us";
import { Footerdemo } from "@/components/ui/footer-section";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Jay Interior`,
      description: project.description,
      images: [project.bannerImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[65vh] overflow-hidden">
        <Image
          src={project.bannerImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/70 via-[#2C3E50]/50 to-[#2C3E50]/80" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0 px-4">
          <div className="container mx-auto max-w-6xl">
            <nav className="flex items-center gap-2 text-white/60 text-xs">
              <Link href="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-[#C9A96E] transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-[#C9A96E]">{project.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-6xl px-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-3">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3 leading-tight">
              {project.title}
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-xl">{project.tagline}</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-4">
              About This Space
            </span>
            <h2 className="text-xl md:text-2xl font-semibold text-[#2C3E50] mb-6 leading-snug">
              {project.intro}
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A96E] mb-6" />
            <p className="text-base text-gray-600 leading-relaxed">{project.introParagraph}</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ProjectGallery images={project.images} title={project.title} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#2C3E50]">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] block mb-4">
            Ready to Begin?
          </span>
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
            Get Your Dream Space Designed
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Let&apos;s bring your vision to life. Our designers are ready to craft something
            extraordinary for your {project.category.toLowerCase()} space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#b8965e] transition-colors duration-300"
            >
              Get Free Consultation
            </Link>
            <a
              href="https://wa.me/919920904475"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footerdemo />
    </>
  );
}
