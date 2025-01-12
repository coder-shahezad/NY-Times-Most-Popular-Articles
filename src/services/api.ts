const { VITE_BASE_URL, VITE_API_KEY } = import.meta.env;

export const fetchArticles = async (period: number = 1) => {
  try {
    const url = `${VITE_BASE_URL}/${period}.json?api-key=${VITE_API_KEY}`;
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
