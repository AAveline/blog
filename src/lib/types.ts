export interface DBArticle {
  attributes: {
    title:string;
    description: string;
    date: string;
    slug: string;
    tags: string[];
  };
  html: string;
}

export interface Article {
  title:string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  html: string;
}