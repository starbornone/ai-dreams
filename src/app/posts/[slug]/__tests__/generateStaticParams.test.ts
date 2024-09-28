import { getAllPostsWithSlug } from '@/lib';
import { generateStaticParams } from '../page';

jest.mock('@/lib', () => ({
  getAllPostsWithSlug: jest.fn(),
}));

describe('generateStaticParams', () => {
  it('returns correct params', async () => {
    (getAllPostsWithSlug as jest.Mock).mockResolvedValue([{ slug: 'first-post' }, { slug: 'second-post' }]);
    const params = await generateStaticParams();
    expect(params).toEqual([{ id: 'first-post' }, { id: 'second-post' }]);
  });
});
