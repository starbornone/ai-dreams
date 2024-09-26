import { getLimitedPosts } from '@/lib/hygraph';
import { PostData } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  posts: PostData[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | { error: string }>) {
  const { skip = '3', limit = '3' } = req.query;

  try {
    const posts = await getLimitedPosts(Number(skip), Number(limit));
    res.status(200).json({ posts });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}
