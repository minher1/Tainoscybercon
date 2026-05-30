"use client";
import { useState, FormEvent } from "react";

interface Field {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  options?: string[];
}

interface Props {
  fields: Field[];
  submitLabel: string;
  successMessage: string;
}

const FORMSPREE_URL = "https://formspree.io/f/xjgzdvaw";

export default function ContactForm({ fields, submitLabel, successMessage }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
        <div className="w-14 h-14 rounded-full bg-[#1c2460] border border-[#4a6cf7]/60 flex items-center justify-center">
          <svg className="w-7 h-7 text-[#7b9bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <p className="text-white font-bold">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((f) => (
        <div key={f.name}>
          <label className="block text-xs font-semibold text-slate-400 tracking-widest uppercase mb-1.5">
            {f.label}
          </label>
          {f.options ? (
            <select
              name={f.name}
              required={f.required}
              className="w-full px-4 py-3 rounded-lg bg-[#07091a] border border-[#2a3580] text-slate-200 text-sm focus:outline-none focus:border-[#4a6cf7] transition-colors appearance-none"
            >
              <option value="">—</option>
              {f.options.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          ) : f.type === "textarea" ? (
            <textarea
              name={f.name}
              required={f.required}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-[#07091a] border border-[#2a3580] text-slate-200 text-sm focus:outline-none focus:border-[#4a6cf7] transition-colors resize-none"
            />
          ) : (
            <input
              name={f.name}
              type={f.type ?? "text"}
              required={f.required}
              className="w-full px-4 py-3 rounded-lg bg-[#07091a] border border-[#2a3580] text-slate-200 text-sm focus:outline-none focus:border-[#4a6cf7] transition-colors"
            />
          )}
        </div>
      ))}

      {status === "error" && (
        <p className="text-red-400 text-xs">Une erreur est survenue. Réessayez ou écrivez-nous directement.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3.5 bg-[#1c2460] border border-[#4a6cf7] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#4a6cf7] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Envoi…" : submitLabel}
      </button>
    </form>
  );
}
