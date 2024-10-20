import { fetchAPI } from '@/lib';

export async function getPost(slug: string) {
  const data = await fetchAPI(
    `
    query GetPost($slug: String!, $stage: Stage!) {
      post(stage: $stage, where: {slug: $slug}) {
        date
        title
        slug
        excerpt
        content {
          html
        }
        category {
          name
          slug
        }
        tags
        keywords
        imageAuthor
        imageAuthorUrl
        ogImage: coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 1200, height: 800}}})
        }
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 1200, height: 800}}})
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
  return data.post;
}
