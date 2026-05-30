"use client";
import { useLang } from "@/context/LangContext";

export default function Sponsors() {
  const { t } = useLang();

  return (
    <section id="sponsors" className="py-24 px-4 bg-[#0a0f1e]">
      <div className="max-w-5xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-mono tracking-[0.3em] uppercase mb-3 block">
            {t.sponsors.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {t.sponsors.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Benefits */}
          <div>
            <h3 className="text-sm font-bold text-amber-400 tracking-widest uppercase mb-6">
              {t.sponsors.benefits_title}
            </h3>
            <ul className="space-y-4">
              {t.sponsors.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="shrink-0 w-7 h-7 rounded-full border border-amber-500/30 flex items-center justify-center text-xs font-bold text-amber-400">
                    {i + 1}
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed pt-0.5">{b}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div className="p-8 rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              200+ participants attendus
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Rejoignez notre écosystème de partenaires et bénéficiez d&apos;une visibilité
              ciblée auprès des professionnels de la cybersécurité de la région.
            </p>
            <a
              href={`mailto:${t.contact.email}?subject=Partenariat Tainos Cyber Con 2026`}
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-[#050810] font-bold text-sm tracking-widest uppercase rounded hover:from-amber-500 hover:to-amber-400 transition-all"
            >
              {t.sponsors.cta}
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Sponsor logo placeholder row */}
        <div className="mt-16 pt-12 border-t border-[#1e2d4a]">
          <p className="text-center text-xs text-slate-600 tracking-widest uppercase mb-8">
            Nos partenaires
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-28 h-14 rounded border border-dashed border-[#1e2d4a] flex items-center justify-center opacity-30"
              >
                <span className="text-xs text-slate-600">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
