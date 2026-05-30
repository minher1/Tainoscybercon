"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";

const EVENT_DATE = new Date("2026-08-29T09:00:00-04:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const { lang } = useLang();
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, done: false });

  useEffect(() => {
    function tick() {
      const now = Date.now();
      const delta = EVENT_DATE.getTime() - now;
      if (delta <= 0) {
        setDiff({ days: 0, hours: 0, minutes: 0, seconds: 0, done: true });
        return;
      }
      const days    = Math.floor(delta / 86400000);
      const hours   = Math.floor((delta % 86400000) / 3600000);
      const minutes = Math.floor((delta % 3600000) / 60000);
      const seconds = Math.floor((delta % 60000) / 1000);
      setDiff({ days, hours, minutes, seconds, done: false });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const labels = lang === "fr"
    ? ["Jours", "Heures", "Minutes", "Secondes"]
    : ["Days", "Hours", "Minutes", "Seconds"];

  if (diff.done) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {[diff.days, diff.hours, diff.minutes, diff.seconds].map((val, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-lg border border-[#2a3580] bg-[#1c2460]/40 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-black font-mono text-white tabular-nums">
              {pad(val)}
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mt-1.5">
            {labels[i]}
          </span>
        </div>
      ))}
    </div>
  );
}
