import { fetchAPI } from '@/lib';

export async function getPostsByCategory(category: string) {
  const data = await fetchAPI(
    `
    query GetPostsByCategory($category: String!, $stage: Stage!) {
      posts(stage: $stage, where: {category: {slug: $category}}, orderBy: date_DESC) {
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
        category,
        stage: process.env.NODE_ENV === 'development' ? 'DRAFT' : 'PUBLISHED',
      },
    }
  );
  return data.posts;
}
