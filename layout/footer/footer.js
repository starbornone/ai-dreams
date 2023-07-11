import Link from 'next/link'

import { Container } from 'components'

export function Footer() {
    return (
        <footer className="bg-gray-900 text-sm font-semibold text-text-400">
            <Container>
                <div className="grid grid-cols-1 py-12 md:py-24 md:grid-cols-3 md:px-4 lg:px-0">
                    <div className="col-span-2 my-8 md:my-0">
                        <Link href="/">
                            <a className="">Home</a>
                        </Link>
                        <span className="mx-4">{' | '}</span>
                        <Link href="/pages/about">
                            <a className="">About</a>
                        </Link>
                        <span className="mx-4">{' | '}</span>
                        <Link href="/categories/resources">
                            <a className="">Resources</a>
                        </Link>
                    </div>
                    <div className="my-8 md:my-0 md:text-right">
                        <p>Dreaming since 2021.</p>
                        <div className="text-xs font-light text-text-600">
                            <p className="my-2">
                                The purchase of a product from any external
                                sites does not grant any benefit, monetary or
                                otherwise, to the author.
                            </p>
                            <p>
                                The content within isn't representative of
                                whatever organisation(s) the author is
                                associated with.
                            </p>
                        </div>
                    </div>
                    <div className="flex md:justify-end md:text-right"></div>
                </div>
            </Container>
        </footer>
    )
}
