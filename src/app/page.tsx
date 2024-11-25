import { Container } from '@/components';
import { MorePages, MorePosts, PostPreview } from '@/features';
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
      <Container>
        {posts && posts.length > 0 ? (
          <section className="my-16 grid grid-cols-1 gap-y-12 lg:my-24 lg:gap-y-16">
            {posts.map((post) => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </section>
        ) : null}
      </Container>
      <MorePages />
      <Container>
        <MorePosts initialSkip={3} limit={12} />
      </Container>
    </>
  );
}
