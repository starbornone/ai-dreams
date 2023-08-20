import Link from 'next/link';

import { Container, LanguageSelect } from 'components';

export function Footer() {
  return (
    <footer className="text-sm text-gray-400 bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 py-12 md:py-24 md:grid-cols-3 md:px-4 lg:px-0 gap-y-12 md:gap-y-0">
          <div className="col-span-2 font-semibold">
            <Link href="/">Home</Link>
            <span className="mx-4">{' | '}</span>
            <Link href="/pages/about">About</Link>
            <span className="mx-4">{' | '}</span>
            <Link href="/categories/resources">Resources</Link>
            <span className="mx-4">{' | '}</span>
            <Link href="/categories/fiction">Fiction</Link>
          </div>
          <div className="md:flex md:justify-end">
            <LanguageSelect />
          </div>
          <div className="col-span-2">
            <p>Dreaming since 2021.</p>
            <div className="text-xs font-light text-gray-600">
              <p className="my-2">
                The purchase of a product from any external sites does not grant
                any benefit, monetary or otherwise, to the author.
              </p>
              <p>
                The content within isn't representative of whatever
                organisation(s) the author is associated with.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
