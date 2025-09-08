// Post-related types
import { BodyContent } from './BodyContent';
import { CoverImage } from './CoverImage';

export interface PostData {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  keywords: string[];
  category?: {
    name: string;
    slug?: string;
  };
  content?: BodyContent;
  coverImage: CoverImage;
  ogImage?: CoverImage;
  markdownContent?: string;
  imageAuthor?: string;
  imageAuthorUrl?: string;
}

export interface CategoryData {
  name: string;
  slug: string;
  count?: number;
}

export interface TagCount {
  name: string;
  count: number;
}
