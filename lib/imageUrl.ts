/**
 * Helper pour convertir les URLs d'images en URLs absolues
 * Gère les cas:
 * - URLs complètes (http/https) → retourne telle quelle
 * - URLs relatives (/storage/...) → ajoute le domaine du backend
 */
export function getAbsoluteImageUrl(path: string | null | undefined): string {
  if (!path) return '/img/hero1.jpg'; // fallback

  // Si c'est déjà une URL complète
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Si c'est une URL relative, ajouter le domaine du backend
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
  // Nettoyer l'URL du backend (enlever /api/v1 et /site si présent)
  const baseUrl = apiUrl.replace(/\/(site|api\/v\d+)\/?$/, '').replace(/\/api\/v\d+\/?$/, '');
  
  // Ajouter le chemin de l'image
  const imagePath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${imagePath}`;
}
