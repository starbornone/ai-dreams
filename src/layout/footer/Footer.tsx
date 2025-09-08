import clsx from 'clsx';
import Link from 'next/link';

import { Container } from '@/components';
import './Footer.css';

const LinkContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={clsx('footer__link-container', className)}>{children}</div>;
};

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__container">
          {/* Navigation Links Section */}
          <nav className="footer__nav" aria-label="Footer Navigation">
            <h3 className="footer__nav-title">Quick Links</h3>
            <LinkContainer>
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
          <div className="footer__info">
            <LinkContainer className="footer__link-container--secondary">
              <p>AI dreaming since 2021.</p>
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
            <p className="footer__disclaimer">
              The purchase of any products through external sites does not provide any monetary benefit to the author.
            </p>
            <p className="footer__disclaimer">
              All opinions expressed are the author&apos;s alone and are not representative of any affiliated
              organisation.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
