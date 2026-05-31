"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Sponsors() {
  const { t, lang } = useLang();

  const fields = lang === "fr"
    ? [
        { name: "nom",          label: "Nom",                                         required: true },
        { name: "email",        label: "E-mail",            type: "email",            required: true },
        { name: "telephone",    label: "Numéro de contact", type: "tel",              required: true },
        { name: "adresse",      label: "Adresse complète (numéro, rue, ville, province, code postal)", required: true },
        {
          name: "source",
          label: "Comment avez-vous entendu parler de nous ?",
          options: ["Instagram", "Amis", "Facebook", "Autres"],
          required: true,
        },
        { name: "source_autre", label: "Si « Autres », précisez" },
        { name: "entreprise",   label: "Nom de votre entreprise",                     required: true },
        { name: "website",      label: "Site web de l'organisation",                  required: true },
        {
          name: "niveau",
          label: "Niveau de partenariat envisagé",
          options: ["Bronze", "Argent", "Or"],
          required: true,
        },
        { name: "commentaires", label: "Commentaires", type: "textarea" },
        {
          name: "consentement",
          label: "Vous consentez à nous laisser vous contacter ?",
          options: ["Oui", "Non"],
          required: true,
        },
      ]
    : [
        { name: "nom",          label: "Name",                                        required: true },
        { name: "email",        label: "Email",             type: "email",            required: true },
        { name: "telephone",    label: "Contact number",    type: "tel",              required: true },
        { name: "adresse",      label: "Full address (number, street, city, province, postal code)", required: true },
        {
          name: "source",
          label: "How did you hear about us?",
          options: ["Instagram", "Friends", "Facebook", "Other"],
          required: true,
        },
        { name: "source_autre", label: "If \"Other\", please specify" },
        { name: "entreprise",   label: "Company name",                                required: true },
        { name: "website",      label: "Organization website",                        required: true },
        {
          name: "niveau",
          label: "Desired partnership level",
          options: ["Bronze", "Silver", "Gold"],
          required: true,
        },
        { name: "commentaires", label: "Comments", type: "textarea" },
        {
          name: "consentement",
          label: "Do you consent to being contacted?",
          options: ["Yes", "No"],
          required: true,
        },
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

        {/* Why partner — full-width benefit pills */}
        <div className="mb-14">
          <h3 className="text-sm font-bold text-[#7b9bff] tracking-widest uppercase mb-6 text-center">
            {t.sponsors.benefits_title}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {t.sponsors.benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#2a3580] bg-[#0d1035]/60 text-slate-300 text-sm">
                <span className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-black text-white" style={{ background: "linear-gradient(135deg,#c03880,#7b35b0)" }}>
                  {i + 1}
                </span>
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship tiers */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <span className="text-[#7b9bff] text-xs font-mono tracking-[0.3em] uppercase mb-2 block">
              {t.sponsors.tiers_subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">{t.sponsors.tiers_title}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {(t.sponsors.tiers as Array<{ name: string; price: string; color: string; featured?: boolean; perks: string[] }>).map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl overflow-hidden flex flex-col ${tier.featured ? "ring-2 ring-[#7b35b0] scale-[1.03]" : "border border-[#2a3580]"}`}
              >
                <div className="h-1.5 w-full" style={{ background: tier.color }} />
                {tier.featured && (
                  <div className="absolute top-0 right-4 translate-y-3">
                    <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-widest rounded-full text-white" style={{ background: "linear-gradient(135deg,#c03880,#7b35b0)" }}>
                      {lang === "fr" ? "Populaire" : "Popular"}
                    </span>
                  </div>
                )}
                <div className="bg-[#0d1035] px-7 pt-7 pb-6 flex flex-col flex-1">
                  <p className="text-xs font-mono font-bold tracking-[0.25em] uppercase mb-1" style={{ color: tier.color }}>{tier.name}</p>
                  <p className="text-4xl font-black text-white mb-6">{tier.price}</p>
                  <ul className="space-y-3 flex-1">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: tier.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="mt-7 block w-full text-center py-2.5 rounded-lg text-sm font-black tracking-widest uppercase transition-opacity hover:opacity-80"
                    style={{ background: tier.color, color: "#07091a" }}
                    onClick={() => document.getElementById("sponsor-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {lang === "fr" ? "Nous contacter" : "Contact us"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div id="sponsor-form" className="max-w-2xl mx-auto mb-16">
          <div className="p-8 rounded-xl border border-[#2a3580] bg-gradient-to-br from-[#1c2460]/30 to-transparent">
            <h3 className="text-lg font-bold text-white mb-2">{t.sponsors.cta}</h3>
            <p className="text-slate-400 text-sm mb-6">
              {lang === "fr"
                ? "Sélectionnez un niveau et notre équipe vous contactera sous 48h."
                : "Select a level and our team will reach out within 48 hours."}
            </p>
            <ContactForm
              fields={fields}
              formType="sponsor"
              submitLabel={lang === "fr" ? "Envoyer" : "Send"}
              successMessage={
                lang === "fr"
                  ? "Message envoyé ! Nous vous répondrons sous 48h."
                  : "Message sent! We'll get back to you within 48h."
              }
            />
          </div>
        </div>

        {/* Partner logos */}
        <div className="pt-12 border-t border-[#2a3580]/40">
          <p className="text-center text-xs text-slate-500 tracking-widest uppercase mb-8">
            Nos partenaires
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Yottasec */}
            <a
              href="https://yottasec.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/sponsors/yottasec.png"
                alt="YottaSec"
                width={160}
                height={42}
                className="object-contain"
              />
            </a>

            {/* TEKAP */}
            <a
              href="https://tekap.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/sponsors/tekap.png"
                alt="TEKAP"
                width={140}
                height={42}
                className="object-contain"
              />
            </a>

            {/* Remaining placeholder slots */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-32 h-14 rounded border border-dashed border-[#2a3580]/30 flex items-center justify-center opacity-20"
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
