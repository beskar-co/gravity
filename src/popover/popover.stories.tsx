import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './';
import { Button } from '../button';
import { CogIcon } from '@heroicons/react/20/solid';
import { Input } from '../input';

const meta: Meta<typeof Popover> = {
  component: Popover,
  argTypes: {
    onOpenChange: { action: 'open changed' },
  },
};
export default meta;

export const Default: StoryObj<typeof Popover> = {
  args: {
    className: 'w-80',
    content: (
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Set the dimensions for the layer.
          </p>
        </div>
        <div className="grid gap-2">
          <Input
            label="Width"
            id="width"
            defaultValue="100%"
            className="col-span-2 h-8"
          />
          <Input
            label="Max. width"
            id="maxWidth"
            defaultValue="300px"
            className="col-span-2 h-8"
          />
          <Input
            label="Height"
            id="height"
            defaultValue="25px"
            className="col-span-2 h-8"
          />
          <Input
            label="Max. height"
            id="maxHeight"
            defaultValue="none"
            className="col-span-2 h-8"
          />
        </div>
      </div>
    ),
    children: (
      <Button variant="tertiary" className="w-10 rounded-full p-0">
        <CogIcon className="h-4 w-4 shrink-0" />
        <span className="sr-only">Open popover</span>
      </Button>
    ),
  },
};
