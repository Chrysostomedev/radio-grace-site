'use client';

import { useQuery } from '@tanstack/react-query';
import { evenementsService } from '@/services/evenements.service';

export function useEvenements() {
  return useQuery({
    queryKey: ['evenements'],
    queryFn: () => evenementsService.getEvenements(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useEvenement(id: string) {
  return useQuery({
    queryKey: ['evenement', id],
    queryFn: () => evenementsService.getEvenement(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}
