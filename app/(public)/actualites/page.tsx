'use client';

import { useActualites } from '@/hooks/useActualites';
import { ActualiteCard } from '@/components/cards/ActualiteCard';
import { PageHero } from '@/components/sections/PageHero';
import { useState } from 'react';
import Script from 'next/script';

export default function ActualitesPage() {
  const [page, setPage] = useState(1);
  const { data: actualitesData, isLoading } = useActualites(page, 12);

  const actualites = actualitesData?.data || [];
  const meta = actualitesData?.meta;
  const hasNextPage = meta && page < meta.last_page;
  const hasPrevPage = page > 1;

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero */}
      <PageHero
        title="Actualités"
        subtitle="Restez informé de toutes les actualités de l'Église et de la vie sociale"
        breadcrumb={[
          { label: 'Accueil', href: '/accueil' },
          { label: 'Actualités', href: '/actualites' },
        ]}
      />

      {/* Filtres et Recherche */}
      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
              {meta?.total || 0} actualités
            </span>
            <p className="text-sm text-slate-600 mt-1">
              Page {meta?.current_page || 1} sur {meta?.last_page || 1}
            </p>
          </div>
        </div>
      </section>

      {/* Grille Actualités */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        {isLoading ? (
          <div className="py-20 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#004D20] mx-auto mb-4"></div>
            <p className="text-slate-600">Chargement des actualités...</p>
          </div>
        ) : actualites && actualites.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {actualites.map((actualite: any) => (
                <ActualiteCard key={actualite.id} actualite={actualite} />
              ))}
            </div>

            {/* Pagination */}
            {(hasNextPage || hasPrevPage) && (
              <div className="flex items-center justify-center gap-4 py-8 border-t border-slate-200 mt-8">
                {hasPrevPage && (
                  <button
                    onClick={() => setPage(page - 1)}
                    className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold transition-colors text-sm"
                  >
                    ← Précédent
                  </button>
                )}

                <span className="text-sm font-medium text-slate-600">
                  Page {page} sur {meta?.last_page}
                </span>

                {hasNextPage && (
                  <button
                    onClick={() => setPage(page + 1)}
                    className="px-4 py-2 rounded-lg bg-[#004D20] hover:bg-[#003817] text-white font-bold transition-colors text-sm"
                  >
                    Suivant →
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="py-20 px-4 text-center rounded-2xl bg-white border border-slate-100 shadow-sm">
            <p className="text-slate-500 text-sm font-medium">
              Aucune actualité disponible pour le moment.
            </p>
          </div>
        )}
      </section>

      {/* Widget Vatican News */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          {/* @ts-expect-error - Custom Vatican News widget */}
          <vaticannews-widget lang="fr" fontSize="14" />
        </div>
      </section>

      <Script
        src="https://www.vaticannews.va/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
