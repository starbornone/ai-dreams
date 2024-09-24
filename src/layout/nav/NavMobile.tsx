import Link from 'next/link';
import { navList } from './navList';

export function MobileNav() {
  return (
    <div className="m-16 block text-center lg:hidden">
      <div className="sr-only">Topics:</div>
      <div
        className="neon-links grid grid-cols-1 space-y-6 text-2xl tracking-wider text-gray-100"
        style={{ fontFamily: 'Neon' }}
      >
        {navList?.map((link) => (
          <Link href={`/categories/${link.slug}`} key={link.slug}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
