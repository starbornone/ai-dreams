import { createServerSupabaseClient } from '@/lib/supabase/server';

export type TopPostByViews = {
  slug: string;
  views: number;
};

type RpcRow = { post_slug?: unknown; views?: unknown };

export type TopPostsByViewsOptions = {
  limit?: number;
  viewedAfter?: string;
  viewedBefore?: string;
};

export async function getTopPostsByViews(options: TopPostsByViewsOptions = {}): Promise<TopPostByViews[]> {
  const supabase = createServerSupabaseClient();
  if (!supabase) return [];

  const { limit = 10, viewedAfter = null, viewedBefore = null } = options;
  const { data, error } = await supabase.rpc('top_posts_by_views', {
    limit_count: limit,
    viewed_after: viewedAfter,
    viewed_before: viewedBefore,
  });

  if (error || !data) return [];

  return (data as RpcRow[])
    .map((row) => {
      const slug = typeof row?.post_slug === 'string' ? row.post_slug : null;
      const viewsValue = row?.views;
      const views =
        typeof viewsValue === 'number'
          ? viewsValue
          : typeof viewsValue === 'string'
            ? Number.parseInt(viewsValue, 10)
            : Number.NaN;

      if (!slug || Number.isNaN(views)) return null;
      return { slug, views };
    })
    .filter((row): row is TopPostByViews => row !== null);
}

