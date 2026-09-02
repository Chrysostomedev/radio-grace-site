import { useQuery } from '@tanstack/react-query';
import { grilleService } from '@/services/api';
import type { GrilleResponse } from '@/types/api';

export function useGrilleDay(jour: string) {
  const { data, isLoading, error } = useQuery<GrilleResponse>({
    queryKey: ['grille', jour],
    queryFn: () => grilleService.getByDay(jour),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });

  return {
    grille: data?.data || [],
    isLoading,
    error: error instanceof Error ? error.message : null,
    total: data?.total,
    dureeTotale: data?.duree_totale,
  };
}

export function useGrilleWeek() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['grille-week'],
    queryFn: () => grilleService.getWeek(),
    staleTime: 60 * 60 * 1000, // 1 heure
  });

  return {
    grille: data?.data || [],
    isLoading,
    error: error instanceof Error ? error.message : null,
  };
}

export function useEmissionActuelle() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['emission-actuelle'],
    queryFn: () => grilleService.getCurrent(),
    staleTime: 2 * 60 * 1000, // 2 minutes (refresh plus souvent)
  });

  return {
    enCours: data?.data?.en_cours,
    suivante: data?.data?.prochaine,
    isLoading,
    error: error instanceof Error ? error.message : null,
  };
}

