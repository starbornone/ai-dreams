import { Container } from '@/components';
import { CoverImage } from '@/features';
import Link from 'next/link';

const pages = [
  {
    title: 'About Me',
    href: 'pages/about',
    imageUrl: 'https://media.graphassets.com/P7tLAcr7RyyAyyDd9Q7Y',
  },
  {
    title: 'Glossary',
    href: 'pages/glossary',
    imageUrl: 'https://media.graphassets.com/O0f84rGPSaNRMiehZTrE',
  },
  {
    title: 'Best of AI Dreams',
    href: 'pages/best',
    imageUrl: 'https://media.graphassets.com/6znd7BOhRLS9vQcjPHQH',
  },
];

export function MorePages() {
  return (
    <div className="my-16 bg-gray-900 py-16 md:my-32 md:py-32">
      <Container>
        <div className="mx-auto grid gap-16 lg:grid-cols-3">
          {pages.map((page) => (
            <Link href={page.href} key={page.href}>
              <div className="img-link group bg-gray-800">
                {page.imageUrl && <CoverImage title={page.title} url={page.imageUrl} />}
                <h3 className="title-link -mt-2 p-6 group-hover:text-gray-800">{page.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
