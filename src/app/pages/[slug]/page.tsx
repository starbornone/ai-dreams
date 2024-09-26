import { Container } from '@/components';
import { Body, Footer, Header } from '@/features';
import { getAllPagesWithSlug, getPage } from '@/lib/hygraph';
import { PageData } from '@/types';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const pages = await getAllPagesWithSlug();
  return pages.map(({ slug }: { slug: string }) => ({
    id: slug,
  }));
}

async function handleGetPage({ slug }: { slug: string }) {
  const data = await getPage(slug);
  return data || null;
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
    <Container>
      {page ? (
        <article className="page mb-32">
          <Header coverImage={page.coverImage} title={page.title} />
          <div className="mx-auto max-w-2xl">
            <Body content={page.content} />
            <Footer
              imageAuthor={{ name: page?.imageAuthor || '', url: page?.imageAuthorUrl || '' }}
              updatedAt={page?.updatedAt || ''}
            />
          </div>
        </article>
      ) : (
        <p>Page not found</p>
      )}
    </Container>
  );
}
