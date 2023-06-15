import type { Parameters } from '@storybook/react';
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

const preview: Preview = {
  globalTypes: {
    darkMode: {
      defaultValue: false,
    },
    className: {
      defaultValue: 'dark', // Set your custom dark mode class name
    },
  },
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
