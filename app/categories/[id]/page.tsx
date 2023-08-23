import { Metadata } from 'next';

import {
  getAllCategoriesWithSlug,
  getCategory,
  getPostsByCategory,
} from 'lib/hygraph';

import { Container, PostList } from 'components';

export async function generateStaticParams() {
  const categories = await getAllCategoriesWithSlug();
  return categories.map(({ id }) => ({
    id,
  }));
}

async function handleGetPosts({ id }) {
  const data = await getPostsByCategory(id);
  return {
    posts: data.posts || [],
  };
}

interface Props {
  params: { id: string };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const category = await getCategory(id);

  return {
    title: `${category.name} | AI Dreams`,
    description: `An AI dreaming of ${category.name}.`,
    keywords: ['AI Dreams', `${category.name}`],
  };
}

export default async function Categories({ params }) {
  const { posts } = await handleGetPosts(params);

  return (
    <Container>
      {posts && posts.length > 0 ? <PostList posts={posts} /> : null}
    </Container>
  );
}
