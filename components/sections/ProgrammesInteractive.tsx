'use client';

import { useState } from 'react';
import { Programme } from '@/types/programme.types';
import { EmissionCard } from '@/components/cards/EmissionCard';
import { Search, Radio } from 'lucide-react';

interface ProgrammesInteractiveProps {
  initialEmissions: Programme[];
}

export function ProgrammesInteractive({ initialEmissions }: ProgrammesInteractiveProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrage par terme de recherche (les programmes ne ont pas de schedule day)
  const filteredEmissions = initialEmissions.filter((programme) => {
    const matchesSearch =
      programme.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      programme.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Controls Container */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
        
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Rechercher un programme..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#004D20]/20 focus:border-[#004D20] transition-colors"
          />
        </div>

      </div>

      {/* Grid Display */}
      {filteredEmissions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEmissions.map((programme) => (
            <div
              key={programme.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all p-6"
            >
              <h3 className="font-extrabold text-lg text-slate-900 mb-2">
                {programme.titre}
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                {programme.description}
              </p>
              <span className="inline-block text-xs font-semibold text-[#CA8A04] bg-[#CA8A04]/10 px-3 py-1 rounded-full">
                {programme.categorie}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-300 space-y-3 max-w-md mx-auto">
          <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-[#CA8A04]">
            <Radio className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-slate-900 text-base">Aucun programme trouvé</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Aucune émission ne correspond à vos critères de recherche pour ce jour.
          </p>
        </div>
      )}
    </div>
  );
}