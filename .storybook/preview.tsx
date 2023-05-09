import type { Parameters } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-styling';
import { Preview } from '@storybook/react';
import { TooltipProvider } from '@/tooltip';
import { Toaster } from '@/toast';

import '@/tailwind.css';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(?<temp1>background|color)$/iu,
      date: /Date$/u,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#000000',
      },
    ],
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

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <TooltipProvider>
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <Story />
        </TooltipProvider>
        <Toaster />
      </>
    ),
  ],
};

export default preview;
