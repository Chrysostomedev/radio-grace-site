import { get } from '../core/axios';
import { ProgrammeList, Programme } from '../types/programme.types';

export const programmesService = {
  getProgrammes: async (page = 1, perPage = 10): Promise<ProgrammeList> => {
    return get<ProgrammeList>(`/programmes`, { page, per_page: perPage });
  },

  getProgramme: async (id: number | string): Promise<Programme> => {
    return get<Programme>(`/programmes/${id}`);
  },
};
