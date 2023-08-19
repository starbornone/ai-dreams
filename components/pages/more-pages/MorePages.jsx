import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const pages = [
  {
    title: 'An introduction about the blog',
    href: '/pages/about',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    title: 'Glossary of common terms',
    href: '/pages/terms',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    title: 'Best and most popular content',
    href: '/pages/recommended',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
];

export function MorePages() {
  return (
    <div className="relative mb-20">
      <div className="absolute inset-0">
        <div className="h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mt-12 grid max-w-lg gap-16 lg:max-w-none lg:grid-cols-3">
          {pages.map((page) => (
            <div key={page.title} className="flex flex-col overflow-hidden">
              <Link href={page.href}>
                <div className="flex-shrink-0">
                  <img
                    alt={page.title}
                    className="h-48 w-full object-cover"
                    src={page.imageUrl}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <p className="mt-3 text-base text-text-500">{page.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
