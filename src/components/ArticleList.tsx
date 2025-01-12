import { Card, Container, Grid, Image, Text } from '@mantine/core';
import ArticleSkeleton from './ArticleSkeleton';
import useArticles from '../hooks/useArticles';

const ArticleList = () => {
  const { isLoading, articles } = useArticles();
  return (
    <Container size="xxl">
      <Grid>
        {isLoading ? (
          <>
            {Array.from({ length: 12 }, (_, index) => (
              <Grid.Col key={index} span={3}>
                <ArticleSkeleton isLoading={isLoading} />
              </Grid.Col>
            ))}
          </>
        ) : (
          <>
            {articles.map((article, index) => {
              const { id, title, abstract, media, source } = article;
              const articleImage = media?.[0]?.['media-metadata']?.[2]?.url;
              return (
                <Grid.Col span={3}>
                  <Card
                    key={`${index}-${id}`}
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    h="350"
                  >
                    <Card.Section>
                      <Image src={articleImage} height={160} alt={title} />
                    </Card.Section>
                    <Text size="xs" mt="md" mb="xs" c="dimmed" ta="end">
                      {source}
                    </Text>
                    <Text fw={500}>{title}</Text>
                    <Text size="sm" c="dimmed" lineClamp={4}>
                      {abstract}
                    </Text>
                  </Card>
                </Grid.Col>
              );
            })}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default ArticleList;
