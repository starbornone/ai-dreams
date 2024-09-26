import clsx from 'clsx';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <main className={clsx(styles['container'], className)}>{children}</main>;
}
