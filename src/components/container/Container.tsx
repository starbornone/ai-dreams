import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <main className={clsx('mx-auto max-w-6xl px-5', className)}>{children}</main>;
}
