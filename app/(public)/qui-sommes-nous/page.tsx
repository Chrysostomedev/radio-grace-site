/**
 * Page — Qui sommes-nous
 */

import { PageHero } from '@/components/sections/PageHero';
import { AboutSection } from '@/components/sections/AboutSection';
import { QuoteCard } from '@/components/cards/QuoteCard';
import { ValuesSection } from '@/components/sections/ValuesSection';

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* Page Hero */}
      <PageHero
        title="Qui sommes-nous ?"
        subtitle="Découvrez notre histoire et notre mission"
        image="/img/emis2.jpg"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Qui sommes-nous ?' },
        ]}
      />

      {/* Notre Histoire */}
      <AboutSection
        title="Notre Histoire"
        subtitle="Fondée sur l'Espoir et la Foi"
        content={`Radio Grâce-Espoir est une webradio créée le 25 mars 2020 par la Congrégation Grâce-Espoir. Notre mission est d'être la voix de l'Espoir à travers la diffusion quotidienne de contenu spirituel, d'enseignements bibliques et de prières.\n\nDepuis sa création, Radio Grâce-Espoir a su toucher des milliers d'âmes à travers le monde francophone, offrant un espace de réconfort, d'apprentissage et d'inspiration spirituelle.\n\nNotre engagement est de rester fidèles à nos valeurs fondamentales : l'amour du prochain, le partage de la Parole de Dieu, et l'action caritative au service de la communauté.`}
        image="/img/emis2.jpg"
      />

      {/* Citation Père Attobra */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <QuoteCard
          quote="Nous croyons que chaque personne mérite d'entendre la Parole de Dieu et de recevoir l'amour infini du Seigneur. C'est pourquoi Radio Grâce-Espoir existe — pour être cette voix d'espoir dans les moments de doute."
          author="Père Attobra"
          role="Directeur Général, Congrégation Grâce-Espoir"
          image="/img/emis2.jpg"
        />
      </section>

      {/* Nos Valeurs */}
      <ValuesSection />

      {/* Équipe */}
      <section className="py-16 px-4 bg-gradient-to-b from-white via-[#FAF9F6] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004D20] mb-8 text-center tracking-tight">
            Notre Équipe
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team member placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 text-center">
              <div className="w-full h-48 bg-gradient-to-br from-[#004D20] to-[#002C13] flex items-center justify-center text-white text-3xl">
                🎙️
              </div>
              <div className="p-5">
                <h4 className="font-bold text-[#004D20] text-lg">À définir</h4>
                <p className="text-sm text-[#CA8A04] font-medium">Rôle à définir</p>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-500 mt-8 text-sm italic font-medium">
            Les membres de notre équipe seront présentés très bientôt.
          </p>
        </div>
      </section>
    </div>
  );
}