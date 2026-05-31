import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function CTASection() {
  return (
    <section className="px-8 py-32 border-t border-white/15 text-center">
      <FadeIn>
        <p className="text-xs tracking-widest uppercase text-white/40 mb-8">Have a project in mind?</p>
        <h2
          className="text-[7vw] font-extrabold uppercase leading-none mb-12"
          style={{ fontFamily: "var(--font-manrope)" }}
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
    <Link
      href="/contact"
      className="group relative inline-flex items-center justify-center overflow-hidden border border-white/60 rounded-full px-10 py-4 text-xs tracking-widest uppercase transition-colors duration-300"
    >
      <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      <span className="relative z-10 group-hover:text-black transition-colors duration-300">{label}</span>
    </Link>
  );
}
