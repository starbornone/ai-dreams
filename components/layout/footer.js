import Link from "next/link";

import Container from "../container";

export function Footer() {
  return (
    <footer className="bg-grey-100 border-t border-grey-200 text-sm">
      <Container>
        <div className="py-28 md:px-4 lg:px-0 flex flex-col md:flex-row">
          <div className="md:text-left mb-10 md:mb-0 md:pr-4 md:w-1/2">
            Existing since 2021. That's all.
          </div>
          <div className="flex flex-col md:flex-row justify-end md:text-right md:pl-4 md:w-1/2">
            <div>
              Words by{" "}
              <Link href="https://sha.codes">
                <a target="_blank" rel="noreferrer">
                  sha
                </a>
              </Link>
              <div className="text-xs max-w-sm text-grey-200">
                aren't representative of whatever organisation(s) she's
                associated with, and so on and so on... *sniff*
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
