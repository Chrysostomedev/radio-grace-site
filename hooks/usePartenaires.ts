'use client';

import { useQuery } from '@tanstack/react-query';
import { partenairesService, Partenaire } from '@/services/partenaires.service';

export function usePartenairesQuery() {
  return useQuery<Partenaire[]>({
    queryKey: ['partenaires'],
    queryFn: () => partenairesService.getAll(),
    staleTime: 1000 * 60 * 30, // 30 min (partenaires ne changent pas souvent)
  });
}
