import { get } from '../core/axios';
import { Publicite } from '../types/publicite.types';

export const publicitesService = {
  getPublicites: async (position?: string): Promise<Publicite[]> => {
    const response = await get<{ success: boolean; data: Publicite[] }>(`/publicites`, { position });
    return response.data;
  },
};
