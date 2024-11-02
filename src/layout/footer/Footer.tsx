import { Container } from '@/components';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-sm text-gray-400">
      <Container>
        <div className="grid grid-cols-1 gap-y-12 py-12 md:grid-cols-3 md:px-4 md:py-24 lg:px-0">
          <div className="col-span-2 font-semibold">
            <Link href="/">Home</Link>
            <span className="mx-4">{' | '}</span>
            <Link href="/pages/about">About</Link>
            <span className="mx-4">{' | '}</span>
            <Link href="/categories/resources">Resources</Link>
            <span className="mx-4">{' | '}</span>
            <Link href="/pages/glossary">Glossary</Link>
          </div>
          <div className="col-span-2">
            <p>Dreaming since 2021.</p>
            <div className="text-xs font-light text-gray-600">
              <p className="my-2">
                The purchase of a product from any external sites does not grant any benefit, monetary or otherwise, to
                the author.
              </p>
              <p>
                The content within isn&apos;t representative of whatever organisation(s) the author is associated with.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
