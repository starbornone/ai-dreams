import Link from 'next/link';

import { Container, CoverImage } from 'components';

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
    <div className="py-16 my-16 bg-gray-900 md:py-32 md:my-32">
      <Container>
        <div className="grid gap-16 mx-auto lg:grid-cols-3">
          {pages.map((page) => (
            <Link href={page.href} key={page.href}>
              <div className="bg-gray-800 img-link group">
                {page.imageUrl && (
                  <CoverImage title={page.title} url={page.imageUrl} />
                )}
                <h3 className="p-6 -mt-2 title-link group-hover:text-gray-800">
                  {page.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
