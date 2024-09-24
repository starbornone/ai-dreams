import { CoverImage, Title } from '@/features';
import { format } from 'date-fns';
import styles from './Header.module.css';

interface HeaderProps {
  coverImage?: { url: string };
  date?: string;
  tags?: string[];
  title: string;
}

export function Header({ coverImage, date, tags, title }: HeaderProps) {
  return (
    <>
      {coverImage && (
        <div className={styles['header']}>
          <CoverImage title={title} url={coverImage.url} />
        </div>
      )}
      {(tags || date) && (
        <div className={styles['header__info']}>
          {tags && (
            <div className={styles['header__tags']}>
              {tags.map((tag) => (
                <div key={tag}>{tag}</div>
              ))}
            </div>
          )}
          {date && <div className={styles['header__date']}>{format(new Date(date), 'dd MMMM yyyy')}</div>}
        </div>
      )}
      {title && <Title>{title}</Title>}
    </>
  );
}
