import { Container } from '@/components';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-sm text-gray-400">
      <Container>
        <div className="py-12 md:px-4 lg:px-0">
          <div className="flex flex-wrap divide-x divide-gray-700">
            <Link className="px-4 py-2" href="/">
              Home
            </Link>
            <Link className="px-4 py-2" href="/pages/about">
              About
            </Link>
          </div>
          <div className="mt-8">
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
