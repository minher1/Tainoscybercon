import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tainos Cyber Con 2026",
  description:
    "La conférence internationale de cybersécurité — 29 août 2026, Mascouche QC",
  openGraph: {
    title: "Tainos Cyber Con 2026",
    description: "La cybersécurité à l'ère de l'IA, du cloud et des menaces persistantes",
    url: "https://tainoscybercon.com",
    siteName: "Tainos Cyber Con",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#07091a] text-slate-200">
        <LangProvider>{children}</LangProvider>

      </body>
    </html>
  );
}
