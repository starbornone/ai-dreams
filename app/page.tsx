import { getLimitedPosts } from 'lib/hygraph';

import { Container, MorePages, MorePosts, PostList } from 'components';

async function getPosts() {
  const data = await getLimitedPosts();
  return {
    posts: data.posts,
    morePosts: data.morePosts || [],
  };
}

export const metadata = {
  metadataBase: new URL('https://aidreams.world'),
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
      <Container>
        {posts && posts.length > 0 ? <PostList posts={posts} /> : null}
      </Container>
      <MorePages />
      <Container>
        {morePosts && morePosts.length > 0 ? (
          <MorePosts posts={morePosts} />
        ) : null}
      </Container>
    </>
  );
}
