import { handleGetPost } from '@/utils';
import { render, screen } from '@testing-library/react';
import Page from '../page';

jest.mock('@/utils', () => ({
  handleGetPost: jest.fn(),
}));

describe('Post Page Integration', () => {
  it('renders post content correctly', async () => {
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

    render(<Page params={{ slug: 'test-post' }} />);

    expect(await screen.findByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('Tech')).toBeInTheDocument();
    expect(screen.getByText('28 September 2024')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('displays loading spinner initially', () => {
    render(<Page params={{ slug: 'test-post' }} />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('shows "post not found" message when no post is returned', async () => {
    (handleGetPost as jest.Mock).mockResolvedValue(null);
    render(<Page params={{ slug: 'non-existent-post' }} />);
    expect(await screen.findByText('Post not found')).toBeInTheDocument();
  });
});
