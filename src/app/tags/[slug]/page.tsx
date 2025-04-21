import { Metadata } from 'next';

import { Container } from '@/components';
import { PostPreview } from '@/features';
import { getAllData } from '@/lib';
import { getAllPostsByTag } from '@/lib/tags/getAllPostsByTag';
import { PostData } from '@/types';

type Params = { slug: string };

export async function generateStaticParams() {
  const { tags } = await getAllData();

  return tags.map(({ name }) => ({
    slug: name,
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = params;

  const tagName = decodeURIComponent(slug);

  return {
    title: tagName,
    description: `Articles related to ${tagName}`,
    keywords: ['AI Dreams', tagName],
  };
}

async function handleGetPosts(tag: string): Promise<PostData[]> {
  const decodedTag = decodeURIComponent(tag);
  const posts = await getAllPostsByTag(decodedTag);
  return posts;
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = params;

  const posts = await handleGetPosts(slug);
  const tagName = decodeURIComponent(slug);

  return (
    <Container>
      <h1 className="mb-8 text-3xl font-bold">Posts tagged with "{tagName}"</h1>

      {posts && posts.length > 0 ? (
        <section className="my-12 grid grid-cols-1 gap-y-12 md:mb-32 lg:gap-y-16">
          {posts.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </section>
      ) : (
        <p>No posts found with this tag.</p>
      )}
    </Container>
  );
}
