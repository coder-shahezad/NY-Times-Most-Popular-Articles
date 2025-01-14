import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useArticles } from '../hooks/useArticles';
import ArticleList from './ArticleList';
import { MantineProvider } from '@mantine/core';

jest.mock('../hooks/useArticles', () => ({
  useArticles: jest.fn(),
}));

describe('ArticleList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render skeletons when loading', () => {
    (useArticles as jest.Mock).mockReturnValue({
      isLoading: true,
      articles: [],
    });

    render(
      <MantineProvider>
        <ArticleList />
      </MantineProvider>
    );

    const skeletons = screen.getAllByTestId('article-skeleton');
    expect(skeletons).toHaveLength(12);
  });

  it('should render articles when loaded', async () => {
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

    render(
      <MantineProvider>
        <ArticleList />
      </MantineProvider>
    );

    await waitFor(() =>
      expect(screen.getByText('Test Article 1')).toBeInTheDocument()
    );
    expect(screen.getByText('Test Article 2')).toBeInTheDocument();
  });

  it('should render a skeleton loader while fetching articles', () => {
    (useArticles as jest.Mock).mockReturnValue({
      isLoading: true,
      articles: [],
    });

    render(
      <MantineProvider>
        <ArticleList />
      </MantineProvider>
    );

    const skeletons = screen.getAllByTestId('article-skeleton');
    expect(skeletons.length).toBe(12);
  });
});
