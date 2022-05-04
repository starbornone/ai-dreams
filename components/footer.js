import Link from "next/link";

import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-grey-100 border-t border-grey-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Existing since 2021. That's all.
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link href="https://sha.codes">
              <a target="_blank" rel="noreferrer">sha.codes</a>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
