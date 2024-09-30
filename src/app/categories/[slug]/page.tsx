import { Container } from '@/components';
import { PostPreview } from '@/features';
import { getAllCategoriesWithSlug, getCategory, getPostsByCategory } from '@/lib';
import { PostData } from '@/types';
import { Metadata } from 'next';

export const experimental_ppr = true;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const categories = await getAllCategoriesWithSlug();
  return categories.map(({ slug }: { slug: string }) => ({
    slug,
  }));
}

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const category = await getCategory(slug);

  return {
    title: category.name,
    description: `An AI dreaming of ${category.name}.`,
    keywords: ['AI Dreams', `${category.name}`],
  };
}

async function handleGetPosts({ slug }: { slug: string }): Promise<PostData[]> {
  const posts = await getPostsByCategory(slug);
  return posts;
}

export default async function Page({ params }: Props) {
  const posts = await handleGetPosts(params);

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
