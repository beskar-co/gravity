import type { Meta, StoryObj } from '@storybook/react';
import { Hint } from './';

const meta: Meta<typeof Hint> = { component: Hint };
export default meta;

export const Default: StoryObj<typeof Hint> = {
  args: {
    children: 'This is a hint.',
  },
};
