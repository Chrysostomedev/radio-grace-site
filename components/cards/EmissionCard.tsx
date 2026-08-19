'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Emission } from '@/types';
import { Play, Clock, User, Calendar, Radio } from 'lucide-react';

export interface EmissionCardProps {
  emission: Emission;
}

export function EmissionCard({ emission }: EmissionCardProps) {
  return (
    <Link href={`/emissions/${emission.id}`} className="group block h-full">
      <article className="flex flex-col h-full rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-amber-300/80 transition-all duration-300 transform group-hover:-translate-y-1">
        
        {/* Visual Container */}
        <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-[#004D20] via-[#002C13] to-slate-900 overflow-hidden">
          {emission.image ? (
            <Image
              src={emission.image}
              alt={emission.titre || ''}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#004D20] to-[#002C13]">
              <Radio className="w-12 h-12 text-[#CA8A04]/40 mb-2" />
              <span className="text-xs font-bold text-amber-200/60 uppercase tracking-widest">Radio Grâce-Espoir</span>
            </div>
          )}

          {/* Badge Catégorie / Statut si présent */}
          {emission.category && (
            <div className="absolute top-3 left-3 z-10">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/80 text-amber-300 backdrop-blur-md border border-white/10">
                Podcast
              </span>
            </div>
          )}

          {/* Hover Overlay avec Bouton Play Premium */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#CA8A04] text-slate-950 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 p-6 justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-[#004D20] transition-colors line-clamp-2 leading-snug">
              {emission.titre}
            </h3>
            {emission.description && (
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                {emission.description}
              </p>
            )}
          </div>

          {/* Metadata Grid */}
          <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-medium text-slate-500">
            {emission.schedule && (
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#CA8A04] shrink-0" />
                <span className="truncate">{emission.schedule}</span>
              </div>
            )}
            
            <div className="flex items-center justify-between gap-2 pt-1">
              {emission.presenter ? (
                <div className="flex items-center gap-1.5 truncate">
                  <User className="w-3.5 h-3.5 text-[#004D20] shrink-0" />
                  <span className="truncate">{emission.presenter}</span>
                </div>
              ) : <div />}

              {emission.duree && (
                <div className="flex items-center gap-1 text-slate-400 shrink-0 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{emission.duree}</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </article>
    </Link>
  );
}