"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";

export default function WhyAttend() {
  const { t } = useLang();
  const why = t.why;

  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        {/* Left: conference photo */}
        <div className="relative h-72 lg:h-auto order-2 lg:order-1">
          <Image
            src="/photos/tainos-public.jpg"
            alt="Participants à Tainos Cyber Con"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1c0d40]/60 hidden lg:block" />
        </div>

        {/* Right: gradient panel */}
        <div
          className="relative flex flex-col justify-center px-10 py-16 order-1 lg:order-2"
          style={{
            background:
              "linear-gradient(135deg, #c03880 0%, #7b35b0 40%, #1c2460 100%)",
          }}
        >
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-2 leading-tight">
              {why.title}
            </h2>
            <p className="text-white/70 text-sm mb-8 font-medium">{why.subtitle}</p>

            <ul className="space-y-5 mb-10">
              {why.benefits.map((b: { icon: string; text: string }, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded border border-white/30 bg-white/10 flex items-center justify-center">
                    {b.icon === "threat" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    )}
                    {b.icon === "sessions" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    )}
                    {b.icon === "topics" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                      </svg>
                    )}
                    {b.icon === "network" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                      </svg>
                    )}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed pt-1">{b.text}</p>
                </li>
              ))}
            </ul>

            <a
              href={t.tickets.eventbrite_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-[#e84444] hover:bg-[#c03030] text-white font-black text-sm tracking-widest uppercase transition-colors shadow-lg"
            >
              {why.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
