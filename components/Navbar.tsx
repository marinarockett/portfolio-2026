"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/works", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black/95 backdrop-blur-sm">
      <div className="flex gap-8">
        {links.slice(0, 2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs tracking-widest uppercase transition-opacity ${
              pathname === link.href ? "opacity-100" : "opacity-50 hover:opacity-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 text-sm tracking-[0.3em] uppercase font-bold"
        style={{ fontFamily: "var(--font-manrope)" }}
      >
        Marina Rockett
      </Link>

      <div className="flex gap-8">
        {links.slice(2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs tracking-widest uppercase transition-opacity ${
              pathname === link.href || pathname.startsWith("/works") && link.href === "/works"
                ? "opacity-100"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
