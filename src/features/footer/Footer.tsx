import { format } from 'date-fns';
import styles from './Footer.module.css';

interface FooterProps {
  imageAuthor?: { name: string; url: string };
  updatedAt?: string;
}

export function Footer({ imageAuthor, updatedAt }: FooterProps) {
  return (
    <div className={styles['footer']}>
      {imageAuthor?.name && (
        <div>
          Cover image by{' '}
          <a href={imageAuthor.url} rel="noreferrer" target="_blank">
            {imageAuthor.name}
          </a>
        </div>
      )}
      {updatedAt && <div>Last updated at {format(new Date(updatedAt), 'dd MMMM yyyy')}</div>}
    </div>
  );
}
