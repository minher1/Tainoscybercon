"use client";
import { useLang } from "@/context/LangContext";
import ContactForm from "./ContactForm";
import Image from "next/image";
import Link from "next/link";

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

type Speaker = {
  name: string;
  title: string;
  bio: string;
  tags: string[];
  photo: string;
  linkedin: string;
  website: string;
};

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <Link href={`/speakers/${slugify(speaker.name)}`} className="group relative flex flex-col rounded-2xl border border-[#2a3580]/60 bg-[#0d1035]/60 overflow-hidden hover:border-[#4a6cf7]/50 transition-all duration-300">
      {/* Photo */}
      <div className="relative h-72 w-full overflow-hidden bg-[#1c2460]/40">
        <Image
          src={speaker.photo}
          alt={speaker.name}
          fill
          className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
          onError={(e) => {
            // Fallback to initials avatar on missing photo
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1035] via-[#0d1035]/20 to-transparent" />
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {speaker.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#1c2460]/80 border border-[#4a6cf7]/40 text-[#7b9bff] rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-black text-white mb-0.5">{speaker.name}</h3>
        <p className="text-[#7b9bff] text-sm font-mono mb-3">{speaker.title}</p>
        <p className="text-slate-200 text-sm leading-relaxed flex-1">{speaker.bio}</p>

        {/* Links */}
        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[#2a3580]/40">
          <a
            href={speaker.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Website
          </a>
          <a
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-[#7b9bff] transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </Link>
  );
}

export default function Speakers() {
  const { t, lang } = useLang();
  const confirmed = t.speakers.confirmed as Speaker[];

  const formFields = lang === "fr"
    ? [
        { name: "nom",          label: "Nom",                             required: true },
        { name: "prenom",       label: "Prénom",                          required: true },
        { name: "email",        label: "E-mail",        type: "email",    required: true },
        { name: "telephone",    label: "Téléphone",     type: "tel" },
        { name: "fonction",     label: "Nom de votre fonction",           required: true },
        { name: "organisation", label: "Nom de votre organisation",       required: true },
        { name: "titre_sujet",  label: "Titre du sujet ou de votre présentation", required: true },
        { name: "format",       label: "Type de prise de parole",
          options: ["Présentation 45 minutes", "Présentation de 30 minutes", "Tables rondes", "Ateliers", "Autres"] },
        { name: "format_autre", label: "Si « Autres », précisez", type: "textarea" },
        { name: "parcours",     label: "Parcours (courte description)",   type: "textarea", required: true },
        { name: "resume",       label: "Résumé du sujet de présentation", type: "textarea", required: true },
        { name: "co_speaker",   label: "Présentateur additionnel (si applicable)" },
        { name: "linkedin",     label: "Lien de votre profil LinkedIn" },
      ]
    : [
        { name: "nom",          label: "Last name",                       required: true },
        { name: "prenom",       label: "First name",                      required: true },
        { name: "email",        label: "Email",         type: "email",    required: true },
        { name: "telephone",    label: "Phone",         type: "tel" },
        { name: "fonction",     label: "Job title",                       required: true },
        { name: "organisation", label: "Organization name",               required: true },
        { name: "titre_sujet",  label: "Presentation title",              required: true },
        { name: "format",       label: "Talk format",
          options: ["45-minute presentation", "30-minute presentation", "Panel / roundtable", "Workshop", "Other"] },
        { name: "format_autre", label: "If \"Other\", please specify", type: "textarea" },
        { name: "parcours",     label: "Background (short description)",  type: "textarea", required: true },
        { name: "resume",       label: "Presentation summary",            type: "textarea", required: true },
        { name: "co_speaker",   label: "Additional presenter (if any)" },
        { name: "linkedin",     label: "LinkedIn profile URL" },
      ];

  return (
    <section id="speakers" className="py-24 px-4 relative overflow-hidden">
      {/* Speaker at mic — real Tainos event photo */}
      <div className="absolute inset-0 opacity-[0.12]">
        <Image src="/photos/speaker-mic.jpg" alt="" fill className="object-cover object-top" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#07091a] via-transparent to-[#07091a]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-16">
          <span className="logo-gradient-text text-xs font-mono tracking-[0.3em] uppercase mb-3 block font-bold">
            {t.speakers.title}
          </span>
          <p className="text-slate-300 text-sm">{t.speakers.subtitle}</p>
        </div>

        {/* Confirmed speakers */}
        {confirmed.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {confirmed.map((s) => (
              <SpeakerCard key={s.name} speaker={s} />
            ))}

            {/* "More coming" placeholder cards */}
            {Array.from({ length: Math.max(0, 3 - confirmed.length) }).map((_, i) => (
              <div
                key={`ph-${i}`}
                className="rounded-2xl border border-dashed border-[#2a3580]/40 bg-[#1c2460]/10 flex flex-col items-center justify-center gap-3 py-20 opacity-40"
              >
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#2a3580] flex items-center justify-center">
                  <svg className="w-7 h-7 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">
                  {lang === "fr" ? "À venir..." : "Coming soon..."}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Call for speakers form */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-xl border border-[#2a3580] bg-gradient-to-br from-[#1c2460]/30 to-transparent">
            <h3 className="text-lg font-bold text-white mb-2">{t.speakers.cta}</h3>
            <p className="text-slate-200 text-sm mb-6">{t.speakers.cta_desc}</p>
            <ContactForm
              fields={formFields}
              formType="speaker"
              submitLabel={lang === "fr" ? "Soumettre ma proposition" : "Submit proposal"}
              successMessage={
                lang === "fr"
                  ? "Proposition reçue ! Nous vous contacterons prochainement."
                  : "Proposal received! We'll be in touch soon."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
