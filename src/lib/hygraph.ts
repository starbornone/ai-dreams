/**
 * Fetches data from the Hygraph API.
 * @param {string} query - GraphQL query string.
 * @param {Object} options - Additional options including variables and preview mode.
 * @returns {Promise<Object>} - The JSON data fetched from the API.
 */
async function fetchAPI(query: string, { variables = {}, preview = false } = {}) {
  // Fetch the API with the provided query and variables
  const res = await fetch(process.env.HYGRAPH_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.HYGRAPH_DEV_AUTH_TOKEN // Use dev token in preview mode
          : process.env.HYGRAPH_PROD_AUTH_TOKEN // Use production token otherwise
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  // Parse response as JSON
  const json = await res.json();

  // Check for any errors in the response and throw an error if found
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  // Return the data from the JSON response
  return json.data;
}

/**
 * Fetches a preview post by its slug.
 * @param {string} slug - The slug of the post.
 * @param {boolean} preview - Whether to fetch in preview mode.
 * @returns {Promise<Object>} - The post data.
 */
export async function getPreviewPostBySlug(slug: string, preview?: boolean) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(where: {slug: $slug}, stage: $stage) {
        slug
      }
    }
  `,
    {
      preview,
      variables: {
        stage: 'DRAFT',
        slug,
      },
    }
  );
  return data.post;
}

/**
 * Fetches all categories with their slugs.
 * @returns {Promise<Array<Object>>} - Array of categories.
 */
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

/**
 * Fetches all posts with their slugs.
 * @returns {Promise<Array<Object>>} - Array of posts.
 */
export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts {
        slug
      }
    }
  `);
  return data.posts;
}

/**
 * Fetches all posts, ordered by date in descending order.
 * @returns {Promise<Array<Object>>} - Array of posts.
 */
export async function getAllPosts() {
  const data = await fetchAPI(`
    {
      posts(orderBy: date_DESC) {
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

/**
 * Fetches a limited number of posts and more posts (pagination).
 * @param {boolean} preview - Whether to fetch in preview mode.
 * @returns {Promise<Object>} - Data of limited posts and more posts.
 */
export async function getLimitedPosts(preview?: boolean) {
  const data = await fetchAPI(
    `   
    query LimitedPosts {
      posts(orderBy: date_DESC, first: 3, where: {NOT: {category: {slug: "fiction"}, OR: {NOT: {category: {slug: "resources"}}}}}) {
        date
        title
        slug
        excerpt
        tags
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
      }
      morePosts: posts(orderBy: date_DESC, skip: 3, where: {NOT: {category: {slug: "fiction"}, OR: {NOT: {category: {slug: "resources"}}}}}) {
        date
        title
        slug
        tags
      }
    }
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
      },
    }
  );
  return data;
}

/**
 * Fetches a category by its slug.
 * @param {string} category - The slug of the category.
 * @param {boolean} preview - Whether to fetch in preview mode.
 * @returns {Promise<Object>} - The category data.
 */
export async function getCategory(category: string, preview?: boolean) {
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
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        category,
      },
    }
  );
  return data.category;
}

/**
 * Fetches posts by category.
 * @param {string} category - The slug of the category.
 * @param {boolean} preview - Whether to fetch in preview mode.
 * @returns {Promise<Array<Object>>} - Array of posts for the category.
 */
export async function getPostsByCategory(category: string, preview?: boolean) {
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
      preview,
      variables: {
        stage: 'PUBLISHED',
        category,
      },
    }
  );
  return data.posts;
}

/**
 * Fetches a single post by its slug.
 * @param {string} slug - The slug of the post.
 * @param {boolean} preview - Whether to fetch in preview mode.
 * @returns {Promise<Object>} - The post data.
 */
export async function getPost(slug: string, preview?: boolean) {
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
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        slug,
      },
    }
  );
  return data.post;
}

/**
 * Fetches a post and more posts (excluding the current one) by its slug.
 * @param {string} slug - The slug of the post.
 * @param {boolean} preview - Whether to fetch in preview mode.
 * @returns {Promise<Object>} - The post and more posts data.
 */
export async function getPostAndMorePosts(slug: string, preview?: boolean) {
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
      morePosts: posts(orderBy: date_DESC, first: 3, where: {slug_not_in: [$slug]}) {
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
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        slug,
      },
    }
  );
  return data;
}

/**
 * Fetches all pages with their slugs.
 * @returns {Promise<Array<Object>>} - Array of pages.
 */
export async function getAllPagesWithSlug() {
  const data = await fetchAPI(`
    {
      pages {
        slug
      }
    }
  `);
  return data.pages;
}

/**
 * Fetches a single page by its slug.
 * @param {string} slug - The slug of the page.
 * @param {boolean} preview - Whether to fetch in preview mode.
 * @returns {Promise<Object>} - The page data.
 */
export async function getPage(slug: string, preview?: boolean) {
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
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        slug,
      },
    }
  );
  return data.page;
}
