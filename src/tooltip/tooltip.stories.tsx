import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './';
import { PlusIcon } from '@heroicons/react/20/solid';

const meta: Meta<typeof Tooltip> = { component: Tooltip };
export default meta;

export const Default: StoryObj<typeof Tooltip> = {
  args = {
    content: 'Add to library',
    children: (
      <button type="button" className="w-10 rounded-full p-0">
        <PlusIcon className="h-4 w-4" />
        <span className="sr-only">Add</span>
      </button>
    ),
  },
};
