/**
 * Hook — Accès aux actualités (data statique)
 * À terme, à brancher sur API Laravel
 */

import { actualites, getActualiteBySlug, getActualitesByCategory, searchActualites } from '@/lib/data/actualites';
import { Actualite } from '@/types';

export function useActualites(): Actualite[] {
  return actualites;
}

export function useActualiteBySlug(slug: string): Actualite | undefined {
  return getActualiteBySlug(slug);
}

export function useActualitesByCategory(category: Actualite['category']): Actualite[] {
  return getActualitesByCategory(category);
}

export function useSearchActualites(query: string): Actualite[] {
  return searchActualites(query);
}
