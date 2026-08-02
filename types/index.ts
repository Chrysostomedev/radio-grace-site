/**
 * Types & Interfaces - Radio Grâce-Espoir
 * Structurés pour correspondre aux Resources API Laravel future
 */

export interface Actualite {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  category: 'flash' | 'normal';
  publishedAt: string; // ISO date format
  author?: string;
  tags?: string[];
}

export interface Emission {
  id: string;
  title: string;
  slug: string;
  description: string;
  image?: string;
  schedule?: string; // ex: "Lundi 14h - 15h"
  presenter?: string;
  duration?: number; // en minutes
  category?: string; // ex: "live", "podcast", "replay"
}

export interface Priere {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string; // ex: "intention", "neuvaine", "liturgie"
  image?: string;
  author?: string;
  createdAt?: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  badge?: string; // ex: "À la Une", "Spécial", etc.
  cta?: {
    label: string;
    href: string;
  };
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'vk' | 'pinterest';
  url: string;
  icon: string; // lucide-react icon name
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
