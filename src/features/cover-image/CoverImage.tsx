import clsx from 'clsx';
import Image from 'next/image';
import styles from './CoverImage.module.css';

interface CoverImageProps {
  title: string;
  url: string;
  imageAuthor?: { name: string; url: string };
}

export function CoverImage({ imageAuthor, title, url }: CoverImageProps) {
  return (
    <div className={clsx(styles['cover-image'], 'relative')}>
      <Image
        alt={title}
        className={clsx(styles['cover-image__image'], 'link-inner')}
        height={600}
        src={url}
        width={1200}
      />
      {imageAuthor?.name && (
        <div className="absolute bottom-4 right-4 z-10">
          <p className="m-0 text-sm">
            Cover image by{' '}
            <a href={imageAuthor.url} rel="noreferrer" target="_blank" className="underline">
              {imageAuthor.name}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
