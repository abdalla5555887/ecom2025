export interface Ibrand {
  results: number;
  metadata: Metadata;
  data: Datum[];
}

export interface Datum {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}

interface RootObject {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
