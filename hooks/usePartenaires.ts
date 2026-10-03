'use client';

import { useQuery } from '@tanstack/react-query';
import { partenairesService, Partenaire } from '@/services/partenaires.service';

export function usePartenairesQuery() {
  return useQuery<Partenaire[]>({
    queryKey: ['partenaires'],
    queryFn: async () => {
      try {
        return await partenairesService.getAll();
      } catch (error) {
        console.error('Error fetching partenaires:', error);
        return [];
      }
    },
    initialData: [],
    staleTime: 1000 * 60 * 30, // 30 min (partenaires ne changent pas souvent)
  });
}
