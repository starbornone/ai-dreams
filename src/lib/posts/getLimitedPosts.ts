import { fetchAPI } from '@/lib';
import { PostData } from '@/types';

export interface GetLimitedPostsResponse {
  posts: PostData[];
}

interface GetLimitedPostsRequest {
  skip: number;
  skipPost?: string;
  limit?: number;
  category?: string;
}

export async function getLimitedPosts({
  skip = 0,
  skipPost,
  limit,
  category,
}: GetLimitedPostsRequest): Promise<PostData[]> {
  const data: GetLimitedPostsResponse = await fetchAPI(
    `
    query GetLimitedPosts($stage: Stage!, $skip: Int!, ${limit ? '$limit: Int!' : ''}
    ${category ? '$category: String!' : ''} ${skipPost ? '$skipPost: String!' : ''}) {
      posts(
        stage: $stage,
        orderBy: date_DESC,
        ${limit ? 'first: $limit,' : ''}
        skip: $skip,
        where: { 
          date_not: null, 
          ${category ? 'category: { slug: $category }' : ''}
          ${skipPost ? 'slug_not_in: [$skipPost]' : ''}
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
        limit: limit ?? undefined,
        skip,
        stage: process.env.NODE_ENV === 'development' ? 'DRAFT' : 'PUBLISHED',
        skipPost: skipPost ?? undefined,
      },
    }
  );
  return data.posts;
}
