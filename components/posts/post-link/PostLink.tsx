import Link from 'next/link';
import { format } from 'date-fns';

export function PostLink({ post }) {
  return (
    <div className="my-4" key={post.slug}>
      <Link
        className="block w-full p-4 text-xl bg-gray-900 img-link group"
        data-content={post.title}
        href={`/posts/${post.slug}`}
      >
        <div className="flex justify-between w-full">
          <div>
            <div className="title-link group-hover:text-gray-800">
              {post.title}
            </div>
            <div className="text-sm font-light text-gray-500 group-hover:text-gray-700">
              {post.tags.length > 0
                ? post.tags.map((tag, index) => tag + (index === 0 ? ', ' : ''))
                : null}
            </div>
          </div>
          <div className="justify-self-end">
            <div className="hidden text-sm font-light text-gray-500 group-hover:text-gray-700 md:visible md:flex">
              {format(new Date(post.date), 'dd MMMM yyyy')}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
