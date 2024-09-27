import { fetchAPI } from '@/lib';
import { PostData } from '@/types';

export interface GetLimitedPostsResponse {
  posts: PostData[];
}

export async function getLimitedPosts(skip = 0, limit = 3): Promise<PostData[]> {
  const data: GetLimitedPostsResponse = await fetchAPI(
    `
    query GetLimitedPosts($stage: Stage!, $skip: Int!, $limit: Int!) {
      posts(stage: $stage, orderBy: date_DESC, first: $limit, skip: $skip, where: { date_not: null }) {
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
        stage: process.env.NODE_ENV === 'development' ? 'DRAFT' : 'PUBLISHED',
        skip,
        limit,
      },
    }
  );
  return data.posts;
}
