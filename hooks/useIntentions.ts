'use client';

import { useQuery } from '@tanstack/react-query';
import { intentionsService } from '@/services/intentions.service';

export function useIntentionsQuery(page = 1) {
  return useQuery({
    queryKey: ['intentions', page],
    queryFn: () => intentionsService.getAll(page),
    staleTime: 1000 * 60 * 5, // 5 min
  });
}

export function useIntentionQuery(id: number) {
  return useQuery({
    queryKey: ['intention', id],
    queryFn: () => intentionsService.getById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 30, // 30 min
  });
}
