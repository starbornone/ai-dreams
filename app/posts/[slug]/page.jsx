import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/graphcms';

import { PostList, PostBody, PostHeader, SectionSeparator } from 'components';

export async function generateStaticParams() {
  const posts = await getAllPostsWithSlug();
  return posts.map(({ slug }) => ({
    id: slug,
  }));
}

export async function handleGetPost({ slug }) {
  const data = await getPostAndMorePosts(slug);
  return {
    post: data.post,
    morePosts: data.morePosts || [],
  };
}

export async function generateMetadata({ params }) {
  const post = await handleGetPost(params);

  return {
    title: `${post?.name ? `${post.name} | ` : ''}AI Dreams`,
    description: post?.excerpt,
    keywords: post?.tags,
    openGraph: {
      images: post?.ogImage?.url,
    },
  };
}

export default async function Post({ params }) {
  const { morePosts, post } = await handleGetPost(params);

  return (
    <>
      <article>
        <PostHeader
          coverImage={post.coverImage}
          date={post.date}
          tags={post.tags}
          title={post.title}
        />
        <PostBody content={post.content} />
      </article>
      <SectionSeparator />
      {morePosts?.length > 0 && <PostList posts={morePosts} />}
    </>
  );
}
