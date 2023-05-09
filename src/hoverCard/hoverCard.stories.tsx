import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard } from './';
import { Button } from '@/button';
import { Avatar } from '@/avatar';
import { CalendarDaysIcon } from '@heroicons/react/20/solid';

const meta: Meta<typeof HoverCard> = {
  component: HoverCard,
  argTypes: {
    onOpenChange: { action: 'onOpenChange' },
  },
};
export default meta;

export const Default: StoryObj<typeof HoverCard> = {
  args: {
    children: <Button variant="link">Next.js</Button>,
    className: 'w-80',
    content: (
      <div className="flex justify-between space-x-4">
        <Avatar src="https://github.com/vercel.png" fallback="VC" />
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
          <div className="flex items-center pt-2">
            <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
            <span className="text-muted-foreground text-xs">
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
    ),
  },
};
