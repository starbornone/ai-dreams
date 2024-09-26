import { getLimitedPosts } from '@/lib/hygraph';
import { Post } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  posts: Post[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | { error: string }>) {
  const { skip = '0', limit = '3' } = req.query;

  try {
    const posts = await getLimitedPosts(Number(skip), Number(limit));
    res.status(200).json({ posts });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}
