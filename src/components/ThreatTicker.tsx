"use client";

const THREATS = [
  "CVE-2025-1337 · RCE critique · Patch disponible",
  "Ransomware LockBit 4.0 · Nouvelles variantes détectées",
  "Phishing ciblé · Secteur santé QC · Alerte active",
  "Zero-day OpenSSL · Exploit public · CVSS 9.8",
  "APT29 · Campagne active · Cibles gouvernementales",
  "Supply-chain attack · npm packages · 14M téléchargements",
  "MFA bypass · Techniques AiTM · Tendance 2026",
  "Cloud misconfig · S3 bucket exposé · 2.3M enregistrements",
  "MITM 5G · Attaques IMSI catcher · Montréal",
  "DDoS record · 4.2 Tbps · Atténué en 12 min",
];

export default function ThreatTicker() {
  return (
    <div className="w-full overflow-hidden border-y border-[#2a3580]/40 bg-[#07091a] py-2.5 relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#07091a] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#07091a] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          animation: "ticker 60s linear infinite",
          width: "max-content",
        }}
      >
        {[...THREATS, ...THREATS].map((t, i) => (
          <span key={i} className="flex items-center gap-3 text-xs font-mono">
            <span className="text-red-400 shrink-0">⚠</span>
            <span className="text-slate-200">{t}</span>
            <span className="text-[#2a3580]">|</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
