export const metadata = {
  title: "Conditions d'utilisation — Tainos Cyber Con 2026",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#07091a] pt-28 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#7b9bff] block mb-3">
            Conditions générales
          </span>
          <h1 className="text-4xl font-black text-white mb-4">
            Conditions d'utilisation & Code de conduite
          </h1>
          <p className="text-slate-400 text-sm">Dernière mise à jour : mai 2026</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed text-sm">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptation des conditions</h2>
            <p>En accédant au site tainoscybercon.com et en vous inscrivant à l'événement Tainos Cyber Con 2026, vous acceptez les présentes conditions d'utilisation et le code de conduite. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site ni participer à l'événement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Billetterie et remboursements</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Les billets sont vendus via Eventbrite. Les transactions sont soumises aux conditions d'Eventbrite.</li>
              <li>Les billets sont remboursables jusqu'à <strong className="text-white">30 jours avant l'événement</strong> (29 juillet 2026).</li>
              <li>Passé ce délai, les billets peuvent être transférés à une autre personne — contactez-nous à hello@tainoscybercon.com.</li>
              <li>En cas d'annulation de l'événement par les organisateurs, un remboursement intégral sera effectué.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Code de conduite</h2>
            <p className="mb-3">Tainos Cyber Con s'engage à offrir un environnement inclusif, respectueux et professionnel pour tous les participants, conférenciers, partenaires et bénévoles.</p>
            <p className="font-semibold text-white mb-2">Comportements inacceptables :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Harcèlement sous toute forme (verbal, physique, écrit ou en ligne)</li>
              <li>Discrimination basée sur le genre, l'origine, la religion, l'orientation sexuelle ou le handicap</li>
              <li>Perturbation délibérée des sessions ou activités</li>
              <li>Comportements menaçants ou intimidants</li>
            </ul>
            <p className="mt-3">Tout participant ne respectant pas ce code pourra être exclu de l'événement sans remboursement.</p>
            <p className="mt-2">Pour signaler un incident : <a href="mailto:hello@tainoscybercon.com" className="text-[#7b9bff] hover:underline">hello@tainoscybercon.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Droit à l'image</h2>
            <p>Des photos et vidéos seront prises lors de l'événement à des fins de documentation et de promotion. En participant, vous consentez à ce que votre image puisse apparaître dans ces médias. Si vous souhaitez vous y opposer, informez-nous à l'accueil le jour de l'événement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Propriété intellectuelle</h2>
            <p>Les présentations et contenus des conférenciers leur appartiennent. La reproduction ou diffusion sans autorisation expresse est interdite. Le contenu du site tainoscybercon.com (logo, textes, design) appartient à Tainos Cyber Con.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Limitation de responsabilité</h2>
            <p>Tainos Cyber Con ne saurait être tenu responsable des dommages directs ou indirects résultant de la participation à l'événement, de l'utilisation du site, ou de la perte ou vol d'effets personnels lors de l'événement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Modifications</h2>
            <p>Tainos Cyber Con se réserve le droit de modifier ces conditions à tout moment. Les participants seront informés des changements significatifs par courriel.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact</h2>
            <p>Pour toute question : <a href="mailto:hello@tainoscybercon.com" className="text-[#7b9bff] hover:underline">hello@tainoscybercon.com</a> · 1-877-895-5859</p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-[#2a3580]/40 flex gap-6">
          <a href="/" className="text-sm text-[#7b9bff] hover:text-white transition-colors font-mono">← Retour à l'accueil</a>
          <a href="/privacy" className="text-sm text-[#7b9bff] hover:text-white transition-colors font-mono">Politique de confidentialité</a>
        </div>
      </div>
    </div>
  );
}
