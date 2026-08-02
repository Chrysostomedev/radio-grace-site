/**
 * Données statiques — Actualités
 * À remplir page par page
 */

import { Actualite } from '@/types';

export const actualites: Actualite[] = [
  // Placeholder — à remplir
  {
    id: '1',
    title: 'Bienvenue sur Radio Grâce-Espoir',
    slug: 'bienvenue-radio-grace-espoir',
    excerpt: 'Découvrez notre nouvelle plateforme web dédiée à l\'évangélisation et l\'enseignement spirituel.',
    content: 'Contenu complet de l\'actualité sera ajouté ici.',
    category: 'normal',
    publishedAt: '2026-07-18T10:45:00Z',
    author: 'Rédaction',
    image: '/img/actu (2).jpg',
    tags: ['bienvenue', 'annonce'],
  },
  {
    id: '2',
    title: 'Bienvenue sur Radio Grâce-Espoir',
    slug: 'bienvenue-radio-grace-espoir',
    excerpt: 'Découvrez notre nouvelle plateforme web dédiée à l\'évangélisation et l\'enseignement spirituel.',
    content: 'Contenu complet de l\'actualité sera ajouté ici.',
    category: 'normal',
    publishedAt: '2026-07-18T10:45:00Z',
    author: 'Rédaction',
    image: '/img/actu (4).jpg',
    tags: ['bienvenue', 'annonce'],
  },
  {
    id: '3',
    title: 'Bienvenue sur Radio Grâce-Espoir',
    slug: 'bienvenue-radio-grace-espoir',
    excerpt: 'Découvrez notre nouvelle plateforme web dédiée à l\'évangélisation et l\'enseignement spirituel.',
    content: 'Contenu complet de l\'actualité sera ajouté ici.',
    category: 'normal',
    publishedAt: '2026-07-18T10:45:00Z',
    author: 'Rédaction',
    image: '/img/actu (5).jpg',
    tags: ['bienvenue', 'annonce'],
  },
];

export function getActualiteBySlug(slug: string): Actualite | undefined {
  return actualites.find((a) => a.slug === slug);
}

export function getActualitesByCategory(category: Actualite['category']): Actualite[] {
  return actualites.filter((a) => a.category === category);
}

export function searchActualites(query: string): Actualite[] {
  const q = query.toLowerCase();
  return actualites.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags?.some((tag) => tag.toLowerCase().includes(q))
  );
}
