'use client';

import { useState } from 'react';
import { Emission } from '@/types';
import { EmissionCard } from '@/components/cards/EmissionCard';
import { Calendar, Search, Radio } from 'lucide-react';

const DAYS = [
  { label: 'Tous les jours', value: 'all' },
  { label: 'Lundi', value: 'Lun' },
  { label: 'Mardi', value: 'Mar' },
  { label: 'Mercredi', value: 'Mer' },
  { label: 'Jeudi', value: 'Jeu' },
  { label: 'Vendredi', value: 'Ven' },
  { label: 'Samedi', value: 'Sam' },
  { label: 'Dimanche', value: 'Dim' },
];

interface ProgrammesInteractiveProps {
  initialEmissions: Emission[];
}

export function ProgrammesInteractive({ initialEmissions }: ProgrammesInteractiveProps) {
  const [selectedDay, setSelectedDay] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrage combiné par jour et par terme de recherche
  const filteredEmissions = initialEmissions.filter((emission) => {
    const matchesDay =
      selectedDay === 'all' ||
      (emission.schedule && emission.schedule.toLowerCase().includes(selectedDay.toLowerCase()));
    
    const matchesSearch =
      emission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (emission.presenter && emission.presenter.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesDay && matchesSearch;
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
            placeholder="Rechercher une émission ou un animateur..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#004D20]/20 focus:border-[#004D20] transition-colors"
          />
        </div>

        {/* Days Pill Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 justify-start sm:justify-center no-scrollbar">
          {DAYS.map((day) => {
            const isActive = selectedDay === day.value;
            return (
              <button
                key={day.value}
                onClick={() => setSelectedDay(day.value)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#004D20] text-white shadow-md shadow-[#004D20]/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {day.label}
              </button>
            );
          })}
        </div>

      </div>

      {/* Grid Display */}
      {filteredEmissions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEmissions.map((emission) => (
            <EmissionCard key={emission.id} emission={emission} />
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