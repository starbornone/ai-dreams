import { Container } from '@/components';
import { MorePages, MorePosts, PostList } from '@/features';
import { getLimitedPosts } from '@/lib/hygraph';
import { Post } from '@/types';

async function getInitialPosts(): Promise<Post[]> {
  const posts = await getLimitedPosts(0, 3);
  return posts;
}

export default async function Page() {
  const posts = await getInitialPosts();

  return (
    <>
      <Container>{posts && posts.length > 0 ? <PostList posts={posts} /> : null}</Container>
      <MorePages />
      <Container>
        <MorePosts initialSkip={3} limit={3} />
      </Container>
    </>
  );
}
