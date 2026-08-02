/**
 * Constantes marque, réseaux sociaux, contacts
 */

import { SocialLink } from '@/types';

export const BRAND = {
  name: 'Radio Grâce-Espoir',
  tagline: 'La voix de l\'Espoir',
  description: 'Webradio chrétienne d\'évangélisation et d\'enseignement spirituel',
  foundedDate: '2020-03-25',
  colors: {
    primary: 'forest-900', // vert forêt
    primaryLight: 'forest-700',
    accent: 'sun-500', // or soleil
    accentLight: 'sun-400',
    secondary: 'terracotta-500', // terracotta
    background: 'ivory-100', // ivoire
    text: 'slate-900',
    textLight: 'slate-600',
  },
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'facebook',
    url: 'https://facebook.com/radiogracespoir',
    icon: 'Facebook',
  },
  {
    platform: 'twitter',
    url: 'https://twitter.com/radiogracespoir',
    icon: 'Twitter',
  },
  {
    platform: 'instagram',
    url: 'https://instagram.com/radiogracespoir',
    icon: 'Instagram',
  },
  {
    platform: 'vk',
    url: 'https://vk.com/radiogracespoir',
    icon: 'Vk',
  },
  {
    platform: 'pinterest',
    url: 'https://pinterest.com/radiogracespoir',
    icon: 'Pinterest',
  },
];

export const CONTACT_INFO = {
  email: 'contact@radiogracespoir.fr',
  phone: '+33 1 XX XX XX XX',
  address: 'Radio Grâce-Espoir\nCongégation de Grâce-Espoir',
  hours: 'Lun - Ven : 09h00 - 18h00\nSam - Dim : Fermé',
};

export const NAVIGATION = [
  {
    id: 'home',
    label: 'Accueil',
    href: '/',
  },
  {
    id: 'about',
    label: 'Qui sommes-nous ?',
    href: '/qui-sommes-nous',
  },
  {
    id: 'shows',
    label: 'Émissions',
    href: '/emissions',
  },
  {
    id: 'programs',
    label: 'Programmes',
    href: '/programmes',
  },
  {
    id: 'news',
    label: 'Actualités',
    href: '/actualites',
  },
  {
    id: 'prayers',
    label: 'Prières',
    children: [
       {
        id: 'priere',
        label: 'Toutes les prieres',
        href: '/prieres',
      },
      {
        id: 'gospel',
        label: 'Évangile du jour',
        href: '/evangile-du-jour',
      },
      {
        id: 'saints',
        label: 'Les saints du jour',
        href: '/saints-du-jour',
      },
      {
        id: 'Chapelet',
        label: 'Déposer une intention',
        href: '/chapelet',
      },
      {
        id: 'novenas',
        label: 'Neuvaines',
        href: '/neuvaines',
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contacts',
    href: '/contacts',
  },
];

export const FLASH_INFO = [
  '🎙️ Bienvenue sur Radio Grâce-Espoir — La voix de l\'Espoir',
  '✨ Rejoignez-nous pour notre émission spéciale dimanche à 18h',
  '🙏 Écoutez les prières du Père Attobra tous les jours à 7h',
];
