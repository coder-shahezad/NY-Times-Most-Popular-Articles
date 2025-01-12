import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import LayoutContainer from './containers/LayoutContainer';
import { resolver } from './theme';

export default function App() {
  return (
    <MantineProvider cssVariablesResolver={resolver}>
      <LayoutContainer />
    </MantineProvider>
  );
}
