export const dynamic = 'force-static';

import { Container } from '@/components';
import { MorePages, MorePosts, PostPreview } from '@/features';
import { getLimitedPosts } from '@/lib';
import { PostData } from '@/types';
import './page.css';

async function getInitialPosts(): Promise<{ posts: PostData[]; morePosts: PostData[] }> {
  const posts = await getLimitedPosts({ skip: 0, limit: 6 });
  const morePosts = await getLimitedPosts({ skip: 6 });
  return { posts, morePosts };
}

export default async function Page() {
  const { posts, morePosts } = await getInitialPosts();

  return (
    <>
      <Container>
        {posts && posts.length > 0 ? (
          <section className="home__posts">
            {posts.map((post) => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </section>
        ) : null}
      </Container>
      <MorePages />
      <Container>
        <MorePosts morePosts={morePosts} />
      </Container>
    </>
  );
}
