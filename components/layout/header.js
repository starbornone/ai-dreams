import Link from "next/link";

import { Nav } from "../layout";

export function Header() {
  return (
    <section className="flex items-center justify-between my-16">
      <div className="site-title">
        <h1 className="text-4xl md:text-6xl tracking-tighter leading-tight md:pr-8">
          <Link href="/">AI Dreams</Link>
        </h1>
        <div className="text-xl md:text-2xl text-left ml-24">
          of a better
          <span className="sign ml-2">
            .<span className="fast-flicker">w</span>or
            <span className="flicker">l</span>d
          </span>
        </div>
      </div>
      <Nav />
    </section>
  );
}
