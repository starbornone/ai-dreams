export const dynamic = 'force-static';

import { Metadata } from 'next';

import { Container } from '@/components';
import { PostPreview } from '@/features';
import { getAllData } from '@/lib';
import { getAllPostsByTag } from '@/lib/tags/getAllPostsByTag';
import { PostData } from '@/types';
import './page.css';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const { tags } = await getAllData();

  return tags.map(({ name }) => ({
    slug: name,
  }));
}

export async function generateMetadata(props: { params: Promise<Params> }): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;

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

export default async function Page(props: { params: Promise<Params> }) {
  const params = await props.params;
  const slug = params.slug;

  const posts = await handleGetPosts(slug);
  const tagName = decodeURIComponent(slug);

  return (
    <Container>
      {posts && posts.length > 0 ? (
        <section className="tag-page__posts">
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
