import type { Parameters } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-styling';

import './tailwind.css';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(?<temp1>background|color)$/iu,
      date: /Date$/u,
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];
