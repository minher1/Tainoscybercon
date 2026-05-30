import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = "hello@tainoscybercon.com";
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY ?? "";

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  if (!TURNSTILE_SECRET) return true; // skip in dev if key not set
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: TURNSTILE_SECRET, response: token, remoteip: ip }),
  });
  const data = await res.json() as { success: boolean };
  return data.success;
}

function buildHtml(fields: Record<string, string>, formType: string): string {
  const brandGradient =
    "linear-gradient(135deg, #e84444 0%, #c03880 45%, #7b35b0 100%)";

  const rows = Object.entries(fields)
    .filter(([k]) => !k.startsWith("_") && k !== "honeypot")
    .map(
      ([key, val]) => `
      <tr>
        <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#9ca3af;
                   text-transform:uppercase;letter-spacing:0.1em;white-space:nowrap;
                   border-bottom:1px solid #1e2a5e;width:160px;vertical-align:top;">
          ${key}
        </td>
        <td style="padding:10px 16px;font-size:15px;color:#e8eaf6;
                   border-bottom:1px solid #1e2a5e;line-height:1.6;">
          ${String(val).replace(/\n/g, "<br>")}
        </td>
      </tr>`
    )
    .join("");

  const ts = new Date().toLocaleString("fr-CA", {
    timeZone: "America/Toronto",
    dateStyle: "long",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:'Segoe UI',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0"
             style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;
                    box-shadow:0 8px 40px rgba(0,0,0,0.25);">

        <!-- Header gradient bar -->
        <tr>
          <td style="background:${brandGradient};padding:0;height:6px;"></td>
        </tr>

        <!-- Logo + title header -->
        <tr>
          <td style="background:#07091a;padding:32px 40px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.25em;
                             color:#7b9bff;text-transform:uppercase;font-family:monospace;">
                    // TAINOS CYBER CON 2026
                  </p>
                  <h1 style="margin:6px 0 0;font-size:22px;font-weight:900;color:#ffffff;
                              letter-spacing:0.04em;text-transform:uppercase;">
                    ${formType}
                  </h1>
                </td>
                <td align="right" style="vertical-align:middle;">
                  <div style="width:48px;height:48px;border-radius:8px;
                              background:${brandGradient};
                              display:inline-flex;align-items:center;justify-content:center;
                              font-size:22px;line-height:1;">🛡️</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Timestamp bar -->
        <tr>
          <td style="background:#0d1035;padding:10px 40px;border-top:1px solid #1e2a5e;
                     border-bottom:1px solid #1e2a5e;">
            <p style="margin:0;font-size:11px;color:#6b7280;font-family:monospace;">
              ⏱ Reçu le ${ts} (HE)
            </p>
          </td>
        </tr>

        <!-- Form fields table -->
        <tr>
          <td style="background:#0d1035;padding:0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${rows}
            </table>
          </td>
        </tr>

        <!-- CTA strip -->
        <tr>
          <td style="background:#1c2460;padding:20px 40px;">
            <p style="margin:0;font-size:12px;color:#7b9bff;font-family:monospace;">
              Répondre directement à cet email pour contacter l'expéditeur.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#07091a;padding:24px 40px;border-top:1px solid #1e2a5e;">
            <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#ffffff;
                      letter-spacing:0.05em;text-transform:uppercase;">
              Tainos Cyber Con 2026
            </p>
            <p style="margin:0;font-size:11px;color:#6b7280;">
              29 août 2026 · Mascouche, QC ·
              <a href="https://tainoscybercon.com" style="color:#7b9bff;text-decoration:none;">
                tainoscybercon.com
              </a>
            </p>
          </td>
        </tr>

        <!-- Bottom gradient bar -->
        <tr>
          <td style="background:${brandGradient};padding:0;height:4px;"></td>
        </tr>

      </table>

      <p style="margin-top:16px;font-size:11px;color:#9ca3af;text-align:center;">
        Email automatique généré par tainoscybercon.com
      </p>
    </td></tr>
  </table>
</body>
</html>`;
}

const FORM_LABELS: Record<string, string> = {
  speaker: "Proposition de conférence",
  sponsor: "Demande de partenariat",
  contact: "Message de contact",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { _loadedAt, _gotcha, _formType = "contact", _turnstile, ...fields } = body;

    // Honeypot
    if (_gotcha) return NextResponse.json({ ok: true });

    // Time-trap
    if (_loadedAt && Date.now() - Number(_loadedAt) < 3000) {
      return NextResponse.json({ error: "Too fast" }, { status: 429 });
    }

    // Cloudflare Turnstile verification
    const ip = req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for") ?? "";
    const turnstileOk = await verifyTurnstile(_turnstile ?? "", ip);
    if (!turnstileOk) {
      return NextResponse.json({ error: "Turnstile failed" }, { status: 403 });
    }

    const label = FORM_LABELS[_formType] ?? "Soumission de formulaire";
    const replyTo = fields.email ?? undefined;

    const html = buildHtml(fields, label);

    const subjectParts: string[] = [label];
    if (fields.name) subjectParts.push(`— ${fields.name}`);
    if (fields.company) subjectParts.push(`(${fields.company})`);
    const subject = subjectParts.join(" ");

    const { error } = await resend.emails.send({
      from: "Tainos Cyber Con <no-reply@tainoscybercon.com>",
      to: TO,
      replyTo,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
