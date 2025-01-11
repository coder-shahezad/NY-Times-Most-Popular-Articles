interface ArticleListProps {
  articles: any[];
  isLoading: boolean;
}

const ArticleList = ({ articles, isLoading }: ArticleListProps) => {
  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
};

export default ArticleList;
