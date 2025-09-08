// Content-related types

export interface ContentItem {
  title: string;
  slug: string;
  tags?: string[];
  category?: {
    name: string;
    slug: string;
  };
  score?: number;
}
