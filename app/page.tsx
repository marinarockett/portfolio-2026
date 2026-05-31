import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "https://framerusercontent.com/images/ZJ8pfsBhevCDG4pIvntToBlmg.png", alt: "Coke Zero AR", wide: false },
  { src: "https://framerusercontent.com/images/Wnit3nJ733ebzd0OeeMXnyPA7w.png", alt: "The Heroes", wide: true },
  { src: "https://framerusercontent.com/images/2v5FAJwaWzUwmAETzph6BSi03SQ.webp", alt: "Surreal Burger", wide: false },
  { src: "https://framerusercontent.com/images/QFVUavPVTvYrFjJehpMHpvYwt0.jpg", alt: "Project", wide: false },
  { src: "https://framerusercontent.com/images/x9p5VLPMRdf55Amo3cGCT9GWM.png", alt: "Project", wide: true },
  { src: "https://framerusercontent.com/images/3ZmhFR7MTqMbBz4lmq1iveKSMc.png", alt: "Project", wide: false },
  { src: "https://framerusercontent.com/images/4jEYzgwJYufmIx6AaieXk4Bnw.png", alt: "Project", wide: false },
  { src: "https://framerusercontent.com/images/wEDnQcCWfbbeaA94C1FT2h9xJ0.jpg", alt: "Project", wide: true },
  { src: "https://framerusercontent.com/images/N4qK9JOZve4wtAzL9rVMh1fEvE.png", alt: "Project", wide: false },
];

const featuredProjects = [
  {
    title: "Coke Zero AR Fridge",
    tags: ["Augmented Reality", "Artificial Intelligence", "8th Wall", "Mobile"],
    src: "https://framerusercontent.com/images/ZJ8pfsBhevCDG4pIvntToBlmg.png",
  },
  {
    title: "The Heroes",
    tags: ["Augmented Reality", "Artificial Intelligence", "8th Wall", "Mobile App"],
    src: "https://framerusercontent.com/images/Wnit3nJ733ebzd0OeeMXnyPA7w.png",
  },
  {
    title: "Surreal Burger",
    tags: ["Generative AI", "Mobile and Desktop"],
    src: "https://framerusercontent.com/images/2v5FAJwaWzUwmAETzph6BSi03SQ.webp",
  },
];

const services = [
  {
    title: "UX DESIGN",
    items: ["UX Research", "Journey Mapping", "Personas", "A/B Testing", "Wireframing", "User Testing"],
  },
  {
    title: "UI DESIGN",
    items: ["Visual Design", "Atomic Design", "Design System", "Component Library", "Responsive Design", "Interactive Prototyping"],
  },
  {
    title: "EXPERIENCE DESIGN",
    items: ["Product Design", "Experience Design", "Immersive Design (AR/VR)", "Human-Centered Design", "Interactive Design", "Service Design"],
  },
  {
    title: "EMERGING TECHNOLOGIES",
    items: ["Augmented Reality (AR)", "Virtual Reality (VR)", "Mixed Reality (MR)", "Artificial Intelligence (AI)", "Web3 Solutions", "Creative Tech"],
  },
];

const testimonials = [
  {
    number: "01",
    quote: "Marina is genuinely one of the best-kept secrets in product design. She's incredibly sharp, and her ability to understand exactly what needs to be done and then just execute it flawlessly is almost scary. If you're looking for someone with a rare blend of intelligence, diligence, and top-notch design skills, I recommend Marina wholeheartedly.",
    name: "Saqib Rasool",
    role: "CEO, Conceivian",
  },
  {
    number: "02",
    quote: "From the moment Marina joined our team, she demonstrated remarkable initiative, a strong work ethic, and a genuine passion for both the work and the team. Marina quickly proved herself to be self-driven, consistently going above and beyond her role as a UX designer. She took the lead on projects with ease, often stepping up without being asked, and flawlessly managed them from concept to completion. Her proactive approach and ability to take ownership of her work truly stood out, and she thrived in every challenge she faced.",
    name: "Claudia G Aparicio Gamundi",
    role: "Executive Creative Director, Americas Subvrsive",
  },
  {
    number: "03",
    quote: "Marina Rockett is that kind of team player you would always want to have close, not only because of her super high energy and talent but because she really goes really deep on everything she does. When you think you've probably dug deep enough, you look to your side and see Marina going tons of meters deeper. This intensity combined with talent makes Marina the kind of rocket capable of leading the team to surpass the stratosphere and reach space (sorry, I had to joke with her name lol).",
    name: "Rafael Cifu",
    role: "Head of Digital, Medeiros Distribuidora",
  },
];

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black">
        <div className="flex gap-8">
          <Link href="/" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Home</Link>
          <Link href="#about" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">About</Link>
        </div>
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-sm tracking-[0.3em] uppercase font-bold" style={{ fontFamily: "var(--font-manrope)" }}>
          Marina Rockett
        </Link>
        <div className="flex gap-8">
          <Link href="#work" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Work</Link>
          <Link href="#contact" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Contact</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-28 px-8">
        <h1 className="text-[11vw] font-extrabold uppercase leading-none tracking-tight" style={{ fontFamily: "var(--font-manrope)" }}>
          Hi, I&apos;m Marina<br />Rockett :)
        </h1>
        <p className="text-xs tracking-[0.3em] uppercase text-white/50 mt-4 mb-10">
          UX/UI &amp; Product Design Lead
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10 border-b border-white/15 pb-10">
          <p className="text-sm text-white/60 leading-relaxed">
            Based in São Paulo<br />and Working Worldwide.
          </p>
          <p className="text-sm text-white/60 leading-relaxed text-right max-w-md">
            I&apos;m an Experience &amp; Product Design Lead with 9+ years of expertise in Product and UX/UI Design, specializing in emerging technologies.
          </p>
        </div>

        {/* Horizontal scroll gallery */}
        <div className="overflow-x-auto -mx-8 px-8">
          <div className="flex gap-3 w-max pb-10">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative flex-shrink-0 overflow-hidden" style={{ width: img.wide ? "500px" : "260px", height: "320px" }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 py-20 border-t border-white/15">
        <p className="text-xs tracking-widest uppercase text-white/40 mb-16">• About Me</p>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <p className="text-2xl md:text-3xl leading-snug font-light max-w-xl">
              I help global brands turn ideas into innovative, user-centered experiences through the design of cutting-edge digital solutions.
            </p>
            <Link href="#contact" className="inline-flex items-center gap-2 mt-10 text-sm tracking-wider uppercase hover:opacity-60 transition-opacity">
              More About Me <span>↗</span>
            </Link>
          </div>
          <div className="lg:w-1/2 flex gap-0 divide-x divide-white/15">
            {[
              { stat: "9+", label: "Years in Product & UX/UI Design." },
              { stat: "6+", label: "Years designing innovative products with emerging technologies." },
              { stat: "5+", label: "Years in Design Leadership roles, leading design projects and teams." },
            ].map(({ stat, label }) => (
              <div key={stat} className="flex-1 border-t border-white/15 pt-6 pl-6 first:pl-0">
                <p className="text-7xl font-extrabold leading-none mb-4" style={{ fontFamily: "var(--font-manrope)" }}>{stat}</p>
                <p className="text-xs text-white/50 leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORKS */}
      <section id="work" className="px-8 py-20 border-t border-white/15">
        <p className="text-xs tracking-widest uppercase text-white/40 mb-4">• Portfolio</p>
        <h2 className="text-[8vw] font-extrabold uppercase leading-none mb-16" style={{ fontFamily: "var(--font-manrope)" }}>
          Featured Works
        </h2>
        <div className="flex flex-col">
          {featuredProjects.map((project, i) => (
            <div key={i} className="border-t border-white/15">
              <div className="relative w-full overflow-hidden" style={{ height: "55vw", maxHeight: "680px" }}>
                <Image src={project.src} alt={project.title} fill className="object-cover" unoptimized />
              </div>
              <div className="flex items-center justify-between py-5">
                <div>
                  <p className="text-lg font-bold" style={{ fontFamily: "var(--font-manrope)" }}>{project.title}</p>
                  <p className="text-xs text-white/40 mt-1">{project.tags.join(" • ")}</p>
                </div>
                <Link href="#" className="text-xs tracking-wider uppercase flex items-center gap-2 hover:opacity-60 transition-opacity">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/15 pt-16 text-center">
          <Link href="#contact" className="inline-block border border-white/60 rounded-full px-10 py-4 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-8 py-20 border-t border-white/15">
        <p className="text-xs tracking-widest uppercase text-white/40 mb-4">• Services</p>
        <h2 className="text-[6vw] font-extrabold uppercase leading-none mb-16" style={{ fontFamily: "var(--font-manrope)" }}>
          What I Do
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/15">
          {services.map((service, i) => (
            <div key={service.title} className={`pt-8 pr-8 ${i < services.length - 1 ? "border-r border-white/15" : ""}`}>
              <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ fontFamily: "var(--font-manrope)" }}>{service.title}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="text-xs text-white/50">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-8 py-20 border-t border-white/15">
        <p className="text-xs tracking-widest uppercase text-white/40 mb-4">• Testimonials</p>
        <h2 className="text-[6vw] font-extrabold uppercase leading-none mb-16" style={{ fontFamily: "var(--font-manrope)" }}>
          What My<br />Clients Say
        </h2>
        <div className="flex flex-col gap-12">
          {testimonials.map((t) => (
            <div key={t.number} className="border-t border-white/15 pt-10 flex flex-col lg:flex-row gap-8">
              <p className="text-white/25 text-sm lg:w-16 flex-shrink-0">{t.number}</p>
              <div className="flex-1">
                <p className="text-base md:text-lg leading-relaxed text-white/75 mb-8">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-8 py-32 border-t border-white/15 text-center">
        <p className="text-xs tracking-widest uppercase text-white/40 mb-8">Have a project in mind?</p>
        <h2 className="text-[7vw] font-extrabold uppercase leading-none mb-12" style={{ fontFamily: "var(--font-manrope)" }}>
          Let&apos;s Work Together
        </h2>
        <Link href="mailto:marinarockett@gmail.com" className="inline-block border border-white/60 rounded-full px-10 py-4 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
          Get In Touch
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-8 border-t border-white/15">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm tracking-[0.3em] uppercase font-bold" style={{ fontFamily: "var(--font-manrope)" }}>Marina Rockett</p>
          <div className="flex gap-8">
            <Link href="/" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Home</Link>
            <Link href="#about" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">About</Link>
            <Link href="#work" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Work</Link>
            <Link href="#contact" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Contact</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="https://www.linkedin.com/in/marinarockett" target="_blank" rel="noopener noreferrer" className="border border-white/30 px-2 py-1 text-xs hover:opacity-60 transition-opacity">in</Link>
            <Link href="#" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">My NFTs ↗</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
