import { Container, Loading, SectionSeparator, Title } from '@/components';
import { Body, CoverImage, Footer, MetaData, MorePosts } from '@/features';
import { getAllPostsWithSlug } from '@/lib';
import { PostData } from '@/types';
import { handleGetPost } from '@/utils';
import { Metadata } from 'next';

export const experimental_ppr = true;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPostsWithSlug();
  return posts.map(({ slug }: { slug: string }) => ({
    id: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post: PostData = await handleGetPost(params);

  return {
    title: post?.title || '',
    description: post?.excerpt || '',
    keywords: [...post?.tags, ...post?.keywords],
    openGraph: {
      images: post?.ogImage?.url || '',
    },
  };
}

export default async function Page({ params }: Props) {
  const post = await handleGetPost(params);

  if (!post) {
    return <Loading />;
  }

  return (
    <>
      {post ? (
        <article className="post">
          {post.coverImage && <CoverImage title={post.title} url={post.coverImage.url} />}
          <Container>
            {post.title && <Title>{post.title}</Title>}
            <div className="mx-auto max-w-prose">
              <MetaData post={post} />
              {post.content && <Body content={{ html: post.content.html, markdownContent: post.markdownContent }} />}
              <Footer
                imageAuthor={{
                  name: post?.imageAuthor || '',
                  url: post?.imageAuthorUrl || '',
                }}
              />
            </div>
          </Container>
        </article>
      ) : (
        <p>Post not found</p>
      )}
      <Container>
        <SectionSeparator />
        <MorePosts title={`More ${post.category.name} Posts`} category={post.category.slug} limit={3} />
      </Container>
    </>
  );
}
