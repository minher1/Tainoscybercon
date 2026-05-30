"use client";
import { useLang } from "@/context/LangContext";

export default function Speakers() {
  const { t } = useLang();

  return (
    <section id="speakers" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-16">
          <span className="text-[#7b9bff] text-xs font-mono tracking-[0.3em] uppercase mb-3 block">
            {t.speakers.title}
          </span>
          <p className="text-slate-400 text-sm">{t.speakers.subtitle}</p>
        </div>

        {/* Placeholder grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl border border-[#2a3580]/40 bg-[#1c2460]/10 flex flex-col items-center justify-center gap-3 opacity-40"
            >
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#2a3580] flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="w-16 h-2 rounded bg-[#2a3580]/60" />
              <div className="w-12 h-1.5 rounded bg-[#2a3580]/40" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-400 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
            {t.speakers.cta_desc}
          </p>
          <a
            href="https://www.jotform.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#4a6cf7]/60 text-[#7b9bff] font-bold text-sm tracking-widest uppercase rounded hover:border-[#4a6cf7] hover:bg-[#1c2460]/40 transition-all"
          >
            {t.speakers.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
