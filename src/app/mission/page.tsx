"use client";
import { useLang } from "@/context/LangContext";
import Link from "next/link";

export default function MissionPage() {
  const { t, lang } = useLang();
  const m = t.mission;

  return (
    <main className="min-h-screen bg-[#07091a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, #c03880 0%, transparent 70%)" }} />

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c03880]/40 bg-[#c03880]/10 text-[#ff6eb0] text-[10px] font-black tracking-[0.3em] uppercase mb-6">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            {m.badge}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black mb-4">{m.title}</h1>
          <p className="text-[#ff6eb0] font-bold text-xl mb-6">{m.page_title}</p>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">{m.page_intro}</p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-[#c03880]/30 bg-gradient-to-br from-[#c03880]/10 to-[#7b35b0]/10 p-8 sm:p-12">
            <div className="absolute top-6 left-6 text-[#c03880]/20 text-8xl font-serif leading-none select-none">&ldquo;</div>
            <div className="relative space-y-6 text-slate-200 text-lg leading-relaxed">
              {(m.statement as string).split("\n\n").map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Tainos */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-[#2a3580]/60 bg-[#0d1035]/50 p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-start">
            <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ background: "linear-gradient(135deg,#c03880,#7b35b0)" }}>
              🌴
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-4">{m.taino_title}</h2>
              <p className="text-slate-300 leading-relaxed">{m.taino_text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center">{m.programs_title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {(m.programs as Array<{ name: string; desc: string }>).map((prog, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#2a3580]/60 bg-[#0d1035]/50 hover:border-[#c03880]/40 transition-colors">
                <div className="w-8 h-1 rounded-full mb-4" style={{ background: "linear-gradient(90deg,#c03880,#7b35b0)" }} />
                <h3 className="font-black text-white mb-2">{prog.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve + Transparency */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="rounded-xl border border-[#2a3580]/60 bg-[#0d1035]/50 p-8">
            <h2 className="text-xl font-black text-white mb-6">{m.who_title}</h2>
            <ul className="space-y-3">
              {(m.who as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#c03880]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[#2a3580]/60 bg-[#0d1035]/50 p-8">
            <h2 className="text-xl font-black text-white mb-6">{m.transparency_title}</h2>
            <dl className="space-y-4">
              {(m.transparency as Array<{ label: string; value: string }>).map((item, i) => (
                <div key={i} className="flex justify-between items-start gap-4 border-b border-[#2a3580]/40 pb-3 last:border-0 last:pb-0">
                  <dt className="text-slate-500 text-xs font-semibold uppercase tracking-wider shrink-0">{item.label}</dt>
                  <dd className="text-slate-200 text-sm font-medium text-right">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden p-10 sm:p-14 text-center"
            style={{ background: "linear-gradient(135deg, #c03880 0%, #7b35b0 50%, #1a2080 100%)" }}>
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
            <div className="relative">
              <div className="text-4xl mb-4">❤</div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{m.donate_title}</h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">{m.donate_text}</p>
              <a
                href="https://www.paypal.com/donate?business=83-3126788&item_name=Haiti+Cyber+Con+Corporation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-black text-base tracking-widest uppercase text-[#c03880] bg-white hover:bg-slate-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                {m.cta_donate} — PayPal
              </a>
              <p className="text-white/50 text-xs mt-4 font-mono">EIN: {m.ein} · {m.status}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to conference */}
      <div className="text-center pb-16 px-4">
        <Link href="/" className="text-sm text-[#7b9bff] hover:text-white transition-colors font-mono">
          ← {lang === "fr" ? "Retour à la conférence" : "Back to the conference"}
        </Link>
      </div>
    </main>
  );
}
