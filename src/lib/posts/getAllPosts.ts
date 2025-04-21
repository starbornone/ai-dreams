import { fetchAPI } from '@/lib';
import { PostData } from '@/types';

export interface GetAllPostsResponse {
  posts: PostData[];
}

/**
 * Fetches all blog posts for use in search and related content suggestions
 *
 * @returns An array of all published posts with essential metadata
 */
export async function getAllPosts(): Promise<PostData[]> {
  const data: GetAllPostsResponse = await fetchAPI(
    `
    query GetAllPosts($stage: Stage!) {
      posts(
        stage: $stage,
        where: { date_not: null }
      ) {
        title
        slug
        excerpt
        category {
          name
          slug
        }
        tags
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 1200, height: 800}}})
        }
      }
    }
    `,
    {
      variables: {
        stage: process.env.NODE_ENV === 'development' ? 'DRAFT' : 'PUBLISHED',
      },
    }
  );
  return data.posts;
}
