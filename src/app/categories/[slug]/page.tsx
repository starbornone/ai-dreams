export const dynamic = 'force-static';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Container } from '@/components';
import { PostPreview } from '@/features';
import { getAllCategoriesWithSlug, getCategory, getPostsByCategory } from '@/lib';
import { PostData } from '@/types';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const categories = await getAllCategoriesWithSlug();
  return categories.map(({ slug }: { slug: string }) => ({
    slug,
  }));
}

export async function generateMetadata(props: { params: Promise<Params> }): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;

  const category = await getCategory(slug);

  if (!category) {
    notFound();
  }

  return {
    title: category.name,
    description: `An AI dreaming of ${category.name}.`,
    keywords: ['AI Dreams', `${category.name}`],
  };
}

async function handleGetPosts(slug: string): Promise<PostData[]> {
  const posts = await getPostsByCategory(slug);
  return posts;
}

export default async function Page(props: { params: Promise<Params> }) {
  const params = await props.params;
  const slug = params.slug;

  const posts = await handleGetPosts(slug);

  return (
    <Container>
      {posts && posts.length > 0 ? (
        <section className="my-12 grid grid-cols-1 gap-y-12 md:mb-32 lg:gap-y-16">
          {posts.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </section>
      ) : null}
    </Container>
  );
}
