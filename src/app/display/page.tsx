"use client";
import { useEffect, useState } from "react";

const SCHEDULE = [
  { time: "9:00",  end: "9:30",  title: "Accueil & café de bienvenue",       icon: "☕" },
  { time: "9:30",  end: "10:30", title: "Conférence d'ouverture",             icon: "🎤" },
  { time: "10:30", end: "11:30", title: "Session 1 — IA & Cybersécurité",    icon: "🤖" },
  { time: "11:30", end: "12:30", title: "Session 2 — Rançongiciels",         icon: "🛡️" },
  { time: "12:30", end: "13:30", title: "Dîner",                              icon: "🍽️" },
  { time: "13:30", end: "14:30", title: "Session 3 — Sécurité cloud",        icon: "☁️" },
  { time: "14:30", end: "15:30", title: "Session 4 — Gestion des identités", icon: "🔑" },
  { time: "15:30", end: "16:00", title: "Pause-café & réseautage",           icon: "🤝" },
  { time: "16:00", end: "17:00", title: "Table ronde & panel d'experts",     icon: "💬" },
  { time: "17:00", end: "18:00", title: "Clôture & réseautage",              icon: "🎉" },
];

const SLIDE_DURATION = 6000; // ms per slide

function toMinutes(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + (m || 0);
}

function getCurrentIndex(now: Date) {
  const mins = now.getHours() * 60 + now.getMinutes();
  for (let i = SCHEDULE.length - 1; i >= 0; i--) {
    if (mins >= toMinutes(SCHEDULE[i].time)) return i;
  }
  return -1;
}

const GRADIENTS = [
  "linear-gradient(135deg,#c03880 0%,#7b35b0 100%)",
  "linear-gradient(135deg,#1a2080 0%,#c03880 100%)",
  "linear-gradient(135deg,#7b35b0 0%,#1a2080 100%)",
  "linear-gradient(135deg,#e84444 0%,#c03880 100%)",
  "linear-gradient(135deg,#0d1035 0%,#7b35b0 100%)",
];

export default function DisplayPage() {
  const [now, setNow] = useState(new Date());
  const [slide, setSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(true);

  const currentIdx = getCurrentIndex(now);
  const next = currentIdx >= 0 ? SCHEDULE[currentIdx + 1] : null;

  // Clock
  useEffect(() => {
    const tick = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);

  // Slideshow
  useEffect(() => {
    let start = Date.now();
    let raf: number;

    const animate = () => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(elapsed / SLIDE_DURATION, 1));
      if (elapsed >= SLIDE_DURATION) {
        setFade(false);
        setTimeout(() => {
          setSlide((s) => (s + 1) % SCHEDULE.length);
          setFade(true);
          start = Date.now();
        }, 400);
      }
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [slide]);

  const item = SCHEDULE[slide];
  const isCurrentSlide = slide === currentIdx;
  const isPastSlide = slide < currentIdx;
  const gradient = GRADIENTS[slide % GRADIENTS.length];

  const timeStr = now.toLocaleTimeString("fr-CA", { hour: "2-digit", minute: "2-digit" });
  const dateStr = now.toLocaleDateString("fr-CA", { weekday: "long", day: "numeric", month: "long" });

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#07091a] flex flex-col" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Top bar — always visible */}
      <div className="flex items-center justify-between px-14 py-5 z-10 shrink-0"
        style={{ background: "rgba(7,9,26,0.95)", borderBottom: "1px solid rgba(42,53,128,0.5)" }}>
        <div>
          <div className="text-[9px] font-black tracking-[0.5em] text-[#7b9bff] uppercase">Tainos Cyber Con 2026</div>
          <div className="text-sm text-slate-400 capitalize mt-0.5">{dateStr} · Mascouche, QC</div>
        </div>
        <div className="text-5xl font-black tabular-nums"
          style={{ background: "linear-gradient(135deg,#e84444,#c03880,#7b35b0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {timeStr}
        </div>
        {currentIdx >= 0 && (
          <div className="text-right">
            <div className="text-[9px] font-black tracking-[0.4em] text-[#ff6eb0] uppercase mb-0.5">En cours</div>
            <div className="text-sm font-bold text-white">{SCHEDULE[currentIdx].icon} {SCHEDULE[currentIdx].title}</div>
            <div className="text-xs text-slate-400">{SCHEDULE[currentIdx].time} – {SCHEDULE[currentIdx].end}</div>
          </div>
        )}
      </div>

      {/* Main slide */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden"
        style={{ background: gradient, transition: "background 0.8s ease" }}>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Glow */}
        <div className="absolute inset-0 opacity-30" style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 70%)"
        }} />

        {/* Slide content */}
        <div className={`relative text-center px-20 transition-all duration-400 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transition: "opacity 0.4s ease, transform 0.4s ease" }}>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
            {isCurrentSlide && <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />}
            <span className="text-xs font-black tracking-[0.4em] text-white uppercase">
              {isCurrentSlide ? "EN COURS" : isPastSlide ? "TERMINÉ" : `À ${item.time}`}
            </span>
          </div>

          {/* Icon */}
          <div className="text-[120px] leading-none mb-6 select-none">{item.icon}</div>

          {/* Time */}
          <div className="text-2xl font-bold text-white/70 mb-4 tabular-nums">
            {item.time} – {item.end}
          </div>

          {/* Title */}
          <div className="text-6xl font-black text-white leading-tight mb-8" style={{ textShadow: "0 4px 40px rgba(0,0,0,0.4)" }}>
            {item.title}
          </div>

          {/* Next session */}
          {isCurrentSlide && next && (
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl"
              style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <span className="text-white/50 text-sm font-bold tracking-widest uppercase">Prochain</span>
              <span className="text-white font-bold">{next.icon} {next.title}</span>
              <span className="text-white/50 text-sm">{next.time}</span>
            </div>
          )}
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
          {SCHEDULE.map((_, i) => (
            <div key={i} className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === slide ? 32 : 8,
                background: i === slide ? "rgba(255,255,255,0.9)" : i < slide ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.15)",
              }} />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 shrink-0" style={{ background: "rgba(42,53,128,0.4)" }}>
        <div className="h-full transition-none"
          style={{
            width: `${progress * 100}%`,
            background: "linear-gradient(90deg,#e84444,#c03880,#7b35b0)",
          }} />
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-14 py-3 shrink-0"
        style={{ background: "rgba(7,9,26,0.95)", borderTop: "1px solid rgba(42,53,128,0.3)" }}>
        <div className="text-xs font-mono text-slate-600 tracking-widest uppercase">tainoscybercon.com</div>
        <div className="text-xs font-mono text-slate-600 tracking-widest uppercase">{slide + 1} / {SCHEDULE.length}</div>
      </div>
    </div>
  );
}
