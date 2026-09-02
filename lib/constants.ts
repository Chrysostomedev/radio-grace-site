/**
 * Constantes marque, réseaux sociaux, contacts
 */

import { SocialLink } from '@/types';

export const BRAND = {
  name: 'Radio Grâce-Espoir',
  tagline: 'L\'Evangile au coeur de l\'Homme',
  description: 'Webradio catholique d\'évangélisation et d\'enseignement spirituel',
  foundedDate: '2020-03-25',
  colors: {
    primary: 'forest-900', // vert forêt
    primaryLight: 'forest-600',
    accent: 'sun-400', // or soleil
    accentLight: 'sun-300',
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
 
 
];

export const CONTACT_INFO = {
  phone: "+225 07 79 37 98 38",
  email: "contact@radio-grace-espoir.com",
  address: "Abidjan, Côte d'Ivoire",
  hours: "Lun - Ven : 08h - 18h",
} as const;

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
  // {
  //   id: 'shows',
  //   label: 'Émissions',
  //   href: '/emissions',
  // },
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
        id: 'gospel',
        label: 'Évangile du jour',
        href: '/evangile-du-jour',
      },
     
      {
        id: 'priere',
        label: 'Déposer une intention',
        href: '/intention',
      },
       {
        id: 'saints',
        label: 'Les saints du jour',
        href: '/saints-du-jour',
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
  ' Bienvenue sur Radio Grâce-Espoir — La voix de l\'Espoir',
  ' Rejoignez-nous pour notre émission spéciale dimanche à 18h',
  ' Écoutez les prières du Père Attobra tous les jours à 7h',
];
