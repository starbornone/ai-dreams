import { fetchAPI } from '@/lib';

export async function getAllPostDates() {
  const data = await fetchAPI(
    `
    query GetAllPostsDates($stage: Stage!) {
      posts(stage: $stage) {
        date
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
