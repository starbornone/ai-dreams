import Link from "next/link";

import Container from "../container";

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 text-sm text-gray-300">
      <Container>
        <div className="py-28 md:px-4 lg:px-0 grid grid-cols-1 md:grid-cols-3">
          <div className="mb-10 md:mb-0">
            <Link href="https://aidreams.world/">
              <a className="">Home</a>
            </Link>
            <span className="mx-4">{" | "}</span>
            <Link href="https://aidreams.world/pages/about">
              <a className="">About</a>
            </Link>
          </div>
          <div className="md:text-center mb-10 md:mb-0">
            Existing since 2021.
          </div>
          <div className="flex md:justify-end md:text-right">
            <div className="text-xs" style={{ maxWidth: "256px" }}>
              <p className="mb-2">
                The purchase of a product from any external sites does not grant
                any benefit, monetary or otherwise, to the author.
              </p>
              <p>
                The content within isn't representative of whatever
                organisation(s) the author is associated with.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
