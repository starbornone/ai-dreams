import { CoverImage, Title } from '@/components';
import { format } from 'date-fns';

interface HeaderProps {
  coverImage?: { url: string };
  date?: string;
  tags?: string[];
  title: string;
}

export function Header({ coverImage, date, tags, title }: HeaderProps) {
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
            <div className="font-light text-gray-500 md:flex md:gap-8">
              {tags.map((tag) => (
                <div key={tag}>{tag}</div>
              ))}
            </div>
          )}
          {date && <div className="font-light text-gray-500">{format(new Date(date), 'dd MMMM yyyy')}</div>}
        </div>
      )}
      {title && <Title>{title}</Title>}
    </>
  );
}
