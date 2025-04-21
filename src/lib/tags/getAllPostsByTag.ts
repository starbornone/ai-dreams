import { fetchAPI } from '@/lib';
import { PostData } from '@/types';

/**
 * Fetches all posts that have a specific tag
 * @param tag The tag to filter posts by
 * @returns Array of posts with the specified tag
 */
export async function getAllPostsByTag(tag: string): Promise<PostData[]> {
  const data = await fetchAPI(
    `
    query GetPostsByTag($tag: String!) {
      posts(
        stage: PUBLISHED, 
        where: {tags_contains_some: [$tag]}, 
        orderBy: date_DESC
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
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
      }
    }
  `,
    {
      variables: {
        tag,
      },
    }
  );
  return data.posts;
}
