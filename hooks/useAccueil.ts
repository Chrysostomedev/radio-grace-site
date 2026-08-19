'use client';

import { useQuery } from '@tanstack/react-query';
import { accueilService } from '@/services/accueil.service';
import { HeroSlide } from '@/types';
import { Actualite } from '@/types/actualite.types';

export function useHeroSlidesQuery() {
  return useQuery<HeroSlide[]>({
    queryKey: ['hero-slides'],
    queryFn: () => accueilService.getHeroSlides(),
    staleTime: 1000 * 60 * 5, // 5 min
  });
}

export function usePublicationsDefilantesQuery() {
  return useQuery<Actualite[]>({
    queryKey: ['publications-defilantes'],
    queryFn: () => accueilService.getPublicationsDefilantes(),
    staleTime: 1000 * 60 * 5, // 5 min
  });
}
