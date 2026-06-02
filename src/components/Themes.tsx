"use client";
import { useLang } from "@/context/LangContext";
import { CircuitTrace, NetworkSilhouette } from "./Silhouettes";

// Icons use the brand gradient via SVG stroke="url(#logoGrad)"
const icons: Record<string, React.ReactNode> = {
  cpu: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
      <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e84444"/><stop offset="100%" stopColor="#7b35b0"/></linearGradient></defs>
      <path stroke="url(#g1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21M6.75 19.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
  alert: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
      <defs><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e84444"/><stop offset="100%" stopColor="#7b35b0"/></linearGradient></defs>
      <path stroke="url(#g2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  cloud: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
      <defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e84444"/><stop offset="100%" stopColor="#7b35b0"/></linearGradient></defs>
      <path stroke="url(#g3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  key: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
      <defs><linearGradient id="g4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e84444"/><stop offset="100%" stopColor="#7b35b0"/></linearGradient></defs>
      <path stroke="url(#g4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
  ),
  atom: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
      <defs><linearGradient id="g5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e84444"/><stop offset="100%" stopColor="#7b35b0"/></linearGradient></defs>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#g5)" strokeWidth={1.5} />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#g5)" strokeWidth={1.5} transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#g5)" strokeWidth={1.5} transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="url(#g5)" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
      <defs><linearGradient id="g6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e84444"/><stop offset="100%" stopColor="#7b35b0"/></linearGradient></defs>
      <path stroke="url(#g6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  scale: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
      <defs><linearGradient id="g7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e84444"/><stop offset="100%" stopColor="#7b35b0"/></linearGradient></defs>
      <path stroke="url(#g7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-13.5 0L2.63 15.696c-.122.499.106 1.028.589 1.202a5.989 5.989 0 002.031.352 5.989 5.989 0 002.031-.352c.483-.174.711-.703.59-1.202L5.25 4.97z" />
    </svg>
  ),
  network: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
      <defs><linearGradient id="g8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e84444"/><stop offset="100%" stopColor="#7b35b0"/></linearGradient></defs>
      <path stroke="url(#g8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  ),
};

export default function Themes() {
  const { t } = useLang();

  return (
    <section id="themes" className="py-24 px-4 bg-[#0d1035] relative overflow-hidden">
      <CircuitTrace className="absolute top-8 right-8 w-28 opacity-50 pointer-events-none select-none" />
      <NetworkSilhouette className="absolute -bottom-4 left-0 w-72 opacity-40 pointer-events-none select-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="section-divider mb-16" />

        <div className="text-center mb-16">
          <span className="logo-gradient-text text-xs font-mono tracking-[0.3em] uppercase mb-3 block font-bold">
            {t.themes.title}
          </span>
          <p className="text-slate-300 text-sm tracking-widest uppercase">
            {t.themes.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.themes.items.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 shadow-lg shadow-black/30"
            >
              {/* Left accent stripe */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full logo-gradient opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Faint large number */}
              <span className="absolute top-4 right-6 text-7xl font-black text-white/[0.06] select-none leading-none">
                0{i + 1}
              </span>

              <div className="mb-5 pl-4">{icons[item.icon]}</div>
              <h3 className="text-xl font-bold text-white mb-3 pl-4">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed pl-4">{item.desc}</p>

              {/* Bottom shimmer on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
