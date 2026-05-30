export const metadata = {
  title: "Politique de confidentialité — Tainos Cyber Con 2026",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#07091a] pt-28 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#7b9bff] block mb-3">
            Politique de confidentialité
          </span>
          <h1 className="text-4xl font-black text-white mb-4">
            Protection de vos données personnelles
          </h1>
          <p className="text-slate-400 text-sm">
            Dernière mise à jour : mai 2026 · Conforme à la Loi 25 (Québec)
          </p>
        </div>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Responsable du traitement</h2>
            <p>
              Tainos Cyber Con, dont le siège est situé à Mascouche (Québec), Canada, est responsable
              du traitement de vos données personnelles collectées via le site{" "}
              <a href="https://tainoscybercon.com" className="text-[#7b9bff] hover:underline">
                tainoscybercon.com
              </a>
              . Pour toute question : <a href="mailto:hello@tainoscybercon.com" className="text-[#7b9bff] hover:underline">hello@tainoscybercon.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Données collectées</h2>
            <p>Nous collectons les informations suivantes uniquement lorsque vous les soumettez volontairement via nos formulaires :</p>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-400">
              <li>Nom et prénom</li>
              <li>Adresse courriel</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Nom de l'organisation</li>
              <li>Informations professionnelles (pour les propositions de conférences)</li>
            </ul>
            <p className="mt-3">Nous ne collectons pas de données de paiement. Les transactions sont gérées par Eventbrite.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-400">
              <li>Répondre à vos demandes de partenariat ou de prise de parole</li>
              <li>Vous informer sur l'événement Tainos Cyber Con 2026</li>
              <li>Assurer la protection du site contre les soumissions automatisées (Cloudflare Turnstile)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Conservation des données</h2>
            <p>
              Vos données sont conservées pendant une durée maximale de 12 mois à compter de
              leur collecte, puis supprimées sauf obligation légale contraire.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Partage des données</h2>
            <p>
              Nous ne vendons ni ne louons vos données personnelles à des tiers. Elles peuvent
              être partagées avec nos prestataires de services techniques (Resend pour l'envoi
              de courriels, Cloudflare pour la sécurité) dans la stricte mesure nécessaire à la
              fourniture de nos services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Vos droits (Loi 25 / LPRPDE)</h2>
            <p>Conformément à la législation québécoise et canadienne, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-400">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (« droit à l'oubli »)</li>
              <li>Droit de retirer votre consentement à tout moment</li>
              <li>Droit de déposer une plainte auprès de la Commission d'accès à l'information du Québec</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, écrivez-nous à{" "}
              <a href="mailto:hello@tainoscybercon.com" className="text-[#7b9bff] hover:underline">
                hello@tainoscybercon.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Cookies et technologies similaires</h2>
            <p>
              Ce site n'utilise pas de cookies de traçage ou publicitaires. Cloudflare Turnstile
              peut déposer un cookie fonctionnel temporaire pour la protection contre les robots.
              Aucune donnée n'est partagée à des fins publicitaires.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Modifications</h2>
            <p>
              Cette politique peut être mise à jour périodiquement. La date de dernière
              modification est indiquée en haut de cette page. En continuant à utiliser notre
              site, vous acceptez les modifications apportées.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-[#2a3580]/40">
          <a href="/" className="text-sm text-[#7b9bff] hover:text-white transition-colors font-mono">
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}
