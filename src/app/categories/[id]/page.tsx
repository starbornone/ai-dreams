import { Container, PostList } from '@/components';
import { getAllCategoriesWithSlug, getCategory, getPostsByCategory } from '@/lib/hygraph';
import { Metadata } from 'next';

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const categories = await getAllCategoriesWithSlug();
  return categories.map(({ id }: { id: string }) => ({
    id,
  }));
}

async function handleGetPosts({ id }: { id: string }) {
  const data = await getPostsByCategory(id);
  return {
    posts: data || [],
  };
}

export async function generateMetadata({ params: { id } }: PageProps): Promise<Metadata> {
  const category = await getCategory(id);

  return {
    title: `${category.name} | AI Dreams`,
    description: `An AI dreaming of ${category.name}.`,
    keywords: ['AI Dreams', `${category.name}`],
  };
}

export default async function Page({ params }: PageProps) {
  const { posts } = await handleGetPosts(params);

  return <Container>{posts && posts.length > 0 ? <PostList posts={posts} /> : null}</Container>;
}
