import { fetchArticles } from './api';

global.fetch = jest.fn();

describe('fetchArticles', () => {
  const mockResponse = {
    results: [
      {
        id: '1',
        title: 'Test Article',
        abstract: 'This is a test article',
        source: 'NY Times',
        media: [
          {
            'media-metadata': [{ url: 'test-image-url' }],
          },
        ],
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch articles successfully', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const data = await fetchArticles(7);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual(mockResponse);
  });

  it('should throw an error if fetch fails', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    });

    await expect(fetchArticles(7)).rejects.toThrow(
      'Failed to fetch articles: 500 Internal Server Error'
    );

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should handle network errors gracefully', async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error('Network Error'));

    await expect(fetchArticles(7)).rejects.toThrow('Network Error');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
