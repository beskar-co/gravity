import { ToggleGroup } from './';
import { CommandLineIcon, GifIcon, TvIcon } from '@heroicons/react/20/solid';
import { EyeIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToggleGroup> = { component: ToggleGroup };
export default meta;

export const Default: StoryObj<typeof ToggleGroup> = {
  args: {
    type: 'single',
    items: [
      {
        value: 'CommandLineIcon',
        children: <CommandLineIcon className="h-4 w-4" />,
      },
      {
        value: 'TvIcon',
        children: <TvIcon className="h-4 w-4" />,
      },
      {
        value: 'EyeIcon',
        children: <EyeIcon className="h-4 w-4" />,
      },
    ],
  },
};

export const MultipleOutline: StoryObj<typeof ToggleGroup> = {
  args: {
    variant: 'outline',
    type: 'multiple',
    items: [
      {
        value: 'CommandLineIcon',
        children: <CommandLineIcon className="h-4 w-4" />,
      },
      {
        value: 'TvIcon',
        children: <TvIcon className="h-4 w-4" />,
      },
      {
        value: 'EyeIcon',
        children: <EyeIcon className="h-4 w-4" />,
      },
      {
        value: 'GifIcon',
        children: <GifIcon className="h-4 w-4" />,
      },
    ],
  },
};
