"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";
import Typewriter from "./Typewriter";
import Countdown from "./Countdown";
import { ShieldSilhouette, CircuitTrace, BinaryStream } from "./Silhouettes";

const typewriterLinesFr = [
  "La cybersécurité à l'ère de l'IA, du cloud et des menaces persistantes",
  "Apprenez. Échangez. Défendez.",
  "200+ professionnels. Une journée. Zéro compromis.",
];

const typewriterLinesEn = [
  "Cybersecurity in the age of AI, cloud, and persistent threats",
  "Learn. Connect. Defend.",
  "200+ professionals. One day. Zero compromise.",
];

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#07091a]" />
      {/* Circuit board photo — very subtle */}
      <div className="absolute inset-0 opacity-[0.08]">
        <Image src="/photos/circuit.jpg" alt="" fill className="object-cover object-center" priority />
      </div>
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,108,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(74,108,247,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(28,36,96,0.9)_0%,transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#1c2460]/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Silhouettes */}
      <ShieldSilhouette className="absolute right-4 sm:right-12 top-1/4 w-48 sm:w-72 opacity-80 pointer-events-none select-none" />
      <CircuitTrace className="absolute left-4 sm:left-10 bottom-32 w-24 opacity-70 pointer-events-none select-none" />
      <BinaryStream className="absolute left-2 sm:left-8 top-1/3 w-36 opacity-60 pointer-events-none select-none hidden lg:block" />

      {/* Corner brackets */}
      <div className="absolute top-28 left-8 w-16 h-16 border-l-2 border-t-2 border-[#c03880]/30" />
      <div className="absolute top-28 right-8 w-16 h-16 border-r-2 border-t-2 border-[#c03880]/30" />
      <div className="absolute bottom-28 left-8 w-16 h-16 border-l-2 border-b-2 border-[#7b35b0]/30" />
      <div className="absolute bottom-28 right-8 w-16 h-16 border-r-2 border-b-2 border-[#7b35b0]/30" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full pt-24 pb-16">
        {/* Date badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4a6cf7]" />
          <span className="text-[#7b9bff] text-xs font-mono tracking-[0.3em] uppercase">
            29 août 2026 · Mascouche, QC
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4a6cf7]" />
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative h-20 w-72">
            <Image src="/logo.png" alt="Tainos Cyber Con" fill className="object-contain" priority />
          </div>
        </div>

        {/* Title with glitch effect */}
        <h1 className="glitch text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-2" data-text="TAINOS CYBER CON">
          <span className="text-white">TAINOS </span>
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
        </h1>
        <div className="text-white/10 text-3xl sm:text-4xl font-black tracking-[0.25em] font-mono mb-8">
          2026
        </div>

        {/* Typewriter tagline */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 h-8 font-light">
          <Typewriter
            lines={lang === "fr" ? typewriterLinesFr : typewriterLinesEn}
            speed={35}
            pauseMs={2500}
          />
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://www.eventbrite.ca/e/tainos-cybercon-2026-tickets-1989251250038"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3.5 bg-[#1c2460] border border-[#4a6cf7] text-white font-bold text-sm tracking-widest uppercase rounded hover:bg-[#4a6cf7] transition-all duration-200 shadow-lg shadow-[#4a6cf7]/20 font-mono"
          >
            {`> ${t.hero.cta_ticket}`}
          </a>
          <a
            href="/partners"
            className="px-8 py-3.5 border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded hover:border-white/50 hover:bg-white/5 transition-all duration-200 font-mono"
          >
            {`> ${t.hero.cta_sponsor}`}
          </a>
        </div>

        {/* Countdown */}
        <div className="mb-8">
          <p className="text-xs font-mono text-slate-300 tracking-widest uppercase mb-4">
            {lang === "fr" ? "// compte à rebours" : "// countdown"}
          </p>
          <Countdown />
        </div>

        {/* Event meta pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          {[
            { icon: "📅", text: t.hero.date },
            { icon: "🕘", text: t.hero.time },
            { icon: "📍", text: t.hero.location },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2a3580] bg-[#1c2460]/20 text-xs text-slate-300 font-mono"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll pulse */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-[#4a6cf7]/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
