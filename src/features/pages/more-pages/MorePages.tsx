import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components';

const pages = [
  {
    title: 'About Me',
    href: 'pages/about',
    imageUrl:
      'https://ap-southeast-2.graphassets.com/AnKXekidYRMi78mgukWzEz/resize=height:400,width:800/P7tLAcr7RyyAyyDd9Q7Y',
  },
  {
    title: 'Best of AI Dreams',
    href: 'pages/best-ai-dreams',
    imageUrl:
      'https://ap-southeast-2.graphassets.com/AnKXekidYRMi78mgukWzEz/resize=height:400,width:800/6znd7BOhRLS9vQcjPHQH',
  },
  {
    title: 'Book Recommendations',
    href: 'pages/book-recommendations-non-fiction-edition',
    imageUrl:
      'https://ap-southeast-2.graphassets.com/AnKXekidYRMi78mgukWzEz/resize=height:400,width:800/vPQl7aVYRDOzhxgOCpuq',
  },
];

export function MorePages() {
  return (
    <div className="my-16 bg-gray-900 py-16 md:my-32 md:py-32">
      <Container>
        <div className="mx-auto grid grid-cols-1 justify-items-center gap-16 lg:grid-cols-3">
          {pages.map((page) => (
            <Link href={page.href} key={page.href}>
              <div className="img-link group bg-gray-800">
                {page.imageUrl && <Image alt={page.title} height={300} src={page.imageUrl} width={600} />}
                <h3 className="title-link -mt-2 p-6 group-hover:text-gray-800">{page.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
