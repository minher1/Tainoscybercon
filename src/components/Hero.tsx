"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#07091a]" />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,108,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,108,247,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Brand navy radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(28,36,96,0.8)_0%,transparent_70%)]" />
      {/* Blue accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#1c2460]/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#4a6cf7]/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-28 left-8 w-16 h-16 border-l-2 border-t-2 border-[#4a6cf7]/40" />
      <div className="absolute top-28 right-8 w-16 h-16 border-r-2 border-t-2 border-[#4a6cf7]/40" />
      <div className="absolute bottom-28 left-8 w-16 h-16 border-l-2 border-b-2 border-[#4a6cf7]/40" />
      <div className="absolute bottom-28 right-8 w-16 h-16 border-r-2 border-b-2 border-[#4a6cf7]/40" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Date pill */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4a6cf7]" />
          <span className="text-[#7b9bff] text-xs font-mono tracking-[0.3em] uppercase">
            29 août 2026 · Mascouche, QC
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4a6cf7]" />
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-56 h-14">
            <Image
              src="/logo.png"
              alt="Tainos Cyber Con"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6">
          <span className="text-white">TAINOS</span>{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #7b9bff 0%, #4a6cf7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CYBER CON
          </span>
          <br />
          <span className="text-white/20 text-4xl sm:text-5xl tracking-[0.2em]">2026</span>
        </h1>

        {/* Tagline */}
        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {t.hero.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="https://www.eventbrite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3.5 bg-[#1c2460] border border-[#4a6cf7] text-white font-bold text-sm tracking-widest uppercase rounded hover:bg-[#4a6cf7] transition-all duration-200 shadow-lg shadow-[#4a6cf7]/20"
          >
            {t.hero.cta_ticket}
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </a>
          <a
            href="#sponsors"
            className="px-8 py-3.5 border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded hover:border-white/50 hover:bg-white/5 transition-all duration-200"
          >
            {t.hero.cta_sponsor}
          </a>
        </div>

        {/* Event meta pills */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {[
            { icon: "📅", text: t.hero.date },
            { icon: "🕘", text: t.hero.time },
            { icon: "📍", text: t.hero.location },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2a3580] bg-[#1c2460]/30 text-sm text-slate-300"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-[#4a6cf7]/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
