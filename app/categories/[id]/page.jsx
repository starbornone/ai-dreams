import {
  getAllCategoriesWithSlug,
  getCategory,
  getPostsByCategory,
} from 'lib/graphcms';

import { PostList } from 'components';

export async function generateStaticParams() {
  const categories = await getAllCategoriesWithSlug();
  return categories.map(({ id }) => ({
    id,
  }));
}

export async function getPosts({ id }) {
  const data = await getPostsByCategory(id);
  return {
    posts: data.posts || [],
  };
}

export async function generateMetadata({ params: { id } }) {
  const category = await getCategory(id);

  return {
    title: `${category?.name ? `${category.name} | ` : ''}AI Dreams`,
    description: `An AI dreaming of ${category?.name}.`,
    keywords: ['AI Dreams', `${category?.name}`],
  };
}

export default async function Categories({ params }) {
  const { posts } = await getPosts(params);

  return <>{posts && posts.length > 0 ? <PostList posts={posts} /> : null}</>;
}
