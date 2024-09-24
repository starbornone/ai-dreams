import { CoverImage, Title } from '@/features';
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
        <div className="-mx-5 mb-8 sm:mx-0 md:mb-12">
          <CoverImage title={title} url={coverImage.url} />
        </div>
      )}
      {(tags || date) && (
        <div className="mx-auto mb-6 flex max-w-3xl items-center justify-between">
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
