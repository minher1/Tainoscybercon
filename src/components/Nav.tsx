"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import Image from "next/image";

export default function Nav() {
  const { lang, t, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#about", label: t.nav.conference },
    { href: "#themes", label: t.nav.program },
    { href: "#speakers", label: t.nav.speakers },
    { href: "#sponsors", label: t.nav.sponsors },
    { href: "#tickets", label: t.nav.tickets },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050810]/95 backdrop-blur-md border-b border-[#1e2d4a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 relative">
              <Image
                src="/logo.png"
                alt="Tainos Cyber Con"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-sm tracking-widest text-amber-400 uppercase hidden sm:block">
              Tainos<span className="text-white"> Cyber Con</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-medium tracking-widest uppercase text-slate-400 hover:text-amber-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right: lang toggle + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 text-xs font-semibold tracking-wider px-3 py-1.5 rounded border border-[#1e2d4a] text-slate-300 hover:border-amber-500 hover:text-amber-400 transition-all"
              title={lang === "fr" ? "Switch to English" : "Passer en français"}
            >
              <span className="text-base leading-none">
                {lang === "fr" ? "🇬🇧" : "🇫🇷"}
              </span>
              <span>{lang === "fr" ? "EN" : "FR"}</span>
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0a0f1e]/98 backdrop-blur-md border-b border-[#1e2d4a]">
          <div className="px-4 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xs font-medium tracking-widest uppercase text-slate-300 hover:text-amber-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
