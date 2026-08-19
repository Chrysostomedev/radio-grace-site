export interface CategorieActu {
  id: number;
  nom: string;
}

export interface Auteur {
  id: number;
  nom: string;
  prenom: string;
}

export interface Actualite {
  id: number;
  titre: string;
  resume: string;
  contenu: string;
  image?: string;
  categorie_id: number;
  categorie?: CategorieActu;
  auteur?: Auteur;
  published_at: string;
  created_at: string;
}

export interface ActualitesList {
  data: Actualite[];
  links: any;
  meta: {
    current_page: number;
    last_page: number;
    total: number;
    per_page: number;
  };
}
