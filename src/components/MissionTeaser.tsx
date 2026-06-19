"use client";
import { useLang } from "@/context/LangContext";
import Link from "next/link";

const pillarIcons: Record<string, React.ReactNode> = {
  book: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  wifi: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
};

export default function MissionTeaser() {
  const { t } = useLang();
  const m = t.mission;

  return (
    <section className="relative overflow-hidden bg-[#07091a] py-24 px-4">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      {/* Gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, #c03880 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c03880]/40 bg-[#c03880]/10 text-[#ff6eb0] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            {m.badge}
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">{m.title}</h2>
          <p className="text-[#ff6eb0] font-bold text-lg mb-6">{m.subtitle}</p>
          <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed">{m.description}</p>

          {/* EIN badge */}
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg border border-[#2a3580] bg-[#0d1035]/60 text-slate-400 text-xs font-mono">
            <svg className="w-3.5 h-3.5 text-[#7b9bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            {m.ein_label}: <span className="text-white font-bold">{m.ein}</span>
            <span className="text-slate-600">·</span>
            <span>{m.status}</span>
          </div>
        </div>

        {/* 4 pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {(m.pillars as Array<{ icon: string; title: string; desc: string }>).map((p, i) => (
            <div key={i} className="p-6 rounded-xl border border-[#2a3580]/60 bg-[#0d1035]/50 hover:border-[#c03880]/40 transition-colors">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center text-white mb-4"
                style={{ background: "linear-gradient(135deg,#c03880,#7b35b0)" }}>
                {pillarIcons[p.icon]}
              </div>
              <h3 className="font-black text-white mb-2 text-sm">{p.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/mission"
            className="px-8 py-3.5 rounded-xl font-black text-sm tracking-widest uppercase text-white transition-opacity hover:opacity-80 text-center"
            style={{ background: "linear-gradient(135deg,#c03880,#7b35b0)" }}
          >
            {m.cta_learn}
          </Link>
          <a
            href="https://www.paypal.com/donate?business=83-3126788&item_name=Haiti+Cyber+Con+Corporation"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl font-black text-sm tracking-widest uppercase text-white border border-[#c03880]/50 hover:bg-[#c03880]/10 transition-colors text-center"
          >
            ❤ {m.cta_donate}
          </a>
        </div>
      </div>
    </section>
  );
}
