import { GetLimitedPostsResponse, PostData } from '@/types';

async function fetchAPI(query: string, { variables = {} } = {}) {
  const apiUrl = process.env.HYGRAPH_PROJECT_API;

  if (!apiUrl) {
    throw new Error('HYGRAPH_PROJECT_API is not defined');
  }

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        process.env.NODE_ENV === 'development'
          ? process.env.HYGRAPH_DEV_AUTH_TOKEN
          : process.env.HYGRAPH_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

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

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
    query GetAllPostsWithSlug($stage: Stage!) {
      posts(stage: $stage) {
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
  return data.posts;
}

export async function getLimitedPosts(skip = 0, limit = 3): Promise<PostData[]> {
  const data: GetLimitedPostsResponse = await fetchAPI(
    `
    query GetLimitedPosts($stage: Stage!, $skip: Int!, $limit: Int!) {
      posts(stage: $stage, orderBy: date_DESC, first: $limit, skip: $skip, where: { date_not: null }) {
        date
        title
        slug
        excerpt
        tags
        coverImage {
          url(transformation: { image: { resize: { fit: crop, width: 2000, height: 1000 } } })
        }
      }
    }
    `,
    {
      variables: {
        stage: process.env.NODE_ENV === 'development' ? 'DRAFT' : 'PUBLISHED',
        skip,
        limit,
      },
    }
  );
  return data.posts;
}

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

export async function getPostsByCategory(category: string) {
  const data = await fetchAPI(
    `
    query GetPostsByCategory($category: String!, $stage: Stage!) {
      posts(stage: $stage, where: {category: {slug: $category}}, orderBy: date_DESC) {
        date
        title
        slug
        excerpt
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

export async function getPost(slug: string) {
  const data = await fetchAPI(
    `
    query GetPost($slug: String!, $stage: Stage!) {
      post(stage: $stage, where: {slug: $slug}) {
        date
        title
        slug
        updatedAt
        excerpt
        content {
          html
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

export async function getPostAndMorePosts(slug: string) {
  const data = await fetchAPI(
    `
    query GetPostAndMorePosts($slug: String!, $stage: Stage!) {
      post(stage: $stage, where: {slug: $slug}) {
        date
        title
        slug
        updatedAt
        excerpt
        content {
          html
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
      morePosts: posts(stage: $stage, orderBy: date_DESC, first: 3, where: {slug_not_in: [$slug]}) {
        date
        title
        slug
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

export async function getPage(slug: string) {
  const data = await fetchAPI(
    `
    query GetPage($slug: String!, $stage: Stage!) {
      page(stage: $stage, where: {slug: $slug}) {
        title
        slug
        updatedAt
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
