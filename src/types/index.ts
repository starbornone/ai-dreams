export interface CoverImage {
  url: string;
}

export interface Post {
  date: string;
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  coverImage: CoverImage;
}

export interface GetLimitedPostsResponse {
  posts: Post[];
}
