'use client';

import { useQuery } from '@tanstack/react-query';
import { podcastsService } from '../services/podcasts.service';

export const usePodcasts = (page = 1, perPage = 10) => {
  return useQuery({
    queryKey: ['podcasts', page, perPage],
    queryFn: () => podcastsService.getPodcasts(page, perPage),
  });
};