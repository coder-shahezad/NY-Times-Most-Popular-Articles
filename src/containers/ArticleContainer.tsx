import ArticleList from '../components/ArticleList'; // Fixed typo
import useArticles from '../hooks/useArticles';

const ArticleContainer = () => {
  const { isLoading, articles } = useArticles();

  return <ArticleList articles={articles} isLoading={isLoading} />;
};

export default ArticleContainer;
