import styles from './Footer.module.css';

interface FooterProps {
  imageAuthor?: { name: string; url: string };
}

export function Footer({ imageAuthor }: FooterProps) {
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
    </div>
  );
}
