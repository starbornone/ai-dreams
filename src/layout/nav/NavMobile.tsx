import Link from 'next/link';
import { navList } from './navList';

export function MobileNav() {
  return (
    <div className="block m-16 text-center lg:hidden">
      <div className="mb-6 tracking-wider text-gray-900 site-title">Topics:</div>
      <div
        className="grid grid-cols-1 space-y-6 text-2xl tracking-wider neon-links sign"
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
