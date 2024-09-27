import { CalendarIcon, FolderIcon, TagIcon, Title } from '@/components';
import { CoverImage } from '@/types';
import { format } from 'date-fns';
import Link from 'next/link';
import styles from './Header.module.css';

interface HeaderProps {
  category?: { name: string; slug?: string };
  coverImage?: CoverImage;
  date?: string;
  tags?: string[];
  title: string;
}

export function Header({ category, coverImage, date, tags, title }: HeaderProps) {
  return (
    <div>
      {coverImage && (
        <div className={styles['header']}>
          <img alt={title} className={styles['cover-image']} src={coverImage.url} />
        </div>
      )}
      <div className={styles['header__info']}>
        {category && (
          <div className="flex items-center gap-2">
            <FolderIcon className="h-4 w-4 text-gray-600" />
            <Link href={`/categories/${category.slug}`}>{category.name}</Link>
          </div>
        )}
        {tags && (
          <div className="flex items-center gap-2">
            <TagIcon className="h-4 w-4 text-gray-600" />
            <div className={styles['header__tags']}>
              {tags.length > 0 ? tags.map((tag, index) => tag + (index === 0 ? ', ' : '')) : null}
            </div>
          </div>
        )}
        {date && (
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-gray-600" />
            {format(new Date(date), 'dd MMMM yyyy')}
          </div>
        )}
      </div>
      {title && <Title>{title}</Title>}
    </div>
  );
}
