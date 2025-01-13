import { useEffect, useState, useCallback } from 'react';
import { fetchArticles } from '../services/api';
import { ArticleProps } from '../interfaces/Article';

export const useArticles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Array<ArticleProps>>([]);

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
