'use client';

import { PostLink } from '@/features';
import { PostData } from '@/types';
import './MorePosts.css';

interface MorePostsProps {
  morePosts: PostData[];
  title?: string;
}

export function MorePosts({ morePosts, title }: MorePostsProps) {
  return (
    <div className="more-posts">
      <h2 className="site-title more-posts__title">{title ? title : 'More Posts'}</h2>
      <div className="more-posts__list">
        {morePosts.length > 0 ? morePosts.map((post) => <PostLink key={post.slug} post={post} />) : null}
      </div>
    </div>
  );
}
