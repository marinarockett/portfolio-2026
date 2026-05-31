"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";

interface ProjectMeta {
  title: string;
  tags: string[];
  client: string;
  year: string;
  agency?: string;
  duration?: string;
  role: string[];
  type: string[];
  overview: string;
  challenge: string;
  solution: string;
  heroImage: string;
  images: string[];
  related: { title: string; tags: string[]; src: string; href: string }[];
}

export function ProjectPage({ project }: { project: ProjectMeta }) {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="pt-28 px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[8vw] font-extrabold uppercase leading-none mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-white/50 border border-white/20 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative w-full overflow-hidden mb-16"
          style={{ height: "60vw", maxHeight: "750px" }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={project.heroImage} alt={project.title} fill className="object-cover" unoptimized />
        </motion.div>
      </section>

      {/* META */}
      <section className="px-8 py-16 border-t border-white/15">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/15 pt-10">
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Client</p>
              <p className="text-sm font-semibold">{project.client}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Year</p>
              <p className="text-sm font-semibold">{project.year}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-2">My Role</p>
              {project.role.map((r) => <p key={r} className="text-sm font-semibold">{r}</p>)}
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Type</p>
              {project.type.map((t) => <p key={t} className="text-sm font-semibold">{t}</p>)}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* OVERVIEW */}
      <section className="px-8 py-16 border-t border-white/15">
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-white/40 mb-8">Overview</p>
          <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl">{project.overview}</p>
        </FadeIn>
      </section>

      {/* IMAGES */}
      {project.images.length > 0 && (
        <section className="px-8 py-8 border-t border-white/15">
          <FadeInStagger className="flex flex-col gap-4">
            {project.images.map((src, i) => (
              <FadeInItem key={i} className="relative w-full overflow-hidden" style={{ height: "50vw", maxHeight: "640px" } as React.CSSProperties}>
                <Image src={src} alt={`${project.title} ${i + 1}`} fill className="object-cover" unoptimized />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </section>
      )}

      {/* CHALLENGE */}
      <section className="px-8 py-16 border-t border-white/15">
        <div className="flex flex-col lg:flex-row gap-16">
          <FadeIn className="lg:w-1/2">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-8">The Challenge</p>
            <p className="text-base text-white/70 leading-relaxed">{project.challenge}</p>
          </FadeIn>
          <FadeIn className="lg:w-1/2" delay={0.15}>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-8">The Solution</p>
            <p className="text-base text-white/70 leading-relaxed">{project.solution}</p>
          </FadeIn>
        </div>
      </section>

      {/* MORE PROJECTS */}
      <section className="px-8 py-20 border-t border-white/15">
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">• Portfolio</p>
          <h2 className="text-[6vw] font-extrabold uppercase leading-none mb-16" style={{ fontFamily: "var(--font-manrope)" }}>
            Check Out Some More
          </h2>
        </FadeIn>
        <FadeInStagger className="flex flex-col">
          {project.related.map((rel, i) => (
            <FadeInItem key={i} className="border-t border-white/15">
              <Link href={rel.href} className="group block">
                <div className="relative w-full overflow-hidden" style={{ height: "40vw", maxHeight: "520px" }}>
                  <Image src={rel.src} alt={rel.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" unoptimized />
                </div>
                <div className="flex items-center justify-between py-5">
                  <div>
                    <p className="text-lg font-bold" style={{ fontFamily: "var(--font-manrope)" }}>{rel.title}</p>
                    <p className="text-xs text-white/40 mt-1">{rel.tags.join(" • ")}</p>
                  </div>
                  <span className="text-xs tracking-wider uppercase flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                    View Project →
                  </span>
                </div>
              </Link>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      <CTASection />
    </div>
  );
}
