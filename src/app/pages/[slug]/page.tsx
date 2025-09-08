export const dynamic = 'force-static';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Body, CoverImage } from '@/features';
import { Container, Title } from '@/components';
import { getAllPagesWithSlug } from '@/lib';
import { handleGetPage } from '@/utils';
import { PageData } from '@/types';

import './page.css';

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
        <article className="page-detail">
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
            <div className="page-detail__title-container">{page.title && <Title>{page.title}</Title>}</div>
            <div className="page-detail__content">
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
