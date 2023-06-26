import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './';

const meta: Meta<typeof ScrollArea> = {
  component: ScrollArea,
};
export default meta;

export const Default: StoryObj<typeof ScrollArea> = {
  args: {
    orientation: 'vertical',
    className: 'h-[200px] w-[200px]',
    children: <div className="h-[200vh] w-full bg-red-500">Scroll me</div>,
  },
};

export const Invisible: StoryObj<typeof ScrollArea> = {
  args: {
    orientation: 'vertical',
    invisible: true,
    className: 'h-[200px] w-[200px]',
    children: <div className="h-[200vh] w-full bg-red-500">Scroll me</div>,
  },
};
