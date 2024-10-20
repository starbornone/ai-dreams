import { fetchAPI } from '@/lib';

export async function getPostAndMorePosts(slug: string) {
  const data = await fetchAPI(
    `
    query GetPostAndMorePosts($slug: String!, $stage: Stage!) {
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
        }
        tags
        imageAuthor
        imageAuthorUrl
        ogImage: coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 1200, height: 800}}})
        }
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 1200, height: 800}}})
        }
      }
      morePosts: posts(stage: $stage, orderBy: date_DESC, first: 3, where: {slug_not_in: [$slug], AND: { date_not: null }}) {
        date
        title
        slug
        category {
          name
        }
        tags
        excerpt
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
  return data;
}
