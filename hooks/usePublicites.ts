'use client';

import { useQuery } from '@tanstack/react-query';
import { publicitesService, Publicite } from '@/services/publicites.service';

export function usePublicitesQuery() {
  return useQuery<Publicite[]>({
    queryKey: ['publicites'],
    queryFn: async () => {
      try {
        return await publicitesService.getAll();
      } catch (error) {
        console.error('Error fetching publicites:', error);
        return [];
      }
    },
    initialData: [],
    staleTime: 1000 * 60 * 5, // 5 min
  });
}
