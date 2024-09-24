import { format } from 'date-fns';

interface FooterProps {
  imageAuthor?: { name: string; url: string };
  updatedAt?: string;
}

export function Footer({ imageAuthor, updatedAt }: FooterProps) {
  return (
    <div className="my-12 text-sm text-gray-500 content md:my-16">
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
