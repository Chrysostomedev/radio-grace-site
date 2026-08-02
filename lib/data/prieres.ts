/**
 * Données statiques — Prières
 * À remplir page par page
 */

import { Priere } from '@/types';

export const prieres: Priere[] = [
  // Placeholders — à remplir
  {
    id: '1',
    title: 'Prière du matin',
    slug: 'priere-du-matin',
    content: 'Seigneur, guide nos pas ce jour nouveau...',
    category: 'intention',
    author: 'Père Attobra',
    createdAt: '2026-07-18T06:00:00Z',
  },
  {
    id: '2',
    title: 'Prière du matin',
    slug: 'priere-du-matin',
    content: 'Seigneur, guide nos pas ce jour nouveau...',
    category: 'intention',
    author: 'Père Attobra',
    createdAt: '2026-07-18T06:00:00Z',
  },
  {
    id: '3',
    title: 'Prière du matin',
    slug: 'priere-du-matin',
    content: 'Seigneur, guide nos pas ce jour nouveau...',
    category: 'intention',
    author: 'Père Attobra',
    createdAt: '2026-07-18T06:00:00Z',
  },
  {
    id: '4',
    title: 'Prière du matin',
    slug: 'priere-du-matin',
    content: 'Seigneur, guide nos pas ce jour nouveau...',
    category: 'intention',
    author: 'Père Attobra',
    createdAt: '2026-07-18T06:00:00Z',
  },
];

export function getPriereBySlug(slug: string): Priere | undefined {
  return prieres.find((p) => p.slug === slug);
}

export function getPrieresByCategory(category: string): Priere[] {
  return prieres.filter((p) => p.category === category);
}
