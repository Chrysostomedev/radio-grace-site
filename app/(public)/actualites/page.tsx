'use client';

/**
 * Page — Actualités (Liste + Filtres + Recherche)
 */

import { useState, useMemo } from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { ActualiteCard } from '@/components/cards/ActualiteCard';
import { SearchInput } from '@/components/form/SearchInput';
import { useActualites, useSearchActualites } from '@/hooks/useActualites';
import { Radio, Newspaper, Zap, Layers, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

export default function ActualitesPage() {
  const actualites = useActualites() || [];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'flash' | 'normal'>('all');

  // Filtrage combiné avec mémoïsation
  const filteredActualites = useMemo(() => {
    let filtered = actualites;

    // Filtre catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((a) => a.category === selectedCategory);
    }

    // Filtre recherche
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(
        (a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [actualites, searchQuery, selectedCategory]);

  const flashCount = useMemo(() => actualites.filter((a) => a.category === 'flash').length, [actualites]);
  const normalCount = useMemo(() => actualites.filter((a) => a.category === 'normal').length, [actualites]);

  return (
    <div className="pb-24 bg-[#FAF9F6] min-h-screen">
      {/* En-tête / Hero */}
    
      <PageHero
  title="Actualités & Flashs"
  subtitle="Suivez l'actualité de la station, nos événements et communiqués"
  image="/img/hero1.jpg"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Actualités' },
        ]}
/>

      {/* Conteneur principal */}
      <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* SIDEBAR (4 Colonnes sur LG) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* Carte de Recherche & Filtres */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-6">
                
                {/* Module de recherche */}
                <div>
                  <h3 className="font-extrabold text-[#004D20] text-base mb-3 flex items-center gap-2">
                    <span>Rechercher un article</span>
                  </h3>
                  <SearchInput onSearch={setSearchQuery} />
                </div>

                {/* Filtre par Catégories */}
                <div>
                  <h3 className="font-extrabold text-[#004D20] text-base mb-3">
                    Catégories
                  </h3>
                  <div className="flex flex-col gap-2">
                    
                    {/* Bouton Toutes */}
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                        selectedCategory === 'all'
                          ? 'bg-[#004D20] text-white shadow-md'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <Layers className={`w-4 h-4 ${selectedCategory === 'all' ? 'text-[#EAB308]' : 'text-slate-400'}`} />
                        <span>Toutes les actualités</span>
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        selectedCategory === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {actualites.length}
                      </span>
                    </button>

                    {/* Bouton Flash Info */}
                    <button
                      onClick={() => setSelectedCategory('flash')}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                        selectedCategory === 'flash'
                          ? 'bg-[#CA8A04] text-[#002C13] shadow-md'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <Zap className={`w-4 h-4 ${selectedCategory === 'flash' ? 'fill-current' : 'text-amber-500'}`} />
                        <span>Flashs Info</span>
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        selectedCategory === 'flash' ? 'bg-[#002C13]/10 text-[#002C13]' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {flashCount}
                      </span>
                    </button>

                    {/* Bouton Articles Réguliers */}
                    <button
                      onClick={() => setSelectedCategory('normal')}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                        selectedCategory === 'normal'
                          ? 'bg-[#004D20] text-white shadow-md'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <Newspaper className={`w-4 h-4 ${selectedCategory === 'normal' ? 'text-[#EAB308]' : 'text-slate-400'}`} />
                        <span>Articles & Dossiers</span>
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        selectedCategory === 'normal' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {normalCount}
                      </span>
                    </button>

                  </div>
                </div>

              </div>

              {/* Encart Direct / Information Station */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#004D20] to-[#002C13] text-white rounded-2xl p-6 shadow-md border border-[#EAB308]/20">
                <Sparkles className="absolute -top-3 -right-3 w-20 h-20 text-[#EAB308]/10 pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EAB308]/20 text-[#EAB308] text-xs font-bold uppercase tracking-wider border border-[#EAB308]/30">
                    <Radio className="w-3.5 h-3.5 animate-pulse" />
                    <span>Direct Antenne</span>
                  </div>
                  <h4 className="font-extrabold text-lg leading-tight">Ne manquez aucun communiqué</h4>
                  <p className="text-xs text-white/80 leading-relaxed font-normal">
                    Écoutez la radio en direct pour être informé instantanément des alertes et des messages de la congrégation.
                  </p>
                </div>
              </div>

            </div>
          </aside>

          {/* CONTENU PRINCIPAL (8 Colonnes sur LG) */}
          <main className="lg:col-span-8 space-y-6">
            
            {/* Barre de titre & Compteur */}
            <div className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#CA8A04]" />
                <h2 className="text-lg sm:text-xl font-extrabold text-[#004D20]">
                  {filteredActualites.length} publication{filteredActualites.length > 1 ? 's' : ''}
                </h2>
              </div>

              {(searchQuery || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#CA8A04] hover:text-[#004D20] transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Réinitialiser</span>
                </button>
              )}
            </div>

            {/* Grille des cartes d'actualité */}
            {filteredActualites.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredActualites.map((actualite) => (
                  <ActualiteCard key={actualite.id || actualite.slug} actualite={actualite} />
                ))}
              </div>
            ) : (
              /* État vide si aucun résultat */
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80 shadow-xs space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#CA8A04] flex items-center justify-center mx-auto">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-extrabold text-[#004D20]">Aucun résultat trouvé</h3>
                  <p className="text-sm text-slate-500 max-w-md mx-auto">
                    Nous n'avons trouvé aucune actualité correspondant à votre recherche. Essayez de modifier vos filtres.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#004D20] text-white text-xs font-bold hover:bg-[#002C13] transition-colors shadow-sm"
                >
                  <span>Afficher toutes les actualités</span>
                </button>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}