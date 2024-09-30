import { Container, Title } from '@/components';
import { Body, CoverImage, Footer } from '@/features';
import { getAllPagesWithSlug } from '@/lib';
import { PageData } from '@/types';
import { handleGetPage } from '@/utils';
import { Metadata } from 'next';

export const experimental_ppr = true;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const pages = await getAllPagesWithSlug();
  return pages.map(({ slug }: { slug: string }) => ({
    id: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function Page({ params }: Props) {
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
              <Footer
                imageAuthor={{ name: page?.imageAuthor || '', url: page?.imageAuthorUrl || '' }}
                updatedAt={page?.updatedAt || ''}
              />
            </div>
          </Container>
        </article>
      ) : (
        <p>Page not found</p>
      )}
    </>
  );
}
