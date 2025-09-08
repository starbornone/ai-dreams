import { getLimitedPosts } from '@/lib';
import { handleAPIError, logError } from '@/utils/handleErrors';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const category = searchParams.get('category');
    const limit = searchParams.get('limit') ?? '10';
    const skip = searchParams.get('skip') ?? '0';
    const skipPost = searchParams.get('skipPost') ?? undefined;

    const parsedSkip = parseInt(skip, 10);
    const parsedLimit = parseInt(limit, 10);

    if (isNaN(parsedSkip) || parsedSkip < 0) {
      return NextResponse.json(
        { error: 'Invalid skip parameter. It must be a non-negative integer.' },
        { status: 400 }
      );
    }

    if (isNaN(parsedLimit) || parsedLimit <= 0) {
      return NextResponse.json({ error: 'Invalid limit parameter. It must be a positive integer.' }, { status: 400 });
    }

    const categorySlug = Array.isArray(category) ? category[0] : category;

    const posts = await getLimitedPosts({
      category: categorySlug || undefined,
      limit: parsedLimit,
      skip: parsedSkip,
      skipPost: skipPost || undefined,
    });

    return NextResponse.json({ posts });
  } catch (error) {
    const apiError = handleAPIError(error);
    logError(apiError, 'Posts API route');

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
