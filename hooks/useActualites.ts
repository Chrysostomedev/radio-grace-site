// hooks/useActualites.ts
"use client";

import { useQuery } from '@tanstack/react-query';
import { actualitesService } from '../services/actualites.service';

export const useActualites = (page = 1, perPage = 10) => {
  return useQuery({
    queryKey: ['actualites', page, perPage],
    queryFn: () => actualitesService.getActualites(page, perPage),
  });
};