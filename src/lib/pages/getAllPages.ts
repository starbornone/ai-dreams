import { fetchAPI } from '@/lib';

export async function getAllPages() {
  const data = await fetchAPI(
    `
    query GetAllPagesWithSlug($stage: Stage!) {
      pages(stage: $stage) {
        title
        slug
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
  return data.pages;
}
