import { handleGetPost } from '@/utils';
import { generateMetadata } from '../page';

jest.mock('@/utils', () => ({
  handleGetPost: jest.fn(),
}));

describe('generateMetadata', () => {
  it('returns correct metadata for a given post', async () => {
    (handleGetPost as jest.Mock).mockResolvedValue({
      title: 'Test Post',
      excerpt: 'This is a test post',
      tags: ['test', 'post'],
      keywords: ['test', 'blog'],
      ogImage: { url: 'test-image-url' },
    });
    const metadata = await generateMetadata({ params: { slug: 'test-post' } });
    expect(metadata).toEqual({
      title: 'Test Post',
      description: 'This is a test post',
      keywords: ['test', 'post', 'test', 'blog'],
      openGraph: {
        images: 'test-image-url',
      },
    });
  });
});
