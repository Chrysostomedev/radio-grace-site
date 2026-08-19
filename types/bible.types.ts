export interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
  translation: string;
}

export interface ChapterContent {
  book: string;
  chapter: number;
  verses: BibleVerse[];
  translation: string;
  language: string;
}

export interface BibleTranslation {
  name: string;
  abbreviation: string;
  language: string;
}

export interface SearchResult {
  book: string;
  bookId: number;
  chapter: number;
  verse: number;
  text: string;
  translation: string;
}
