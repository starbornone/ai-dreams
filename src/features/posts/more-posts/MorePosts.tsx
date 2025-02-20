'use client';

import { PostLink } from '@/features';
import { PostData } from '@/types';

interface MorePostsProps {
  morePosts: PostData[];
  title?: string;
}

export function MorePosts({ morePosts, title }: MorePostsProps) {
  return (
    <div className="my-16 lg:my-24">
      <h2 className="site-title mb-8 text-center text-4xl sm:ml-3 sm:text-left md:text-5xl">
        {title ? title : 'More Posts'}
      </h2>
      <div className="flex flex-col gap-12">
        {morePosts.length > 0 ? morePosts.map((post) => <PostLink key={post.slug} post={post} />) : null}
      </div>
    </div>
  );
}
