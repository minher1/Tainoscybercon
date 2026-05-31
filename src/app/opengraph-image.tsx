import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tainos Cyber Con 2026 — 29 août · Mascouche, QC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#07091a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient orb */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 400,
            background: "radial-gradient(ellipse, rgba(28,36,96,0.8) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Top gradient bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(135deg, #e84444 0%, #c03880 50%, #7b35b0 100%)",
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(74,108,247,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74,108,247,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, zIndex: 10 }}>
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 32,
            }}
          >
            <div style={{ height: 1, width: 48, background: "rgba(74,108,247,0.6)" }} />
            <span style={{ color: "#7b9bff", fontSize: 14, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700 }}>
              29 AOÛT 2026 · MASCOUCHE, QC
            </span>
            <div style={{ height: 1, width: 48, background: "rgba(74,108,247,0.6)" }} />
          </div>

          {/* Title */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 16 }}>
            <span style={{ fontSize: 96, fontWeight: 900, color: "#ffffff", letterSpacing: "-2px", lineHeight: 1 }}>
              TAINOS
            </span>
            <span
              style={{
                fontSize: 96,
                fontWeight: 900,
                letterSpacing: "-2px",
                lineHeight: 1,
                background: "linear-gradient(135deg, #7b9bff 0%, #4a6cf7 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              CYBER CON
            </span>
          </div>

          <div style={{ fontSize: 32, fontWeight: 900, color: "rgba(255,255,255,0.15)", letterSpacing: "0.35em", marginBottom: 40 }}>
            2026
          </div>

          {/* Tagline */}
          <p style={{ fontSize: 22, color: "#94a3b8", textAlign: "center", maxWidth: 700, lineHeight: 1.4, margin: 0 }}>
            La cybersécurité à l'ère de l'IA, du cloud et des menaces persistantes
          </p>
        </div>

        {/* Bottom pill */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            gap: 24,
          }}
        >
          {["📅 29 août 2026", "📍 Mascouche, QC", "🎟 CA$60"].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 20px",
                borderRadius: 999,
                border: "1px solid rgba(74,108,247,0.3)",
                background: "rgba(28,36,96,0.3)",
                color: "#cbd5e1",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Bottom gradient bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(135deg, #e84444 0%, #c03880 50%, #7b35b0 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
