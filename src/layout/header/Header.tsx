'use client';

import { Container } from '@/components';
import { Nav } from '@/layout';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  return (
    <Container>
      <div
        className={clsx('items-center justify-between lg:flex', pathname === '/' ? 'my-16 lg:my-24' : 'my-8 lg:my-12')}
      >
        <div className="site-title">
          <h1 className="-mb-2 text-5xl md:mb-0 md:pr-8 md:text-6xl">
            <Link href="/">AI Dreams</Link>
          </h1>
          <div className="ml-24 text-left text-xl md:text-2xl">
            of a better
            <span className="sign ml-2">
              .<span className="fast-flicker">w</span>or
              <span className="flicker">l</span>d
            </span>
          </div>
        </div>
        <Nav />
      </div>
    </Container>
  );
}
