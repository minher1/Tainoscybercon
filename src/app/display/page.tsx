"use client";
import { useEffect, useState } from "react";

const SCHEDULE = [
  { time: "9:00",  end: "9:30",  title: "Accueil des invités",                                           speaker: "",                                          icon: "☕" },
  { time: "9:30",  end: "10:30", title: "Cérémonie d'ouverture & allocutions",                           speaker: "Organisateurs & élus municipaux",            icon: "🎤" },
  { time: "10:30", end: "11:30", title: "De la souveraineté numérique à la souveraineté architecturale", speaker: "Christian Kengne",                           icon: "🏛️" },
  { time: "11:30", end: "12:30", title: "Des données aux décisions",                                     speaker: "Olivier Gaston",                             icon: "🤖" },
  { time: "12:30", end: "13:30", title: "Dîner",                                                         speaker: "",                                          icon: "🍽️" },
  { time: "13:30", end: "14:30", title: "Régulation, éthique et confiance",                              speaker: "Nourhene Ben Youssef",                       icon: "⚖️" },
  { time: "14:30", end: "14:45", title: "Pause-café & réseautage",                                       speaker: "",                                          icon: "☕" },
  { time: "14:45", end: "15:45", title: "L'ère quantique",                                               speaker: "Mike Arbrouet",                              icon: "⚛️" },
  { time: "15:45", end: "16:45", title: "Réponse aux incidents",                                         speaker: "Valentin Bromont & Jean-François Brouillette", icon: "🛡️" },
  { time: "16:45", end: "17:00", title: "Clôture & réseautage",                                          speaker: "",                                          icon: "🎉" },
];

const SPONSORS = [
  { name: "Les Ateliers Bromont", url: "https://lesateliersbromont.ca", logo: "https://lesateliersbromont.ca/cdn/shop/files/LesAteliersBromont_2cdbb6bf-4cfc-449d-bed1-ac39af732ac4.svg?height=80&v=1772938029" },
  { name: "YottaSec",             url: "https://yottasec.com",          logo: "https://cdn.prod.website-files.com/67294090dd06d01abfca83b4/672943bd6393c2fc5a19375c_Logo-YoyyaSec-horizontal-couleur-xsmall-1.png" },
  { name: "TEKAP",                url: "https://tekap.ca",              logo: "https://www.tekap.ca/_next/image?url=%2F_next%2Fstatic%2Fimmutable%2Fmedia%2Flogo_white.2emsvyojcdsi1.png&w=640&q=75" },
  { name: "First City Internet",  url: "https://firstcityinternet.com", logo: "https://firstcityinternet.com/logo.png" },
];

const SURVEY_URL = "https://tainoscybercon.com/survey";
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=ffffff&bgcolor=07091a&data=${encodeURIComponent(SURVEY_URL)}`;

type ScheduleSlide = { kind: "session"; idx: number };
type SponsorSlide  = { kind: "sponsor" };
type QRSlide       = { kind: "qr" };
type Slide = ScheduleSlide | SponsorSlide | QRSlide;

const SLIDES: Slide[] = [];
SCHEDULE.forEach((_, i) => {
  SLIDES.push({ kind: "session", idx: i });
  SLIDES.push({ kind: "sponsor" });
});
SLIDES.push({ kind: "qr" });

const SLIDE_DURATION = 6000;
const SPONSOR_DURATION = 8000;
const QR_DURATION = 15000;

function toMinutes(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + (m || 0);
}

function getCurrentScheduleIndex(now: Date) {
  const mins = now.getHours() * 60 + now.getMinutes();
  for (let i = SCHEDULE.length - 1; i >= 0; i--) {
    if (mins >= toMinutes(SCHEDULE[i].time)) return i;
  }
  return -1;
}

const BG = "linear-gradient(160deg,#0d1035 0%,#1a1060 100%)";

export default function DisplayPage() {
  const [now, setNow] = useState(new Date());
  const [slideIdx, setSlideIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(true);

  const currentScheduleIdx = getCurrentScheduleIndex(now);
  const currentSlide = SLIDES[slideIdx];
  const duration = currentSlide.kind === "qr" ? QR_DURATION : currentSlide.kind === "sponsor" ? SPONSOR_DURATION : SLIDE_DURATION;

  useEffect(() => {
    const tick = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    const start = Date.now();
    let raf: number;
    let done = false;

    const animate = () => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(elapsed / duration, 1));
      if (!done && elapsed >= duration) {
        done = true;
        cancelAnimationFrame(raf);
        setFade(false);
        setTimeout(() => {
          setSlideIdx((s) => (s + 1) % SLIDES.length);
          setFade(true);
        }, 500);
        return;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => { done = true; cancelAnimationFrame(raf); };
  }, [slideIdx, duration]);

  const timeStr = now.toLocaleTimeString("fr-CA", { hour: "2-digit", minute: "2-digit" });
  const dateStr = now.toLocaleDateString("fr-CA", { weekday: "long", day: "numeric", month: "long" });

  const sessionGradient = BG;

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#07091a] flex flex-col" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Top bar */}
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
        {currentScheduleIdx >= 0 && (
          <div className="text-right">
            <div className="text-[9px] font-black tracking-[0.4em] text-[#ff6eb0] uppercase mb-0.5">En cours</div>
            <div className="text-sm font-bold text-white">{SCHEDULE[currentScheduleIdx].icon} {SCHEDULE[currentScheduleIdx].title}</div>
            <div className="text-xs text-slate-400">{SCHEDULE[currentScheduleIdx].time} – {SCHEDULE[currentScheduleIdx].end}</div>
          </div>
        )}
      </div>

      {/* Main slide */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden"
        style={{ background: sessionGradient }}>

        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="absolute inset-0 opacity-30" style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 70%)"
        }} />

        {/* SESSION SLIDE */}
        {currentSlide.kind === "session" && (() => {
          const item = SCHEDULE[currentSlide.idx];
          const isCurrentSlide = currentSlide.idx === currentScheduleIdx;
          const isPastSlide = currentSlide.idx < currentScheduleIdx;
          const next = currentScheduleIdx >= 0 ? SCHEDULE[currentScheduleIdx + 1] : null;
          return (
            <div className={`relative text-center px-20 ${fade ? "opacity-100" : "opacity-0"}`}
              style={{ transition: "opacity 0.5s ease" }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
                {isCurrentSlide && <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />}
                <span className="text-xs font-black tracking-[0.4em] text-white uppercase">
                  {isCurrentSlide ? "EN COURS" : isPastSlide ? "TERMINÉ" : `À ${item.time}`}
                </span>
              </div>
              <div className="text-[120px] leading-none mb-6 select-none">{item.icon}</div>
              <div className="text-2xl font-bold text-white/70 mb-4 tabular-nums">{item.time} – {item.end}</div>
              <div className="text-6xl font-black text-white leading-tight mb-6" style={{ textShadow: "0 4px 40px rgba(0,0,0,0.4)" }}>
                {item.title}
              </div>
              {item.speaker && (
                <div className="text-2xl font-semibold text-white/70 mb-8">{item.speaker}</div>
              )}
              {isCurrentSlide && next && (
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl"
                  style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <span className="text-white/50 text-sm font-bold tracking-widest uppercase">Prochain</span>
                  <span className="text-white font-bold">{next.icon} {next.title}</span>
                  <span className="text-white/50 text-sm">{next.time}</span>
                </div>
              )}
            </div>
          );
        })()}

        {/* SPONSOR SLIDE */}
        {currentSlide.kind === "sponsor" && (
          <div className={`relative text-center px-20 w-full max-w-5xl ${fade ? "opacity-100" : "opacity-0"}`}
            style={{ transition: "opacity 0.5s ease" }}>
            <div className="text-[9px] font-black tracking-[0.6em] text-[#7b9bff] uppercase mb-4">Tainos Cyber Con 2026</div>
            <h2 className="text-5xl font-black text-white mb-3">Merci à nos partenaires</h2>
            <p className="text-slate-400 text-lg mb-14">Leur soutien rend cet événement possible.</p>
            <div className="grid grid-cols-2 gap-8">
              {SPONSORS.map((s) => (
                <div key={s.name} className="flex flex-col items-center justify-center gap-4 px-10 py-8 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="max-h-16 max-w-[220px] object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span className="text-white/60 text-sm font-semibold tracking-wider">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* QR SLIDE */}
        {currentSlide.kind === "qr" && (
          <div className={`relative text-center px-20 w-full max-w-2xl ${fade ? "opacity-100" : "opacity-0"}`}
            style={{ transition: "opacity 0.5s ease" }}>
            <div className="text-[9px] font-black tracking-[0.6em] text-[#7b9bff] uppercase mb-4">Tainos Cyber Con 2026</div>
            <h2 className="text-5xl font-black text-white mb-3">Votre avis nous tient à cœur</h2>
            <p className="text-slate-400 text-lg mb-10">Scannez pour répondre au sondage anonyme · <span className="text-slate-500">Scan to share your feedback</span></p>
            <div className="flex flex-col items-center gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={QR_URL} alt="QR sondage" width={220} height={220} className="rounded-2xl"
                style={{ border: "6px solid rgba(255,255,255,0.1)" }} />
              <div className="px-6 py-2 rounded-full text-sm font-mono text-slate-300"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                tainoscybercon.com/survey
              </div>
            </div>
          </div>
        )}

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
          {SLIDES.map((s, i) => (
            <div key={i} className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === slideIdx ? 32 : 8,
                background: s.kind === "qr"
                  ? (i === slideIdx ? "rgba(123,155,255,0.9)" : "rgba(123,155,255,0.2)")
                  : s.kind === "sponsor"
                  ? (i === slideIdx ? "rgba(255,110,176,0.9)" : "rgba(255,110,176,0.2)")
                  : (i === slideIdx ? "rgba(255,255,255,0.9)" : i < slideIdx ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.15)"),
              }} />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 shrink-0" style={{ background: "rgba(42,53,128,0.4)" }}>
        <div className="h-full"
          style={{ width: `${progress * 100}%`, background: "linear-gradient(90deg,#e84444,#c03880,#7b35b0)", transition: "none" }} />
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-14 py-3 shrink-0"
        style={{ background: "rgba(7,9,26,0.95)", borderTop: "1px solid rgba(42,53,128,0.3)" }}>
        <div className="text-xs font-mono text-slate-600 tracking-widest uppercase">tainoscybercon.com</div>
        <div className="flex items-center gap-3">
          {currentSlide.kind === "sponsor" && (
            <span className="text-[#ff6eb0] text-xs font-mono tracking-widest uppercase">Nos partenaires</span>
          )}
        </div>
        <div className="text-xs font-mono text-slate-600 tracking-widest uppercase">{slideIdx + 1} / {SLIDES.length}</div>
      </div>
    </div>
  );
}
