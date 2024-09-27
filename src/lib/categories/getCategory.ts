import { fetchAPI } from '@/lib';

export async function getCategory(category: string) {
  const data = await fetchAPI(
    `
    query GetCategory($stage: Stage!, $category: String!) {
      category(stage: $stage, where: {slug: $category}) {
        name
        slug
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
  return data.category;
}
