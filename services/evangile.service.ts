/**
 * Service Évangile du jour — Bolls.life API
 * Récupère la lecture liturgique quotidienne via l'API gratuite Bolls.life.
 */

import { BibleVerse, ChapterContent } from '@/types/bible.types';

const API_BASE_URL = 'https://bolls.life';

// Helper pour nettoyer le HTML renvoyé par Bolls
const stripHtml = (html: string): string => {
  if (!html) return '';
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
};

/**
 * Référence liturgique quotidienne.
 * On mappe chaque jour de l'année à un passage d'Évangile.
 * On utilise un cycle simplifié basé sur le jour de l'année.
 */
const DAILY_READINGS = [
  { book: 40, chapter: 5, startVerse: 1, endVerse: 16, label: 'Évangile selon Saint Matthieu', title: '« Vous êtes le sel de la terre »' },
  { book: 40, chapter: 6, startVerse: 1, endVerse: 18, label: 'Évangile selon Saint Matthieu', title: '« Quand tu fais l\'aumône »' },
  { book: 40, chapter: 7, startVerse: 7, endVerse: 14, label: 'Évangile selon Saint Matthieu', title: '« Demandez, on vous donnera »' },
  { book: 40, chapter: 11, startVerse: 25, endVerse: 30, label: 'Évangile selon Saint Matthieu', title: '« Venez à moi, vous tous qui peinez »' },
  { book: 40, chapter: 13, startVerse: 1, endVerse: 23, label: 'Évangile selon Saint Matthieu', title: '« La parabole du semeur »' },
  { book: 40, chapter: 18, startVerse: 1, endVerse: 14, label: 'Évangile selon Saint Matthieu', title: '« Les petits et les humbles »' },
  { book: 40, chapter: 25, startVerse: 31, endVerse: 46, label: 'Évangile selon Saint Matthieu', title: '« Le jugement dernier »' },
  { book: 41, chapter: 1, startVerse: 14, endVerse: 28, label: 'Évangile selon Saint Marc', title: '« Convertissez-vous et croyez »' },
  { book: 41, chapter: 4, startVerse: 35, endVerse: 41, label: 'Évangile selon Saint Marc', title: '« La tempête apaisée »' },
  { book: 41, chapter: 6, startVerse: 30, endVerse: 44, label: 'Évangile selon Saint Marc', title: '« La multiplication des pains »' },
  { book: 41, chapter: 10, startVerse: 17, endVerse: 27, label: 'Évangile selon Saint Marc', title: '« L\'homme riche »' },
  { book: 41, chapter: 12, startVerse: 28, endVerse: 34, label: 'Évangile selon Saint Marc', title: '« Le plus grand commandement »' },
  { book: 42, chapter: 1, startVerse: 26, endVerse: 38, label: 'Évangile selon Saint Luc', title: '« L\'Annonciation »' },
  { book: 42, chapter: 2, startVerse: 1, endVerse: 20, label: 'Évangile selon Saint Luc', title: '« La naissance de Jésus »' },
  { book: 42, chapter: 4, startVerse: 16, endVerse: 30, label: 'Évangile selon Saint Luc', title: '« Jésus à Nazareth »' },
  { book: 42, chapter: 6, startVerse: 27, endVerse: 38, label: 'Évangile selon Saint Luc', title: '« Aimez vos ennemis »' },
  { book: 42, chapter: 10, startVerse: 25, endVerse: 37, label: 'Évangile selon Saint Luc', title: '« Le bon Samaritain »' },
  { book: 42, chapter: 11, startVerse: 1, endVerse: 13, label: 'Évangile selon Saint Luc', title: '« Enseignez-nous à prier »' },
  { book: 42, chapter: 15, startVerse: 1, endVerse: 32, label: 'Évangile selon Saint Luc', title: '« Le fils prodigue »' },
  { book: 42, chapter: 24, startVerse: 13, endVerse: 35, label: 'Évangile selon Saint Luc', title: '« Les disciples d\'Emmaüs »' },
  { book: 43, chapter: 1, startVerse: 1, endVerse: 18, label: 'Évangile selon Saint Jean', title: '« Au commencement était le Verbe »' },
  { book: 43, chapter: 3, startVerse: 16, endVerse: 21, label: 'Évangile selon Saint Jean', title: '« Dieu a tant aimé le monde »' },
  { book: 43, chapter: 6, startVerse: 35, endVerse: 51, label: 'Évangile selon Saint Jean', title: '« Je suis le pain de vie »' },
  { book: 43, chapter: 10, startVerse: 1, endVerse: 18, label: 'Évangile selon Saint Jean', title: '« Le bon pasteur »' },
  { book: 43, chapter: 13, startVerse: 1, endVerse: 17, label: 'Évangile selon Saint Jean', title: '« Le lavement des pieds »' },
  { book: 43, chapter: 14, startVerse: 1, endVerse: 14, label: 'Évangile selon Saint Jean', title: '« Je suis le chemin, la vérité et la vie »' },
  { book: 43, chapter: 15, startVerse: 1, endVerse: 17, label: 'Évangile selon Saint Jean', title: '« Je suis la vigne »' },
  { book: 43, chapter: 17, startVerse: 1, endVerse: 11, label: 'Évangile selon Saint Jean', title: '« La prière sacerdotale »' },
  { book: 43, chapter: 20, startVerse: 1, endVerse: 18, label: 'Évangile selon Saint Jean', title: '« La résurrection »' },
  { book: 43, chapter: 21, startVerse: 1, endVerse: 14, label: 'Évangile selon Saint Jean', title: '« L\'apparition au bord du lac »' },
];

/**
 * Retourne la lecture du jour basée sur le jour de l'année.
 */
export const getDailyReadingReference = () => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const index = dayOfYear % DAILY_READINGS.length;
  return DAILY_READINGS[index];
};

/**
 * Récupère les versets de l'Évangile du jour depuis Bolls.life
 */
export const fetchEvangileDuJour = async (): Promise<{
  label: string;
  title: string;
  verses: BibleVerse[];
  reference: string;
}> => {
  const reading = getDailyReadingReference();

  const urlsToTry = [
    `${API_BASE_URL}/get-text/FRLSG/${reading.book}/${reading.chapter}/`,
    `${API_BASE_URL}/get-text/LSG/${reading.book}/${reading.chapter}/`,
  ];

  let rawData: any = null;

  for (const url of urlsToTry) {
    try {
      const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache 1h
      if (response.ok) {
        const json = await response.json();
        if (Array.isArray(json) && json.length > 0) {
          rawData = json;
          break;
        }
      }
    } catch (e) {
      // Continue to fallback
    }
  }

  if (!rawData || !Array.isArray(rawData)) {
    throw new Error('Impossible de charger l\'Évangile du jour');
  }

  // Filtrer uniquement les versets de la plage demandée
  const filteredVerses = rawData
    .filter((v: any) => {
      const verseNum = v.verse || v.pk;
      return verseNum >= reading.startVerse && verseNum <= reading.endVerse;
    })
    .map((v: any) => ({
      book: String(reading.book),
      chapter: reading.chapter,
      verse: v.verse || v.pk,
      text: stripHtml(v.text),
      translation: 'FRLSG',
    }));

  // Construire la référence textuelle (ex: "Mt 5, 1-16")
  const bookNames: Record<number, string> = { 40: 'Mt', 41: 'Mc', 42: 'Lc', 43: 'Jn' };
  const bookAbbr = bookNames[reading.book] || `Livre ${reading.book}`;
  const reference = `${bookAbbr} ${reading.chapter}, ${reading.startVerse}-${reading.endVerse}`;

  return {
    label: reading.label,
    title: reading.title,
    verses: filteredVerses,
    reference,
  };
};
