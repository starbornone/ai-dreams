import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components';
import './MorePages.css';

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
    <div className="more-pages">
      <Container>
        <div className="more-pages__grid">
          {pages.map((page) => (
            <Link href={page.href} key={page.href} className="more-pages__link">
              <div className="img-link more-pages__item">
                {page.imageUrl && <Image alt={page.title} height={300} src={page.imageUrl} width={600} />}
                <h3 className="title-link more-pages__title">{page.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
