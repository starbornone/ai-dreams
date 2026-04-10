import { createServerSupabaseClient } from '@/lib/supabase/server';

export type RecordPostViewResult =
  | { ok: true }
  | { ok: false; reason: 'missing_config' | 'database_error' };

export async function recordPostView(postSlug: string): Promise<RecordPostViewResult> {
  const supabase = createServerSupabaseClient();
  if (!supabase) return { ok: false, reason: 'missing_config' };

  const { error } = await supabase.from('post_views').insert({ post_slug: postSlug });

  if (error) {
    console.error('[post_views]', error.message);
    return { ok: false, reason: 'database_error' };
  }

  return { ok: true };
}
