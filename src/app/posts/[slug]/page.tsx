import { Container, SectionSeparator } from '@/components';
import { Body, Footer, Header, PostList } from '@/features';
import { getAllPostsWithSlug, getPost, getPostAndMorePosts } from '@/lib/hygraph';
import { PostData } from '@/types';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

interface PostAndMorePostsProps {
  post: PostData;
  morePosts: PostData[];
}

export async function generateStaticParams() {
  const posts = await getAllPostsWithSlug();
  return posts.map(({ slug }: { slug: string }) => ({
    id: slug,
  }));
}

async function handleGetPost({ slug }: { slug: string }) {
  const data = await getPost(slug);
  return data || null;
}

async function handleGetPostAndMorePost({ slug }: { slug: string }) {
  const data: PostAndMorePostsProps = await getPostAndMorePosts(slug);
  return {
    post: data?.post || null,
    morePosts: data?.morePosts || [],
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post: PostData = await handleGetPost(params);

  return {
    title: post?.title || '',
    description: post?.excerpt || '',
    keywords: post?.tags || [],
    openGraph: {
      images: post?.ogImage?.url || '',
    },
  };
}

export default async function Page({ params }: Props) {
  const { morePosts, post } = await handleGetPostAndMorePost(params);

  return (
    <Container>
      {post ? (
        <article className="post">
          <Header coverImage={post.coverImage} date={post.date} tags={post.tags} title={post.title} />
          <div className="mx-auto max-w-2xl">
            <Body content={post.content} />
            <Footer
              imageAuthor={{
                name: post?.imageAuthor || '',
                url: post?.imageAuthorUrl || '',
              }}
              updatedAt={post?.updatedAt || ''}
            />
          </div>
        </article>
      ) : (
        <p>Post not found</p>
      )}
      <SectionSeparator />
      {morePosts?.length > 0 && <PostList posts={morePosts} />}
    </Container>
  );
}
