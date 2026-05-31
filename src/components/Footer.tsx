"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";
import { TainoSun, BinaryStream } from "./Silhouettes";
import Newsletter from "./Newsletter";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/tainoscybercon",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/tainoscybercon/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@tainoscyber",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/tainoscybercon/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" className="border-t border-[#2a3580]/40 bg-[#07091a]">
      <Newsletter />
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="relative h-9 w-44 mb-4">
              <Image src="/logo.png" alt="Tainos Cyber Con" fill className="object-contain object-left" />
            </div>
            <p className="text-slate-300 text-xs leading-relaxed max-w-xs">
              La conférence internationale de cybersécurité de la Rive-Nord de Montréal.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-[#7b9bff] tracking-widest uppercase mb-4">
              {t.contact.title}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href={`tel:${t.contact.phone}`} className="hover:text-white transition-colors">
                  {t.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${t.contact.email}`} className="hover:text-white transition-colors">
                  {t.contact.email}
                </a>
              </li>
              <li className="text-slate-300">{t.contact.website}</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-bold text-[#7b9bff] tracking-widest uppercase mb-4">
              Réseaux sociaux
            </h4>
            <div className="flex gap-3 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg border border-[#2a3580] flex items-center justify-center text-slate-300 hover:border-[#4a6cf7]/60 hover:text-[#7b9bff] transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Previous edition */}
        <div className="py-6 border-t border-[#2a3580]/30 border-b mb-6">
          <p className="text-xs text-slate-400 text-center">
            {t.previous.title}: {t.previous.date} — &ldquo;{t.previous.theme}&rdquo;
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <TainoSun className="w-10 h-10 opacity-70" />
          <p className="text-center text-xs text-slate-400">{t.footer.copyright}</p>
          <div className="flex gap-4">
            <a href="/privacy" className="text-xs text-slate-400 hover:text-slate-200 transition-colors underline underline-offset-2">
              Politique de confidentialité
            </a>
            <a href="/terms" className="text-xs text-slate-400 hover:text-slate-200 transition-colors underline underline-offset-2">
              Conditions d'utilisation
            </a>
          </div>
          <BinaryStream className="w-40 opacity-30" />
        </div>
      </div>
    </footer>
  );
}
