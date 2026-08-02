/**
 * Hook — Accès aux slides du carrousel hero
 */

import { heroSlides } from '@/lib/data/hero-slides';
import { HeroSlide } from '@/types';

export function useHeroSlides(): HeroSlide[] {
  return heroSlides;
}
