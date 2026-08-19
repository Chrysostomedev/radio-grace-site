'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchSaintsDuJour } from '@/services/saints.service';

export const useSaintsDuJour = () => {
  return useQuery({
    queryKey: ['saints-du-jour'],
    queryFn: fetchSaintsDuJour,
    staleTime: 1000 * 60 * 60 * 24, // 24h cache
  });
};
