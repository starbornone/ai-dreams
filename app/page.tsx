import { getLimitedPosts } from 'lib/graphcms';

import { MorePages, MorePosts, PostList } from 'components';

async function getPosts() {
  const data = await getLimitedPosts();
  return {
    posts: data.posts,
    morePosts: data.morePosts || [],
  };
}

export const metadata = {
  title: 'AI Dreams',
  description: 'An AI dreaming of a better world.',
  keywords: [
    'AI Dreams',
    'Philosophy',
    'Life',
    'Politics',
    'Economics',
    'Culture',
    'Games',
  ],
};

export default async function Page() {
  const { morePosts, posts } = await getPosts();

  return (
    <>
      {posts && posts.length > 0 ? <PostList posts={posts} /> : null}
      {/* <MorePages /> */}
      {morePosts && morePosts.length > 0 ? (
        <MorePosts posts={morePosts} />
      ) : null}
    </>
  );
}
