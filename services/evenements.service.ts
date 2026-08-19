import { apiClient } from '@/core/axios';

export interface Evenement {
  id: string;
  titre: string;
  description: string;
  date_debut: string;
  date_fin: string;
  lieu: string;
  image: string | null;
  type: string;
  statut: string;
  responsable?: {
    id: number;
    name: string;
  };
}

export const evenementsService = {
  /**
   * Récupère la liste des événements
   */
  async getEvenements(): Promise<Evenement[]> {
    const response = await apiClient.get<{ data: Evenement[] }>('/evenements');
    return response.data.data;
  },

  /**
   * Récupère un événement spécifique
   */
  async getEvenement(id: string): Promise<Evenement> {
    const response = await apiClient.get<{ data: Evenement }>(`/evenements/${id}`);
    return response.data.data;
  }
};
