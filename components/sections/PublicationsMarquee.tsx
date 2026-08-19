'use client';

import { usePublicationsDefilantesQuery } from '@/hooks/useAccueil';
import { Newspaper } from 'lucide-react';
import Link from 'next/link';

export function PublicationsMarquee() {
  const { data: publications, isLoading } = usePublicationsDefilantesQuery();

  if (isLoading || !publications || publications.length === 0) {
    return null;
  }

  // On double les éléments pour l'effet de boucle infinie (marquee)
  const marqueeItems = [...publications, ...publications];

  return (
    <div className="w-full bg-[#004D20] text-white py-3 overflow-hidden flex items-center border-y border-[#CA8A04]/30 shadow-inner">
      <div className="shrink-0 px-4 sm:px-6 bg-[#004D20] z-10 flex items-center gap-2 border-r border-[#CA8A04]/30 shadow-[10px_0_15px_-5px_rgba(0,0,0,0.3)]">
        <span className="w-2 h-2 rounded-full bg-[#CA8A04] animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-widest text-[#CA8A04]">
          Flash Info
        </span>
      </div>
      
      <div className="flex-1 overflow-hidden relative flex items-center">
        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap items-center">
          {marqueeItems.map((pub, idx) => (
            <div key={`${pub.id}-${idx}`} className="flex items-center">
              <Link 
                href={`/actualites/${pub.slug}`}
                className="text-sm font-semibold hover:text-[#CA8A04] transition-colors flex items-center gap-2 px-6"
              >
                <Newspaper className="w-3.5 h-3.5 text-white/50" />
                {pub.titre}
              </Link>
              <span className="text-white/20 text-xs">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
