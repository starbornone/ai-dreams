import { format } from 'date-fns';

import { CoverImage, Title } from 'components';

interface Props {
  coverImage?: { url: string };
  date?: string;
  tags?: string[];
  title: string;
}

export function Header({ coverImage, date, tags, title }: Props) {
  return (
    <>
      {coverImage && (
        <div className="mb-8 -mx-5 sm:mx-0 md:mb-12">
          <CoverImage title={title} url={coverImage.url} />
        </div>
      )}
      {(tags || date) && (
        <div className="flex items-center justify-between max-w-3xl mx-auto mb-6">
          {tags && (
            <div className="font-light text-gray-500 md:gap-8 md:flex">
              {tags.map((tag) => (
                <div key={tag}>{tag}</div>
              ))}
            </div>
          )}
          {date && (
            <div className="font-light text-gray-500">
              {format(new Date(date), 'dd MMMM yyyy')}
            </div>
          )}
        </div>
      )}
      {title && <Title>{title}</Title>}
    </>
  );
}
