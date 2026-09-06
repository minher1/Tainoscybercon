"use client";
import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/context/LangContext";

const PHOTOS = [
  "/photos/recap/tainos.jpg",
  "/photos/recap/1788120940677.jpg",
  "/photos/recap/1788120940756.jpg",
  "/photos/recap/1788120942081.jpg",
  "/photos/recap/1788120942670.jpg",
  "/photos/recap/1788120944147.jpg",
  "/photos/recap/1788120945185.jpg",
  "/photos/recap/1788120945317.jpg",
  "/photos/recap/1788120945745.jpg",
  "/photos/recap/1788120946249.jpg",
  "/photos/recap/1788120946321.jpg",
  "/photos/recap/1788120946388.jpg",
  "/photos/recap/1788120949053.jpg",
  "/photos/recap/1788274259397.jpg",
  "/photos/recap/1788274259526.jpg",
  "/photos/recap/1788274259845.jpg",
  "/photos/recap/1788274263848.jpg",
  "/photos/recap/1788475303060.jpg",
  "/photos/recap/1788475303097.jpg",
  "/photos/recap/1788475303105.jpg",
  "/photos/recap/1788475303154.jpg",
  "/photos/recap/1788475303218.jpg",
  "/photos/recap/1788475303288.jpg",
  "/photos/recap/1788475303353.jpg",
  "/photos/recap/1788475303396.jpg",
  "/photos/recap/1788524878235.jpg",
  "/photos/recap/1788524878614.jpg",
  "/photos/recap/1788524878871.jpg",
  "/photos/recap/1788524879176.jpg",
  "/photos/recap/1788524879698.jpg",
  "/photos/recap/1788524879744.jpg",
  "/photos/recap/1788524879915.jpg",
  "/photos/recap/1788524880105.jpg",
];

const SPONSORS = [
  { name: "Les Ateliers Bromont", logo: "https://lesateliersbromont.ca/cdn/shop/files/LesAteliersBromont_2cdbb6bf-4cfc-449d-bed1-ac39af732ac4.svg?height=80&v=1772938029", url: "https://lesateliersbromont.ca" },
  { name: "YottaSec",             logo: "https://cdn.prod.website-files.com/67294090dd06d01abfca83b4/672943bd6393c2fc5a19375c_Logo-YoyyaSec-horizontal-couleur-xsmall-1.png", url: "https://yottasec.com" },
  { name: "TEKAP",                logo: "https://www.tekap.ca/_next/image?url=%2F_next%2Fstatic%2Fimmutable%2Fmedia%2Flogo_white.2emsvyojcdsi1.png&w=640&q=75", url: "https://tekap.ca" },
  { name: "First City Internet",  logo: "https://firstcityinternet.com/logo.png", url: "https://firstcityinternet.com" },
];

const SPEAKERS = [
  "Mike Arbrouet",
  "Valentin Bromont",
  "Jean-François Brouillette",
  "Christian Kengne",
  "Dr. Abdoul Karim Ganame",
  "Nourhene BenYoussef, Ph.D",
  "Olivier Gaston",
  "Alice A-Khalil",
  "Anglade Perrier",
  "Stéphane Gagnon, CISSP",
];

const STATS = [
  { n: "70+",  label: { fr: "Participants", en: "Attendees" } },
  { n: "10",   label: { fr: "Conférenciers", en: "Speakers" } },
  { n: "6",    label: { fr: "Conférences", en: "Sessions" } },
  { n: "4",    label: { fr: "Partenaires", en: "Partners" } },
];

export default function Recap() {
  const { lang } = useLang();
  const fr = lang === "fr";
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  function openLightbox(src: string) {
    const idx = PHOTOS.indexOf(src);
    setLightboxIdx(idx);
    setLightbox(src);
  }

  function navigate(dir: number) {
    const next = (lightboxIdx + dir + PHOTOS.length) % PHOTOS.length;
    setLightboxIdx(next);
    setLightbox(PHOTOS[next]);
  }

  return (
    <div className="bg-[#07091a]">

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-6 text-white/60 hover:text-white text-3xl font-light z-10" onClick={() => setLightbox(null)}>✕</button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl z-10 px-3"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}>‹</button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl z-10 px-3"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}>›</button>
          <div className="relative max-w-5xl max-h-[88vh] w-full h-full cursor-zoom-out" onClick={() => setLightbox(null)}>
            <Image src={lightbox} alt="Tainos Cyber Con 2026" fill className="object-contain" unoptimized />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono">
            {lightboxIdx + 1} / {PHOTOS.length}
          </div>
        </div>
      )}

      {/* ── Hero thank-you ── */}
      <section className="relative overflow-hidden py-24 px-4 text-center border-b border-[#2a3580]/40">
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "linear-gradient(rgba(74,108,247,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(74,108,247,0.6) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(192,56,128,0.12)_0%,transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c03880]/40 bg-[#c03880]/10 text-[#ff6eb0] text-xs font-mono tracking-[0.3em] uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#c03880] inline-block" />
            {fr ? "Tainos Cyber Con 2026 — terminé" : "Tainos Cyber Con 2026 — wrapped"}
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 leading-tight">
            {fr ? "Merci à vous." : "Thank you."}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed">
            {fr
              ? "Le 29 août dernier, Mascouche a vibré au rythme de la cybersécurité, de l'IA et du quantique. Remplir une salle un samedi matin, ça en dit long sur l'intérêt collectif pour ces enjeux."
              : "On August 29th, Mascouche came alive with cybersecurity, AI, and quantum. Filling a room on a Saturday morning speaks volumes about the collective interest in these issues."}
          </p>
          <p className="text-sm text-slate-500 italic max-w-xl mx-auto mb-10">
            {fr
              ? "« La conférence est terminée, mais les discussions et les collaborations qui en sont nées ne font que commencer. »"
              : "\"The conference is over, but the conversations and collaborations it sparked are just beginning.\""}
          </p>
          <a href="/survey"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm tracking-wider uppercase text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#e84444,#c03880,#7b35b0)" }}>
            {fr ? "Partagez votre avis" : "Share your feedback"} →
          </a>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 px-4 border-b border-[#2a3580]/30">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.n} className="text-center">
              <div className="text-5xl font-black mb-1"
                style={{ background: "linear-gradient(135deg,#e84444,#c03880)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {s.n}
              </div>
              <div className="text-slate-400 text-sm font-semibold tracking-wide">{s.label[lang]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Photo gallery ── */}
      <section className="py-16 px-4 border-b border-[#2a3580]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-2 text-center">
            {fr ? "La journée en images" : "The day in pictures"}
          </h2>
          <p className="text-slate-500 text-sm text-center mb-10">Mascouche, QC · 29 août 2026</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {PHOTOS.map((src) => (
              <button key={src} onClick={() => openLightbox(src)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0f1240] group cursor-zoom-in focus:outline-none">
                <Image src={src} alt="Tainos Cyber Con 2026" fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-2xl drop-shadow-lg">⛶</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Thank-you breakdown ── */}
      <section className="py-16 px-4 border-b border-[#2a3580]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-10 text-center">
            {fr ? "Merci à chacun d'entre vous" : "Thank you to each of you"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: "🏛️", title: fr ? "Nos élus" : "Elected officials",
                body: fr ? "Anny Mailloux (Conseillère Municipale, Ville de Mascouche), Marie-Claude Turcotte-Farly (Ville de Mascouche) et le député Luc Thériault qui ont honoré cette journée de leur présence." : "Anny Mailloux (Municipal Councillor, Ville de Mascouche), Marie-Claude Turcotte-Farly (Ville de Mascouche), and MP Luc Thériault, who honoured the event with their presence." },
              { icon: "🎤", title: fr ? "Nos conférenciers" : "Our speakers",
                body: SPEAKERS.join(" · ") },
              { icon: "🙌", title: fr ? "Nos bénévoles & organisateurs" : "Volunteers & organizers",
                body: fr ? "Mike Arbrouet, Anglade Perrier et Blaise Arbouet, ainsi que toute l'équipe de bénévoles qui ont travaillé dans l'ombre pour que tout roule sans accroc — toujours avec le sourire, toujours au bon endroit." : "Mike Arbrouet, Anglade Perrier, and Blaise Arbouet, plus every volunteer who worked behind the scenes — always smiling, always in the right place at the right time." },
              { icon: "🎓", title: fr ? "La relève" : "The next generation",
                body: fr ? "Des étudiants et diplômés en gestion des risques de l'information de Polytechnique Montréal et de l'Université de Sherbrooke — la preuve que la relève en cybersécurité est bel et bien assurée." : "Students and graduates in information risk management from Polytechnique Montréal and Université de Sherbrooke — proof that the next generation of cybersecurity professionals is in good hands." },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-2xl border border-[#2a3580]/40 bg-[#0f1240]/40">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="text-white font-black text-lg mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sponsors ── */}
      <section className="py-16 px-4 border-b border-[#2a3580]/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">💜</div>
          <h2 className="text-3xl font-black text-white mb-3">
            {fr ? "Merci à nos partenaires" : "Thank you to our partners"}
          </h2>
          <p className="text-slate-400 text-base mb-12 max-w-xl mx-auto">
            {fr
              ? "Organisé par YottaSec en collaboration avec TEKAP Consulting. Leur confiance et leur soutien contribuent année après année à faire grandir Tainos CyberCon."
              : "Organized by YottaSec in collaboration with TEKAP Consulting. Their trust and support help Tainos CyberCon grow year after year."}
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

      {/* ── 2027 teaser ── */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(74,108,247,0.1)_0%,transparent_70%)]" />
        <div className="relative max-w-2xl mx-auto">
          <p className="text-[#7b9bff] text-xs font-mono tracking-[0.4em] uppercase mb-6">
            {fr ? "// prochaine édition" : "// next edition"}
          </p>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Tainos Cyber Con{" "}
            <span style={{ background: "linear-gradient(135deg,#e84444,#c03880,#7b35b0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              2027
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            {fr
              ? "Le comité organisateur vous tiendra informé des activités avant la prochaine édition. Restez à l'affût ! 🚀"
              : "The organizing committee will keep you informed of upcoming activities before the next edition. Stay tuned! 🚀"}
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
