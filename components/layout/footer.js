import Link from "next/link";

import Container from "../container";

export function Footer() {
  return (
    <footer className="bg-grey-100 border-t border-grey-200 text-sm">
      <Container>
        <div className="py-28 md:px-4 lg:px-0 grid grid-cols-1 md:grid-cols-3">
          <div className="mb-10 md:mb-0">
            <Link href="https://aidreams.world/pages/about">
              <a target="_blank" rel="noreferrer">
                About
              </a>
            </Link>
          </div>
          <div className="md:text-center mb-10 md:mb-0">
            Existing since 2021.
          </div>
          <div className="flex md:justify-end md:text-right">
            <div
              className="text-xs text-grey-200"
              style={{ maxWidth: "256px" }}
            >
              Words by Sha aren't representative of whatever organisation(s)
              she's associated with, and so on and so on... *sniff*
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
