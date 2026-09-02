import { apiClient } from '@/core/axios';

export interface IntentionPriere {
  id: number;
  intention: string;
  description?: string;
  nom?: string;
  telephone?: string;
  is_public: boolean;
  is_anonyme: boolean;
  montant_don?: number;
  statut_paiement?: 'NON_PAYEE' | 'EN_ATTENTE' | 'PAYEE' | 'ERREUR' | 'ANNULEE';
  transaction_id?: string;
  moyen_paiement?: string;
  paid_at?: string;
  created_at?: string;
  updated_at?: string;
}

interface PaginatedResponse<T> {
  data: T[];
  links: any;
  meta: any;
}

export const intentionsService = {
  /**
   * Récupère toutes les intentions publiques
   */
  async getAll(page = 1): Promise<PaginatedResponse<IntentionPriere>> {
    const response = await apiClient.get<PaginatedResponse<IntentionPriere>>('/intentions-priere', {
      params: { page },
    });
    return response.data;
  },

  /**
   * Soumet une nouvelle intention de prière
   */
  async create(payload: Partial<IntentionPriere>): Promise<{ data: IntentionPriere }> {
    const response = await apiClient.post<{ data: IntentionPriere }>('/intentions-priere', payload);
    return response.data;
  },

  /**
   * Récupère une intention spécifique
   */
  async getById(id: number): Promise<{ data: IntentionPriere }> {
    const response = await apiClient.get<{ data: IntentionPriere }>(`/intentions-priere/${id}`);
    return response.data;
  },

  /**
   * Vérifie le paiement d'une intention
   */
  async verifierPaiement(id: number, transaction_id: string): Promise<{ data: IntentionPriere }> {
    const response = await apiClient.post<{ data: IntentionPriere }>(
      `/intentions-priere/${id}/verifier-paiement`,
      { transaction_id }
    );
    return response.data;
  },
};
