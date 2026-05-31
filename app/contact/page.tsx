"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <section className="flex-1 pt-28 px-8 flex flex-col justify-center py-32">
        <motion.p
          className="text-xs tracking-widest uppercase text-white/40 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind?
        </motion.p>

        <motion.h1
          className="text-[8vw] font-extrabold uppercase leading-none mb-16"
          style={{ fontFamily: "var(--font-manrope)" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Let&apos;s Work<br />Together
        </motion.h1>

        <FadeIn delay={0.3}>
          <div className="flex flex-col gap-6 border-t border-white/15 pt-12 max-w-lg">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-2">Email</p>
              <Link href="mailto:marinarockett@gmail.com" className="text-lg hover:opacity-60 transition-opacity">
                marinarockett@gmail.com
              </Link>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-2">LinkedIn</p>
              <Link href="https://www.linkedin.com/in/marinarockett" target="_blank" rel="noopener noreferrer" className="text-lg hover:opacity-60 transition-opacity">
                linkedin.com/in/marinarockett
              </Link>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-2">Based in</p>
              <p className="text-lg">São Paulo, Brazil — Working Worldwide</p>
            </div>
          </div>

          <Link
            href="mailto:marinarockett@gmail.com"
            className="group relative inline-flex items-center justify-center overflow-hidden border border-white/60 rounded-full px-10 py-4 text-xs tracking-widest uppercase mt-12 transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Get In Touch</span>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
