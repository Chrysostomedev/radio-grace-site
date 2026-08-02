/**
 * Utilitaires génériques
 */

/**
 * Formatte une date ISO en français
 * @param dateString Date au format ISO
 * @returns Texte formaté en français (ex: "18 juillet 2026")
 */
export function formatDateFR(dateString: string): string {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formatter.format(date);
}

/**
 * Crée un slug à partir d'une chaîne
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Tronque un texte avec ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

/**
 * Classe helper pour combiner des classes conditionnellement
 */
export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
