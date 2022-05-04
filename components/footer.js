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
            ...
          </div>
        </div>
      </Container>
    </footer>
  );
}
