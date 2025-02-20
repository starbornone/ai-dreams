import { Container } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

const pages = [
  {
    title: 'About Me',
    href: 'pages/about',
    imageUrl:
      'https://ap-southeast-2.graphassets.com/AnKXekidYRMi78mgukWzEz/resize=height:400,width:800/P7tLAcr7RyyAyyDd9Q7Y',
  },
  {
    title: 'Best of AI Dreams',
    href: 'pages/best',
    imageUrl:
      'https://ap-southeast-2.graphassets.com/AnKXekidYRMi78mgukWzEz/resize=height:400,width:800/6znd7BOhRLS9vQcjPHQH',
  },
];

export function MorePages() {
  return (
    <div className="my-16 bg-gray-900 py-16 md:my-32 md:py-32">
      <Container>
        <div className="mx-auto grid gap-16 lg:grid-cols-2">
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
