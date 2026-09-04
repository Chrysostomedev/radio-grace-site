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
        content={`Radio Grâce-Espoir est une webradio créée le 25 mars 2020 par l'Association Grâce-Espoir. Notre mission est d'être la voix de l'Espoir à travers la diffusion quotidienne de contenus spirituels, d'enseignements bibliques et de prières.\n\nDepuis sa création, Radio Grâce-Espoir a su toucher des milliers d'âmes à travers le monde francophone, offrant un espace de réconfort, d'apprentissage et d'inspiration spirituelle.\n\nNotre engagement est de rester fidèles à nos valeurs fondamentales : l'amour du prochain, le partage de la Parole de Dieu, et l'action caritative au service de la communauté.`}
        image="/img/emis2.jpg"
      />

      {/* Citation Père Attobra */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <QuoteCard
          quote="Nous croyons que chaque personne mérite d'entendre la Parole de Dieu et de recevoir l'amour infini du Seigneur. C'est pourquoi Radio Grâce-Espoir existe — pour être cette voix d'espoir dans les moments de doute."
          author="Père Attobra"
          role="Directeur Général de Radio Grâce-Espoir"
          image="/img/emis2.jpg"
        />
      </section>

      {/* Nos Valeurs */}
      <ValuesSection />

      {/* Équipe */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-[#FAF9F6] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004D20] mb-3 tracking-tight">
              Notre Équipe
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Des personnes dévouées travaillant ensemble pour apporter l'espoir et la lumière de la foi à travers nos ondes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Carte 1 - Directeur */}
            <div className="group h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200/80 h-full flex flex-col">
                <div className="relative w-full h-56 bg-gradient-to-br from-[#004D20] to-[#002C13] overflow-hidden">
                  <img 
                    src="/img/pere.jpg" 
                    alt="Père Attobra" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002C13]/80 via-transparent to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-extrabold text-[#004D20] text-lg leading-snug">Père Attobra</h4>
                    <p className="text-sm text-[#CA8A04] font-bold mt-1">Directeur Général</p>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    Visionnaire spirituel et leader de la communauté Grâce-Espoir.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 2 - Animateur */}
            <div className="group h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200/80 h-full flex flex-col">
                <div className="relative w-full h-56 bg-gradient-to-br from-[#004D20] to-[#002C13] overflow-hidden">
                  <img 
                    src="/img/actu (5).jpg" 
                    alt="Animateur" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002C13]/80 via-transparent to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-extrabold text-[#004D20] text-lg leading-snug">Assalé David</h4>
                    <p className="text-sm text-[#CA8A04] font-bold mt-1">Animateur Principal</p>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    La voix incontournable de nos matinales spirituelles et inspiratrices.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 3 - Responsable Contenu */}
            <div className="group h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200/80 h-full flex flex-col">
                <div className="relative w-full h-56 bg-gradient-to-br from-[#004D20] to-[#002C13] overflow-hidden">
                  <img 
                    src="/img/emis2.jpg" 
                    alt="Responsable Contenu" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002C13]/80 via-transparent to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-extrabold text-[#004D20] text-lg leading-snug">Elvire Kadio</h4>
                    <p className="text-sm text-[#CA8A04] font-bold mt-1">Responsable Contenu</p>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    Crée et produit les contenus spirituels et éducatifs de qualité.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 4 - Coordinateur Technique */}
            <div className="group h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200/80 h-full flex flex-col">
                <div className="relative w-full h-56 bg-gradient-to-br from-[#004D20] to-[#002C13] overflow-hidden">
                  <img 
                    src="/img/onboard.jpg" 
                    alt="Coordinateur Technique" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002C13]/80 via-transparent to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-extrabold text-[#004D20] text-lg leading-snug">Jean-Marc Koffi</h4>
                    <p className="text-sm text-[#CA8A04] font-bold mt-1">Coordinateur Technique</p>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    Assure la qualité technique et la continuité de nos diffusions.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 5 - Responsable Communauté */}
            <div className="group h-full sm:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200/80 h-full flex flex-col">
                <div className="relative w-full h-56 bg-gradient-to-br from-[#004D20] to-[#002C13] overflow-hidden">
                  <img 
                    src="/img/hero1.jpg" 
                    alt="Responsable Communauté" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002C13]/80 via-transparent to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-extrabold text-[#004D20] text-lg leading-snug">Marie Kouassi</h4>
                    <p className="text-sm text-[#CA8A04] font-bold mt-1">Communauté & Engagements</p>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    Bâtit et renforce les liens avec notre communauté d'auditeurs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#004D20]/5 to-[#CA8A04]/5 border border-slate-200/80 text-center">
            <p className="text-slate-700 text-sm leading-relaxed">
              <span className="font-bold text-[#004D20]">Une équipe d'exception</span> au service de la foi et de l'espoir.
              Chaque membre apporte son expertise et sa passion pour la mission de Radio Grâce-Espoir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}