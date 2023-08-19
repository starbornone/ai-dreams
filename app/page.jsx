import { getLimitedPosts } from 'lib/graphcms';

import { MorePosts, PostList } from 'components';

async function getPosts(preview) {
  const data = await getLimitedPosts(preview);
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
  const { morePosts, posts } = await getPosts(false);

  return (
    <>
      {posts && posts.length > 0 ? <PostList posts={posts} /> : null}
      {morePosts && morePosts.length > 0 ? (
        <MorePosts posts={morePosts} />
      ) : null}
    </>
  );
}
