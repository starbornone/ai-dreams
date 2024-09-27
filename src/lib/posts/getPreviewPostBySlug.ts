import { fetchAPI } from '@/lib';

export async function getPreviewPostBySlug(slug: string | string[]) {
  const data = await fetchAPI(
    `
    query GetPreviewPostBySlug($slug: String!, $stage: Stage!) {
      post(where: {slug: $slug}, stage: $stage) {
        slug
      }
    }
  `,
    {
      variables: {
        stage: 'DRAFT',
        slug,
      },
    }
  );
  return data.post;
}
