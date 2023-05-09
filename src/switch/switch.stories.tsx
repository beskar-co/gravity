import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './';

const meta: Meta<typeof Switch> = { component: Switch };
export default meta;

export const Default: StoryObj<typeof Switch> = {
  args: {
    label: 'Airplane Mode',
  },
};

export const WithHint: StoryObj<typeof Switch> = {
  args: {
    label: 'Airplane Mode',
    hint: 'Turn on airplane mode to disable all wireless connections.',
  },
};
