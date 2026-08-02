/**
 * Hook — Accès aux émissions (data statique)
 */

import { emissions, getEmissionBySlug } from '@/lib/data/emissions';
import { Emission } from '@/types';

export function useEmissions(): Emission[] {
  return emissions;
}

export function useEmissionBySlug(slug: string): Emission | undefined {
  return getEmissionBySlug(slug);
}
