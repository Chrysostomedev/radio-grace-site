import { apiClient } from '@/core/axios';
import { HeroSlide } from '@/types';
import { Actualite } from '@/types/actualite.types';

export const accueilService = {
  /**
   * Récupère les slides du carrousel héro
   */
  async getHeroSlides(): Promise<HeroSlide[]> {
    const response = await apiClient.get<HeroSlide[]>('/accueil/hero');
    return response.data;
  },

  /**
   * Récupère les publications défilantes (ticker)
   */
  async getPublicationsDefilantes(): Promise<Actualite[]> {
    const response = await apiClient.get<{ data: Actualite[] }>('/accueil/publications-defilantes');
    return response.data.data;
  }
};
