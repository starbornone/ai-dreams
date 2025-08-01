export const dynamic = 'force-static';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Container, Title } from '@/components';
import { Body, CoverImage } from '@/features';
import { getAllPagesWithSlug } from '@/lib';
import { PageData } from '@/types';
import { handleGetPage } from '@/utils';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const pages = await getAllPagesWithSlug();
  return pages.map(({ slug }: { slug: string }) => ({
    slug,
  }));
}

export async function generateMetadata(props: { params: Promise<Params> }): Promise<Metadata> {
  const params = await props.params;
  const page: PageData = await handleGetPage(params);
  if (!page) return { title: 'AI Dreams' };

  return {
    title: page?.title || '',
    description: page?.excerpt || '',
    openGraph: {
      images: page?.ogImage?.url || '',
    },
  };
}

export default async function Page(props: { params: Promise<Params> }) {
  const params = await props.params;
  const page = await handleGetPage(params);

  if (!page) {
    notFound();
  }

  return (
    <>
      {page ? (
        <article className="page mb-32">
          {page.coverImage && (
            <CoverImage
              imageAuthor={{
                name: page?.imageAuthor || '',
                url: page?.imageAuthorUrl || '',
              }}
              title={page.title}
              url={page.coverImage.url}
            />
          )}
          <Container>
            <div className="lg:mt-12">{page.title && <Title>{page.title}</Title>}</div>
            <div className="mx-auto max-w-prose">
              {(page.content || page.markdownContent) && (
                <Body
                  content={{
                    html: page.content?.html || undefined,
                    markdownContent: page.markdownContent || undefined,
                  }}
                />
              )}
            </div>
          </Container>
        </article>
      ) : (
        <p>Page not found</p>
      )}
    </>
  );
}
