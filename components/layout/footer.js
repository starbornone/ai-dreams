import Link from "next/link";

import Container from "../container";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-sm text-text-400 font-semibold">
      <Container>
        <div className="py-24 md:px-4 lg:px-0 grid grid-cols-1 md:grid-cols-3">
          <div className="my-8 md:my-0 col-span-2">
            <Link href="https://aidreams.world/">
              <a className="">Home</a>
            </Link>
            <span className="mx-4">{" | "}</span>
            <Link href="https://aidreams.world/pages/about">
              <a className="">About</a>
            </Link>
          </div>
          <div className="md:text-right my-8 md:my-0">
            <p>Dreaming since 2021.</p>
            <div className="text-xs font-light text-text-600">
              <p className="my-2">
                The purchase of a product from any external sites does not grant
                any benefit, monetary or otherwise, to the author.
              </p>
              <p>
                The content within isn't representative of whatever
                organisation(s) the author is associated with.
              </p>
            </div>
          </div>
          <div className="flex md:justify-end md:text-right"></div>
        </div>
      </Container>
    </footer>
  );
}
