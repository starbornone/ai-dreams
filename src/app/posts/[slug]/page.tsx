import { Body, Container, Footer, Header, PostList, SectionSeparator } from '@/components';
import { getAllPostsWithSlug, getPost, getPostAndMorePosts } from '@/lib/hygraph';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

interface PostProps {
  content: {
    html: string;
  };
  coverImage?: { url: string };
  date: string;
  excerpt: string;
  imageAuthor?: string;
  imageAuthorUrl?: string;
  ogImage?: { url: string };
  tags: string[];
  title: string;
  updatedAt?: string;
}

interface PostAndMorePostsProps {
  post: PostProps;
  morePosts: PostProps[];
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
  const post: PostProps = await handleGetPost(params);

  return {
    title: `${post?.title || ''} | AI Dreams`,
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
