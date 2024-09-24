interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return <h1 className="max-w-4xl mx-auto my-12 text-4xl post-title md:text-center md:text-5xl">{children}</h1>;
}
