import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        /*
         * Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
         * For more details on this addon's options.
         */
        postCss: true,
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {},
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
};
export default config;
