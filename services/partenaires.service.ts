import { apiClient } from '@/core/axios';

export interface Partenaire {
  id: number;
  nom: string;
  logo?: string | null;
  site_web?: string | null;
  description?: string | null;
  type?: 'partenaire' | 'sponsor' | 'media';
  is_active?: boolean;
}

interface PaginatedResponse<T> {
  data: T[];
  links: any;
  meta: any;
}

export const partenairesService = {
  /**
   * Récupère tous les partenaires actifs pour le site
   */
  async getAll(): Promise<Partenaire[]> {
    const response = await apiClient.get<PaginatedResponse<Partenaire>>('/partenaires');
    return response.data.data;
  },

  /**
   * Récupère un partenaire spécifique
   */
  async getById(id: number): Promise<Partenaire> {
    const response = await apiClient.get<{ data: Partenaire }>(`/partenaires/${id}`);
    return response.data.data;
  },
};
