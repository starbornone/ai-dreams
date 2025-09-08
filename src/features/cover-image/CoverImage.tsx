import Image from 'next/image';

import './CoverImage.css';

interface CoverImageProps {
  title: string;
  url: string;
  imageAuthor?: { name: string; url: string };
}

export function CoverImage({ imageAuthor, title, url }: CoverImageProps) {
  return (
    <div className="cover-image">
      <Image
        alt={title}
        className="cover-image__image link-inner"
        height={1440}
        src={url}
        width={2560}
      />
      {imageAuthor?.name && (
        <div className="cover-image__attribution">
          <p className="cover-image__attribution-text">
            Cover image by{' '}
            <a href={imageAuthor.url} rel="noreferrer" target="_blank" className="cover-image__attribution-link">
              {imageAuthor.name}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
