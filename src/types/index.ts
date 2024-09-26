export interface CoverImage {
  url: string;
}

export interface BodyContent {
  html: string;
}

export interface PageData {
  content?: BodyContent;
  coverImage: CoverImage;
  excerpt: string;
  imageAuthor?: string;
  imageAuthorUrl?: string;
  ogImage?: CoverImage;
  title: string;
  updatedAt?: string;
}

export interface PostData {
  content?: BodyContent;
  coverImage: CoverImage;
  date: string;
  excerpt: string;
  imageAuthor?: string;
  imageAuthorUrl?: string;
  ogImage?: CoverImage;
  slug: string;
  tags: string[];
  title: string;
  updatedAt?: string;
}

export interface GetLimitedPostsResponse {
  posts: PostData[];
}
