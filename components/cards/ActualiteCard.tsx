'use client';

/**
 * Composant — Carte Actualité Premium UI
 */

import Link from 'next/link';
import { Actualite } from '@/types/actualite.types';
import { formatDateFR, truncate } from '@/lib/utils';
import { getAbsoluteImageUrl } from '@/lib/imageUrl';
import { Calendar, User, ArrowUpRight, Zap, Newspaper, Clock } from 'lucide-react';

export interface ActualiteCardProps {
  actualite: Actualite;
}

export function ActualiteCard({ actualite }: ActualiteCardProps) {
  // ⚠️ categorie.nom est actuellement toujours null côté API — fallback sur défaut
  const categorieLabel = actualite.categorie?.nom ?? 'Actualité';
  const isFlash = categorieLabel?.toLowerCase().includes('flash');

  return (
    <Link href={`/actualites/${actualite.id}`} className="group block h-full">
      <article className="flex flex-col h-full rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

        {/* Conteneur Image avec Badge Flottant */}
        <div className="relative w-full aspect-[16/10] bg-[#002C13]/5 overflow-hidden">

{actualite.image ? (
  <img
    src={getAbsoluteImageUrl(actualite.image)}
    alt={actualite.titre}
    className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
  />
) : (
            <div className="w-full h-full bg-gradient-to-br from-[#004D20] to-[#002C13] flex items-center justify-center text-white/20">
              <Newspaper className="w-16 h-16 stroke-[1.5]" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badge de Catégorie Flottant */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md backdrop-blur-md transition-colors ${isFlash
                ? 'bg-amber-500/90 text-[#002C13] border border-amber-300/40'
                : 'bg-[#004D20]/85 text-white border border-white/20'
                }`}
            >
              {isFlash ? (
                <>
                  <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
                  <span>Flash Info</span>
                </>
              ) : (
                <>
                  <Newspaper className="w-3.5 h-3.5" />
                  <span>{categorieLabel ?? 'Actualité'}</span>
                </>
              )}
            </span>
          </div>

          <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#004D20] shadow-md opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Contenu Texte */}
        <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between gap-4">
          <div className="space-y-2.5">
            <h3 className="font-extrabold text-lg sm:text-xl text-[#004D20] group-hover:text-[#CA8A04] transition-colors leading-snug line-clamp-2">
              {actualite.titre}
            </h3>

            {actualite.resume && (
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 font-normal">
                {truncate(actualite.resume, 110)}
              </p>
            )}
          </div>

          {/* Métadonnées (Pied de carte) */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#CA8A04]" />
                <time dateTime={actualite.published_at}>{formatDateFR(actualite.published_at)}</time>
              </span>

              {actualite.auteur && (
                <span className="hidden sm:flex items-center gap-1.5 border-l border-slate-200 pl-3">
                  <User className="w-3.5 h-3.5 text-[#007A33]" />
                  <span className="truncate max-w-[100px]">
                    {actualite.auteur.prenom} {actualite.auteur.nom}
                  </span>
                </span>
              )}
            </div>

            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3" />
              <span>2 min</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}