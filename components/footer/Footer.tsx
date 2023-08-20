import { format } from 'date-fns';

export function Footer({ imageAuthor, updatedAt }) {
  return (
    <div className="my-12 text-sm text-gray-500 content md:my-16">
      {imageAuthor?.name && (
        <div>
          Original image by{' '}
          <a href={imageAuthor.url} rel="noreferrer" target="_blank">
            {imageAuthor.name}
          </a>
        </div>
      )}
      {updatedAt && (
        <div>
          Last updated at {format(new Date(updatedAt), 'HH:MM.ss dd MMMM yyyy')}
        </div>
      )}
    </div>
  );
}
