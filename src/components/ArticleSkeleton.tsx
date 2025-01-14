import React from 'react';
import { Card, Skeleton } from '@mantine/core';

interface ArticleSkeletonProps {
  isLoading: boolean;
}

const ArticleSkeleton = ({ isLoading }: ArticleSkeletonProps) => {
  return (
    <Card
      data-testid="article-skeleton"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      h="350"
    >
      <Skeleton visible={isLoading}>
        <Skeleton height={160} mb="sm" />
        <Skeleton height={8} width={'40%'} ta="end" mb="sm" />
        <Skeleton height={16} mb="7" />
        <Skeleton height={16} width={'70%'} mb="sm" />
        <Skeleton height={8} mb="7" />
        <Skeleton height={8} mb="7" />
        <Skeleton height={8} mb="7" />
        <Skeleton height={8} width={'70%'} />
      </Skeleton>
    </Card>
  );
};

export default ArticleSkeleton;
