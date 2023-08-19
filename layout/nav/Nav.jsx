import Link from 'next/link';

import { navList } from './navList';

export function Nav() {
  return (
    <div className="hidden lg:block lg:my-0 lg:max-w-lg">
      <div
        className="neon-links sign space-x-12 text-xl tracking-wider flex flex-wrap justify-end"
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
