import React from 'react';
import {
  Card,
  Container,
  Grid,
  Group,
  Image,
  Text,
  Title,
} from '@mantine/core';
import ArticleSkeleton from './ArticleSkeleton';
import { useArticles as defaultUseArticles } from '../hooks/useArticles';

interface ArticleListProps {
  useArticles?: typeof defaultUseArticles; // Accept useArticles as a prop
}

const ArticleList: React.FC<ArticleListProps> = ({
  useArticles = defaultUseArticles,
}) => {
  const { isLoading, articles } = useArticles();
  return (
    <Container size="xxl">
      {isLoading ? (
        <Grid>
          {Array.from({ length: 12 }, (_, index) => (
            <Grid.Col key={index} span={3}>
              <ArticleSkeleton isLoading={isLoading} />
            </Grid.Col>
          ))}
        </Grid>
      ) : (
        <>
          <Grid>
            <Grid.Col>
              <Group justify="space-between" mt="md" mb="xs">
                <Title order={1}>Trending</Title>
                <Text size="sm" lineClamp={2}>
                  Good morning. These stories are most popular with our readers
                  this minute.
                </Text>
              </Group>
            </Grid.Col>
          </Grid>
          <Grid>
            {articles.map((article, index) => {
              const { id, title, abstract, media, source, url } = article;
              const articleImage = media?.[0]?.['media-metadata']?.[2]?.url;
              return (
                <Grid.Col span={3}>
                  <Card
                    key={`${index}-${id}`}
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    h={{ md: '380', xl: '350' }}
                    component="a"
                    href={url}
                    target="_blank"
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
          </Grid>
        </>
      )}
    </Container>
  );
};

export default ArticleList;
