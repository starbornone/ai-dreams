import { fetchAPI } from '@/lib';

export async function getAllPagesWithSlug() {
  const data = await fetchAPI(
    `
    query GetAllPagesWithSlug($stage: Stage!) {
      pages(stage: $stage) {
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
  return data.pages;
}
