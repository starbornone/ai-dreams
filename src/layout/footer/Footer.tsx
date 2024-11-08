import { Container } from '@/components';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-sm text-gray-400">
      <Container>
        <div className="px-4 py-12 lg:px-0 lg:py-24">
          {/* Navigation Links Section */}
          <nav aria-label="Footer Navigation">
            <h3 className="sr-only text-gray-300">Quick Links</h3>
            <div className="mt-2 flex flex-col gap-4 font-semibold lg:flex-row lg:gap-x-8 lg:gap-y-0">
              <Link href="/" aria-label="Home page">
                Home
              </Link>
              <Link href="/pages/about" aria-label="About the author and site">
                About
              </Link>
              <Link href="/contact" aria-label="Contact page">
                Contact Us
              </Link>
              <Link href="/pages/glossary" aria-label="Glossary of terms">
                Glossary
              </Link>
              <Link href="/data" aria-label="Blog data page">
                Blog Data
              </Link>
              <Link href="/pages/privacy-policy" aria-label="Privacy policy">
                Privacy Policy
              </Link>
            </div>
          </nav>

          {/* Site Information Section */}
          <div className="my-8">
            <p className="text-gray-300">Dreaming since 2021.</p>
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
