import { useQuery } from '@tanstack/react-query';
import { programmesService } from '../services/programmes.service';

export const useProgrammes = (page = 1, perPage = 10) => {
  return useQuery({
    queryKey: ['programmes', page, perPage],
    queryFn: () => programmesService.getProgrammes(page, perPage),
  });
};
