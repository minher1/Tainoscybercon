"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";
import { useState, FormEvent } from "react";

type TierForm = {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  entreprise: string;
  website: string;
  logo_url: string;
  commentaires: string;
};

const emptyForm = (): TierForm => ({
  nom: "", prenom: "", email: "", telephone: "",
  entreprise: "", website: "", logo_url: "", commentaires: "",
});

function TierCard({
  tier,
  lang,
}: {
  tier: { name: string; price: string; color: string; featured?: boolean; perks: string[] };
  lang: string;
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<TierForm>(emptyForm());
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (k: keyof TierForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _formType: "sponsor",
          _loadedAt: String(Date.now() - 5000),
          [lang === "fr" ? "Niveau" : "Tier"]: tier.name,
          [lang === "fr" ? "Nom" : "Last name"]: form.nom,
          [lang === "fr" ? "Prénom" : "First name"]: form.prenom,
          "Email": form.email,
          [lang === "fr" ? "Téléphone" : "Phone"]: form.telephone,
          [lang === "fr" ? "Entreprise" : "Company"]: form.entreprise,
          [lang === "fr" ? "Site web" : "Website"]: form.website,
          [lang === "fr" ? "URL du logo" : "Logo URL"]: form.logo_url,
          [lang === "fr" ? "Commentaires" : "Comments"]: form.commentaires,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const label = (fr: string, en: string) => lang === "fr" ? fr : en;

  return (
    <div className={`relative rounded-2xl overflow-hidden flex flex-col ${tier.featured ? "ring-2 ring-[#7b35b0] scale-[1.03]" : "border border-[#2a3580]"}`}>
      <div className="h-1.5 w-full" style={{ background: tier.color }} />

      {tier.featured && (
        <div className="absolute top-0 right-4 translate-y-3 z-10">
          <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-widest rounded-full text-white" style={{ background: "linear-gradient(135deg,#c03880,#7b35b0)" }}>
            {label("Populaire", "Popular")}
          </span>
        </div>
      )}

      <div className="bg-[#0d1035] px-7 pt-7 pb-6 flex flex-col flex-1">
        <p className="text-xs font-mono font-bold tracking-[0.25em] uppercase mb-1" style={{ color: tier.color }}>{tier.name}</p>
        <p className="text-4xl font-black text-white mb-6">{tier.price}</p>

        <ul className="space-y-3 flex-1 mb-7">
          {tier.perks.map((perk, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
              <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: tier.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {perk}
            </li>
          ))}
        </ul>

        {status === "success" ? (
          <div className="flex items-center gap-2 justify-center py-3 text-green-400 text-sm font-mono">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {label("Demande envoyée ! Nous vous contacterons sous 48h.", "Request sent! We'll reach out within 48h.")}
          </div>
        ) : (
          <>
            <button
              className="w-full text-center py-2.5 rounded-lg text-sm font-black tracking-widest uppercase transition-opacity hover:opacity-80 mb-0"
              style={{ background: tier.color, color: "#07091a" }}
              onClick={() => setOpen((o) => !o)}
            >
              {open
                ? label("Annuler", "Cancel")
                : label("Devenir partenaire", "Become a partner")}
            </button>

            {open && (
              <form onSubmit={handleSubmit} className="mt-5 space-y-3 border-t border-[#2a3580]/40 pt-5">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">{label("Nom *", "Last name *")}</label>
                    <input required value={form.nom} onChange={set("nom")}
                      className="w-full px-3 py-2 rounded-lg bg-[#07091a] border border-[#2a3580] text-white text-sm focus:outline-none focus:border-[#4a6cf7]" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">{label("Prénom *", "First name *")}</label>
                    <input required value={form.prenom} onChange={set("prenom")}
                      className="w-full px-3 py-2 rounded-lg bg-[#07091a] border border-[#2a3580] text-white text-sm focus:outline-none focus:border-[#4a6cf7]" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">{label("E-mail *", "Email *")}</label>
                  <input required type="email" value={form.email} onChange={set("email")}
                    className="w-full px-3 py-2 rounded-lg bg-[#07091a] border border-[#2a3580] text-white text-sm focus:outline-none focus:border-[#4a6cf7]" />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">{label("Téléphone", "Phone")}</label>
                  <input type="tel" value={form.telephone} onChange={set("telephone")}
                    className="w-full px-3 py-2 rounded-lg bg-[#07091a] border border-[#2a3580] text-white text-sm focus:outline-none focus:border-[#4a6cf7]" />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">{label("Nom de l'entreprise *", "Company name *")}</label>
                  <input required value={form.entreprise} onChange={set("entreprise")}
                    className="w-full px-3 py-2 rounded-lg bg-[#07091a] border border-[#2a3580] text-white text-sm focus:outline-none focus:border-[#4a6cf7]" />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">{label("Site web", "Website")}</label>
                  <input type="url" value={form.website} onChange={set("website")} placeholder="https://"
                    className="w-full px-3 py-2 rounded-lg bg-[#07091a] border border-[#2a3580] text-white text-sm focus:outline-none focus:border-[#4a6cf7]" />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">{label("URL de votre logo", "Logo URL")}</label>
                  <input type="url" value={form.logo_url} onChange={set("logo_url")} placeholder="https://"
                    className="w-full px-3 py-2 rounded-lg bg-[#07091a] border border-[#2a3580] text-white text-sm focus:outline-none focus:border-[#4a6cf7]" />
                  <p className="text-[10px] text-slate-500 mt-1">{label("Lien direct vers votre logo (PNG ou SVG recommandé)", "Direct link to your logo (PNG or SVG recommended)")}</p>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">{label("Commentaires", "Comments")}</label>
                  <textarea value={form.commentaires} onChange={set("commentaires")} rows={3}
                    className="w-full px-3 py-2 rounded-lg bg-[#07091a] border border-[#2a3580] text-white text-sm focus:outline-none focus:border-[#4a6cf7] resize-none" />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs font-mono">{label("Erreur — réessayez.", "Error — please try again.")}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-2.5 rounded-lg text-sm font-black tracking-widest uppercase transition-opacity hover:opacity-80 disabled:opacity-50"
                  style={{ background: tier.color, color: "#07091a" }}
                >
                  {status === "sending" ? "..." : label("Envoyer ma demande", "Submit my request")}
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function Sponsors() {
  const { t, lang } = useLang();

  return (
    <section id="sponsors" className="py-24 px-4 bg-[#0d1035] relative overflow-hidden">
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

        {/* Why partner */}
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

        {/* Tier cards with inline forms */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <span className="text-[#7b9bff] text-xs font-mono tracking-[0.3em] uppercase mb-2 block">
              {t.sponsors.tiers_subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">{t.sponsors.tiers_title}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
            {(t.sponsors.tiers as Array<{ name: string; price: string; color: string; featured?: boolean; perks: string[] }>).map((tier) => (
              <TierCard key={tier.name} tier={tier} lang={lang} />
            ))}
          </div>
        </div>

        {/* Partner logos */}
        <div className="pt-12 border-t border-[#2a3580]/40">
          <p className="text-center text-xs text-slate-500 tracking-widest uppercase mb-8">
            Nos partenaires
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="https://yottasec.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <Image src="/sponsors/yottasec.png" alt="YottaSec" width={160} height={42} className="object-contain" />
            </a>
            <a href="https://tekap.ca" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <Image src="/sponsors/tekap.png" alt="TEKAP" width={140} height={42} className="object-contain" />
            </a>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-32 h-14 rounded border border-dashed border-[#2a3580]/30 flex items-center justify-center opacity-20">
                <span className="text-xs text-slate-600">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
