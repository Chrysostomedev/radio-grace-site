import { Building2, User, Server, Copyright, Gavel, Mail } from 'lucide-react';

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

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-[#163A2C]/5 last:border-0">
      <span className="text-xs font-black uppercase tracking-wider text-[#163A2C]/50 sm:w-48 shrink-0">
        {label}
      </span>
      <span className="font-semibold text-[#163A2C]">{value}</span>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <article>
      <Section icon={Building2} title="1. Éditeur du site">
        <div className="bg-[#FBF6EA] rounded-xl px-4 py-2 border border-[#163A2C]/10">
          <InfoRow label="Dénomination" value="Radio Grâce-Espoir" />
          {/* <InfoRow label="Forme juridique" value="[Association loi 1901 / SARL — à compléter]" /> */}
          <InfoRow label="Siège social" value="Abidjan, Yopougon, Cité Aboulaye Diallo" />
          {/* <InfoRow label="SIREN / RCCM" value="[Numéro d'enregistrement]" /> */}
          <InfoRow label="Téléphone" value="+225 07 79 37 98 38" />
          <InfoRow label="Email" value="contact@grace-espoir.com" />
          <InfoRow label="Directrice des programmes" value="Elvire Kadjo" />
        </div>
      </Section>

      {/* <Section icon={Server} title="2. Hébergement">
        <div className="bg-[#FBF6EA] rounded-xl px-4 py-2 border border-[#163A2C]/10">
          <InfoRow label="Hébergeur" value="[Nom de l'hébergeur]" />
          <InfoRow label="Adresse" value="[Adresse de l'hébergeur]" />
          <InfoRow label="Téléphone" value="[Téléphone de l'hébergeur]" />
        </div>
        <p className="text-xs text-[#163A2C]/50">
          Le flux audio est diffusé via RadioKing — <a href="https://www.radioking.com" target="_blank" rel="noreferrer" className="text-[#F0A93E] font-bold hover:underline">radioking.com</a>
        </p>
      </Section> */}

      <Section icon={Copyright} title="2. Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, articles, visuels, logos,
          enregistrements audio, podcasts, homélies, émissions) est la propriété exclusive de
          {' '}<strong>Radio Grâce-Espoir</strong> ou de ses partenaires, et est protégé par le droit
          d&apos;auteur et les droits voisins.
        </p>
        <p>
          Toute reproduction, représentation, modification ou diffusion, totale ou partielle,
          sans autorisation écrite préalable est <strong>interdite</strong> et constituerait une
          contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété
          intellectuelle (et la législation équivalente en Côte d&apos;Ivoire).
        </p>
        <p>
          <strong>Exception</strong> : le partage de nos contenus via les liens de partage est
          autorisé et encouragé . Les textes de l&apos;Évangile et citations liturgiques sont
          utilisés conformément aux usages pastoraux.
        </p>
      </Section>

      <Section icon={User} title="3. Données personnelles et cookies">
        <p>
          Le site collecte certaines données personnelles dans les conditions détaillées dans notre
          {' '}<a href="/legal/politique-de-confidentialite" className="text-[#F0A93E] font-bold hover:underline border-b border-[#F0A93E]/40">
            Politique de confidentialité
          </a>. Vous pouvez exercer vos droits à tout moment à l&apos;adresse
          {' '}<a href="mailto:dpo@grace-espoir.com" className="text-[#F0A93E] font-bold hover:underline">dpo@grace-espoir.com</a>.
        </p>
      </Section>

      <Section icon={Gavel} title="5. Conditions d'utilisation & responsabilité">
        <p className="font-bold text-[#163A2C]">Utilisation du site :</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Le site est accessible 24h/24, sauf cas de force majeure, maintenance ou interruption du flux ;</li>
          <li>Nous nous réservons le droit de faire évoluer, suspendre ou interrompre tout ou partie du service ;</li>
          <li>L&apos;utilisateur s&apos;engage à ne pas perturber le fonctionnement du site ni porter atteinte aux droits de tiers (commentaires, intentions de prière, messages).</li>
        </ul>
        <p className="font-bold text-[#163A2C] pt-2">Modération des contenus soumis :</p>
        <p>
          Les intentions de prière et messages soumis par les utilisateurs sont modérés avant
          publication. Tout contenu haineux, diffamatoire, contraire à la foi catholique ou à la
          loi sera refusé ou supprimé, et le compte concerné pourra être suspendu.
        </p>
        <p className="font-bold text-[#163A2C] pt-2">Liens externes :</p>
        <p>
          Les liens vers des sites tiers (notre application mobile, nos partenaires) sont fournis
          à titre d&apos;information. Radio Grâce-Espoir n&apos;exerce aucun contrôle sur ces sites
          et décline toute responsabilité quant à leur contenu.
        </p>
      </Section>

      <Section icon={Gavel} title="6. Droit applicable et litiges">
        <p>
          Les présentes mentions légales sont régies par le droit ivoirien .
          En cas de litige, et à défaut de résolution amiable, les tribunaux compétents seront saisis.
        </p>
      </Section>

      <Section icon={Mail} title="7. Contact">
        <p>
          Pour signaler un contenu, une erreur ou pour toute question juridique :
        </p>
        <ul className="list-disc pl-5">
          <li>Email : <a href="mailto:legal@grace-espoir.com" className="text-[#F0A93E] font-bold hover:underline">legal@grace-espoir.com</a></li>
        </ul>
      </Section>

     
    </article>
  );
}
