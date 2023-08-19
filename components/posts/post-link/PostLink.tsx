import Link from 'next/link';
import { format } from 'date-fns';

export function PostLink({ post }) {
  return (
    <div className="my-4" key={post.slug}>
      <Link
        className="img-link group block w-full bg-gray-900 p-4 text-xl"
        data-content={post.title}
        href={`/posts/${post.slug}`}
      >
        <div className="flex w-full justify-between">
          <div>
            <div className="post-title-link group-hover:text-gray-800">
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
