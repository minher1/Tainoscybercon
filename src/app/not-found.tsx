import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#07091a] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Glitchy 404 */}
        <div className="mb-8">
          <span className="text-[10rem] font-black leading-none logo-gradient-text select-none glitch" data-text="404">
            404
          </span>
        </div>

        <h1 className="text-2xl font-black text-white mb-3">
          Page introuvable
        </h1>
        <p className="text-slate-400 text-sm mb-10 leading-relaxed">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.<br />
          <span className="text-slate-500">Page not found — the URL may have changed.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-8 py-3 logo-gradient text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:opacity-90 transition-opacity"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/tickets"
            className="px-8 py-3 border border-[#2a3580] text-slate-300 font-bold text-sm tracking-widest uppercase rounded-lg hover:border-[#4a6cf7] hover:text-white transition-all"
          >
            Acheter un billet
          </Link>
        </div>

        <p className="mt-12 text-xs font-mono text-slate-600">
          // TAINOS CYBER CON 2026 · tainoscybercon.com
        </p>
      </div>
    </div>
  );
}
