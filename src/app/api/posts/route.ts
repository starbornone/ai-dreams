import { getLimitedPosts } from '@/lib';
import { PostData } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

interface Data {
  posts: PostData[];
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const skip = searchParams.get('skip') ?? '0';
    const limit = searchParams.get('limit') ?? '10';

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
      skip: parsedSkip,
      limit: parsedLimit,
      category: categorySlug || undefined,
    });

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
