import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import useArticles from '../hooks/useArticles';
import ArticleList from './ArticleList';

jest.mock('../hooks/useArticles', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('ArticleList', () => {
  it('should render skeletons when loading', () => {
    // Mock the useArticles hook to return isLoading as true
    (useArticles as jest.Mock).mockReturnValue({
      isLoading: true,
      articles: [],
    });

    render(<ArticleList />);

    // Check if the skeleton loader is rendered (assuming 12 skeletons are rendered)
    const skeletons = screen.getAllByTestId('article-skeleton');
    expect(skeletons).toHaveLength(12);
  });

  it('should render articles when loaded', async () => {
    // Mock the useArticles hook to return isLoading as false and some articles
    (useArticles as jest.Mock).mockReturnValue({
      isLoading: false,
      articles: [
        {
          id: '1',
          title: 'Test Article 1',
          abstract: 'This is a test article',
          media: [{ 'media-metadata': [{ url: 'test-image-url' }] }],
          source: 'NY Times',
        },
        {
          id: '2',
          title: 'Test Article 2',
          abstract: 'This is another test article',
          media: [{ 'media-metadata': [{ url: 'test-image-url-2' }] }],
          source: 'NY Times',
        },
      ],
    });

    render(<ArticleList />);

    // Wait for articles to load and check if the article title is rendered
    await waitFor(() => screen.getByText('Test Article 1'));
    expect(screen.getByText('Test Article 1')).toBeInTheDocument();
    expect(screen.getByText('Test Article 2')).toBeInTheDocument();
  });

  it('should render a skeleton loader while fetching articles', () => {
    (useArticles as jest.Mock).mockReturnValue({
      isLoading: true,
      articles: [],
    });

    render(<ArticleList />);

    const skeletons = screen.getAllByTestId('article-skeleton');
    expect(skeletons.length).toBe(12); // Verifying if there are 12 skeletons when loading
  });
});
