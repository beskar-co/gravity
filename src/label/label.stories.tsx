import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './';

const meta: Meta<typeof Label> = { component: Label };
export default meta;

export const Default: StoryObj<typeof Label> = {
  args: {
    children: 'Label',
  },
};
