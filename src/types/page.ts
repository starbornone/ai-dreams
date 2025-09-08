// Page-related types
import { BodyContent } from './body-content';
import { CoverImage } from './cover-image';

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
