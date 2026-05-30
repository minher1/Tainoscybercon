import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#07091a",
          navy: "#0d1035",
          dark: "#111440",
          brand: "#1c2460",
          mid: "#252d7a",
          border: "#2a3580",
          white: "#ffffff",
          blue: "#4a6cf7",
          "blue-light": "#7b9bff",
          // Logo gradient palette
          coral: "#e84444",
          pink: "#c03880",
          violet: "#7b35b0",
          indigo: "#2d2b8e",
        },
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
        condensed: ["var(--font-barlow-condensed)", "var(--font-barlow)", "system-ui", "sans-serif"],
        mono: ["'Courier New'", "Courier", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(30,45,74,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,45,74,0.4) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(29,78,216,0.15) 0%, transparent 70%)",
        "gold-gradient": "linear-gradient(135deg, #d4a017 0%, #f59e0b 100%)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "scan-line": "scanLine 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
