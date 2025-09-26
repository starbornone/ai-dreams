'use client';

import { useState } from 'react';
import { PostLink } from '@/features';
import { PostData } from '@/types';

import './MorePosts.css';

interface MorePostsProps {
  morePosts: PostData[];
  title?: string;
  enableLoadMore?: boolean;
  loadMoreLimit?: number;
  initialOffset?: number;
}

export function MorePosts({ morePosts, title, enableLoadMore = false, loadMoreLimit = 12, initialOffset = 0 }: MorePostsProps) {
  const [posts, setPosts] = useState<PostData[]>(morePosts);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(morePosts.length >= loadMoreLimit);
  const [error, setError] = useState<string | null>(null);
  const [totalLoaded, setTotalLoaded] = useState(initialOffset + morePosts.length);

  const loadMorePosts = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/posts?skip=${totalLoaded}&limit=${loadMoreLimit}`);
      
      if (!response.ok) {
        throw new Error('Failed to load more posts');
      }

      const data = await response.json();
      const newPosts = data.posts || [];

      if (newPosts.length > 0) {
        setPosts(prevPosts => [...prevPosts, ...newPosts]);
        setTotalLoaded(prevTotal => prevTotal + newPosts.length);
        setHasMore(newPosts.length >= loadMoreLimit);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while loading posts');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="more-posts">
      <h2 className="site-title more-posts__title">{title ? title : 'More Posts'}</h2>
      <div className="more-posts__list">
        {posts.length > 0 ? posts.map((post) => <PostLink key={post.slug} post={post} />) : null}
      </div>
      
      {enableLoadMore && hasMore && (
        <div className="more-posts__load-more">
          {error && (
            <div className="more-posts__error">
              <p>{error}</p>
              <button 
                className="more-posts__retry-button"
                onClick={loadMorePosts}
                disabled={isLoading}
              >
                Try Again
              </button>
            </div>
          )}
          
          {!error && (
            <button 
              className="more-posts__load-button img-link"
              onClick={loadMorePosts}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Load More'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
