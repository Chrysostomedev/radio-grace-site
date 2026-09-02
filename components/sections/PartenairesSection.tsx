'use client';

import { Loader } from 'lucide-react';
import { usePartenairesQuery } from '@/hooks/usePartenaires';

export function PartenairesSection() {
  const { data: partenaires = [], isLoading } = usePartenairesQuery();

  if (isLoading) {
    return (
      <section className="py-12 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-center py-12">
          <Loader className="w-8 h-8 animate-spin text-[#163A2C]" />
        </div>
      </section>
    );
  }

  if (!partenaires || partenaires.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 sm:px-6 w-full bg-gradient-to-b from-[#FBF6EA] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-[#163A2C]/10 gap-4">
          <div className="flex items-start gap-3">
            <div>
              {/* <span className="text-[11px] font-bold uppercase tracking-widest text-[#CA8A04]">
                Nos Partenaires
              </span> */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#163A2C] tracking-tight leading-none mt-1">
                Ensemble pour l'Espoir
              </h2>
            </div>
          </div>
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163A2C] bg-[#CA8A04]/10 px-3 py-1.5 rounded-full w-fit">
            <span className="flex h-2 w-2 rounded-full bg-[#CA8A04]" />
            {partenaires.length} partenaire{partenaires.length > 1 ? 's' : ''}
          </span>
        </div>

        {/* Grid de partenaires en cercles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {partenaires.map((partenaire) => (
            <div
              key={partenaire.id}
              className="group flex flex-col items-center text-center"
            >
              {/* Cercle avec logo */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#163A2C]/10 hover:border-[#CA8A04] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(202,138,4,0.3)] bg-white flex items-center justify-center mb-4">
                {partenaire.logo ? (
                  <img
                    src={partenaire.logo}
                    alt={partenaire.nom}
                    className="object-contain p-4"
                  />
                ) : (
                  <div className="text-4xl sm:text-5xl"></div>
                )}
              </div>

              {/* Info */}
              <h3 className="font-black text-[#163A2C] text-sm sm:text-base line-clamp-2">
                {partenaire.nom}
              </h3>

              {partenaire.description && (
                <p className="text-xs sm:text-sm text-[#163A2C]/60 mt-2 line-clamp-2">
                  {partenaire.description}
                </p>
              )}

              {/* Lien */}
              {partenaire.site_web && (
                <a
                  href={partenaire.site_web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#CA8A04] hover:text-[#163A2C] transition-colors duration-200"
                >
                  <span>Visiter</span>
                  <span>→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
