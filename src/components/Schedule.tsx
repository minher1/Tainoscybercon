"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";
import { CircuitTrace } from "./Silhouettes";

const BREAKS = ["Dîner", "Lunch", "Café", "Coffee", "Clôture", "Closing", "Pause"];

export default function Schedule() {
  const { t } = useLang();

  const isBreak = (title: string) =>
    BREAKS.some((b) => title.toLowerCase().includes(b.toLowerCase()));

  return (
    <section id="schedule" className="py-24 px-4 bg-[#0d1035] relative overflow-hidden">
      {/* Stage photo */}
      <div className="absolute inset-0 opacity-[0.07]">
        <Image src="/photos/stage.jpg" alt="" fill className="object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1035] via-transparent to-[#0d1035]" />
      <CircuitTrace className="absolute right-8 bottom-16 w-28 opacity-40 pointer-events-none select-none hidden lg:block" />

      <div className="relative max-w-4xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-16">
          <span className="text-[#7b9bff] text-xs font-mono tracking-[0.3em] uppercase mb-3 block">
            {t.schedule.title}
          </span>
          <p className="text-slate-300 text-sm">{t.schedule.subtitle}</p>
        </div>

        <div className="relative">
          <div className="absolute left-[4.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#4a6cf7]/50 via-[#4a6cf7]/20 to-transparent" />
          <div className="space-y-1">
            {t.schedule.items.map((item, i) => (
              <div key={i} className="flex items-start gap-6 group">
                <div className="w-16 shrink-0 text-right">
                  <span className="text-xs font-mono text-slate-300 group-hover:text-[#7b9bff] transition-colors">
                    {item.time}
                  </span>
                </div>
                <div className="relative z-10 mt-1 shrink-0">
                  <div
                    className={`w-3 h-3 rounded-full border-2 transition-all ${
                      isBreak(item.title)
                        ? "border-slate-700 bg-transparent"
                        : "border-[#4a6cf7] bg-[#4a6cf7]/20 group-hover:bg-[#4a6cf7]/40"
                    }`}
                  />
                </div>
                <div className={`flex-1 pb-6 ${isBreak(item.title) ? "opacity-40" : ""}`}>
                  <div className="px-4 py-3 rounded-lg text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
