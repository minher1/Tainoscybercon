"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";
import { NetworkSilhouette, EyeSilhouette } from "./Silhouettes";

const icons: Record<string, React.ReactNode> = {
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
  calendar: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  network: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
};

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Conference audience photo as subtle background */}
      <div className="absolute inset-0 opacity-[0.07]">
        <Image src="/photos/audience.jpg" alt="" fill className="object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#07091a] via-transparent to-[#07091a]" />

      {/* Decorative silhouettes */}
      <NetworkSilhouette className="absolute -bottom-8 right-0 w-80 opacity-60 pointer-events-none select-none" />
      <EyeSilhouette className="absolute top-16 left-0 w-56 opacity-50 pointer-events-none select-none hidden lg:block" />

      <div className="relative max-w-7xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-16">
          <span className="logo-gradient-text text-xs font-mono tracking-[0.3em] uppercase mb-3 block font-bold">
            {t.about.title}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            {t.about.subtitle}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {t.about.benefits.map((b, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-[#2a3580]/60 bg-[#1c2460]/20 hover:border-[#4a6cf7]/60 hover:bg-[#1c2460]/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#e84444]/10 to-[#7b35b0]/20 border border-[#c03880]/30 flex items-center justify-center text-[#c03880] mb-4 group-hover:border-[#c03880]/60 transition-colors">
                {icons[b.icon]}
              </div>
              <h3 className="font-bold text-white mb-2">{b.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Photo + Audience side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Conference photo */}
          <div className="relative h-64 lg:h-auto rounded-xl overflow-hidden border border-[#2a3580]/60">
            <Image
              src="/photos/audience.jpg"
              alt="Conférence Tainos Cyber Con"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07091a]/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-mono text-[#7b9bff] tracking-wider uppercase opacity-80">
                Tainos Cyber Con 2020
              </span>
            </div>
          </div>

          <div className="p-8 rounded-xl border border-[#2a3580]/60 bg-[#1c2460]/20">
            <h3 className="font-bold text-white mb-4">{t.about.audience_title}</h3>
            <ul className="space-y-2 mb-6">
              {t.about.audience.map((a, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#e84444] to-[#7b35b0] shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
            <div className="flex items-start gap-3 pt-4 border-t border-[#2a3580]/40">
              <div className="w-8 h-8 rounded-lg bg-[#1c2460] border border-[#2a3580] flex items-center justify-center text-[#7b9bff] shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-300 text-sm">{t.about.location_detail}</p>
                <p className="text-slate-500 text-xs mt-1">Rive-Nord de Montréal</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

