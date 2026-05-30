"use client";
import { useLang } from "@/context/LangContext";

const BREAKS = ["Dîner", "Lunch", "Café", "Coffee", "Clôture", "Closing", "Pause"];

export default function Schedule() {
  const { t } = useLang();

  const isBreak = (title: string) =>
    BREAKS.some((b) => title.toLowerCase().includes(b.toLowerCase()));

  return (
    <section id="schedule" className="py-24 px-4 bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-mono tracking-[0.3em] uppercase mb-3 block">
            {t.schedule.title}
          </span>
          <p className="text-slate-400 text-sm">{t.schedule.subtitle}</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[4.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/40 via-amber-500/20 to-transparent" />

          <div className="space-y-1">
            {t.schedule.items.map((item, i) => (
              <div key={i} className="flex items-start gap-6 group">
                {/* Time */}
                <div className="w-16 shrink-0 text-right">
                  <span className="text-xs font-mono text-slate-500 group-hover:text-amber-400 transition-colors">
                    {item.time}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative z-10 mt-1 shrink-0">
                  <div
                    className={`w-3 h-3 rounded-full border-2 transition-all ${
                      isBreak(item.title)
                        ? "border-slate-600 bg-transparent"
                        : "border-amber-500 bg-amber-500/20 group-hover:bg-amber-500/40"
                    }`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pb-6 ${
                    isBreak(item.title) ? "opacity-50" : ""
                  }`}
                >
                  <div
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isBreak(item.title)
                        ? "text-slate-500"
                        : "text-slate-200 group-hover:text-white"
                    }`}
                  >
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
