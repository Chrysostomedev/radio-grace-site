import { get } from '../core/axios';
import { PodcastList, Podcast } from '../types/podcast.types';

export const podcastsService = {
  getPodcasts: async (page = 1, perPage = 10): Promise<PodcastList> => {
    return get<PodcastList>(`/podcasts`, { page, per_page: perPage });
  },

  getPodcast: async (id: number | string): Promise<Podcast> => {
    return get<Podcast>(`/podcasts/${id}`);
  },
};
