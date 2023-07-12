async function fetchAPI(query, { variables, preview } = {}) {
    const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
    })
    const json = await res.json()

    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json.data
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
                stage: 'DRAFT',
                slug,
            },
        },
    )
    return data.post
}

export async function getAllCategoriesWithSlug() {
    const data = await fetchAPI(`
    {
      categories {
        name
        slug
      }
    }
  `)
    return data.categories
}

export async function getAllPostsWithSlug() {
    const data = await fetchAPI(`
    {
      posts {
        slug
      }
    }
  `)
    return data.posts
}

export async function getAllPosts(preview) {
    const data = await fetchAPI(
        `
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
  `,
        { preview },
    )
    return data.posts
}

export async function getLimitedPosts(preview) {
    const data = await fetchAPI(
        `   
        query LimitedPosts {
          posts(orderBy: date_DESC, first: 3) {
            date
            title
            slug
            excerpt
            tags
            coverImage {
              url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
            }
          }
          morePosts: posts(orderBy: date_DESC, skip: 3) {
            date
            title
            slug
            tags
          }
        }
  `,
        { preview },
    )
    return data
}

export async function getCategory(category) {
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
        },
    )
    return data.category
}

export async function getPostsByCategory(category, preview) {
    const data = await fetchAPI(
        `
          query PostsByCategory($category: String!, $stage: Stage!) {
            posts(stage: $stage, where: {category: {slug: $category}}, orderBy: date_DESC, first: 3) {
              date
              title
              slug
              excerpt
              tags
              coverImage {
                url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
              }
            }
            morePosts: posts(where: {category: {slug: $category}}, orderBy: date_DESC, skip: 3) {
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
                category,
            },
        },
    )
    return data
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
                stage: preview ? 'DRAFT' : 'PUBLISHED',
                slug,
            },
        },
    )
    return data
}

export async function getAllPagesWithSlug() {
    const data = await fetchAPI(`
    {
      pages {
        slug
      }
    }
  `)
    return data.pages
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
                stage: preview ? 'DRAFT' : 'PUBLISHED',
                slug,
            },
        },
    )
    return data
}
