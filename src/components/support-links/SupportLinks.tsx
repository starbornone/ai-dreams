import Link from 'next/link';
import './SupportLinks.css';

export function SupportLinks() {
  return (
    <div className="support-links">
      <p className="support-links__text">
        If you enjoy the content, consider supporting the author. Every contribution helps keep the dreams alive.
      </p>
      <div className="support-links__container">
        <Link
          href="https://ko-fi.com/starbornone"
          aria-label="Support the author on Ko-fi"
          className="img-link support-links__link"
        >
          Ko-fi
        </Link>
        <Link
          href="https://liberapay.com/starbornone"
          aria-label="Support the author on Liberapay"
          className="img-link support-links__link support-links__link--orange"
        >
          Liberapay
        </Link>
      </div>
    </div>
  );
}
