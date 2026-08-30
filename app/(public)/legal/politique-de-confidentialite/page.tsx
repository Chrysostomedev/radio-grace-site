import { Shield, Database, Cookie, UserX, Lock, Mail, CalendarDays } from 'lucide-react';

const LAST_UPDATE = '29 août 2026';

function Section({ icon: Icon, title, children }: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-2xl border border-[#163A2C]/10 shadow-sm p-6 sm:p-8 mb-6">
      <h2 className="flex items-center gap-3 text-lg font-black text-[#163A2C] mb-4 pb-3 border-b border-[#F0A93E]/30">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0A93E]/15 text-[#F0A93E]">
          <Icon size={18} />
        </span>
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-[#163A2C]/80">
        {children}
      </div>
    </section>
  );
}

export default function PolitiqueConfidentialitePage() {
  return (
    <article className="prose-custom">
      {/* Dernière mise à jour */}
      <div className="flex items-center gap-2 text-xs font-bold text-[#163A2C]/60 mb-6 bg-[#F0A93E]/10 border border-[#F0A93E]/30 rounded-xl px-4 py-2.5 w-fit">
        <CalendarDays size={14} className="text-[#F0A93E]" />
        Dernière mise à jour : {LAST_UPDATE}
      </div>

      <p className="text-sm bg-white rounded-2xl border-l-4 border-[#F0A93E] p-5 mb-6 shadow-sm text-[#163A2C]/80 leading-relaxed">
        La présente politique de confidentialité décrit la manière dont <strong>Radio Grâce-Espoir</strong>
        {' '}collecte, utilise, stocke et protège vos données personnelles, conformément au
        {' '}<strong>Règlement Général sur la Protection des Données (RGPD)</strong> et à la loi
        {' '}n°2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel (Côte d&apos;Ivoire).
      </p>

      <Section icon={Database} title="1. Responsable du traitement">
        <p>
          Le responsable du traitement de vos données personnelles est :
        </p>
        <div className="bg-[#FBF6EA] rounded-xl p-4 text-sm border border-[#163A2C]/10">
          <p className="font-bold text-[#163A2C]">Radio Grâce-Espoir</p>
          <p>[Adresse complète du siège]</p>
          <p>Email : <a href="mailto:contact@grace-espoir.com" className="text-[#F0A93E] font-bold hover:underline">contact@grace-espoir.com</a></p>
          <p>Téléphone : [+225 XX XX XX XX XX]</p>
        </div>
      </Section>

      <Section icon={Database} title="2. Données que nous collectons">
        <p className="font-bold text-[#163A2C]">a) Données que vous nous fournissez :</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Compte utilisateur</strong> : nom, prénom, adresse email, mot de passe (chiffré) ;</li>
          <li><strong>Intentions de prière</strong> : contenu que vous soumettez volontairement ;</li>
          <li><strong>Messages de contact</strong> : email et contenu de votre message ;</li>
          <li><strong>Candidatures</strong> : CV et informations si vous postulez.</li>
        </ul>
        <p className="font-bold text-[#163A2C] pt-2">b) Données collectées automatiquement :</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Données techniques</strong> : adresse IP, type de navigateur, appareil, système d&apos;exploitation ;</li>
          <li><strong>Données d&apos;utilisation</strong> : pages visitées, durée d&apos;écoute, émissions consultées, interactions avec les publicités (nombre de clics) ;</li>
          <li><strong>Cookies</strong> : voir section 6.</li>
        </ul>
      </Section>

      <Section icon={Shield} title="3. Finalités et bases légales du traitement">
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-[#163A2C] text-[#FBF6EA]">
                <th className="text-left px-3 py-2.5 rounded-tl-lg">Finalité</th>
                <th className="text-left px-3 py-2.5">Base légale</th>
                <th className="text-left px-3 py-2.5 rounded-tr-lg">Durée de conservation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#163A2C]/10">
              <tr>
                <td className="px-3 py-2.5 font-semibold">Fournir le service d&apos;écoute et l&apos;accès au contenu</td>
                <td className="px-3 py-2.5">Exécution du contrat</td>
                <td className="px-3 py-2.5">Durée du compte</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 font-semibold">Gestion des intentions de prière</td>
                <td className="px-3 py-2.5">Consentement</td>
                <td className="px-3 py-2.5">12 mois</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 font-semibold">Envoi de newsletters / notifications</td>
                <td className="px-3 py-2.5">Consentement (révocable)</td>
                <td className="px-3 py-2.5">Jusqu&apos;au retrait</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 font-semibold">Mesure d&apos;audience et statistiques</td>
                <td className="px-3 py-2.5">Intérêt légitime</td>
                <td className="px-3 py-2.5">13 mois</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 font-semibold">Publicités ciblées / partenaires</td>
                <td className="px-3 py-2.5">Consentement</td>
                <td className="px-3 py-2.5">13 mois</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 font-semibold">Obligations légales</td>
                <td className="px-3 py-2.5">Obligation légale</td>
                <td className="px-3 py-2.5">Selon la loi applicable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section icon={UserX} title="4. Vos droits (RGPD)">
        <p>Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>✅ Droit d&apos;accès</strong> : obtenir la confirmation que vos données sont traitées et en recevoir une copie ;</li>
          <li><strong>✏️ Droit de rectification</strong> : faire corriger des données inexactes ;</li>
          <li><strong>🗑️ Droit à l&apos;effacement</strong> : demander la suppression de vos données (« droit à l&apos;oubli ») ;</li>
          <li><strong>📦 Droit à la portabilité</strong> : recevoir vos données dans un format structuré ;</li>
          <li><strong>🚫 Droit d&apos;opposition</strong> : vous opposer à un traitement, notamment pour la prospection ;</li>
          <li><strong>⏸️ Droit à la limitation</strong> : demander le gel temporaire d&apos;un traitement ;</li>
          <li><strong>⚰️ Droit de définir des directives</strong> relatives au sort de vos données après votre décès.</li>
        </ul>
        <div className="bg-[#F0A93E]/10 border border-[#F0A93E]/40 rounded-xl p-4 mt-3">
          <p className="font-bold text-[#163A2C] flex items-center gap-2">
            <Mail size={16} className="text-[#F0A93E]" />
            Exercer vos droits
          </p>
          <p className="mt-1">
            Adressez votre demande à <a href="mailto:dpo@grace-espoir.com" className="text-[#F0A93E] font-bold hover:underline">dpo@grace-espoir.com</a> ou par courrier postal.
            Nous répondons sous <strong>30 jours maximum</strong>. Vous pouvez également introduire une réclamation auprès de la
            {' '}<strong>CNIL</strong> (France) ou de l&apos;<strong>ARTCI</strong> (Côte d&apos;Ivoire).
          </p>
        </div>
      </Section>

      <Section icon={Cookie} title="5. Cookies et traceurs">
        <p>Nous utilisons les cookies suivants :</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Cookies essentiels</strong> (session, authentification, préférences audio) — <em>exemptés de consentement</em> ;</li>
          <li><strong>Cookies de mesure d&apos;audience</strong> (statistiques anonymisées) — soumis à consentement ;</li>
          <li><strong>Cookies publicitaires</strong> (mesure des clics sur les encarts partenaires) — soumis à consentement.</li>
        </ul>
        <p>
          Lors de votre première visite, un <strong>bandeau de consentement</strong> vous permet d&apos;accepter,
          refuser ou personnaliser ces cookies. Vous pouvez modifier votre choix à tout moment depuis
          le lien « Gérer les cookies » en bas de page.
        </p>
      </Section>

      <Section icon={Lock} title="6. Sécurité et sous-traitants">
        <p className="font-bold text-[#163A2C]">Sécurité :</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Chiffrement des communications (HTTPS/TLS) ;</li>
          <li>Mots de passe hachés (bcrypt) ;</li>
          <li>Accès restreints aux données personnelles (contrôle par rôles) ;</li>
          <li>Journaux d&apos;audit et sauvegardes régulières.</li>
        </ul>
        <p className="font-bold text-[#163A2C] pt-2">Sous-traitants et partenaires :</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Hébergeur</strong> : [Nom de l&apos;hébergeur, pays] ;</li>
          <li><strong>Diffusion audio</strong> : RadioKing (flux streaming) ;</li>
          <li><strong>Stockage d&apos;images</strong> : [Solution de stockage].</li>
        </ul>
        <p>Tous nos sous-traitants sont liés par des engagements contractuels de confidentialité et de conformité RGPD.</p>
      </Section>

      <Section icon={Mail} title="7. Contact">
        <p>
          Pour toute question relative à cette politique de confidentialité :
        </p>
        <ul className="list-disc pl-5">
          <li>Email : <a href="mailto:dpo@grace-espoir.com" className="text-[#F0A93E] font-bold hover:underline">dpo@grace-espoir.com</a></li>
          <li>Postal : [Adresse de la radio]</li>
        </ul>
      </Section>
    </article>
  );
}
