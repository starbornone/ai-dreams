import { Container } from '@/components';
import { MorePages, MorePosts, PostList } from '@/features';
import { getLimitedPosts } from '@/lib';
import { PostData } from '@/types';

async function getInitialPosts(): Promise<PostData[]> {
  const posts = await getLimitedPosts({ skip: 0, limit: 3 });
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
