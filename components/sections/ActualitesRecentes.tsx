'use client';

import { useActualites } from '@/hooks/useActualites';
import { ActualiteCard } from '@/components/cards/ActualiteCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * ActualitesRecentes — Section actualités dynamique pour la page d'accueil
 */
export function ActualitesRecentes() {
  const { data, isLoading } = useActualites(1, 3);

  const actualites = data?.data || [];

  if (isLoading) {
    return (
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto mb-20">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#004D20]"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto mb-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-slate-200/80 pb-5">
        <div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Actualités récentes
          </h2>
        </div>
        <Link
          href="/actualites"
          className="inline-flex items-center gap-2 text-xs font-extrabold text-[#004D20] hover:text-amber-700 transition-colors group"
        >
          <span>Toutes les actualités</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {actualites && actualites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {actualites.map((actualite: any) => (
            <ActualiteCard key={actualite.id} actualite={actualite} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-300 text-slate-500 text-xs">
          Aucune actualité publiée pour l'instant.
        </div>
      )}
    </section>
  );
}
