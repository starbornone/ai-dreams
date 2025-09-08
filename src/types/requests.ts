// API request types

export interface GetLimitedPostsRequest {
  skip?: number;
  skipPost?: string;
  limit?: number;
  category?: string;
}

export interface GetAllDataResponse {
  posts: Array<{
    date: string;
    tags: string[];
    category: {
      name: string;
      slug: string;
    };
  }>;
}
