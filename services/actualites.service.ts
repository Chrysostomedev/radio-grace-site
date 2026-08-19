import { get } from '../core/axios';
import { ActualitesList, Actualite } from '../types/actualite.types';

export const actualitesService = {
  getActualites: async (page = 1, perPage = 10): Promise<ActualitesList> => {
    return get<ActualitesList>(`/actualites`, { page, per_page: perPage });
  },

  getActualite: async (id: number | string): Promise<Actualite> => {
    return get<Actualite>(`/actualites/${id}`);
  },
};
