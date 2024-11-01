import { BodyContent } from './BodyContent';
import { CoverImage } from './CoverImage';

export interface PageData {
  content?: BodyContent;
  coverImage: CoverImage;
  excerpt: string;
  imageAuthor?: string;
  imageAuthorUrl?: string;
  markdownContent?: BodyContent;
  ogImage?: CoverImage;
  title: string;
}
