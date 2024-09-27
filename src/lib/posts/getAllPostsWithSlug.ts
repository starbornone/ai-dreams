import { fetchAPI } from '@/lib';

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
    query GetAllPostsWithSlug($stage: Stage!) {
      posts(stage: $stage) {
        slug
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
