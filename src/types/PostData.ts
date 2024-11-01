import { BodyContent } from './BodyContent';
import { CoverImage } from './CoverImage';

export interface PostData {
  category?: { name: string; slug?: string };
  content?: BodyContent;
  coverImage: CoverImage;
  date: string;
  excerpt: string;
  imageAuthor?: string;
  imageAuthorUrl?: string;
  keywords: string[];
  markdownContent?: string;
  ogImage?: CoverImage;
  slug: string;
  tags: string[];
  title: string;
}
