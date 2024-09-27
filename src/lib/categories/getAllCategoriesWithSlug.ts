import { fetchAPI } from '@/lib';

export async function getAllCategoriesWithSlug() {
  const data = await fetchAPI(
    `
    query GetAllCategoriesWithSlug($stage: Stage!) {
      categories(stage: $stage) {
        name
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
  return data.categories;
}
