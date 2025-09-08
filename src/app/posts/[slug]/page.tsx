export const dynamic = 'force-static';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Container, Loading, SectionSeparator, Title } from '@/components';
import { Body, CoverImage, MetaData, MorePosts } from '@/features';
import { getAllPostsWithSlug, getLimitedPosts } from '@/lib';
import { PostData } from '@/types';
import { handleGetPost } from '@/utils';
import './page.css';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const posts = await getAllPostsWithSlug();
  return posts.map(({ slug }: { slug: string }) => ({
    slug,
  }));
}

export async function generateMetadata(props: { params: Promise<Params> }): Promise<Metadata> {
  const params = await props.params;
  const post: PostData = await handleGetPost(params.slug);

  return {
    title: post?.title || '',
    description: post?.excerpt || '',
    keywords: [...(post?.tags || []), ...(post?.keywords || [])],
    openGraph: {
      images: post?.ogImage?.url || '',
    },
  };
}

export default async function Page(props: { params: Promise<Params> }) {
  const params = await props.params;
  const post = await handleGetPost(params.slug);

  if (!post) {
    notFound();
  }

  const morePosts = await getLimitedPosts({
    category: post?.category?.slug || '',
    limit: 3,
    skip: 1,
    skipPost: post?.slug,
  });

  if (!post) {
    return <Loading />;
  }

  return (
    <>
      {post ? (
        <article className="post-detail">
          {post.coverImage && (
            <CoverImage
              imageAuthor={{
                name: post?.imageAuthor || '',
                url: post?.imageAuthorUrl || '',
              }}
              title={post.title}
              url={post.coverImage.url}
            />
          )}
          <Container>
            <div className="post-detail__title-container">{post.title && <Title>{post.title}</Title>}</div>
            <div className="post-detail__content">
              {(post.content || post.markdownContent) && (
                <Body
                  content={{
                    html: post.content?.html || undefined,
                    markdownContent: post.markdownContent || undefined,
                  }}
                />
              )}
              <div className="post-detail__metadata">
                <MetaData post={post} />
              </div>
            </div>
          </Container>
        </article>
      ) : (
        <p>Post not found</p>
      )}
      <Container>
        <SectionSeparator />
        {post.category && <MorePosts morePosts={morePosts} title={`More ${post.category.name} Posts`} />}
      </Container>
    </>
  );
}
