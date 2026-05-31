"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type Speaker = {
  name: string;
  title: string;
  bio: string;
  tags: string[];
  photo: string;
  linkedin: string;
  website: string;
};

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export default function SpeakerPage() {
  const { t, lang } = useLang();
  const { slug } = useParams<{ slug: string }>();
  const confirmed = t.speakers.confirmed as Speaker[];
  const speaker = confirmed.find((s) => slugify(s.name) === slug);

  if (!speaker) {
    return (
      <div className="min-h-screen bg-[#07091a] flex items-center justify-center px-4 pt-20">
        <div className="text-center">
          <p className="text-slate-400 mb-4">{lang === "fr" ? "Conférencier introuvable." : "Speaker not found."}</p>
          <Link href="/speakers" className="text-[#7b9bff] hover:underline text-sm font-mono">
            ← {lang === "fr" ? "Retour aux conférenciers" : "Back to speakers"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07091a] pt-24 pb-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Back link */}
        <Link href="/speakers" className="inline-flex items-center gap-2 text-sm font-mono text-[#7b9bff] hover:text-white transition-colors mb-12">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          {lang === "fr" ? "Retour aux conférenciers" : "Back to speakers"}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Photo column */}
          <div className="lg:col-span-2">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#2a3580]/60 shadow-2xl shadow-black/50">
              <Image
                src={speaker.photo}
                alt={speaker.name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07091a]/60 to-transparent" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {speaker.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-[#1c2460]/80 border border-[#4a6cf7]/40 text-[#7b9bff] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3 mt-5">
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#2a3580]/60 bg-[#1c2460]/20 text-slate-200 text-sm hover:border-[#4a6cf7]/60 hover:text-white transition-all"
              >
                <svg className="w-4 h-4 text-[#7b9bff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={speaker.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#2a3580]/60 bg-[#1c2460]/20 text-slate-200 text-sm hover:border-[#4a6cf7]/60 hover:text-white transition-all"
              >
                <svg className="w-4 h-4 text-[#7b9bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                {lang === "fr" ? "Site web" : "Website"}
              </a>
            </div>
          </div>

          {/* Info column */}
          <div className="lg:col-span-3">
            <span className="logo-gradient-text text-xs font-mono tracking-[0.3em] uppercase font-bold block mb-3">
              {lang === "fr" ? "CONFÉRENCIER CONFIRMÉ" : "CONFIRMED SPEAKER"}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-3 leading-tight">
              {speaker.name}
            </h1>
            <p className="text-[#7b9bff] font-mono text-base mb-8">{speaker.title}</p>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-200 text-base leading-relaxed">{speaker.bio}</p>
            </div>

            {/* Event info */}
            <div className="mt-10 p-6 rounded-xl border border-[#2a3580]/60 bg-[#1c2460]/20">
              <p className="text-xs font-mono text-[#7b9bff] tracking-widest uppercase mb-3">
                {lang === "fr" ? "Participer à la conférence" : "Attend the conference"}
              </p>
              <p className="text-slate-200 text-sm mb-4">
                {lang === "fr"
                  ? `Retrouvez ${speaker.name.split(" ")[0]} et nos autres conférenciers le 29 août 2026 à Mascouche, QC.`
                  : `Join ${speaker.name.split(" ")[0]} and our other speakers on August 29, 2026 in Mascouche, QC.`}
              </p>
              <a
                href="https://www.eventbrite.ca/e/tainos-cybercon-2026-tickets-1989251250038"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 logo-gradient text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:opacity-90 transition-opacity"
              >
                {lang === "fr" ? "Achetez votre billet" : "Get your ticket"} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
