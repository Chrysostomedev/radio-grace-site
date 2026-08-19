import { useQuery } from '@tanstack/react-query';
import { publicitesService } from '../services/publicites.service';

export const usePublicites = (position?: string) => {
  return useQuery({
    queryKey: ['publicites', position],
    queryFn: () => publicitesService.getPublicites(position),
  });
};
