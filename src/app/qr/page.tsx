"use client";
export default function QRPage() {
  const url = "https://tainoscybercon.com/survey";
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&margin=10&data=${encodeURIComponent(url)}`;

  return (
    <>
      <style>{`
        @media print {
          body { margin: 0; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="no-print fixed top-4 right-4">
        <button onClick={() => window.print()}
          className="px-4 py-2 bg-[#4a6cf7] text-white text-sm font-bold rounded-lg">
          Imprimer
        </button>
      </div>

      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        fontFamily: "'Segoe UI', sans-serif",
      }}>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p style={{ fontSize: 13, letterSpacing: "0.3em", color: "#888", textTransform: "uppercase", marginBottom: 16 }}>
            Tainos Cyber Con 2026
          </p>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#07091a", marginBottom: 8 }}>
            Partagez votre avis !
          </h1>
          <p style={{ fontSize: 15, color: "#555", marginBottom: 32 }}>
            Scannez le code QR pour répondre au sondage anonyme
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={qr} alt="QR sondage" width={280} height={280}
            style={{ border: "3px solid #e5e7eb", borderRadius: 16, display: "block", margin: "0 auto 24px" }} />
          <p style={{ fontSize: 13, color: "#888", letterSpacing: "0.05em" }}>
            tainoscybercon.com/survey
          </p>
        </div>
      </div>
    </>
  );
}
