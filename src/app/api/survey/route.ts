import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { rating, bestSession, takeaway, topics, role, heard, attendAgain, suggestion } = body;

    if (!rating) return NextResponse.json({ error: "rating required" }, { status: 400 });

    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
    const html = `
      <h2>📊 Nouveau sondage — Tainos Cyber Con 2026</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%">
        <tr><td><strong>Évaluation</strong></td><td>${stars} (${rating}/5)</td></tr>
        <tr><td><strong>Meilleure conférence</strong></td><td>${bestSession || "—"}</td></tr>
        <tr><td><strong>Principal apprentissage</strong></td><td>${takeaway || "—"}</td></tr>
        <tr><td><strong>Sujets souhaités</strong></td><td>${topics?.join(", ") || "—"}</td></tr>
        <tr><td><strong>Profil</strong></td><td>${role || "—"}</td></tr>
        <tr><td><strong>Source</strong></td><td>${heard || "—"}</td></tr>
        <tr><td><strong>Reviendra l'an prochain</strong></td><td>${attendAgain || "—"}</td></tr>
        <tr><td><strong>Suggestions</strong></td><td>${suggestion || "—"}</td></tr>
      </table>
    `;

    await resend.emails.send({
      from: "sondage@tainoscybercon.com",
      to: "info@tainoscybercon.com",
      subject: `[Sondage] ${stars} — Tainos Cyber Con 2026`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
