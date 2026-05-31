"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-[#0d1035] border border-[#2a3580] rounded-2xl shadow-2xl shadow-black/50 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-white text-sm font-semibold mb-1">🍪 Ce site utilise des cookies fonctionnels</p>
          <p className="text-slate-300 text-xs leading-relaxed">
            Nous utilisons Cloudflare Turnstile pour protéger nos formulaires contre les robots.
            Aucun cookie publicitaire ou de traçage n'est utilisé.{" "}
            <a href="/privacy" className="text-[#7b9bff] hover:underline">Politique de confidentialité</a>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-xs font-semibold text-slate-300 border border-[#2a3580] rounded-lg hover:border-slate-500 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-xs font-semibold text-white rounded-lg logo-gradient hover:opacity-90 transition-opacity"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
