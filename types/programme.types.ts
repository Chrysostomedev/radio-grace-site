export interface Programme {
  id: number;
  titre: string;
  description: string;
  image?: string;
  categorie: string;
}

export interface ProgrammeList {
  data: Programme[];
  links: any;
  meta: any;
}
