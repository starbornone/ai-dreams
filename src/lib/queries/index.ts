// GraphQL Query Builder

import { getCurrentStage } from '@/config/api';

export const QUERIES = {
  // Post queries
  GET_ALL_POSTS: `
    query GetAllPosts($stage: Stage!) {
      posts(
        stage: $stage,
        where: { date_not: null }
      ) {
        title
        slug
        excerpt
        category {
          name
          slug
        }
        tags
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 1200, height: 800}}})
        }
      }
    }
  `,

  GET_POST: `
    query GetPost($slug: String!, $stage: Stage!) {
      post(stage: $stage, where: {slug: $slug}) {
        title
        slug
        excerpt
        date
        content {
          html
        }
        markdownContent
        tags
        category {
          name
          slug
        }
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        ogImage: coverImage {
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

  GET_LIMITED_POSTS: `
    query GetLimitedPosts($stage: Stage!, $skip: Int!, $limit: Int, $category: String, $skipPost: String) {
      posts(
        stage: $stage,
        orderBy: date_DESC,
        first: $limit,
        skip: $skip,
        where: { 
          date_not: null, 
          category: { slug: $category }
          slug_not_in: [$skipPost]
        }
      ) {
        date
        title
        slug
        excerpt
        category {
          name
          slug
        }
        tags
        coverImage {
          url(transformation: { image: { resize: { fit: crop, width: 2000, height: 1000 } } })
        }
      }
    }
  `,

  GET_POSTS_BY_CATEGORY: `
    query GetPostsByCategory($category: String!, $stage: Stage!) {
      posts(
        stage: $stage,
        orderBy: date_DESC,
        where: { 
          date_not: null, 
          category: { slug: $category } 
        }
      ) {
        date
        title
        slug
        excerpt
        category {
          name
          slug
        }
        tags
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 1200, height: 800}}})
        }
      }
    }
  `,

  GET_POSTS_BY_TAG: `
    query GetPostsByTag($tag: String!, $stage: Stage!) {
      posts(
        stage: $stage,
        orderBy: date_DESC,
        where: { 
          date_not: null, 
          tags_contains_some: [$tag] 
        }
      ) {
        date
        title
        slug
        excerpt
        category {
          name
          slug
        }
        tags
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 1200, height: 800}}})
        }
      }
    }
  `,

  // Page queries
  GET_PAGE: `
    query GetPage($slug: String!, $stage: Stage!) {
      page(stage: $stage, where: {slug: $slug}) {
        title
        slug
        content {
          html
        }
        markdownContent
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

  GET_ALL_PAGES: `
    query GetAllPages($stage: Stage!) {
      pages(stage: $stage) {
        title
        slug
        content {
          html
        }
        markdownContent
        imageAuthor
        imageAuthorUrl
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

  // Category queries
  GET_CATEGORY: `
    query GetCategory($category: String!, $stage: Stage!) {
      category(stage: $stage, where: {slug: $category}) {
        name
        slug
      }
    }
  `,

  GET_ALL_CATEGORIES: `
    query GetAllCategories($stage: Stage!) {
      categories(stage: $stage) {
        name
        slug
      }
    }
  `,

  // Data aggregation queries
  GET_ALL_DATA: `
    query GetAllData($stage: Stage!) {
      posts(
        stage: $stage,
        where: { date_not: null }
      ) {
        date
        tags
        category {
          name
          slug
        }
      }
    }
  `,
} as const;

// Helper function to get common variables
export const getCommonVariables = () => ({
  stage: getCurrentStage(),
});

// Helper function to build query with common variables
export const buildQuery = (query: string, additionalVariables: Record<string, any> = {}) => ({
  query,
  variables: {
    ...getCommonVariables(),
    ...additionalVariables,
  },
});
