interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <main className="container max-w-6xl px-5 mx-auto">{children}</main>;
}
