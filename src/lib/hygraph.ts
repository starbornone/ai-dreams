async function fetchAPI(query: string, { variables = {}, preview = false } = {}) {
  const apiUrl = process.env.HYGRAPH_PROJECT_API;

  if (!apiUrl) {
    throw new Error('HYGRAPH_PROJECT_API is not defined');
  }

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${preview ? process.env.HYGRAPH_DEV_AUTH_TOKEN : process.env.HYGRAPH_PROD_AUTH_TOKEN}`,
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
    query PostBySlug($slug: String!, $stage: Stage!) {
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
  const data = await fetchAPI(`
    {
      categories {
        name
        slug
      }
    }
  `);
  return data.categories;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(stage: PUBLISHED) {
        slug
      }
    }
  `);
  return data.posts;
}

export async function getAllPosts() {
  const data = await fetchAPI(`
    {
      posts(stage: PUBLISHED, orderBy: date_DESC) {
        date
        title
        slug
        excerpt
        tags
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 1200, height: 800}}})
        }
      }
    }
  `);
  return data.posts;
}

export async function getLimitedPosts() {
  const data = await fetchAPI(
    `
    query LimitedPosts {
      posts(stage: PUBLISHED, orderBy: date_DESC, first: 3) {
        date
        title
        slug
        excerpt
        tags
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
      }
      morePosts: posts(stage: PUBLISHED, orderBy: date_DESC, skip: 3) {
        date
        title
        slug
        tags
      }
    }
  `
  );
  return data;
}

export async function getCategory(category: string) {
  const data = await fetchAPI(
    `
    query Category($category: String!) {
      category(where: {slug: $category}) {
        name
        slug
      }
    }
  `,
    {
      variables: {
        category,
      },
    }
  );
  return data.category;
}

export async function getPostsByCategory(category: string) {
  const data = await fetchAPI(
    `
    query PostsByCategory($category: String!, $stage: Stage!) {
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
        stage: 'PUBLISHED',
      },
    }
  );
  return data.posts;
}

export async function getPost(slug: string) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
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
        stage: 'PUBLISHED',
      },
    }
  );
  return data.post;
}

export async function getPostAndMorePosts(slug: string) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
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
      morePosts: posts(stage: PUBLISHED, orderBy: date_DESC, first: 3, where: {slug_not_in: [$slug]}) {
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
        stage: 'PUBLISHED',
      },
    }
  );
  return data;
}

export async function getAllPagesWithSlug() {
  const data = await fetchAPI(`
    {
      pages(stage: PUBLISHED) {
        slug
      }
    }
  `);
  return data.pages;
}

export async function getPage(slug: string) {
  const data = await fetchAPI(
    `
    query PageBySlug($slug: String!, $stage: Stage!) {
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
        stage: 'PUBLISHED',
      },
    }
  );
  return data.page;
}
