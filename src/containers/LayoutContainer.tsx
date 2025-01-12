import { AppShell, Center, Image } from '@mantine/core';
import ArticleList from '../components/ArticleList';
import logo from '../assets/logo.png';

const LayoutContainer = () => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header py="xs" component={Center}>
        <Image src={logo} alt="NY Time Popular Articles" w={300} />
      </AppShell.Header>
      <AppShell.Main>
        <ArticleList />
      </AppShell.Main>
    </AppShell>
  );
};

export default LayoutContainer;
