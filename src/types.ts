export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  image: string;
  description: string;
  year: string;
  category: string;
  museum: string;
  arModel?: string;
}

export interface Heritage {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  arModel?: string;
  category: 'place' | 'culture' | 'festival';
}

export type Category = {
  id: string;
  name: string;
  image: string;
};