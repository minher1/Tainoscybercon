"use client";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#050810]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,45,74,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,45,74,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(29,78,216,0.18)_0%,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative corner lines */}
      <div className="absolute top-32 left-8 w-16 h-16 border-l-2 border-t-2 border-amber-500/40" />
      <div className="absolute top-32 right-8 w-16 h-16 border-r-2 border-t-2 border-amber-500/40" />
      <div className="absolute bottom-32 left-8 w-16 h-16 border-l-2 border-b-2 border-amber-500/40" />
      <div className="absolute bottom-32 right-8 w-16 h-16 border-r-2 border-b-2 border-amber-500/40" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Pre-title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500" />
          <span className="text-amber-400 text-xs font-mono tracking-[0.3em] uppercase">
            29 août 2026 · Mascouche, QC
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500" />
        </div>

        {/* Main title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-2">
          <span className="text-white">TAINOS</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #d4a017 0%, #f59e0b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CYBER CON
          </span>
        </h1>

        {/* Year badge */}
        <div className="inline-flex items-center justify-center mt-3 mb-8">
          <span className="text-6xl sm:text-8xl font-black text-white/8 tracking-widest select-none">
            2026
          </span>
        </div>

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
            className="group relative px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-[#050810] font-bold text-sm tracking-widest uppercase rounded hover:from-amber-500 hover:to-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/20"
          >
            {t.hero.cta_ticket}
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </a>
          <a
            href="#sponsors"
            className="px-8 py-3.5 border border-amber-500/50 text-amber-400 font-bold text-sm tracking-widest uppercase rounded hover:border-amber-400 hover:bg-amber-500/5 transition-all duration-200"
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
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e2d4a] bg-[#0a0f1e]/60 text-sm text-slate-300"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <div className="w-px h-12 bg-gradient-to-b from-amber-500/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
