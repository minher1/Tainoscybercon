"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";

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
    <section id="about" className="relative overflow-hidden bg-white">
      {/* Top edge — dark-to-white transition */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#07091a] to-white pointer-events-none" />

      <div className="relative pt-28 pb-24 px-4 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="logo-gradient-text text-xs font-mono tracking-[0.3em] uppercase mb-3 block font-bold">
            {t.about.title}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#07091a] mb-4">
            {t.about.subtitle}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Benefits grid — white cards with brand accent */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {t.about.benefits.map((b, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#c03880]/30 transition-all duration-300"
            >
              {/* Icon badge */}
              <div className="w-12 h-12 rounded-lg logo-gradient flex items-center justify-center text-white mb-4 shadow-md">
                {icons[b.icon]}
              </div>
              <h3 className="font-bold text-[#07091a] mb-2">{b.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Photo + Audience side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Conference photo */}
          <div className="relative h-72 lg:h-auto rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/photos/audience-engaged.jpg"
              alt="Participants à Tainos Cyber Con"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-mono text-white/80 tracking-wider uppercase">
                Tainos Cyber Con 2020
              </span>
            </div>
          </div>

          {/* Audience panel — navy card on white section */}
          <div className="p-8 rounded-2xl bg-[#07091a] text-white shadow-xl flex flex-col justify-center">
            <h3 className="font-bold text-white text-lg mb-5">{t.about.audience_title}</h3>
            <ul className="space-y-3 mb-8">
              {t.about.audience.map((a, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-2 h-2 rounded-full logo-gradient shrink-0 inline-block" />
                  {a}
                </li>
              ))}
            </ul>
            <div className="flex items-start gap-3 pt-5 border-t border-white/10">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#7b9bff] shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-200 text-sm">{t.about.location_detail}</p>
                <p className="text-slate-500 text-xs mt-1">Rive-Nord de Montréal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.4!2d-73.5960!3d45.7500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc921b5e8c14b0f%3A0x8b0e2f6c4e5a7d3e!2s3235+Ave+de+la+Gare%2C+Mascouche%2C+QC+J7K+3C1!5e0!3m2!1sfr!2sca!4v1700000000000"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tainos Cyber Con 2026 — 3235 Ave de la Gare, Mascouche"
          />
        </div>
        <div className="mt-3 flex items-center justify-between px-1">
          <p className="text-slate-500 text-xs">3235 Ave de la Gare, Mascouche, QC J7K 3C1 · Salle 2C2B · Stationnement gratuit</p>
          <a
            href="https://maps.google.com/?q=3235+Ave+de+la+Gare,+Mascouche,+QC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#1c2460] font-semibold hover:underline shrink-0 ml-4"
          >
            Ouvrir dans Google Maps →
          </a>
        </div>
      </div>

      {/* Bottom edge — white-to-dark transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#07091a] to-white pointer-events-none" />
    </section>
  );
}
