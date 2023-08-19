import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const pages = [
  {
    title: 'About Me & AI Dreams',
    href: '/pages/about',
    imageUrl:
      'http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Fresize%3Dfit%3Acrop%2Cheight%3A800%2Cwidth%3A1200%2FP7tLAcr7RyyAyyDd9Q7Y&w=1200&q=75',
  },
  {
    title: 'Glossary of Common Terms',
    href: '/pages/terms',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    title: 'Best & Most Popular Content',
    href: '/pages/recommended',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
];

export function MorePages() {
  return (
    <div className="my-16 md:my-32">
      <h2 className="text-center sm:text-left sm:ml-3 site-title mb-8 text-4xl leading-tight tracking-tighter md:text-5xl">
        Get to Know More
      </h2>
      <div className="mx-auto grid max-w-lg gap-16 lg:max-w-none lg:grid-cols-3">
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
                <p className="mt-3 text-base text-gray-300">{page.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
