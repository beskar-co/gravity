import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './';

const meta: Meta<typeof Badge> = { component: Badge };
export default meta;

export const Default: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge',
  },
};

export const Small: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge',
    size: 'sm',
  },
};

export const Secondary: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge',
    variant: 'secondary',
  },
};
