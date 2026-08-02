'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Headphones, Radio } from 'lucide-react';

type Emission = {
  id: string;
  titre: string;
  sousTitre?: string;
  image: string;
  href?: string;
  horaires?: string;
};

const EMISSIONS: Emission[] = [
  {
    id: '1',
    titre: 'Louange Matinale',
    sousTitre: 'Réveil spirituel',
    image: '/img/pere.jpg',
    href: '/emissions/louange-matinale',
    horaires: '06h00',
  },
  {
    id: '2',
    titre: 'Parole Vivante',
    sousTitre: 'Enseignement',
    image: '/img/hero1.jpg',
    href: '/emissions/parole-vivante',
    horaires: '10h00',
  },
   {
    id: '5',
    titre: 'Gospel & Adoration',
    sousTitre: 'Musique sacrée',
    image: '/img/pere.jpg',
    href: '/emissions/gospel',
    horaires: '14h00',
  },
  {
    id: '6',
    titre: 'Prières du Soir',
    sousTitre: 'Communion',
    image: '/img/hero2.jpg',
    href: '/emissions/prieres-du-soir',
    horaires: '20h00',
  },
   {
    id: '7',
    titre: 'Louange Matinale',
    sousTitre: 'Réveil spirituel',
    image: '/img/pere.jpg',
    href: '/emissions/louange-matinale',
    horaires: '06h00',
  },
  {
    id: '8',
    titre: 'Jeunesse en Foi',
    sousTitre: 'Nouvelle génération',
    image: '/img/her.jpg',
    href: '/emissions/jeunesse',
    horaires: '16h00',
  },
  {
    id: '9',
    titre: 'Gospel & Adoration',
    sousTitre: 'Musique sacrée',
    image: '/img/pere.jpg',
    href: '/emissions/gospel',
    horaires: '14h00',
  },
  {
    id: '11',
    titre: 'Témoignages',
    sousTitre: 'Vies transformées',
    image: '/img/hero1.jpg',
    href: '/emissions/temoignages',
    horaires: '18h00',
  },
   {
    id: '10',
    titre: 'Louange Matinale',
    sousTitre: 'Réveil spirituel',
    image: '/img/pere.jpg',
    href: '/emissions/louange-matinale',
    horaires: '06h00',
  },
];

export function EmissionsCircleCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Fond doux */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBF6EA] via-white to-[#FBF6EA] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#CA8A04]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004D20]/10 text-[#004D20] text-[11px] font-black uppercase tracking-wider mb-3">
              <Radio className="w-3.5 h-3.5" />
              Grille des programmes
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001A0B] tracking-tight">
              Nos émissions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#163A2C]/60 max-w-md">
              Une programmation spirituelle riche, 24h/24 — glissez pour découvrir.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-2xl border border-[#004D20]/15 bg-white text-[#004D20] hover:bg-[#004D20] hover:text-white transition-all shadow-sm flex items-center justify-center"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-2xl border border-[#004D20]/15 bg-white text-[#004D20] hover:bg-[#004D20] hover:text-white transition-all shadow-sm flex items-center justify-center"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Track scrollable */}
        <div
          ref={trackRef}
          className="flex gap-8 sm:gap-10 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {EMISSIONS.map((em) => (
            <Link
              key={em.id}
              href={em.href || '/emissions'}
              className="group flex flex-col items-center shrink-0 w-[140px] sm:w-[160px] snap-center"
            >
              {/* Cercle image */}
              <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px]">
                {/* Anneau or animé au hover */}
                <div className="absolute inset-0 rounded-full border-2 border-[#CA8A04]/30 group-hover:border-[#CA8A04] group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-1.5 rounded-full overflow-hidden shadow-xl shadow-[#004D20]/15 group-hover:shadow-[#CA8A04]/25 transition-shadow duration-500">
                  <Image
                    src={em.image}
                    alt={em.titre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="160px"
                  />
                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-[#001A0B]/0 group-hover:bg-[#001A0B]/35 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-[#CA8A04] text-[#001A0B] flex items-center justify-center shadow-lg scale-75 group-hover:scale-100">
                      <Headphones className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Badge horaire */}
                {em.horaires && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#004D20] text-amber-300 text-[10px] font-black tracking-wide shadow-md whitespace-nowrap">
                    {em.horaires}
                  </span>
                )}
              </div>

              {/* Texte */}
              <div className="mt-5 text-center px-1">
                <h3 className="text-sm font-black text-[#001A0B] group-hover:text-[#CA8A04] transition-colors leading-tight">
                  {em.titre}
                </h3>
                {em.sousTitre && (
                  <p className="mt-1 text-[11px] text-[#163A2C]/50 font-medium">
                    {em.sousTitre}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Lien voir tout */}
        <div className="mt-8 text-center">
          <Link
            href="/emissions"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#004D20] hover:text-[#CA8A04] transition-colors"
          >
            Voir toutes les émissions
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}