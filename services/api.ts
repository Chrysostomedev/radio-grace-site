// services/api.ts - Tous les appels API centralisés

import {
  HeroSlide,
  GrilleResponse,
  Podcast,
  PodcastsResponse,
  IntentionPriere,
  IntentionResponse,
  IntentionsResponse,
  EmissionSlot,
} from '@/types/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ════════════════════════════════════════════════════════════════
// HERO SLIDES
// ════════════════════════════════════════════════════════════════

export const heroSlideService = {
  async getAll(): Promise<HeroSlide[]> {
    const response = await fetch(`${API_URL}/site/hero-slides`);
    if (!response.ok) throw new Error('Erreur chargement hero slides');
    const data = await response.json();
    return data.data || [];
  },

  async getById(id: number): Promise<HeroSlide> {
    const slides = await this.getAll();
    const slide = slides.find((s) => s.id === id);
    if (!slide) throw new Error('Hero slide non trouvé');
    return slide;
  },
};

// ════════════════════════════════════════════════════════════════
// GRILLE PROGRAMMES
// ════════════════════════════════════════════════════════════════

export const grilleService = {
  async getByDay(jour: string): Promise<GrilleResponse> {
    const response = await fetch(
      `${API_URL}/grille-day?jour=${encodeURIComponent(jour)}`
    );
    if (!response.ok) throw new Error('Erreur chargement grille');
    return response.json();
  },

  async getWeek(): Promise<any> {
    const response = await fetch(`${API_URL}/grille-week`);
    if (!response.ok) throw new Error('Erreur chargement grille semaine');
    return response.json();
  },

  async getCurrent(): Promise<any> {
    const response = await fetch(`${API_URL}/emission-actuelle`);
    if (!response.ok) throw new Error('Erreur chargement émission actuelle');
    return response.json();
  },
};

// ════════════════════════════════════════════════════════════════
// PODCASTS
// ════════════════════════════════════════════════════════════════

export const podcastService = {
  async getAll(perPage: number = 20, page: number = 1): Promise<PodcastsResponse> {
    const response = await fetch(
      `${API_URL}/site/podcasts?per_page=${perPage}&page=${page}`
    );
    if (!response.ok) throw new Error('Erreur chargement podcasts');
    return response.json();
  },

  async getById(id: number): Promise<Podcast> {
    const response = await fetch(`${API_URL}/site/podcasts/${id}`);
    if (!response.ok) throw new Error('Podcast non trouvé');
    const data = await response.json();
    return data.data || data;
  },

  async search(query: string): Promise<PodcastsResponse> {
    const response = await fetch(
      `${API_URL}/site/podcasts/search?q=${encodeURIComponent(query)}`
    );
    if (!response.ok) throw new Error('Erreur recherche podcasts');
    return response.json();
  },
};

// ════════════════════════════════════════════════════════════════
// INTENTIONS DE PRIÈRE
// ════════════════════════════════════════════════════════════════

export const intentionService = {
  async getAll(perPage: number = 20, page: number = 1): Promise<IntentionsResponse> {
    const response = await fetch(
      `${API_URL}/site/intentions-priere?per_page=${perPage}&page=${page}`
    );
    if (!response.ok) throw new Error('Erreur chargement intentions');
    return response.json();
  },

  async getById(id: number): Promise<IntentionPriere> {
    const response = await fetch(`${API_URL}/site/intentions-priere/${id}`);
    if (!response.ok) throw new Error('Intention non trouvée');
    const data = await response.json();
    return data.data || data;
  },

  async create(payload: {
    intention: string;
    description?: string;
    nom?: string;
    telephone?: string;
    montant_don?: number;
    moyen_paiement?: string;
    is_public?: boolean;
    is_anonyme?: boolean;
  }): Promise<IntentionResponse> {
    const response = await fetch(`${API_URL}/site/intentions-priere`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Erreur création intention');
    }

    return response.json();
  },

  async verifyPayment(id: number): Promise<IntentionResponse> {
    const response = await fetch(
      `${API_URL}/site/intentions-priere/${id}/verifier-paiement`,
      {
        method: 'POST',
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Erreur vérification paiement');
    }

    return response.json();
  },
};

// ════════════════════════════════════════════════════════════════
// PROGRAMMES / ÉMISSIONS
// ════════════════════════════════════════════════════════════════

export const programmeService = {
  async getAll(perPage: number = 20): Promise<any> {
    const response = await fetch(
      `${API_URL}/site/programmes?per_page=${perPage}`
    );
    if (!response.ok) throw new Error('Erreur chargement programmes');
    return response.json();
  },

  async getById(id: number): Promise<any> {
    const response = await fetch(`${API_URL}/site/programmes/${id}`);
    if (!response.ok) throw new Error('Programme non trouvé');
    const data = await response.json();
    return data.data || data;
  },

  async getGrille(id: number): Promise<any> {
    const response = await fetch(`${API_URL}/site/programmes/${id}/grille`);
    if (!response.ok) throw new Error('Erreur chargement grille programme');
    return response.json();
  },
};

// ════════════════════════════════════════════════════════════════
// ACTUALITÉS
// ════════════════════════════════════════════════════════════════

export const actualiteService = {
  async getAll(perPage: number = 20): Promise<any> {
    const response = await fetch(
      `${API_URL}/site/actualites?per_page=${perPage}`
    );
    if (!response.ok) throw new Error('Erreur chargement actualités');
    return response.json();
  },

  async getById(id: number | string): Promise<any> {
    const response = await fetch(`${API_URL}/site/actualites/${id}`);
    if (!response.ok) throw new Error('Actualité non trouvée');
    const data = await response.json();
    return data.data || data;
  },
};

// ════════════════════════════════════════════════════════════════
// ÉVÉNEMENTS
// ════════════════════════════════════════════════════════════════

export const evenementService = {
  async getAll(perPage: number = 20): Promise<any> {
    const response = await fetch(
      `${API_URL}/site/evenements?per_page=${perPage}`
    );
    if (!response.ok) throw new Error('Erreur chargement événements');
    return response.json();
  },

  async getById(id: number): Promise<any> {
    const response = await fetch(`${API_URL}/site/evenements/${id}`);
    if (!response.ok) throw new Error('Événement non trouvé');
    const data = await response.json();
    return data.data || data;
  },
};
