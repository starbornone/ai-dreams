import { Body, Container, Footer, Header, PostList, SectionSeparator } from '@/components';
import { getAllPostsWithSlug, getPost, getPostAndMorePosts } from '@/lib/hygraph';
import { Metadata } from 'next';

interface PageProps {
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
  return data.post;
}

async function handleGetPostAndMorePost({ slug }: { slug: string }) {
  const data: PostAndMorePostsProps = await getPostAndMorePosts(slug);
  return {
    post: data.post,
    morePosts: data.morePosts || [],
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post: PostProps = await handleGetPost(params);

  return {
    title: `${post?.title || ''} | AI Dreams`,
    description: post?.excerpt || '',
    keywords: post?.tags || [],
    openGraph: {
      images: post?.ogImage?.url,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { morePosts, post } = await handleGetPostAndMorePost(params);

  return (
    <Container>
      {post && (
        <article className="post">
          <Header coverImage={post.coverImage} date={post.date} tags={post.tags} title={post.title} />
          <div className="max-w-2xl mx-auto">
            <Body content={post.content} />
            <Footer
              imageAuthor={{
                name: post?.imageAuthor || '',
                url: post?.imageAuthorUrl || '',
              }}
              updatedAt={post?.updatedAt}
            />
          </div>
        </article>
      )}
      <SectionSeparator />
      {morePosts?.length > 0 && <PostList posts={morePosts} />}
    </Container>
  );
}
