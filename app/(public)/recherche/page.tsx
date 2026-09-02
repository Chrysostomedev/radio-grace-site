'use client';

import { useState, useMemo } from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { SearchInput } from '@/components/form/SearchInput';
import { useEmissions } from '@/hooks/useEmissions';
import { useActualites } from '@/hooks/useActualites';
import { useProgrammesQuery } from '@/hooks/useProgrammes';
import { EmissionCard } from '@/components/cards/EmissionCard';
import { ActualiteCard } from '@/components/cards/ActualiteCard';
import { Search, AlertCircle } from 'lucide-react';

export default function RecherchePage() {
  const [query, setQuery] = useState('');
  
  // Fetch data
  const emissions = useEmissions();
  const { data: actualitesData } = useActualites(1, 100);
  const { programmes: programmesData } = useProgrammesQuery();

  const actualites = actualitesData?.data || [];
  const programmes = programmesData || [];

  // Filtrer les résultats
  const results = useMemo(() => {
    if (!query.trim()) {
      return { emissions: [], actualites: [], programmes: [], total: 0 };
    }

    const queryLower = query.toLowerCase();

    const filteredEmissions = emissions.filter(
      (e) =>
        e.title.toLowerCase().includes(queryLower) ||
        e.description?.toLowerCase().includes(queryLower) ||
        e.presenter?.toLowerCase().includes(queryLower)
    );

    const filteredActualites = actualites.filter(
      (a) =>
        a.titre.toLowerCase().includes(queryLower) ||
        a.resume?.toLowerCase().includes(queryLower)
    );

    const filteredProgrammes = programmes.filter(
      (p) =>
        p.titre.toLowerCase().includes(queryLower) ||
        p.description?.toLowerCase().includes(queryLower)
    );

    return {
      emissions: filteredEmissions,
      actualites: filteredActualites,
      programmes: filteredProgrammes,
      total: filteredEmissions.length + filteredActualites.length + filteredProgrammes.length,
    };
  }, [query, emissions, actualites, programmes]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Hero */}
      <PageHero
        title="Recherche"
        subtitle="Trouvez rapidement les émissions, actualités et programmes qui vous intéressent"
        image="/img/hero1.jpg"
        breadcrumb={[
          { label: 'Accueil', href: '/accueil' },
          { label: 'Recherche' },
        ]}
      />

      {/* Recherche */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
            <SearchInput
              placeholder="Émissions, actualités, programmes..."
              onSearch={setQuery}
            />
            {query && (
              <p className="mt-3 text-sm text-slate-600">
                <span className="font-semibold text-[#004D20]">{results.total}</span> résultat{results.total !== 1 ? 's' : ''} trouvé{results.total !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>

        {/* Résultats */}
        {query.trim() ? (
          <div className="space-y-16">
            {/* Émissions */}
            {results.emissions.length > 0 && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    Émissions ({results.emissions.length})
                  </h2>
                  <div className="h-1 w-16 bg-[#CA8A04] rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {results.emissions.map((emission) => (
                    <EmissionCard key={emission.id} emission={emission} />
                  ))}
                </div>
              </div>
            )}

            {/* Actualités */}
            {results.actualites.length > 0 && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    Actualités ({results.actualites.length})
                  </h2>
                  <div className="h-1 w-16 bg-[#CA8A04] rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {results.actualites.map((actualite) => (
                    <ActualiteCard key={actualite.id} actualite={actualite} />
                  ))}
                </div>
              </div>
            )}

            {/* Programmes */}
            {results.programmes.length > 0 && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    Programmes ({results.programmes.length})
                  </h2>
                  <div className="h-1 w-16 bg-[#CA8A04] rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {results.programmes.map((programme) => (
                    <div
                      key={programme.id}
                      className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="font-bold text-lg text-[#004D20] mb-2">
                        {programme.titre}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-3">
                        {programme.description}
                      </p>
                      <span className="inline-block mt-4 text-xs font-semibold text-[#CA8A04] bg-[#CA8A04]/10 px-3 py-1 rounded-full">
                        {programme.categorie}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Aucun résultat */}
            {results.total === 0 && (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-[#CA8A04]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Aucun résultat trouvé
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Essayez avec d'autres mots-clés ou consultez nos catégories pour découvrir nos contenus.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Commencez votre recherche
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Entrez un mot-clé pour chercher dans nos émissions, actualités et programmes.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
