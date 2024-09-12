import { Container, MorePages, MorePosts, PostList } from '@/components';
import { getLimitedPosts } from '@/lib/hygraph';

interface Props {
  searchParams: { preview?: boolean };
}

async function getPosts(preview = false) {
  const data = await getLimitedPosts(preview);
  return {
    posts: data.posts,
    morePosts: data.morePosts || [],
  };
}

export default async function Page({ searchParams }: Props) {
  const { morePosts, posts } = await getPosts(searchParams?.preview);

  return (
    <>
      <Container>{posts && posts.length > 0 ? <PostList posts={posts} /> : null}</Container>
      <MorePages />
      <Container>{morePosts && morePosts.length > 0 ? <MorePosts posts={morePosts} /> : null}</Container>
    </>
  );
}
