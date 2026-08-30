export interface Publicite {
  id: number;
  titre: string;
  image: string | null;
  video_url: string | null;
  lien: string | null;
  position: "PLAYER" | "BANNER" | "INTERSTITIEL" | "PARTENAIRE";
  date_debut: string | null;
  date_fin: string | null;
  clics: number;
  is_active: boolean;
}
