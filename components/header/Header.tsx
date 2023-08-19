import { format } from 'date-fns';

import { CoverImage, Title } from 'components';

interface Props {
  coverImage?: { url: string };
  date?: string;
  tags?: string[];
  title: string;
  subtitle?: string;
}

export function Header({ coverImage, date, tags, subtitle, title }: Props) {
  return (
    <>
      {coverImage && (
        <div className="mb-8 -mx-5 sm:mx-0 md:mb-12">
          <CoverImage title={title} url={coverImage.url} />
        </div>
      )}
      {(tags || date) && (
        <div className="flex justify-between max-w-3xl mx-auto mb-6">
          {tags && (
            <div className="flex gap-8 font-light text-text-500">
              {tags.map((tag) => (
                <div key={tag}>{tag}</div>
              ))}
            </div>
          )}
          {date && (
            <div className="font-light text-text-500">
              {format(new Date(date), 'dd MMMM yyyy')}
            </div>
          )}
        </div>
      )}
      {title && <Title>{title}</Title>}
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </>
  );
}
