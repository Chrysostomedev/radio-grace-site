/**
 * Données statiques — Slides Hero Carousel
 */

import { HeroSlide } from '@/types';

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Bienvenue sur Radio Grâce-Espoir',
    subtitle: "La voix de l'Espoir",
    badge: 'À la Une',
    image: '/img/actu (5).jpg',
    cta: {
      label: 'Écouter maintenant',
      href: '/direct',
    },
  },
  {
    id: '2',
    title: 'Découvrez nos émissions',
    subtitle: 'Enseignement spirituel quotidien',
    badge: 'Louange & Adorations',
    image: '/img/(3).jpg',
    cta: {
      label: 'Voir les émissions',
      href: '/emissions',
    },
  },
  {
    id: '3',
    title: 'Ensemble Dans la Prière',
    subtitle: 'Déposez vos intentions de prière',
    badge: 'Communauté',
    image: '/img/hero2.jpg',
    cta: {
      label: 'Confier une intention',
      href: '/prieres',
    },
  },
  {
    id: '4',
    title: 'Actualités & Enseignements',
    subtitle: 'La vie de notre Église',
    badge: "Vie de l'Église",
    image: '/img/actu (4).jpg',
    cta: {
      label: 'Lire les actualités',
      href: '/actualites',
    },
  },
];