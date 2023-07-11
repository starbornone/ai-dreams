import Link from 'next/link'

import { Nav } from 'layout'

export function Header() {
    return (
        <div className="my-16 lg:my-24 lg:flex items-center justify-between">
            <div className="site-title">
                <h1 className="-mb-2 text-5xl leading-tight tracking-tighter md:mb-0 md:pr-8 md:text-6xl">
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
    )
}
