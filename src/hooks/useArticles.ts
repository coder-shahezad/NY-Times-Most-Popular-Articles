import { useEffect, useState, useCallback } from 'react';
import { fetchArticles } from '../services/api';

const useArticles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetchArticles();
      setArticles(response.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, articles };
};

export default useArticles;
