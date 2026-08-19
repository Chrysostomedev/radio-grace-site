'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePublicites } from '@/hooks/usePublicites';

export function PubliciteBlock({ position = 'sidebar' }: { position?: string }) {
  const { data: publicites, isLoading } = usePublicites(position);

  if (isLoading || !publicites || publicites.length === 0) {
    return null; // On ne montre rien si pas de pubs
  }

  // Prendre la première pub pour le moment ou faire un carrousel
  const pub = publicites[0];

  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Partenaire</span>
      </div>
      
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100">
        {pub.image ? (
          <Image
            src={pub.image}
            alt={pub.titre}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
            {pub.titre}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h4 className="font-bold text-sm text-[#004D20]">{pub.titre}</h4>
        
        {pub.lien && (
          <a
            href={pub.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors"
          >
            Découvrir
          </a>
        )}
      </div>
    </div>
  );
}
