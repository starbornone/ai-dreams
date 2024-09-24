import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CoverImage.module.css';

interface CoverImageProps {
  slug?: string;
  title: string;
  url: string;
}

export function CoverImage({ title, url, slug }: CoverImageProps) {
  const image = (
    <Image
      alt={title}
      className={clsx(styles['cover-image__image'], 'link-inner')}
      height={600}
      src={url}
      width={1200}
    />
  );

  return (
    <div className={styles['cover-image']}>
      {slug ? (
        <Link className={clsx(styles['cover-image__link'], 'img-link')} href={`/${slug}`}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
