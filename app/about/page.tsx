"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";

const experience = [
  { period: "Aug 2024 - Present", company: "Freelance", role: "Experience Design Lead", description: "Partnering with Kore Meta Inc., a Toronto-based XR software company, I led the UX for an XR mixed reality app as part of the Oculus VR Start Program — recognized as one of the Top 3 apps at Meta's NYC '24 Hackathon. In collaboration with Conceivian, led the full UX/CX design process for Coros.AI, an AI-driven chatbot platform." },
  { period: "Jan 2024 - Aug 2024", company: "Subvrsive (WPP)", role: "Acting Experience Design Lead", description: "Responsible for creating engaging user-centered design solutions, developing and implementing UX/UI design strategies, leading and mentoring the UX/UI design team, overseeing the design process from concept to execution, conducting user research and usability testing, and collaborating with cross-functional teams." },
  { period: "Mar 2022 - Dec 2023", company: "Subvrsive (WPP)", role: "Senior UX Designer", description: "Responsible for deliverables across UX/UI, product design, experience design, interaction design, and visual design. Designed user flows, wireframes, and interactive prototypes across mobile, web, and XR platforms. Collaborated with international teams and applied Design Thinking and Lean UX methodologies." },
  { period: "Jun 2021 - Mar 2022", company: "Hogarth Worldwide (WPP)", role: "Senior Creative Technologist", description: "Co-led product strategy for Metaverse, AI, AR/VR, and web3 experiences, driving product design from concept to execution." },
  { period: "Jun 2020 - Jun 2021", company: "Hogarth Worldwide (WPP)", role: "Senior UX Designer", description: "Designed user-centered experiences across mobile, web, and XR platforms for global brands. Focused on UX research, personas, user flows, journey maps, wireframes, prototypes, and visual design." },
  { period: "Dec 2019 - Jun 2020", company: "Hogarth Worldwide (WPP)", role: "Senior Art Direction", description: "Designed and executed multi-channel advertising campaigns for global clients, delivering visually impactful designs and innovative creative concepts using Figma and Adobe Creative Suite." },
];

const awards = [
  { number: "01", title: "CO-AUTHOR", subtitle: '"Metaverse for Advertising"', org: "IAB", year: "2024" },
  { number: "02", title: "MEMBER", subtitle: '"Metaverse, XR and Games" Committee', org: "IAB", year: "2023" },
  { number: "03", title: "GUEST SPEAKER", subtitle: "Gen-AI Talk", org: "LATAM's Largest E-commerce Event", year: "2023" },
  { number: "04", title: "FEATURED", subtitle: "AI's role in digital transformation", org: "Propmark's article", year: "2023" },
  { number: "05", title: "SPEAKER", subtitle: "Web3 Online Global Masterclass", org: "Hogarth Worldwide", year: "2023" },
];

const process = [
  { number: "01", title: "DATA-DRIVEN DESIGN", description: 'Research and data are at the core of my creative process. By focusing on your market, understanding your audience, and asking critical questions like "What if?" and "Why?", I uncover insights that drive impactful solutions.' },
  { number: "02", title: "DESIGN THINKING FRAMEWORK", description: "My flexible framework allows me to deeply understand audiences, challenge assumptions, redefine problems, and create innovative, user-centered experiences that users have never seen before." },
  { number: "03", title: "HUMAN-CENTERED DESIGN", description: "Every great experience begins and ends with people. My problem-solving methodology prioritizes the human perspective at every stage, ensuring solutions are meaningful and intuitive." },
];

const clients = ["The Coca-Cola Company", "The Walt Disney Company", "Marvel", "McDonald's", "Schweppes", "Nestle", "Burger King", "Burberry"];

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="pt-28 px-8">
        <motion.h1
          className="text-[10vw] font-extrabold uppercase leading-none tracking-tight border-b border-white/15 pb-8"
          style={{ fontFamily: "var(--font-manrope)" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          A Full-Stack<br />Design Leader<br />At My Core.
        </motion.h1>

        <motion.div
          className="flex justify-between items-end py-8 border-b border-white/15"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-white/60">Experience &amp; Product Design Lead</p>
          <p className="text-sm text-white/60 text-right">Transforming Products Into Digital Masterpieces</p>
        </motion.div>

        {/* Full-width photo */}
        <motion.div
          className="relative w-full mt-0 overflow-hidden"
          style={{ height: "70vw", maxHeight: "800px" }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="https://framerusercontent.com/images/4LxsUxxcjm4khMvSJbkVOe9NAE.jpg"
            alt="Marina Rockett"
            fill
            className="object-cover object-top"
            unoptimized
          />
        </motion.div>
      </section>

      {/* WHO AM I */}
      <section className="px-8 py-20 border-t border-white/15">
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-white/40 mb-16">• Who Am I</p>
        </FadeIn>
        <div className="flex flex-col lg:flex-row gap-16">
          <FadeIn className="lg:w-1/2" delay={0.1}>
            <p className="text-2xl md:text-3xl leading-snug font-light">
              I&apos;m a creative generalist who has been designing products for more than 8 years. From managing my own clients to collaborating with startups and global brands, I&apos;ve crafted user-centered solutions across diverse platforms.
            </p>
            <p className="text-base text-white/60 leading-relaxed mt-6">
              Passionate about innovation and emerging tech, my journey has shaped me into a versatile designer who thrives on pushing the boundaries of creativity, always focused on delivering intuitive and impactful experiences.
            </p>
          </FadeIn>
          <FadeInStagger className="lg:w-1/2 flex gap-0 divide-x divide-white/15">
            {[
              { stat: "8+", label: "Years in Product & UX/UI Design." },
              { stat: "5+", label: "Years designing innovative products with emerging technologies." },
              { stat: "4+", label: "Years in Design Leadership roles, leading design projects and teams." },
            ].map(({ stat, label }) => (
              <FadeInItem key={stat} className="flex-1 border-t border-white/15 pt-6 pl-6 first:pl-0">
                <p className="text-7xl font-extrabold leading-none mb-4" style={{ fontFamily: "var(--font-manrope)" }}>{stat}</p>
                <p className="text-xs text-white/50 leading-relaxed">{label}</p>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-8 py-20 border-t border-white/15">
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">• Process</p>
          <h2 className="text-[6vw] font-extrabold uppercase leading-none mb-16" style={{ fontFamily: "var(--font-manrope)" }}>
            My Approach
          </h2>
        </FadeIn>
        <FadeInStagger className="flex flex-col">
          {process.map((step) => (
            <FadeInItem key={step.number} className="border-t border-white/15 py-10 flex flex-col lg:flex-row gap-8">
              <p className="text-white/25 text-sm lg:w-16 flex-shrink-0">{step.number}</p>
              <div className="flex-1">
                <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-manrope)" }}>{step.title}</p>
                <p className="text-base text-white/60 leading-relaxed max-w-2xl">{step.description}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* CAREER */}
      <section className="px-8 py-20 border-t border-white/15">
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">• Experience</p>
          <h2 className="text-[6vw] font-extrabold uppercase leading-none mb-16" style={{ fontFamily: "var(--font-manrope)" }}>
            My Career Journey
          </h2>
        </FadeIn>
        <FadeInStagger className="flex flex-col">
          {experience.map((exp, i) => (
            <FadeInItem key={i} className="border-t border-white/15 py-10 flex flex-col lg:flex-row gap-8">
              <div className="lg:w-64 flex-shrink-0">
                <p className="text-xs text-white/40 mb-1">{exp.period}</p>
                <p className="text-sm font-bold" style={{ fontFamily: "var(--font-manrope)" }}>{exp.company}</p>
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold mb-3">{exp.role}</p>
                <p className="text-sm text-white/55 leading-relaxed">{exp.description}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* AWARDS */}
      <section className="px-8 py-20 border-t border-white/15">
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">• Achievements & Awards</p>
          <h2 className="text-[6vw] font-extrabold uppercase leading-none mb-16" style={{ fontFamily: "var(--font-manrope)" }}>
            What I&apos;ve Achieved
          </h2>
        </FadeIn>
        <FadeInStagger className="flex flex-col">
          {awards.map((a) => (
            <FadeInItem key={a.number} className="border-t border-white/15 py-8 flex items-center gap-8">
              <p className="text-white/25 text-sm w-10 flex-shrink-0">{a.number}</p>
              <p className="text-xs font-bold tracking-widest uppercase w-36 flex-shrink-0" style={{ fontFamily: "var(--font-manrope)" }}>{a.title}</p>
              <p className="text-sm text-white/60 flex-1">{a.subtitle}</p>
              <p className="text-xs text-white/40 w-32 text-right hidden lg:block">{a.org}</p>
              <p className="text-xs text-white/40 w-12 text-right">{a.year}</p>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* CLIENTS */}
      <section className="px-8 py-20 border-t border-white/15 overflow-hidden">
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">• Clients</p>
          <h2 className="text-[6vw] font-extrabold uppercase leading-none mb-16" style={{ fontFamily: "var(--font-manrope)" }}>
            Brands I Worked With
          </h2>
        </FadeIn>
        <div className="relative border-t border-b border-white/15 py-6 overflow-hidden">
          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: [0, "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...clients, ...clients].map((client, i) => (
              <span key={i} className="text-lg font-semibold text-white/40 flex-shrink-0" style={{ fontFamily: "var(--font-manrope)" }}>
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
