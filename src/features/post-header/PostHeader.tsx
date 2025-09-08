import { CalendarIcon, FolderIcon, TagIcon, Title } from '@/components';
import { CoverImage } from '@/types';
import { format } from 'date-fns';
import Link from 'next/link';
import './PostHeader.css';

interface PostHeaderProps {
  category?: { name: string; slug?: string };
  coverImage?: CoverImage;
  date?: string;
  tags?: string[];
  title: string;
}

export function PostHeader({ category, coverImage, date, tags, title }: PostHeaderProps) {
  return (
    <div>
      {coverImage && (
        <div className="post-header">
          <img alt={title} className="post-header__cover-image" src={coverImage.url} />
        </div>
      )}
      <div className="post-header__info">
        {category && (
          <div className="post-header__metadata-item">
            <FolderIcon className="post-header__metadata-icon" />
            <Link href={`/categories/${category.slug}`}>{category.name}</Link>
          </div>
        )}
        {tags && (
          <div className="post-header__metadata-item">
            <TagIcon className="post-header__metadata-icon" />
            <div>
              {tags.length > 0 ? tags.map((tag, index) => tag + (index === 0 ? ', ' : '')) : null}
            </div>
          </div>
        )}
        {date && (
          <div className="post-header__metadata-item">
            <CalendarIcon className="post-header__metadata-icon" />
            <time className="post-header__date">{format(new Date(date), 'dd MMMM yyyy')}</time>
          </div>
        )}
      </div>
      {title && <Title>{title}</Title>}
    </div>
  );
}
