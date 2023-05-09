import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './';

const meta: Meta<typeof Button> = { component: Button };
export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Tertiary: StoryObj<typeof Button> = {
  args: {
    variant: 'tertiary',
    children: 'Button',
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
    size: 'sm',
  },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
    size: 'lg',
  },
};

export const Destructive: StoryObj<typeof Button> = {
  args: {
    variant: 'destructive',
    children: 'Button',
  },
};

export const Link: StoryObj<typeof Button> = {
  args: {
    href: 'https://www.google.com',
    children: 'Button',
    target: '_blank',
    rel: 'noopener noreferrer',
    variant: 'link',
  },
};
