"use client";
import { useState } from "react";
import { useLang } from "@/context/LangContext";

const faqFr = [
  {
    q: "Où se tient la conférence ?",
    a: "Tainos Cyber Con 2026 aura lieu au 3235, avenue de la Gare, Mascouche (Québec) J7K 3C1, salle 2C2B. Un stationnement gratuit est disponible sur place.",
  },
  {
    q: "Quel est le coût d'un billet ?",
    a: "Le billet d'entrée est à 60 $CA (taxes incluses). Il donne accès à l'ensemble de la journée : conférences, ateliers, dîner, pauses et accès aux ressources post-événement.",
  },
  {
    q: "La conférence est-elle en français ou en anglais ?",
    a: "Les présentations se déroulent principalement en français, avec certaines sessions en anglais. Un programme bilingue sera mis à disposition.",
  },
  {
    q: "Les présentations seront-elles enregistrées ?",
    a: "Certaines présentations pourront être disponibles en rediffusion pour les participants inscrits. Les détails seront communiqués avant l'événement.",
  },
  {
    q: "Comment puis-je devenir conférencier ?",
    a: "Soumettez votre proposition via le formulaire disponible sur la page Conférenciers. Les candidatures sont évaluées par notre comité de programmation.",
  },
  {
    q: "Y a-t-il des options de partenariat ?",
    a: "Oui ! Trois niveaux de partenariat sont disponibles : Bronze, Argent et Or. Chaque niveau offre une visibilité adaptée et des avantages exclusifs. Contactez-nous via la page Partenaires.",
  },
  {
    q: "L'événement est-il accessible aux personnes à mobilité réduite ?",
    a: "Oui, le lieu est entièrement accessible. Si vous avez des besoins spécifiques, contactez-nous à hello@tainoscybercon.com et nous ferons tout pour vous accommoder.",
  },
  {
    q: "Que se passe-t-il si je ne peux pas venir après avoir acheté mon billet ?",
    a: "Les billets sont remboursables jusqu'à 30 jours avant l'événement. Passé ce délai, ils peuvent être transférés à une autre personne. Contactez Eventbrite pour toute demande.",
  },
];

const faqEn = [
  {
    q: "Where is the conference held?",
    a: "Tainos Cyber Con 2026 takes place at 3235 Avenue de la Gare, Mascouche, QC J7K 3C1, Room 2C2B. Free parking is available on site.",
  },
  {
    q: "What is the ticket price?",
    a: "Tickets are CA$60 (taxes included), giving you full-day access: talks, workshops, lunch, breaks, and post-event resource access.",
  },
  {
    q: "Is the conference in French or English?",
    a: "Presentations are primarily in French, with some sessions in English. A bilingual program will be made available.",
  },
  {
    q: "Will sessions be recorded?",
    a: "Some presentations may be available as replays for registered attendees. Details will be shared before the event.",
  },
  {
    q: "How can I become a speaker?",
    a: "Submit your proposal using the form on the Speakers page. Applications are reviewed by our programming committee.",
  },
  {
    q: "Are there partnership options?",
    a: "Yes! Three partnership tiers are available: Bronze, Silver, and Gold — each with tailored visibility and exclusive benefits. Reach us via the Partners page.",
  },
  {
    q: "Is the venue accessible for people with reduced mobility?",
    a: "Yes, the venue is fully accessible. If you have specific needs, contact us at hello@tainoscybercon.com and we'll do our best to accommodate you.",
  },
  {
    q: "What if I can't attend after buying my ticket?",
    a: "Tickets are refundable up to 30 days before the event. After that, they can be transferred to another person. Contact Eventbrite for any requests.",
  },
];

export default function FAQ() {
  const { lang } = useLang();
  const items = lang === "fr" ? faqFr : faqEn;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-[#0d1035] relative">
      <div className="max-w-3xl mx-auto">
        <div className="section-divider mb-16" />
        <div className="text-center mb-12">
          <span className="logo-gradient-text text-xs font-mono tracking-[0.3em] uppercase mb-3 block font-bold">
            {lang === "fr" ? "FAQ" : "FAQ"}
          </span>
          <h2 className="text-3xl font-black text-white">
            {lang === "fr" ? "Questions fréquentes" : "Frequently Asked Questions"}
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#2a3580]/60 bg-[#07091a]/60 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white text-sm leading-snug">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-[#7b9bff] shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-200 text-sm leading-relaxed border-t border-[#2a3580]/40 pt-4">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
