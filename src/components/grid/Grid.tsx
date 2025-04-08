import clsx from 'clsx';
import './Grid.css';

interface GridProps {
  children: string;
  columns?: string;
}

export const Grid = ({ children, columns = '1' }: GridProps) => {
  return <div className={clsx('grid', `grid--columns-${columns}`)}>{children}</div>;
};
