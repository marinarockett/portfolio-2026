"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";

const projects = [
  { title: "Coke Zero AR Fridge", slug: "coke-ar-fridge", tags: ["Augmented Reality", "Artificial Intelligence", "8th Wall", "Mobile"], src: "https://framerusercontent.com/images/ZJ8pfsBhevCDG4pIvntToBlmg.png" },
  { title: "The Heroes", slug: "the-heroes", tags: ["Augmented Reality", "Artificial Intelligence", "8th Wall", "Mobile App"], src: "https://framerusercontent.com/images/Wnit3nJ733ebzd0OeeMXnyPA7w.png" },
  { title: "Surreal Burger", slug: "surreal-burger", tags: ["Generative AI", "Mobile and Desktop"], src: "https://framerusercontent.com/images/2v5FAJwaWzUwmAETzph6BSi03SQ.webp" },
  { title: "Craft Hero VR", slug: "craft-hero-vr", tags: ["Virtual Reality", "Meta Quest 2", "Unity", "Immersive App"], src: "https://framerusercontent.com/images/QHVCex6FmPgYBod3Sz1gSgl9mws.jpg" },
  { title: "Schweppes Innovation Sprint", slug: "schweppes", tags: ["Strategy", "Innovation Strategy"], src: "https://framerusercontent.com/images/RRU1lN0CpCNogvVGvayxoZJxis.jpg" },
  { title: "Phenomenotter AR", slug: "phenomenotter", tags: ["Augmented Reality", "Tiktok Effect", "Instagram Filter", "Brand Effect"], src: "https://framerusercontent.com/images/W450nvjpLeqb0enjoJRofCTJKE0.jpg" },
];

export default function Works() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-28 px-8">
        <motion.h1
          className="text-[10vw] font-extrabold uppercase leading-none tracking-tight mb-16"
          style={{ fontFamily: "var(--font-manrope)" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Latest Projects
        </motion.h1>

        <FadeInStagger className="flex flex-col">
          {projects.map((project, i) => (
            <FadeInItem key={i} className="border-t border-white/15">
              <Link href={`/works/${project.slug}`} className="group block">
                <div className="relative w-full overflow-hidden" style={{ height: "55vw", maxHeight: "680px" }}>
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    unoptimized
                  />
                </div>
                <div className="flex items-center justify-between py-5">
                  <div>
                    <p className="text-lg font-bold" style={{ fontFamily: "var(--font-manrope)" }}>{project.title}</p>
                    <p className="text-xs text-white/40 mt-1">{project.tags.join(" • ")}</p>
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
