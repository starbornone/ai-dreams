export const dynamic = 'force-static';

import { Container } from '@/components';
import { MorePosts, PostPreview } from '@/features';
import { getLimitedPosts } from '@/lib';
import { PostData } from '@/types';

import './page.css';

async function getInitialPosts(): Promise<{ posts: PostData[]; morePosts: PostData[] }> {
  const posts = await getLimitedPosts({ skip: 0, limit: 3 });
  const morePosts = await getLimitedPosts({ skip: 3, limit: 12 });
  return { posts, morePosts };
}

export default async function Page() {
  const { posts, morePosts } = await getInitialPosts();

  return (
    <>
      <Container>
        {posts && posts.length > 0 ? (
          <section className="home-page__posts">
            {posts.map((post) => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </section>
        ) : null}
      </Container>
      <Container>
        <MorePosts morePosts={morePosts} enableLoadMore={true} loadMoreLimit={12} initialOffset={3} />
      </Container>
    </>
  );
}
