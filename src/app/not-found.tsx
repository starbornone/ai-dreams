export const dynamic = 'force-static';

import { headers } from 'next/headers';
import Link from 'next/link';

import { Container, Title } from '@/components';
import { PostLink } from '@/features';
import { getAllPages, getAllPosts } from '@/lib';
import { findSimilarContent } from '@/utils';
import './not-found.css';

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
          <section className="not-found__related">
            <h2 className="site-title not-found__related-title">You might be looking for:</h2>

            <div className="not-found__related-list">
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
