'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchEvangileDuJour } from '@/services/evangile.service';

export const useEvangileDuJour = () => {
  return useQuery({
    queryKey: ['evangile-du-jour'],
    queryFn: fetchEvangileDuJour,
    staleTime: 1000 * 60 * 60, // 1h cache
    retry: 2,
  });
};
