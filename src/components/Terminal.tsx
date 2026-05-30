"use client";
import { useLang } from "@/context/LangContext";

export default function Terminal() {
  const { lang } = useLang();

  const lines = lang === "fr" ? [
    { prompt: "$ whoami",         out: "participant · professionnel · décideur" },
    { prompt: "$ date",           out: "Samedi 29 août 2026, 09:00 – 17:00 EDT" },
    { prompt: "$ locate venue",   out: "/Quebec/Mascouche/3235-Ave-de-la-Gare · Salle 2C2B" },
    { prompt: "$ ls sessions/",   out: "ia_cybersecu/  ransomware/  cloud_saas/  iam/" },
    { prompt: "$ echo $CAPACITY", out: "200+ participants · 50+ professionnels QC" },
    { prompt: "$ cat mission.txt",out: "Accès équitable à la cybersécurité pour toutes les communautés." },
  ] : [
    { prompt: "$ whoami",         out: "attendee · practitioner · decision-maker" },
    { prompt: "$ date",           out: "Saturday August 29 2026, 09:00 – 17:00 EDT" },
    { prompt: "$ locate venue",   out: "/Quebec/Mascouche/3235-Ave-de-la-Gare · Room 2C2B" },
    { prompt: "$ ls sessions/",   out: "ai_cybersec/  ransomware/  cloud_saas/  iam/" },
    { prompt: "$ echo $CAPACITY", out: "200+ attendees · 50+ QC professionals" },
    { prompt: "$ cat mission.txt",out: "Equitable access to cybersecurity solutions for all communities." },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-xl border border-[#2a3580] overflow-hidden shadow-2xl shadow-[#4a6cf7]/10">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1c2460] border-b border-[#2a3580]">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs font-mono text-slate-400 tracking-widest">
              tainos-cybercon-2026 — bash
            </span>
          </div>

          {/* Terminal body */}
          <div className="bg-[#07091a] p-6 space-y-4 font-mono text-sm">
            {lines.map((l, i) => (
              <div key={i}>
                <div className="text-[#4a6cf7]">{l.prompt}</div>
                <div className="text-slate-300 pl-2 mt-0.5">{l.out}</div>
              </div>
            ))}
            <div className="flex items-center gap-1 text-[#4a6cf7]">
              <span>$</span>
              <span className="animate-pulse text-[#4a6cf7] ml-1">█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
