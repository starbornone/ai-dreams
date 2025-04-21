import { headers } from 'next/headers';
import Link from 'next/link';

import { Container, Title } from '@/components';
import { PostLink } from '@/features';
import { getAllPages, getAllPosts } from '@/lib';
import { findSimilarContent } from '@/utils';

export default async function NotFound() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname');

  const allPages = await getAllPages();
  const allPosts = await getAllPosts();

  const pathSegments = pathname?.split('/').filter(Boolean) || [];

  const keywords = pathSegments
    .filter((segment) => segment !== 'posts' && segment !== 'pages')
    .flatMap((segment) => segment.split('-'))
    .filter((keyword) => keyword.length > 2);

  const relatedContent = findSimilarContent(keywords, [...allPages, ...allPosts], 3);

  return (
    <Container>
      <article>
        <Title>Page Not Found</Title>
        <div>
          <p>
            Sorry, the page you were looking for doesn&apos;t exist or has been moved. If you believe this page should
            exist, please <Link href="/pages/contact-us">contact us</Link>.
          </p>
        </div>

        {relatedContent.length > 0 ? (
          <section className="my-8 grid grid-cols-1 gap-y-6 lg:my-12 lg:gap-y-8">
            <h2 className="site-title text-xl">You might be looking for:</h2>

            <div className="mb-24 mt-4 grid gap-4 text-left">
              {relatedContent.map((content) => (
                <PostLink key={content.slug} post={content} />
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </Container>
  );
}
