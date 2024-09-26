'use client';

import { Loading } from '@/components';
import { PostLink } from '@/features';
import { PostData } from '@/types';
import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

interface MorePostsProps {
  initialSkip: number;
  limit: number;
}

export function MorePosts({ initialSkip, limit }: MorePostsProps) {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [skip, setSkip] = useState<number>(initialSkip);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchMorePosts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await axios.get('/api/posts', {
        params: { skip, limit },
      });
      const newPosts: PostData[] = response.data.posts;

      if (newPosts.length < limit) {
        setHasMore(false);
      }

      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setSkip((prevSkip) => prevSkip + limit);
    } catch (error) {
      console.error('Error fetching more posts:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, limit, skip]);

  useEffect(() => {
    fetchMorePosts();
  }, [fetchMorePosts]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMorePosts();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    const currentObserverRef = observerRef.current;

    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) observer.unobserve(currentObserverRef);
    };
  }, [fetchMorePosts, loading, hasMore]);

  return (
    <div className="my-16 md:my-32">
      <h2 className="site-title mb-8 text-center text-4xl sm:ml-3 sm:text-left md:text-5xl">More Posts</h2>
      {posts.length > 0 ? posts.map((post) => <PostLink key={post.slug} post={post} />) : null}
      {loading && <Loading color="orange" message="Loading more posts..." />}
      {!hasMore && (
        <div className="mt-8 text-center text-gray-600">
          <p>You have reached the end of history.</p>
          <p>Of my posts, anyway.</p>
        </div>
      )}
      <div ref={observerRef} style={{ height: '1px' }} />
    </div>
  );
}
