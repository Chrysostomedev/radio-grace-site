'use client';

import { useQuery } from '@tanstack/react-query';
import { publicitesService, Publicite } from '@/services/publicites.service';

export function usePublicitesQuery() {
  return useQuery<Publicite[]>({
    queryKey: ['publicites'],
    queryFn: () => publicitesService.getAll(),
    staleTime: 1000 * 60 * 5, // 5 min
  });
}
