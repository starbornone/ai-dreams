import { handleGetPost } from '@/utils';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Page from '../page';

expect.extend(toHaveNoViolations);

jest.mock('@/utils', () => ({
  handleGetPost: jest.fn(),
}));

describe('Post Page Accessibility', () => {
  it('should have no accessibility violations', async () => {
    (handleGetPost as jest.Mock).mockResolvedValue({
      title: 'Test Post',
      content: '<p>This is a test post content</p>',
      date: '2024-09-28',
      category: { name: 'Tech', slug: 'tech' },
      tags: ['JavaScript', 'React'],
      coverImage: { url: 'test-image-url' },
      imageAuthor: 'John Doe',
      imageAuthorUrl: 'https://example.com',
      updatedAt: '2024-09-29',
    });

    const { container } = render(<Page params={{ slug: 'test-post' }} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
