"use client";
import { useState, FormEvent } from "react";

const SESSIONS = [
  "Cérémonie d'ouverture & allocutions",
  "De la souveraineté numérique à la souveraineté architecturale — Christian Kengne",
  "Des données aux décisions — Olivier Gaston",
  "Régulation, éthique et confiance — Nourhene Ben Youssef",
  "L'ère quantique — Mike Arbrouet",
  "Réponse aux incidents — Valentin Bromont & Jean-François Brouillette",
];

const TOPICS = [
  "IA & cybersécurité",
  "Gouvernance & conformité",
  "Réponse aux incidents",
  "Informatique quantique",
  "Sécurité infonuagique",
  "Carrières en cybersécurité",
  "Ateliers pratiques / CTF",
  "Souveraineté numérique",
];

const ROLES = [
  "Étudiant(e)",
  "Professionnel(le) TI",
  "Spécialiste en cybersécurité",
  "Gestionnaire / Direction",
  "Chercheur(e) / Académique",
  "Autre",
];

const HEARD = [
  "Réseaux sociaux",
  "Bouche-à-oreille",
  "Réseau professionnel",
  "Courriel",
  "Autre",
];

export default function SurveyPage() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [bestSession, setBestSession] = useState("");
  const [takeaway, setTakeaway] = useState("");
  const [topics, setTopics] = useState<string[]>([]);
  const [role, setRole] = useState("");
  const [heard, setHeard] = useState("");
  const [attendAgain, setAttendAgain] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  function toggleTopic(t: string) {
    setTopics((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, bestSession, takeaway, topics, role, heard, attendAgain, suggestion }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#07091a] px-4">
        <div className="text-center max-w-md">
          <div className="text-7xl mb-6">🙏</div>
          <h1 className="text-3xl font-black text-white mb-3">Merci !</h1>
          <p className="text-slate-400 text-lg">Votre rétroaction nous aide à améliorer Tainos Cyber Con chaque année.</p>
          <p className="text-slate-500 text-sm mt-4">Thank you for your feedback.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07091a] px-4 py-12">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-[9px] font-black tracking-[0.5em] text-[#7b9bff] uppercase mb-3">Tainos Cyber Con 2026</div>
          <h1 className="text-4xl font-black text-white mb-2">Votre avis compte</h1>
          <p className="text-slate-400">Sondage anonyme · 2 minutes · <span className="text-slate-500">Anonymous survey</span></p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Q1 — Star rating */}
          <div className="bg-[#0f1240]/60 border border-[#2a3580]/50 rounded-2xl p-6">
            <label className="block text-sm font-black tracking-wider text-[#7b9bff] uppercase mb-1">01</label>
            <p className="text-white font-bold text-lg mb-1">Comment évaluez-vous l'événement ?</p>
            <p className="text-slate-500 text-xs mb-4">How would you rate the overall event?</p>
            <div className="flex gap-3 justify-center">
              {[1, 2, 3, 4, 5].map((s) => (
                <button key={s} type="button"
                  onClick={() => setRating(s)}
                  onMouseEnter={() => setHoverRating(s)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="text-4xl transition-transform hover:scale-110 focus:outline-none">
                  {s <= (hoverRating || rating) ? "★" : "☆"}
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-xs text-slate-400 mt-2">
                {["", "Décevant", "Passable", "Bien", "Très bien", "Excellent !"][rating]}
              </p>
            )}
          </div>

          {/* Q2 — Best session */}
          <div className="bg-[#0f1240]/60 border border-[#2a3580]/50 rounded-2xl p-6">
            <label className="block text-sm font-black tracking-wider text-[#7b9bff] uppercase mb-1">02</label>
            <p className="text-white font-bold text-lg mb-1">Quelle conférence vous a le plus marqué(e) ?</p>
            <p className="text-slate-500 text-xs mb-4">Which session stood out the most?</p>
            <div className="space-y-2">
              {SESSIONS.map((s) => (
                <label key={s} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-colors ${bestSession === s ? "border-[#4a6cf7] bg-[#4a6cf7]/10" : "border-[#2a3580]/40 hover:border-[#2a3580]"}`}>
                  <input type="radio" name="session" value={s} checked={bestSession === s} onChange={() => setBestSession(s)} className="sr-only" />
                  <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${bestSession === s ? "border-[#4a6cf7] bg-[#4a6cf7]" : "border-slate-500"}`} />
                  <span className="text-sm text-slate-300">{s}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q3 — Main takeaway */}
          <div className="bg-[#0f1240]/60 border border-[#2a3580]/50 rounded-2xl p-6">
            <label className="block text-sm font-black tracking-wider text-[#7b9bff] uppercase mb-1">03</label>
            <p className="text-white font-bold text-lg mb-1">Quel est votre principal apprentissage d'aujourd'hui ?</p>
            <p className="text-slate-500 text-xs mb-4">What's your main takeaway from today?</p>
            <textarea
              value={takeaway}
              onChange={(e) => setTakeaway(e.target.value)}
              rows={3}
              placeholder="Ex: J'ai découvert l'importance de la souveraineté numérique..."
              className="w-full px-4 py-3 rounded-xl bg-[#07091a] border border-[#2a3580] text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#4a6cf7] transition-colors resize-none"
            />
          </div>

          {/* Q4 — Topics for next year */}
          <div className="bg-[#0f1240]/60 border border-[#2a3580]/50 rounded-2xl p-6">
            <label className="block text-sm font-black tracking-wider text-[#7b9bff] uppercase mb-1">04</label>
            <p className="text-white font-bold text-lg mb-1">Quels sujets souhaitez-vous voir l'an prochain ?</p>
            <p className="text-slate-500 text-xs mb-4">What topics would you like to see next year? (choose all that apply)</p>
            <div className="grid grid-cols-2 gap-2">
              {TOPICS.map((t) => (
                <label key={t} className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer border transition-colors ${topics.includes(t) ? "border-[#c03880] bg-[#c03880]/10" : "border-[#2a3580]/40 hover:border-[#2a3580]"}`}>
                  <input type="checkbox" checked={topics.includes(t)} onChange={() => toggleTopic(t)} className="sr-only" />
                  <span className={`w-4 h-4 rounded flex-shrink-0 border-2 flex items-center justify-center text-[10px] ${topics.includes(t) ? "border-[#c03880] bg-[#c03880] text-white" : "border-slate-500"}`}>
                    {topics.includes(t) && "✓"}
                  </span>
                  <span className="text-xs text-slate-300">{t}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q5 — Role */}
          <div className="bg-[#0f1240]/60 border border-[#2a3580]/50 rounded-2xl p-6">
            <label className="block text-sm font-black tracking-wider text-[#7b9bff] uppercase mb-1">05</label>
            <p className="text-white font-bold text-lg mb-1">Votre parcours professionnel ?</p>
            <p className="text-slate-500 text-xs mb-4">Your professional background?</p>
            <div className="grid grid-cols-2 gap-2">
              {ROLES.map((r) => (
                <label key={r} className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer border transition-colors ${role === r ? "border-[#4a6cf7] bg-[#4a6cf7]/10" : "border-[#2a3580]/40 hover:border-[#2a3580]"}`}>
                  <input type="radio" name="role" value={r} checked={role === r} onChange={() => setRole(r)} className="sr-only" />
                  <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${role === r ? "border-[#4a6cf7] bg-[#4a6cf7]" : "border-slate-500"}`} />
                  <span className="text-xs text-slate-300">{r}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q6 — How did you hear */}
          <div className="bg-[#0f1240]/60 border border-[#2a3580]/50 rounded-2xl p-6">
            <label className="block text-sm font-black tracking-wider text-[#7b9bff] uppercase mb-1">06</label>
            <p className="text-white font-bold text-lg mb-1">Comment avez-vous entendu parler de nous ?</p>
            <p className="text-slate-500 text-xs mb-4">How did you hear about Tainos Cyber Con?</p>
            <div className="flex flex-wrap gap-2">
              {HEARD.map((h) => (
                <button key={h} type="button" onClick={() => setHeard(h)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${heard === h ? "border-[#4a6cf7] bg-[#4a6cf7] text-white" : "border-[#2a3580]/60 text-slate-400 hover:border-[#2a3580]"}`}>
                  {h}
                </button>
              ))}
            </div>
          </div>

          {/* Q7 — Attend again */}
          <div className="bg-[#0f1240]/60 border border-[#2a3580]/50 rounded-2xl p-6">
            <label className="block text-sm font-black tracking-wider text-[#7b9bff] uppercase mb-1">07</label>
            <p className="text-white font-bold text-lg mb-1">Reviendrez-vous l'an prochain ?</p>
            <p className="text-slate-500 text-xs mb-4">Would you attend again next year?</p>
            <div className="flex gap-3">
              {[["Oui ✅", "oui"], ["Peut-être 🤔", "maybe"], ["Non ❌", "non"]].map(([label, val]) => (
                <button key={val} type="button" onClick={() => setAttendAgain(val)}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold border transition-colors ${attendAgain === val ? "border-[#4a6cf7] bg-[#4a6cf7]/20 text-white" : "border-[#2a3580]/40 text-slate-400 hover:border-[#2a3580]"}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Q8 — Suggestions */}
          <div className="bg-[#0f1240]/60 border border-[#2a3580]/50 rounded-2xl p-6">
            <label className="block text-sm font-black tracking-wider text-[#7b9bff] uppercase mb-1">08 — Optionnel</label>
            <p className="text-white font-bold text-lg mb-1">Suggestions d'amélioration ?</p>
            <p className="text-slate-500 text-xs mb-4">Any suggestions to improve the event?</p>
            <textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              rows={3}
              placeholder="Vos idées sont précieuses..."
              className="w-full px-4 py-3 rounded-xl bg-[#07091a] border border-[#2a3580] text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#4a6cf7] transition-colors resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-xs font-mono text-center">Erreur — veuillez réessayer.</p>
          )}

          <button type="submit" disabled={status === "sending" || rating === 0}
            className="w-full py-4 rounded-2xl font-black text-white text-lg tracking-wider uppercase transition-opacity disabled:opacity-40"
            style={{ background: "linear-gradient(135deg,#e84444,#c03880,#7b35b0)" }}>
            {status === "sending" ? "Envoi…" : "Soumettre mon sondage"}
          </button>

          <p className="text-center text-xs text-slate-600 pb-8">Réponses 100% anonymes · Aucune donnée personnelle collectée</p>
        </form>
      </div>
    </div>
  );
}
