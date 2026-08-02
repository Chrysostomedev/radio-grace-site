'use client';

/**
 * Page — Prières (Liste & Filtrage)
 */

import { useState, useMemo } from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { PriereCard } from '@/components/cards/PriereCard';
import { usePrieres } from '@/hooks/usePrieres';
import { BookOpen, Sparkles, HeartHandshake, Layers, AlertCircle, RefreshCw } from 'lucide-react';

export default function PrieresPage() {
  const prieres = usePrieres() || [];
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');

  // Extraction et dédoublonnage des catégories
  const categories = useMemo(() => {
    const cats = new Set(prieres.map((p) => p.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [prieres]);

  // Filtrage des prières
  const filteredPrieres = useMemo(() => {
    if (selectedCategory === 'all') return prieres;
    return prieres.filter((p) => p.category === selectedCategory);
  }, [prieres, selectedCategory]);

  return (
    <div className="pb-24 bg-[#FAF9F6] min-h-screen">
      {/* Hero */}
      <PageHero
        title="Recueil de Prières"
        subtitle="Trouvez le réconfort et élevez votre esprit à travers nos prières et intentions"
        image="/img/her.jpg"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Prières' },
        ]}
      />

      {/* Section Filtres & Introduction */}
      <section className="bg-white border-b border-slate-200/80 py-8 px-4 sm:px-6 shadow-2xs sticky top-0 z-20 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#CA8A04]" />
            <h2 className="font-extrabold text-[#004D20] text-sm uppercase tracking-wider">
              Catégories :
            </h2>
          </div>

          {/* Pilules de filtres */}
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = cat === 'all' ? prieres.length : prieres.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-2xs ${
                    isActive
                      ? 'bg-[#004D20] text-amber-200 shadow-md ring-2 ring-[#004D20]/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-[#004D20]'
                  }`}
                >
                  <span>{cat === 'all' ? 'Toutes les prières' : cat}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Banner Spirituel d'encouragement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#004D20] via-[#003817] to-[#002C13] text-white p-6 sm:p-8 shadow-md border border-[#EAB308]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CA8A04]/20 text-[#EAB308] text-xs font-bold uppercase tracking-wider border border-[#CA8A04]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Moment de Méditation</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">« Demandez et l'on vous donnera »</h3>
            <p className="text-sm text-amber-100/80 max-w-2xl font-normal">
              Prenez un instant pour vous recueillir. Parcourez ces prières rédigées pour vous accompagner dans la foi et l'espérance au quotidien.
            </p>
          </div>
          <HeartHandshake className="w-16 h-16 text-[#EAB308]/30 shrink-0 hidden md:block" />
        </div>
      </div>

      {/* Grille des Prières */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {filteredPrieres.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPrieres.map((priere) => (
                <PriereCard key={priere.id || priere.slug} priere={priere} />
              ))}
            </div>
          ) : (
            /* État Vide */
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80 shadow-xs max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#CA8A04] flex items-center justify-center mx-auto">
                <AlertCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-[#004D20]">Aucune prière trouvée</h3>
                <p className="text-sm text-slate-500">
                  Il n'y a actuellement aucune prière dans la catégorie sélectionnée.
                </p>
              </div>
              <button
                onClick={() => setSelectedCategory('all')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#004D20] text-white text-xs font-bold hover:bg-[#002C13] transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Voir toutes les prières</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}