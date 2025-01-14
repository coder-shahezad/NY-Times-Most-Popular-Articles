import { renderHook, waitFor } from '@testing-library/react';
import { useArticles } from './useArticles';
import { fetchArticles } from '../services/api';

jest.mock('../services/api', () => ({
  fetchArticles: jest.fn(),
}));

describe('useArticles', () => {
  beforeEach(() => {
    (fetchArticles as jest.Mock).mockReset();
  });

  it('should set isLoading to true initially', () => {
    (fetchArticles as jest.Mock).mockResolvedValueOnce({ results: [] });

    const { result } = renderHook(() => useArticles());

    expect(result.current.isLoading).toBe(true);
  });

  it('should fetch articles successfully and update articles state', async () => {
    const mockArticles = {
      results: [
        {
          id: '1',
          title: 'Test Article 1',
          abstract: 'This is a test article',
          source: 'NY Times',
          media: [{ 'media-metadata': [{ url: 'test-image-url' }] }],
        },
        {
          id: '2',
          title: 'Test Article 2',
          abstract: 'This is another test article',
          source: 'NY Times',
          media: [{ 'media-metadata': [{ url: 'test-image-url-2' }] }],
        },
      ],
    };

    (fetchArticles as jest.Mock).mockResolvedValueOnce(mockArticles);

    const { result } = renderHook(() => useArticles());

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(fetchArticles).toHaveBeenCalledTimes(1);
    expect(result.current.articles).toEqual(mockArticles.results);
  });

  it('should handle errors and set isLoading to false', async () => {
    (fetchArticles as jest.Mock).mockRejectedValueOnce(
      new Error('Failed to fetch articles')
    );

    const { result } = renderHook(() => useArticles());

    expect(fetchArticles).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.articles).toEqual([]);
  });
});
