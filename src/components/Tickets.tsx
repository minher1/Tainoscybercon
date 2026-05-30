"use client";
import { useLang } from "@/context/LangContext";

export default function Tickets() {
  const { t } = useLang();

  return (
    <section id="tickets" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-12">
          <span className="text-amber-400 text-xs font-mono tracking-[0.3em] uppercase mb-3 block">
            {t.tickets.title}
          </span>
          <p className="text-slate-400 text-sm">{t.tickets.subtitle}</p>
        </div>

        <div className="relative p-8 sm:p-12 rounded-2xl border border-amber-500/30 bg-gradient-to-b from-[#0d1529] to-[#050810] overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-500/10 blur-3xl rounded-full" />

          <div className="relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-amber-500/40" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-amber-500/40" />

            <h3 className="text-2xl font-black text-white text-center mb-8">
              {t.tickets.includes_title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {t.tickets.includes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href={t.tickets.eventbrite_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-[#050810] font-black text-sm tracking-widest uppercase rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20"
              >
                {t.tickets.cta}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
