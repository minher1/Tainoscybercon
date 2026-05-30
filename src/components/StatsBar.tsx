"use client";
import { useLang } from "@/context/LangContext";

export default function StatsBar() {
  const { t } = useLang();
  const stats = (t as any).stats as { value: string; label: string }[];

  return (
    <div className="bg-[#1c2460] py-10 px-4 border-y border-[#2a3580]/60">
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
              {s.value}
            </span>
            <span className="text-xs font-bold text-[#7b9bff] tracking-[0.2em] uppercase mt-1">
              {s.label}
            </span>
            {/* wavy underline */}
            <svg className="mt-1 opacity-50" width="36" height="6" viewBox="0 0 36 6" fill="none">
              <path d="M1 3 Q5 1 9 3 Q13 5 17 3 Q21 1 25 3 Q29 5 33 3" stroke="#7b9bff" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
