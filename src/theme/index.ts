import { CSSVariablesResolver } from '@mantine/core';

export const resolver: CSSVariablesResolver = () => ({
  variables: {
    '--container-size-xxl': '96em',
  },
  light: {},
  dark: {},
});
