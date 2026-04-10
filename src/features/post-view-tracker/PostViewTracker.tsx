'use client';

import { useEffect, useRef } from 'react';

type PostViewTrackerProps = {
  slug: string;
};

export function PostViewTracker({ slug }: PostViewTrackerProps) {
  const sent = useRef(false);

  useEffect(() => {
    const shouldTrack =
      process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_TRACK_POST_VIEWS_IN_DEV === 'true';

    if (!shouldTrack) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(
          '[PostViewTracker] Tracking disabled. Set NEXT_PUBLIC_TRACK_POST_VIEWS_IN_DEV=true to enable in development.'
        );
      }
      return;
    }
    if (sent.current || !slug) return;
    sent.current = true;

    if (process.env.NODE_ENV !== 'production') {
      console.log(`[PostViewTracker] Sending view for slug: ${slug}`);
    }

    void fetch(`/api/posts/${encodeURIComponent(slug)}/view`, {
      method: 'POST',
      keepalive: true,
    })
      .then((response) => {
        if (response.ok && process.env.NODE_ENV !== 'production') {
          console.log(`[PostViewTracker] View recorded for slug: ${slug}`);
        }
        if (!response.ok && process.env.NODE_ENV !== 'production') {
          console.error(`[PostViewTracker] Failed to record view (${response.status}) for slug: ${slug}`);
        }
      })
      .catch((error: unknown) => {
        if (process.env.NODE_ENV !== 'production') {
          console.error('[PostViewTracker] Request failed', error);
        }
      });
  }, [slug]);

  return null;
}
