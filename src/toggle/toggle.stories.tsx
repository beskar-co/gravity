import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './';
import { CommandLineIcon } from '@heroicons/react/20/solid';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  argTypes: {
    onPressedChange: { action: 'pressed changed' },
  },
};
export default meta;

export const Default: StoryObj<typeof Toggle> = {
  args: {
    'aria-label': 'Toggle italic',
    children: <CommandLineIcon className="h-4 w-4" />,
  },
};

export const Outline: StoryObj<typeof Toggle> = {
  args: {
    'aria-label': 'Toggle italic',
    variant: 'outline',
    children: <CommandLineIcon className="h-4 w-4" />,
  },
};

export const Small: StoryObj<typeof Toggle> = {
  args: {
    'aria-label': 'Toggle italic',
    size: 'sm',
    children: <CommandLineIcon className="h-4 w-4" />,
  },
};
