import { CalendarIcon, FolderIcon, TagIcon } from '@/components';
import { PostData } from '@/types';
import { format } from 'date-fns';
import Link from 'next/link';

export const experimental_ppr = true;

interface Props {
  post: PostData;
}

export function MetaData({ post }: Props) {
  return (
    <div className="flex flex-col justify-between gap-2 text-sm text-gray-500 lg:flex-row">
      {post.category && (
        <div className="flex items-center gap-2 justify-self-start">
          <FolderIcon className="h-4 w-4 text-gray-600" />
          <Link href={`/categories/${post.category.slug}`}>{post.category.name}</Link>
        </div>
      )}
      {post.tags && (
        <div className="flex items-center gap-2">
          <TagIcon className="h-4 w-4 text-gray-600" />
          {post.tags.length > 0
            ? post.tags.map((tag: string | number, index: number) => tag + (index === 0 ? ', ' : ''))
            : null}
        </div>
      )}
      {post.date && (
        <div className="flex items-center gap-2 justify-self-end">
          <CalendarIcon className="h-4 w-4 text-gray-600" />
          {format(new Date(post.date), 'dd MMMM yyyy')}
        </div>
      )}
    </div>
  );
}
