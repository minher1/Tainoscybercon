"use client";
import { useLang } from "@/context/LangContext";
import ContactForm from "./ContactForm";

export default function Speakers() {
  const { t, lang } = useLang();

  const fields = lang === "fr"
    ? [
        { name: "name",     label: "Nom complet",         required: true  },
        { name: "email",    label: "Courriel",             type: "email", required: true },
        { name: "company",  label: "Organisation / Titre"                  },
        { name: "topic",    label: "Sujet de conférence proposé", required: true },
        {
          name: "format",
          label: "Format souhaité",
          options: ["Conférence (45 min)", "Atelier (90 min)", "Table ronde", "Présentation éclair (15 min)"],
        },
        { name: "bio",      label: "Biographie courte",   type: "textarea" },
        { name: "_subject", label: "",                     type: "hidden"   },
      ]
    : [
        { name: "name",     label: "Full name",            required: true  },
        { name: "email",    label: "Email",                type: "email", required: true },
        { name: "company",  label: "Organization / Title"                  },
        { name: "topic",    label: "Proposed talk topic",  required: true  },
        {
          name: "format",
          label: "Preferred format",
          options: ["Talk (45 min)", "Workshop (90 min)", "Panel", "Lightning talk (15 min)"],
        },
        { name: "bio",      label: "Short bio",            type: "textarea" },
        { name: "_subject", label: "",                     type: "hidden"   },
      ];

  return (
    <section id="speakers" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-16">
          <span className="text-[#7b9bff] text-xs font-mono tracking-[0.3em] uppercase mb-3 block">
            {t.speakers.title}
          </span>
          <p className="text-slate-400 text-sm">{t.speakers.subtitle}</p>
        </div>

        {/* Placeholder speaker grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl border border-[#2a3580]/40 bg-[#1c2460]/10 flex flex-col items-center justify-center gap-3 opacity-40"
            >
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#2a3580] flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="w-16 h-2 rounded bg-[#2a3580]/60" />
              <div className="w-12 h-1.5 rounded bg-[#2a3580]/40" />
            </div>
          ))}
        </div>

        {/* Speaker proposal form */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-xl border border-[#2a3580] bg-gradient-to-br from-[#1c2460]/30 to-transparent">
            <h3 className="text-lg font-bold text-white mb-2">{t.speakers.cta}</h3>
            <p className="text-slate-400 text-sm mb-6">{t.speakers.cta_desc}</p>
            <ContactForm
              fields={fields}
              submitLabel={lang === "fr" ? "Soumettre ma proposition" : "Submit proposal"}
              successMessage={
                lang === "fr"
                  ? "Proposition reçue ! Nous examinerons votre candidature et vous contacterons."
                  : "Proposal received! We'll review your submission and be in touch."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
