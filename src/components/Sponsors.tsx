"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Sponsors() {
  const { t, lang } = useLang();

  const fields = lang === "fr"
    ? [
        { name: "name",         label: "Nom / Organisation",   required: true  },
        { name: "email",        label: "Courriel",             type: "email", required: true },
        { name: "phone",        label: "Téléphone",            type: "tel"   },
        {
          name: "package",
          label: "Niveau de partenariat souhaité",
          options: ["Or", "Argent", "Bronze", "À discuter"],
        },
        { name: "message",      label: "Message",              type: "textarea" },
        { name: "_subject",     label: "",                     type: "hidden" },
      ]
    : [
        { name: "name",         label: "Name / Organization",  required: true  },
        { name: "email",        label: "Email",                type: "email", required: true },
        { name: "phone",        label: "Phone",                type: "tel"   },
        {
          name: "package",
          label: "Desired partnership level",
          options: ["Gold", "Silver", "Bronze", "To discuss"],
        },
        { name: "message",      label: "Message",              type: "textarea" },
        { name: "_subject",     label: "",                     type: "hidden" },
      ];

  return (
    <section id="sponsors" className="py-24 px-4 bg-[#0d1035] relative overflow-hidden">
      {/* Networking photo */}
      <div className="absolute inset-0 opacity-[0.07]">
        <Image src="/photos/networking.jpg" alt="" fill className="object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1035] via-transparent to-[#0d1035]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-16">
          <span className="text-[#7b9bff] text-xs font-mono tracking-[0.3em] uppercase mb-3 block">
            {t.sponsors.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {t.sponsors.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
          {/* Benefits list */}
          <div>
            <h3 className="text-sm font-bold text-[#7b9bff] tracking-widest uppercase mb-6">
              {t.sponsors.benefits_title}
            </h3>
            <ul className="space-y-4">
              {t.sponsors.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="shrink-0 w-7 h-7 rounded-full border border-[#4a6cf7]/40 flex items-center justify-center text-xs font-bold text-[#7b9bff]">
                    {i + 1}
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed pt-0.5">{b}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form */}
          <div className="p-8 rounded-xl border border-[#2a3580] bg-gradient-to-br from-[#1c2460]/30 to-transparent">
            <h3 className="text-lg font-bold text-white mb-6">{t.sponsors.cta}</h3>
            <ContactForm
              fields={fields}
              submitLabel={lang === "fr" ? "Envoyer" : "Send"}
              successMessage={
                lang === "fr"
                  ? "Message envoyé ! Nous vous répondrons sous 48h."
                  : "Message sent! We'll get back to you within 48h."
              }
            />
          </div>
        </div>

        {/* Sponsor logo placeholders */}
        <div className="pt-12 border-t border-[#2a3580]/40">
          <p className="text-center text-xs text-slate-600 tracking-widest uppercase mb-8">
            Nos partenaires
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-28 h-14 rounded border border-dashed border-[#2a3580]/40 flex items-center justify-center opacity-30"
              >
                <span className="text-xs text-slate-600">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
