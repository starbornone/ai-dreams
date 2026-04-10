import { recordPostView } from '@/lib/postViews/recordPostView';
import { handleAPIError, logError } from '@/utils/handleErrors';
import { NextRequest, NextResponse } from 'next/server';

const MAX_SLUG_LEN = 256;

function isValidSlug(slug: string): boolean {
  if (slug.length === 0 || slug.length > MAX_SLUG_LEN) return false;
  if (slug !== slug.trim()) return false;
  return !/[\r\n\0]/.test(slug);
}

export async function POST(_request: NextRequest, context: { params: Promise<{ slug: string }> }) {
  try {
    const { slug: raw } = await context.params;
    const slug = decodeURIComponent(raw);

    if (!isValidSlug(slug)) {
      return NextResponse.json({ error: 'Invalid slug' }, { status: 400 });
    }

    const result = await recordPostView(slug);

    if (!result.ok) {
      if (result.reason === 'missing_config') {
        return NextResponse.json({ error: 'View tracking is not configured' }, { status: 503 });
      }
      return NextResponse.json({ error: 'Failed to record view' }, { status: 500 });
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    const apiError = handleAPIError(error);
    logError(apiError, 'POST /api/posts/[slug]/view');

    return NextResponse.json(
      {
        error: apiError.message,
        ...(process.env.NODE_ENV === 'development' && {
          details: apiError.originalError?.message,
        }),
      },
      { status: apiError.statusCode }
    );
  }
}
