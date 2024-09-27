import { CalendarIcon, Container, FolderIcon, SectionSeparator, TagIcon, Title } from '@/components';
import { Body, CoverImage, Footer, PostList } from '@/features';
import { getAllPostsWithSlug } from '@/lib';
import { PostData } from '@/types';
import { handleGetPost, handleGetPostAndMorePost } from '@/utils';
import { format } from 'date-fns';
import { Metadata } from 'next';
import Link from 'next/link';

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
  const { morePosts, post } = await handleGetPostAndMorePost(params);

  return (
    <>
      {post ? (
        <article className="post">
          {post.coverImage && <CoverImage title={post.title} url={post.coverImage.url} />}
          <Container>
            <div className="justify-between lg:flex">
              {post.category && (
                <div className="flex items-center gap-2 justify-self-start">
                  <FolderIcon className="h-3 w-3 text-gray-600" />
                  <Link href={`/categories/${post.category.slug}`}>{post.category.name}</Link>
                </div>
              )}
              {post.tags && (
                <div className="flex items-center gap-2">
                  <TagIcon className="h-4 w-4 text-gray-600" />
                  {post.tags.length > 0 ? post.tags.map((tag, index) => tag + (index === 0 ? ', ' : '')) : null}
                </div>
              )}
              {post.date && (
                <div className="flex items-center gap-2 justify-self-end">
                  <CalendarIcon className="h-4 w-4 text-gray-600" />
                  {format(new Date(post.date), 'dd MMMM yyyy')}
                </div>
              )}
            </div>
            {post.title && <Title>{post.title}</Title>}
            <div className="mx-auto max-w-prose">
              <Body content={post.content} />
              <Footer
                imageAuthor={{
                  name: post?.imageAuthor || '',
                  url: post?.imageAuthorUrl || '',
                }}
                updatedAt={post?.updatedAt || ''}
              />
            </div>
          </Container>
        </article>
      ) : (
        <p>Post not found</p>
      )}
      <Container>
        <SectionSeparator />
        {morePosts?.length > 0 && <PostList posts={morePosts} />}
      </Container>
    </>
  );
}
