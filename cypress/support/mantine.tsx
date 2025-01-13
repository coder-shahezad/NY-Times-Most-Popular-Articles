import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { resolver } from '../../src/theme';

export const MountWithMantine = (component: React.ReactNode) => {
  return (
    <MantineProvider cssVariablesResolver={resolver}>
      {component}
    </MantineProvider>
  );
};
