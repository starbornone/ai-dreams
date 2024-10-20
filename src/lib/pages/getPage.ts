import { fetchAPI } from '@/lib';

export async function getPage(slug: string) {
  const data = await fetchAPI(
    `
    query GetPage($slug: String!, $stage: Stage!) {
      page(stage: $stage, where: {slug: $slug}) {
        title
        slug
        content {
          html
        }
        imageAuthor
        imageAuthorUrl
        ogImage: coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 1200, height: 800}}})
        }
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 1200, height: 800}}})
        }
        localizations {
          excerpt
          locale
          title
        }
      }
    }
  `,
    {
      variables: {
        slug,
        stage: process.env.NODE_ENV === 'development' ? 'DRAFT' : 'PUBLISHED',
      },
    }
  );
  return data.page;
}
