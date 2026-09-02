import { useQuery } from '@tanstack/react-query';
import { podcastService } from '@/services/api';
import type { PodcastsResponse } from '@/types/api';

export function usePodcasts(limit: number = 6, page: number = 1) {
  const { data, isLoading, error } = useQuery<PodcastsResponse>({
    queryKey: ['podcasts', limit, page],
    queryFn: () => podcastService.getAll(limit, page),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    podcasts: data?.data || [],
    isLoading,
    error: error instanceof Error ? error.message : 'Erreur inconnue',
    pagination: data?.pagination,
  };
}

export function usePodcastById(id: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['podcast', id],
    queryFn: () => podcastService.getById(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  return {
    podcast: data,
    isLoading,
    error: error instanceof Error ? error.message : null,
  };
}

