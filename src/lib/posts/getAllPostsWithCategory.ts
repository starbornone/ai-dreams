import { fetchAPI } from '@/lib';

export async function getAllPostsWithCategory() {
  const data = await fetchAPI(
    `
    query GetAllPostsWithCategory($stage: Stage!) {
      posts(stage: $stage) {
        title
        slug
        category {
          name
          slug
        }
        stage
      }
    }
  `,
    {
      variables: {
        stage: 'PUBLISHED',
      },
    }
  );
  return data.posts;
}
