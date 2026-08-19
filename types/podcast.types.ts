export interface Podcast {
  id: number;
  titre: string;
  description?: string;
  audio_url: string;
  image?: string;
  duree?: string;
  programme_id?: number;
}

export interface PodcastList {
  data: Podcast[];
  links: any;
  meta: any;
}
