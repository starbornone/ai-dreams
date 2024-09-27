import clsx from 'clsx';
import Image from 'next/image';
import styles from './CoverImage.module.css';

interface CoverImageProps {
  title: string;
  url: string;
}

export function CoverImage({ title, url }: CoverImageProps) {
  return (
    <div className={styles['cover-image']}>
      <Image
        alt={title}
        className={clsx(styles['cover-image__image'], 'link-inner')}
        height={600}
        src={url}
        width={1200}
      />
    </div>
  );
}
