import clsx from 'clsx';
import styles from './Title.module.css';

interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return <h1 className={clsx(styles['title'])}>{children}</h1>;
}
