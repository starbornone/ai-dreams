async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID);
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(where: {slug: $slug}, stage: $stage) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        stage: "DRAFT",
        slug,
      },
    }
  );
  return data.post;
}

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

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    {
      posts(orderBy: date_DESC, first: 12) {
        date
        title
        slug
        excerpt
        tags
        coverImage {
          url(transformation: {
            image: {
              resize: {
                fit:crop,
                width:2000,
                height:1000
              }
            }
          })
        }
      }
    }
  `,
    { preview }
  );
  return data.posts;
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(stage: $stage, where: {slug: $slug}) {
        date
        title
        slug
        excerpt
        content {
          html
        }
        tags
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
        excerpt
        tags
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 1200, height: 800}}})
        }
      }
    }
  `,
    {
      preview,
      variables: {
        stage: preview ? "DRAFT" : "PUBLISHED",
        slug,
      },
    }
  );
  return data;
}

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

export async function getPage(slug, preview) {
  const data = await fetchAPI(
    `
    query PageBySlug($slug: String!, $stage: Stage!) {
      page(stage: $stage, where: {slug: $slug}) {
        title
        slug
        excerpt
        content {
          html
        }
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
        stage: preview ? "DRAFT" : "PUBLISHED",
        slug,
      },
    }
  );
  return data;
}
