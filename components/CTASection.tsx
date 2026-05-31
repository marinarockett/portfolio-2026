"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

export function CTASection() {
  return (
    <section className="px-8 py-32 border-t border-white/15 text-center">
      <FadeIn>
        <p className="text-xs tracking-widest uppercase text-white/40 mb-8">Have a project in mind?</p>
        <h2
          className="text-[7vw] font-extrabold uppercase leading-none mb-12"
          style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.02em" }}
        >
          Let&apos;s Work Together
        </h2>
        <ContactButton />
      </FadeIn>
    </section>
  );
}

export function ContactButton({ label = "Get In Touch" }: { label?: string }) {
  return (
    <Link href="/contact" className="group relative inline-flex items-center justify-center overflow-hidden border border-white/50 rounded-full px-10 py-4 text-xs tracking-[0.15em] uppercase">
      {/* Fill layer — slides up from bottom */}
      <motion.span
        className="absolute inset-0 bg-white rounded-full"
        initial={{ y: "100%" }}
        whileHover={{ y: "0%" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Text — fades to black on hover */}
      <motion.span
        className="relative z-10 text-white"
        whileHover={{ color: "#000000" }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {label}
      </motion.span>
    </Link>
  );
}
