import type { StorybookConfig } from '@storybook/react-vite';

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
      },
    },
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {},
  features: {
    storyStoreV7: true,
  },
  viteFinal(viteConfig) {
    // Add your configuration here
    return viteConfig;
  },
  docs: {
    autodocs: true,
  },
};
export default config;
