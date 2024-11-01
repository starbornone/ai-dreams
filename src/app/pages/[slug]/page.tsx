import { Container, Title } from '@/components';
import { Body, CoverImage, Footer } from '@/features';
import { getAllPagesWithSlug } from '@/lib';
import { PageData } from '@/types';
import { handleGetPage } from '@/utils';
import { Metadata } from 'next';

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

  return (
    <>
      {page ? (
        <article className="page mb-32">
          {page.coverImage && <CoverImage title={page.title} url={page.coverImage.url} />}
          <Container>
            {page.title && <Title>{page.title}</Title>}
            <div className="mx-auto max-w-prose">
              <Body content={page.content} />
              <Footer imageAuthor={{ name: page?.imageAuthor || '', url: page?.imageAuthorUrl || '' }} />
            </div>
          </Container>
        </article>
      ) : (
        <p>Page not found</p>
      )}
    </>
  );
}
