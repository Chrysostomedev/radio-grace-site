'use client';

/**
 * Composant — Carte Prière Premium UI
 */

import Image from 'next/image';
import Link from 'next/link';
import { Priere } from '@/types';
import { formatDateFR, truncate } from '@/lib/utils';
import { Calendar, User, HeartHandshake, ArrowUpRight, BookOpen } from 'lucide-react';

export interface PriereCardProps {
  priere: Priere;
}

export function PriereCard({ priere }: PriereCardProps) {
  return (
    <Link href={`/prieres/${priere.slug}`} className="group block h-full">
      <article className="flex flex-col h-full rounded-2xl border border-amber-100/80 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        
        {/* Visual Header / Image Container */}
        <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-[#004D20] via-[#003817] to-[#002C13] overflow-hidden">
          {priere.image ? (
            <Image
              src={priere.image}
              alt={priere.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            /* Fallback spirituel moderne si pas d'image */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white/20">
              <HeartHandshake className="w-16 h-16 stroke-[1.2] mb-2 group-hover:scale-110 group-hover:text-[#CA8A04]/40 transition-all duration-500" />
            </div>
          )}

          {/* Fondu de protection sombre au survol */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badge de Catégorie Flottant */}
          {priere.category && (
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md bg-[#004D20]/85 text-amber-200 border border-amber-300/30 backdrop-blur-md">
                <BookOpen className="w-3.5 h-3.5 text-[#CA8A04]" />
                <span>{priere.category}</span>
              </span>
            </div>
          )}

          {/* Bouton d'action rapide au survol */}
          <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#004D20] shadow-md opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Contenu Texte */}
        <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between gap-4 bg-gradient-to-b from-white via-white to-amber-50/20">
          <div className="space-y-2.5">
            
            {/* Titre */}
            <h3 className="font-extrabold text-lg sm:text-xl text-[#004D20] group-hover:text-[#CA8A04] transition-colors leading-snug line-clamp-2">
              {priere.title}
            </h3>

            {/* Extrait / Extrait du contenu */}
            {priere.content && (
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal italic">
                "{truncate(priere.content, 120)}"
              </p>
            )}
          </div>

          {/* Métadonnées (Pied de carte) */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
            <div className="flex items-center gap-3">
              {priere.createdAt && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#CA8A04]" />
                  <time dateTime={priere.createdAt}>{formatDateFR(priere.createdAt)}</time>
                </span>
              )}

              {priere.author && (
                <span className="flex items-center gap-1.5 border-l border-slate-200 pl-3">
                  <User className="w-3.5 h-3.5 text-[#007A33]" />
                  <span className="truncate max-w-[120px]">Par {priere.author}</span>
                </span>
              )}
            </div>

            <span className="text-[#CA8A04] font-bold group-hover:underline text-xs">
              Prier →
            </span>
          </div>

        </div>
      </article>
    </Link>
  );
}