'use client';

import { useQuery } from '@tanstack/react-query';
import { programmesService } from '@/services/programmes.service';
import type { Programme } from '@/types/programme.types';

export function useProgrammesQuery(page: number = 1, perPage: number = 10) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['programmes', page, perPage],
    queryFn: () => programmesService.getProgrammes(page, perPage),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    programmes: data?.data || [],
    isLoading,
    error: error instanceof Error ? error.message : 'Erreur inconnue',
    pagination: data?.meta,
  };
}

export function useProgrammeById(id: number | string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['programme', id],
    queryFn: () => programmesService.getProgramme(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  return {
    programme: data,
    isLoading,
    error: error instanceof Error ? error.message : null,
  };
}
