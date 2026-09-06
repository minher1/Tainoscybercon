"use client";
import { useLang } from "@/context/LangContext";

const SPONSORS = [
  { name: "Les Ateliers Bromont", logo: "https://lesateliersbromont.ca/cdn/shop/files/LesAteliersBromont_2cdbb6bf-4cfc-449d-bed1-ac39af732ac4.svg?height=80&v=1772938029", url: "https://lesateliersbromont.ca" },
  { name: "YottaSec",             logo: "https://cdn.prod.website-files.com/67294090dd06d01abfca83b4/672943bd6393c2fc5a19375c_Logo-YoyyaSec-horizontal-couleur-xsmall-1.png", url: "https://yottasec.com" },
  { name: "TEKAP",                logo: "https://www.tekap.ca/_next/image?url=%2F_next%2Fstatic%2Fimmutable%2Fmedia%2Flogo_white.2emsvyojcdsi1.png&w=640&q=75", url: "https://tekap.ca" },
  { name: "First City Internet",  logo: "https://firstcityinternet.com/logo.png", url: "https://firstcityinternet.com" },
];

const STATS = [
  { n: "200+", label: { fr: "Participants", en: "Attendees" } },
  { n: "6",    label: { fr: "Conférences", en: "Sessions" } },
  { n: "10+",  label: { fr: "Conférenciers", en: "Speakers" } },
  { n: "4",    label: { fr: "Partenaires", en: "Partners" } },
];

export default function Recap() {
  const { lang } = useLang();
  const fr = lang === "fr";

  return (
    <div className="bg-[#07091a]">

      {/* ── Hero thank-you banner ── */}
      <section className="relative overflow-hidden py-24 px-4 text-center border-b border-[#2a3580]/40">
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "linear-gradient(rgba(74,108,247,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(74,108,247,0.6) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(192,56,128,0.12)_0%,transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c03880]/40 bg-[#c03880]/10 text-[#ff6eb0] text-xs font-mono tracking-[0.3em] uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#c03880] animate-pulse inline-block" />
            {fr ? "Tainos Cyber Con 2026 — terminé" : "Tainos Cyber Con 2026 — wrapped"}
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 leading-tight">
            {fr ? "Merci à vous." : "Thank you."}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {fr
              ? "Tainos Cyber Con 2026, c'est bien plus qu'une journée de conférences réussie. C'est une équipe engagée, un public curieux, des intervenants passionnés — et des bénévoles exceptionnels qui ont tout rendu possible."
              : "Tainos Cyber Con 2026 was more than a successful day of talks. It was a committed team, a curious audience, passionate speakers — and exceptional volunteers who made it all happen."}
          </p>
          <a href="/survey"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm tracking-wider uppercase text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#e84444,#c03880,#7b35b0)" }}>
            {fr ? "Partagez votre avis" : "Share your feedback"}
            <span>→</span>
          </a>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 px-4 border-b border-[#2a3580]/30">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.n} className="text-center">
              <div className="text-5xl font-black text-white mb-1"
                style={{ background: "linear-gradient(135deg,#e84444,#c03880)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {s.n}
              </div>
              <div className="text-slate-400 text-sm font-semibold tracking-wide">{s.label[lang]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Photo gallery placeholder ── */}
      <section className="py-16 px-4 border-b border-[#2a3580]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-2 text-center">
            {fr ? "La journée en images" : "The day in pictures"}
          </h2>
          <p className="text-slate-500 text-sm text-center mb-10">
            {fr ? "Mascouche, QC · 29 août 2026" : "Mascouche, QC · August 29, 2026"}
          </p>
          {/* Photo grid — replace src with real photos when available */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl bg-[#0f1240]/80 border border-[#2a3580]/40 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#0d1035,#1a1060)" }}>
                <span className="text-slate-600 text-xs font-mono">📷 photo {i + 1}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 text-xs mt-4 font-mono">
            {fr ? "Photos à venir sur LinkedIn" : "Photos coming to LinkedIn"}
          </p>
        </div>
      </section>

      {/* ── Volunteers ── */}
      <section className="py-16 px-4 border-b border-[#2a3580]/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-6">🙌</div>
          <h2 className="text-3xl font-black text-white mb-4">
            {fr ? "Nos bénévoles" : "Our Volunteers"}
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            {fr
              ? "Ils ont travaillé dans l'ombre pour que tout roule sans accroc. Ce sont eux qui ont accueilli, orienté, rassuré et répondu présents à chaque besoin, toujours avec le sourire, toujours au bon endroit au bon moment. Leur dévouement a fait toute la différence."
              : "They worked behind the scenes so everything ran without a hitch — greeting, guiding, and supporting at every turn, always smiling, always in the right place at the right time. Their dedication made all the difference."}
          </p>
        </div>
      </section>

      {/* ── Sponsor thank-you ── */}
      <section className="py-16 px-4 border-b border-[#2a3580]/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-6">💜</div>
          <h2 className="text-3xl font-black text-white mb-3">
            {fr ? "Merci à nos partenaires" : "Thank you to our partners"}
          </h2>
          <p className="text-slate-400 text-base mb-12 max-w-xl mx-auto">
            {fr
              ? "Leur confiance et leur soutien contribuent année après année à faire grandir Tainos CyberCon."
              : "Their trust and support help Tainos CyberCon grow year after year."}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {SPONSORS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 px-6 py-8 rounded-2xl border border-[#2a3580]/40 bg-[#0f1240]/40 hover:border-[#4a6cf7]/60 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.logo} alt={s.name} className="max-h-10 max-w-[120px] object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                <span className="text-xs text-slate-500 font-semibold">{s.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Next year teaser ── */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(74,108,247,0.1)_0%,transparent_70%)]" />
        <div className="relative max-w-2xl mx-auto">
          <p className="text-[#7b9bff] text-xs font-mono tracking-[0.4em] uppercase mb-6">
            {fr ? "// prochaine édition" : "// next edition"}
          </p>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Tainos Cyber Con <span style={{ background: "linear-gradient(135deg,#e84444,#c03880,#7b35b0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>2027</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            {fr
              ? "L'aventure continue. Restez à l'affût pour la date et les détails de la prochaine édition."
              : "The adventure continues. Stay tuned for the date and details of next year's edition."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#newsletter"
              className="px-8 py-3.5 font-bold text-sm tracking-widest uppercase rounded-lg text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#e84444,#c03880,#7b35b0)" }}>
              {fr ? "Être notifié(e)" : "Get notified"}
            </a>
            <a href="https://www.linkedin.com/company/tainos-cybercon" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 border border-[#2a3580] text-slate-300 font-bold text-sm tracking-widest uppercase rounded-lg hover:border-[#4a6cf7] hover:text-white transition-colors">
              {fr ? "Suivre sur LinkedIn" : "Follow on LinkedIn"}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
