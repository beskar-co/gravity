import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};
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
    href: '/',
    children: 'Button',
    variant: 'link',
  },
};

export const ExternalLink: StoryObj<typeof Button> = {
  args: {
    href: 'https://www.google.com',
    children: 'Button',
    variant: 'link',
  },
};
