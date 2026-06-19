"use client";
import { useLang } from "@/context/LangContext";
import Link from "next/link";

export default function MissionPage() {
  const { t, lang } = useLang();
  const m = t.mission;

  return (
    <main className="min-h-screen bg-[#07091a] pt-28 pb-24 px-4">
      {/* Hero */}
      <div className="relative max-w-4xl mx-auto text-center mb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, #c03880 0%, transparent 70%)" }} />

        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c03880]/40 bg-[#c03880]/10 text-[#ff6eb0] text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          {m.badge}
        </span>

        <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">{m.title}</h1>
        <p className="text-[#ff6eb0] font-bold text-xl mb-6">{m.subtitle}</p>
        <p className="text-slate-300 text-lg leading-relaxed">{m.page_intro}</p>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        {/* Mission statement */}
        <div className="rounded-2xl border border-[#c03880]/30 bg-gradient-to-br from-[#c03880]/10 to-[#7b35b0]/5 p-10">
          <p className="text-white text-xl leading-relaxed font-medium">&ldquo;{m.description}&rdquo;</p>
        </div>

        {/* Who we serve */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-black text-white mb-6">{m.who_title}</h2>
            <ul className="space-y-3">
              {(m.who as string[]).map((w, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: "linear-gradient(135deg,#c03880,#7b35b0)" }}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {w}
                </li>
              ))}
            </ul>
          </div>

          {/* Transparency */}
          <div className="rounded-2xl border border-[#2a3580] bg-[#0d1035] p-8">
            <h2 className="text-lg font-black text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#7b9bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              {m.transparency_title}
            </h2>
            <dl className="space-y-3">
              {(m.transparency as Array<{ label: string; value: string }>).map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2.5 border-b border-[#2a3580]/50 last:border-0">
                  <dt className="text-xs text-slate-400 font-mono uppercase tracking-wider">{item.label}</dt>
                  <dd className="text-sm text-white font-bold">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Donate CTA */}
        <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#c03880 0%,#7b35b0 50%,#1c2460 100%)" }}>
          <div className="relative px-10 py-14 text-center">
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
            <div className="relative">
              <h2 className="text-3xl font-black text-white mb-3">
                {lang === "fr" ? "Soutenez notre mission" : "Support our mission"}
              </h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                {lang === "fr"
                  ? "Votre don aide à financer des programmes d'éducation en cybersécurité pour les communautés mal desservies. Haiti Cyber Con Corporation est un organisme 501(c)(3) — vos dons sont déductibles d'impôt."
                  : "Your donation helps fund cybersecurity education programs for underserved communities. Haiti Cyber Con Corporation is a 501(c)(3) — your donations are tax-deductible."}
              </p>
              <a
                href="https://www.paypal.com/donate?business=83-3126788&item_name=Haiti+Cyber+Con+Corporation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white text-[#c03880] font-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors shadow-lg"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                {m.cta_donate}
              </a>
              <p className="text-white/40 text-xs mt-4 font-mono">EIN: 83-3126788</p>
            </div>
          </div>
        </div>

        {/* Back to conference */}
        <div className="text-center">
          <Link href="/" className="text-sm text-[#7b9bff] hover:text-white transition-colors font-mono">
            ← {lang === "fr" ? "Retour à la conférence" : "Back to the conference"}
          </Link>
        </div>
      </div>
    </main>
  );
}
