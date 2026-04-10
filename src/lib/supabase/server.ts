import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export function createServerSupabaseClient(): SupabaseClient | null {
  const projectId = process.env.SUPABASE_PROJECT_ID;
  const key = process.env.SUPABASE_KEY;
  if (!projectId || !key) return null;

  return createClient(`https://${projectId}.supabase.co`, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
