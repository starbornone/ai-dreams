import Link from 'next/link';

export function SupportLinks() {
  return (
    <div className="my-16 lg:my-24">
      <p className="text-center text-gray-300">
        If you enjoy the content, consider supporting the author. Every contribution helps keep the dreams alive.
      </p>
      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
        <Link
          href="https://ko-fi.com/starbornone"
          aria-label="Support the author on Ko-fi"
          className="img-link border border-aqua-500 px-6 py-3 font-semibold text-gray-300 transition-all hover:bg-aqua-500 hover:text-gray-900"
        >
          Ko-fi
        </Link>
        <Link
          href="https://liberapay.com/starbornone"
          aria-label="Support the author on Liberapay"
          className="img-link border border-aqua-500 px-6 py-3 font-semibold text-gray-300 transition-all hover:bg-orange-500 hover:text-gray-900"
        >
          Liberapay
        </Link>
      </div>
    </div>
  );
}
