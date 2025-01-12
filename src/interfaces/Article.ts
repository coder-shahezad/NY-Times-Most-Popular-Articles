interface MediaProps {
  'media-metadata': Array<{ url: string }>;
}

export interface ArticleProps {
  id: number;
  title: string;
  abstract: string;
  media: Array<MediaProps>;
  source: string;
}
