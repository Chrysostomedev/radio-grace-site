// types/api.ts - Toutes les interfaces API

export interface HeroSlide {
  id: number;
  titre?: string;
  sous_titre?: string;
  type: 'IMAGE' | 'VIDEO';
  image?: string;
  video?: string;
  lien?: string;
  ordre?: number;
}

export interface Animateur {
  id: number;
  nom_scene: string;
  photo?: string;
  bio?: string;
}

export interface Programme {
  id: number;
  titre: string;
  description?: string;
  image?: string;
  video_url?: string;
  video_provider?: string;
  animateur?: Animateur;
  liens_sociaux?: {
    youtube?: string;
    facebook?: string;
    instagram?: string;
    tiktok?: string;
  };
}

export interface EmissionSlot {
  id: number;
  jour: string;
  heure_debut: string;
  heure_fin: string;
  is_rediffusion?: boolean;
  programme?: Programme;
}

export interface GrilleResponse {
  success: boolean;
  jour?: string;
  data: EmissionSlot[];
  total?: number;
  duree_totale?: string;
}

export interface Podcast {
  id: number;
  titre: string;
  description?: string;
  image?: string;
  audio_url?: string;
  video_url?: string;
  duree_formatee?: string;
  is_premium?: boolean;
  statut: 'PUBLIE' | 'BROUILLON' | 'ARCHIVE';
  vues?: number;
  programme?: Programme;
  commentaires_count?: number;
  created_at?: string;
  updated_at?: string;
}

export interface PodcastsResponse {
  success: boolean;
  data: Podcast[];
  pagination?: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
  };
}

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

export interface IntentionResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: IntentionPriere;
  paiement?: {
    transaction_id: string;
    redirect_url: string;
    request_id?: string;
  };
}

export interface IntentionsResponse {
  success: boolean;
  data: IntentionPriere[];
  pagination?: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
  };
}

export interface Favori {
  id: number;
  favorable_type: string;
  favorable_id: number;
  item?: Podcast | Actualite | Evenement;
  created_at?: string;
}

export interface FavorisResponse {
  success: boolean;
  data: Favori[];
  pagination?: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
  };
}

export interface Actualite {
  id: number;
  titre: string;
  slug?: string;
  chapeau?: string;
  contenu?: string;
  image?: string;
  categorie?: {
    id: number;
    nom: string;
  };
  statut: 'BROUILLON' | 'PUBLIE';
  importance?: 'STANDARD' | 'A_LA_UNE' | 'IMPORTANT';
  published_at?: string;
  created_at?: string;
}

export interface Evenement {
  id: number;
  titre: string;
  description?: string;
  date_debut: string;
  date_fin?: string;
  lieu?: string;
  image?: string;
  created_at?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
