import { Container, MorePages, MorePosts, PostList } from '@/components';
import { getLimitedPosts } from '@/lib/hygraph';

async function getPosts(preview = false) {
  const data = await getLimitedPosts(preview);
  return {
    posts: data.posts,
    morePosts: data.morePosts || [],
  };
}

export default async function Page() {
  const { morePosts, posts } = await getPosts();

  return (
    <>
      <Container>{posts && posts.length > 0 ? <PostList posts={posts} /> : null}</Container>
      <MorePages />
      <Container>{morePosts && morePosts.length > 0 ? <MorePosts posts={morePosts} /> : null}</Container>
    </>
  );
}
