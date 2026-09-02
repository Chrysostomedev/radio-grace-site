import { apiClient } from '@/core/axios';

export interface Publicite {
  id: number;
  titre: string;
  image?: string | null;
  video_url?: string | null;
  lien?: string | null;
  position: string;
  date_debut: string;
  date_fin: string;
  is_active: boolean;
  clics: number;
}

interface PaginatedResponse<T> {
  data: T[];
  links: any;
  meta: any;
}

export const publicitesService = {
  /**
   * Récupère toutes les publicités actives pour le site
   */
  async getAll(): Promise<Publicite[]> {
    const response = await apiClient.get<PaginatedResponse<Publicite>>('/publicites');
    return response.data.data;
  },
};
