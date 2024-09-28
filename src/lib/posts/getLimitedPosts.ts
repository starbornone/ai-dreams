import { fetchAPI } from '@/lib';
import { PostData } from '@/types';

export interface GetLimitedPostsResponse {
  posts: PostData[];
}

interface GetLimitedPostsRequest {
  skip: number;
  limit?: number;
  category?: string;
}

export async function getLimitedPosts({ skip = 0, limit = 3, category }: GetLimitedPostsRequest): Promise<PostData[]> {
  const data: GetLimitedPostsResponse = await fetchAPI(
    `
    query GetLimitedPosts($stage: Stage!, $skip: Int!, $limit: Int!
    ${category ? '$category: String!' : ''}) {
      posts(
        stage: $stage,
        orderBy: date_DESC,
        first: $limit,
        skip: $skip,
        where: { 
          date_not: null, 
          ${category ? 'category: { slug: $category }' : ''}
        }
      ) {
        date
        title
        slug
        excerpt
        category {
          name
          slug
        }
        tags
        coverImage {
          url(transformation: { image: { resize: { fit: crop, width: 2000, height: 1000 } } })
        }
      }
    }
    `,
    {
      variables: {
        category: category ?? null,
        limit,
        skip,
        stage: process.env.NODE_ENV === 'development' ? 'DRAFT' : 'PUBLISHED',
      },
    }
  );
  return data.posts;
}
