/**
 * Hook — Accès aux prières (data statique)
 */

import { prieres, getPriereBySlug, getPrieresByCategory } from '@/lib/data/prieres';
import { Priere } from '@/types';

export function usePrieres(): Priere[] {
  return prieres;
}

export function usePriereBySlug(slug: string): Priere | undefined {
  return getPriereBySlug(slug);
}

export function usePrieresByCategory(category: string): Priere[] {
  return getPrieresByCategory(category);
}
