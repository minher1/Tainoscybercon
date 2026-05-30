import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import BrandDefs from "@/components/BrandDefs";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tainoscybercon.com"),
  title: "Tainos Cyber Con 2026",
  description:
    "La conférence internationale de cybersécurité — 29 août 2026, Mascouche QC",
  icons: {
    icon: "/icon.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Tainos Cyber Con 2026",
    description: "La cybersécurité à l'ère de l'IA, du cloud et des menaces persistantes",
    url: "https://tainoscybercon.com",
    siteName: "Tainos Cyber Con",
    images: [{ url: "/logo.png", width: 800, height: 200 }],
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#07091a] text-slate-200">
        <BrandDefs />
        <LangProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LangProvider>

      </body>
    </html>
  );
}
