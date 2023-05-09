import type { Meta, StoryObj } from '@storybook/react';
import { toast } from './';
import { Button } from '@/button';

const meta: Meta<typeof Button> = {
  component: Button,
  render: (args) => <Button {...args}>Show toast</Button>,
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    onClick: () => toast('Hello world!'),
  },
};

export const Success: StoryObj<typeof Button> = {
  args: {
    onClick: () =>
      toast.success('Success!', {
        description: 'Your changes have been saved.',
      }),
  },
};

export const Error: StoryObj<typeof Button> = {
  args: {
    onClick: () =>
      toast.error('Something went wrong!', {
        description: 'Please try again later.',
      }),
  },
};

export const Action: StoryObj<typeof Button> = {
  args: {
    onClick: () => {
      toast('Event has been created', {
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
    },
  },
};
