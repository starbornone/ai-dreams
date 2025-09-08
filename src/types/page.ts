// Page-related types
import { BodyContent } from './BodyContent';
import { CoverImage } from './CoverImage';

export interface PageData {
  title: string;
  slug: string;
  content?: BodyContent;
  markdownContent?: string;
  imageAuthor?: string;
  imageAuthorUrl?: string;
  ogImage?: CoverImage;
  coverImage: CoverImage;
  excerpt: string;
  localizations?: Array<{
    excerpt?: string;
    locale: string;
    title: string;
  }>;
}
