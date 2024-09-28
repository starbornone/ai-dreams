import { handleGetPost } from '@/utils';
import { render, screen } from '@testing-library/react';
import Page from '../page';

jest.mock('@/utils', () => ({
  handleGetPost: jest.fn(),
}));

describe('Post Page Component', () => {
  it('renders loading state initially', () => {
    render(<Page params={{ slug: 'test-post' }} />);
    expect(screen.getByTestId('loading')).toBeInTheDocument(); // Expecting loading indicator
  });

  it('displays post content when data is fetched successfully', async () => {
    // Mocking the API response
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

    // Use findBy for async content that appears after rendering
    expect(await screen.findByRole('heading', { name: 'Test Post' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Tech' })).toHaveAttribute('href', '/categories/tech');
    expect(screen.getByText('JavaScript, React')).toBeInTheDocument();
  });

  it('displays "post not found" when no post data is returned', async () => {
    (handleGetPost as jest.Mock).mockResolvedValue(null); // Mocking no post data

    render(<Page params={{ slug: 'non-existent-post' }} />);

    // Using findByText to wait for async rendering
    expect(await screen.findByText('Post not found')).toBeInTheDocument();
  });
});
