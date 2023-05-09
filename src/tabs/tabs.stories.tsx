import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './';

const meta: Meta<typeof Tabs> = { component: Tabs };
export default meta;

export const Default: StoryObj<typeof Tabs> = {
  args: {
    items: [
      { value: 'one', label: 'One', content: 'Hello, world 1.' },
      { value: 'two', label: 'Two', content: 'Hello, world 2.' },
      { value: 'three', label: 'Three', content: 'Hello, world 3.' },
    ],
    value: 'one',
  },
};

export const NoValue: StoryObj<typeof Tabs> = {
  args: {
    items: [
      { value: 'one', label: 'One', content: 'Hello, world 1.' },
      { value: 'two', label: 'Two', content: 'Hello, world 2.' },
      { value: 'three', label: 'Three', content: 'Hello, world 3.' },
    ],
  },
};

export const SomeLinks: StoryObj<typeof Tabs> = {
  args: {
    items: [
      { value: 'one', label: 'One', content: 'Hello, world 1.' },
      { value: 'two', label: 'Two', content: 'Hello, world 2.' },
      { value: 'three', label: 'Three', href: 'https://www.google.com/' },
    ],
  },
};

export const AllLinks: StoryObj<typeof Tabs> = {
  args: {
    items: [
      { value: 'one', label: 'One', href: 'https://www.google.com/' },
      { value: 'two', label: 'Two', href: 'https://www.google.com/' },
      { value: 'three', label: 'Three', href: 'https://www.google.com/' },
    ],
  },
};

export const WithBadges: StoryObj<typeof Tabs> = {
  args: {
    items: [
      { value: 'one', label: 'One', badge: 'New' },
      { value: 'two', label: 'Two', badge: 'New' },
      { value: 'three', label: 'Three', badge: 'New' },
    ],
  },
};
