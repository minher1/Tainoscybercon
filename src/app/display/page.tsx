"use client";
import { useEffect, useState } from "react";

const SCHEDULE = [
  { time: "9:00",  end: "9:30",  title: "Accueil & café de bienvenue",      icon: "☕" },
  { time: "9:30",  end: "10:30", title: "Conférence d'ouverture",            icon: "🎤" },
  { time: "10:30", end: "11:30", title: "Session 1 — IA & Cybersécurité",   icon: "🤖" },
  { time: "11:30", end: "12:30", title: "Session 2 — Rançongiciels",        icon: "🛡️" },
  { time: "12:30", end: "13:30", title: "Dîner",                             icon: "🍽️" },
  { time: "13:30", end: "14:30", title: "Session 3 — Sécurité cloud",       icon: "☁️" },
  { time: "14:30", end: "15:30", title: "Session 4 — Gestion des identités",icon: "🔑" },
  { time: "15:30", end: "16:00", title: "Pause-café & réseautage",          icon: "🤝" },
  { time: "16:00", end: "17:00", title: "Table ronde & panel d'experts",    icon: "💬" },
  { time: "17:00", end: "18:00", title: "Clôture & réseautage",             icon: "🎉" },
];

function toMinutes(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + (m || 0);
}

function getCurrentIndex(now: Date) {
  const mins = now.getHours() * 60 + now.getMinutes();
  for (let i = SCHEDULE.length - 1; i >= 0; i--) {
    if (mins >= toMinutes(SCHEDULE[i].time)) return i;
  }
  return 0;
}

export default function DisplayPage() {
  const [now, setNow] = useState(new Date());
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      const n = new Date();
      setNow(n);
      setActiveIndex(getCurrentIndex(n));
    }, 1000);
    setActiveIndex(getCurrentIndex(new Date()));
    return () => clearInterval(tick);
  }, []);

  const timeStr = now.toLocaleTimeString("fr-CA", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const dateStr = now.toLocaleDateString("fr-CA", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const current = SCHEDULE[activeIndex];
  const next = SCHEDULE[activeIndex + 1];

  return (
    <div className="min-h-screen bg-[#07091a] text-white flex flex-col overflow-hidden" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Top bar */}
      <div className="flex items-center justify-between px-12 py-6 border-b border-[#2a3580]/60"
        style={{ background: "linear-gradient(135deg,#0d1035 0%,#1a1060 100%)" }}>
        <div>
          <div className="text-[10px] font-black tracking-[0.4em] text-[#7b9bff] uppercase mb-1">Tainos Cyber Con</div>
          <div className="text-3xl font-black text-white tracking-tight">TAINOS CYBER CON 2026</div>
          <div className="text-sm text-slate-400 mt-0.5 capitalize">{dateStr} · Mascouche, QC</div>
        </div>
        <div className="text-right">
          <div className="text-6xl font-black tabular-nums tracking-tight"
            style={{ background: "linear-gradient(135deg,#e84444,#c03880,#7b35b0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {timeStr}
          </div>
        </div>
      </div>

      {/* Current session hero */}
      <div className="px-12 py-8 border-b border-[#2a3580]/40"
        style={{ background: "linear-gradient(135deg,#c03880 0%,#7b35b0 50%,#1a2080 100%)" }}>
        <div className="flex items-center gap-6">
          <div className="text-6xl">{current.icon}</div>
          <div>
            <div className="text-xs font-black tracking-[0.35em] text-white/60 uppercase mb-1">En cours · {current.time} – {current.end}</div>
            <div className="text-4xl font-black text-white">{current.title}</div>
          </div>
          {next && (
            <div className="ml-auto text-right opacity-70">
              <div className="text-xs font-black tracking-widest text-white/60 uppercase mb-1">Prochain · {next.time}</div>
              <div className="text-xl font-bold text-white">{next.icon} {next.title}</div>
            </div>
          )}
        </div>
      </div>

      {/* Full schedule */}
      <div className="flex-1 px-12 py-8 overflow-hidden">
        <div className="grid grid-cols-2 gap-4 h-full">
          {SCHEDULE.map((item, i) => {
            const isPast = i < activeIndex;
            const isCurrent = i === activeIndex;
            const isNext = i === activeIndex + 1;
            return (
              <div key={i} className={`flex items-center gap-5 px-6 py-4 rounded-xl border transition-all ${
                isCurrent
                  ? "border-[#c03880] bg-[#c03880]/20 shadow-lg shadow-[#c03880]/20"
                  : isNext
                  ? "border-[#4a6cf7]/60 bg-[#4a6cf7]/10"
                  : isPast
                  ? "border-[#2a3580]/30 bg-transparent opacity-35"
                  : "border-[#2a3580]/50 bg-[#0d1035]/40"
              }`}>
                <div className={`text-3xl ${isPast ? "grayscale" : ""}`}>{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-black tracking-widest uppercase mb-0.5 ${
                    isCurrent ? "text-[#ff6eb0]" : isNext ? "text-[#7b9bff]" : "text-slate-500"
                  }`}>
                    {item.time} – {item.end}
                    {isCurrent && " · EN COURS"}
                    {isNext && " · PROCHAIN"}
                    {isPast && " · TERMINÉ"}
                  </div>
                  <div className={`font-bold truncate ${isCurrent ? "text-white text-lg" : "text-slate-300"}`}>
                    {item.title}
                  </div>
                </div>
                {isCurrent && (
                  <div className="w-2 h-2 rounded-full bg-[#c03880] animate-pulse shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-12 py-4 border-t border-[#2a3580]/40 flex items-center justify-between"
        style={{ background: "#07091a" }}>
        <div className="text-xs text-slate-600 font-mono tracking-widest uppercase">tainoscybercon.com</div>
        <div className="flex gap-2">
          {["🔴","🟠","🟡","🟢","🔵","🟣"].map((c, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === activeIndex % 6 ? "opacity-100 scale-125" : "opacity-20"}`}
              style={{ background: ["#e84444","#c03880","#f59e0b","#10b981","#4a6cf7","#7b35b0"][i] }} />
          ))}
        </div>
        <div className="text-xs text-slate-600 font-mono tracking-widest uppercase">29 août 2026</div>
      </div>
    </div>
  );
}
