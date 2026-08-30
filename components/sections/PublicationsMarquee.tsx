'use client';

import { usePublicationsDefilantesQuery } from '@/hooks/useAccueil';
import { Newspaper, Radio, Megaphone } from 'lucide-react';
import Link from 'next/link';

export function PublicationsMarquee() {
  const { data: publications, isLoading } = usePublicationsDefilantesQuery();

  if (isLoading || !publications || publications.length === 0) {
    return null;
  }

  // On double les éléments pour l'effet de boucle infinie (marquee)
  const marqueeItems = [...publications, ...publications];

  return (
    <div className="relative w-full bg-[#163A2C] text-[#FBF6EA] py-4 overflow-hidden flex items-center border-y-2 border-[#F0A93E]/60 shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
      {/* Liseré doré lumineux en haut et bas */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F0A93E]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#F0A93E]/70 to-transparent" />

      {/* Bloc label */}
      <div className="shrink-0 px-5 sm:px-8 bg-gradient-to-r from-[#0E241C] to-[#163A2C] z-10 flex items-center gap-3 border-r-2 border-[#F0A93E]/50 shadow-[12px_0_20px_-6px_rgba(0,0,0,0.5)] h-full">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F0A93E] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F0A93E]" />
        </span>
        <Megaphone className="w-5 h-5 text-[#F0A93E] hidden sm:block" strokeWidth={2.5} />
        <div className="flex flex-col leading-none">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#F0A93E] drop-shadow-sm">
            Flash Info
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#FBF6EA]/50 mt-1 hidden sm:block">
            Grâce-Espoir FM
          </span>
        </div>
      </div>

      {/* Bande défilante */}
      <div className="flex-1 overflow-hidden relative flex items-center">
        {/* Fondu de bord gauche */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-r from-[#163A2C] to-transparent" />
        {/* Fondu de bord droit */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-l from-[#163A2C] to-transparent" />

        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap items-center">
          {marqueeItems.map((pub, idx) => (
            <div key={`pub.id−{pub.id}-pub.id−{idx}`} className="flex items-center">
              <Link
                href={`/actualites/${pub.id}`}
                className="group flex items-center gap-2.5 px-7 py-1 text-sm sm:text-[15px] font-bold tracking-wide hover:text-[#F0A93E] transition-all duration-300"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0A93E]/15 border border-[#F0A93E]/40 group-hover:bg-[#F0A93E] group-hover:scale-110 transition-all duration-300">
                  <Newspaper className="w-3.5 h-3.5 text-[#F0A93E] group-hover:text-[#163A2C] transition-colors duration-300" />
                </span>
                <span className="uppercase drop-shadow-sm">{pub.titre}</span>
              </Link>
              <span className="flex items-center text-[#F0A93E]/40">
                <Radio className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
