import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-8 py-8 border-t border-white/15">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm tracking-[0.3em] uppercase font-bold" style={{ fontFamily: "var(--font-manrope)" }}>
          Marina Rockett
        </p>
        <div className="flex gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/works", label: "Work" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-xs tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="https://www.linkedin.com/in/marinarockett"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 px-2 py-1 text-xs opacity-50 hover:opacity-100 transition-opacity"
          >
            in
          </Link>
          <Link href="#" className="text-xs tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity">
            My NFTs ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
