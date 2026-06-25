"use client";
import { useState, FormEvent } from "react";
import { useLang } from "@/context/LangContext";
import { Turnstile } from "@marsidev/react-turnstile";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export default function Newsletter() {
  const { lang } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _formType: "newsletter",
          _loadedAt: String(Date.now() - 5000),
          _turnstile: turnstileToken,
          "E-mail": email,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="py-16 px-4 bg-[#1c2460]/30 border-t border-[#2a3580]/40">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-xl font-black text-white mb-2">
          {lang === "fr" ? "Restez informé" : "Stay informed"}
        </h3>
        <p className="text-slate-300 text-sm mb-6">
          {lang === "fr"
            ? "Soyez parmi les premiers à recevoir le programme, les annonces de conférenciers et les offres spéciales."
            : "Be among the first to receive the program, speaker announcements, and special offers."}
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-3 text-green-400 font-mono text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {lang === "fr" ? "Inscription confirmée !" : "You're on the list!"}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={lang === "fr" ? "Votre adresse courriel" : "Your email address"}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-[#07091a] border border-[#2a3580] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#4a6cf7] transition-colors"
              />
              <button
                type="submit"
                disabled={status === "sending" || (!!SITE_KEY && !turnstileToken)}
                className="px-6 py-3 logo-gradient text-white font-bold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 shrink-0"
              >
                {status === "sending"
                  ? "..."
                  : lang === "fr" ? "S'inscrire" : "Subscribe"}
              </button>
            </div>
            {SITE_KEY && (
              <div className="flex justify-center">
                <Turnstile
                  siteKey={SITE_KEY}
                  onVerify={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken("")}
                  theme="dark"
                />
              </div>
            )}
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-xs font-mono mt-3">
            {lang === "fr" ? "Erreur — réessayez." : "Error — please try again."}
          </p>
        )}
      </div>
    </div>
  );
}
