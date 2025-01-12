const API_KEY = 'QSHdLF7qVHLq4N0YyKPYOZ0UwmL7kTcw';
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed';

export const fetchArticles = async (period: number = 1) => {
  try {
    const url = `${BASE_URL}/${period}.json?api-key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch articles: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
