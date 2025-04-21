import clsx from 'clsx';
import Link from 'next/link';

import { Container } from '@/components';

const LinkContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={clsx('flex flex-col gap-2 md:flex-row md:gap-x-8', className)}>{children}</div>;
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-sm text-gray-400">
      <Container>
        <div className="px-4 py-12 lg:px-0 lg:py-24">
          {/* Navigation Links Section */}
          <nav aria-label="Footer Navigation">
            <h3 className="sr-only text-gray-300">Quick Links</h3>
            <LinkContainer className="font-semibold">
              <Link href="/pages/about" aria-label="About the author and site">
                About
              </Link>
              <Link
                href="/pages/book-recommendations-non-fiction-edition"
                aria-label="Non-fiction book recommendations"
              >
                Book Recommendations
              </Link>
              <Link href="/pages/glossary" aria-label="Glossary of terms">
                Glossary
              </Link>
            </LinkContainer>
          </nav>

          {/* Site Information Section */}
          <div className="my-8">
            <LinkContainer>
              <p className="text-gray-300">AI dreaming since 2021.</p>
              <Link href="/pages/contact-us" aria-label="Contact us">
                Contact Us
              </Link>
              <Link href="/data" aria-label="Blog data">
                Blog Data
              </Link>
              <Link href="/pages/privacy-policy" aria-label="Privacy policy">
                Privacy Policy
              </Link>
            </LinkContainer>
            <p className="mt-2 text-xs font-light text-gray-600">
              The purchase of any products through external sites does not provide any monetary benefit to the author.
            </p>
            <p className="mt-1 text-xs font-light text-gray-600">
              All opinions expressed are the author&apos;s alone and are not representative of any affiliated
              organisation.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
