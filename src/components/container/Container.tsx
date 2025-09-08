import clsx from 'clsx';

import './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <main className={clsx('container', className)}>{children}</main>;
}
