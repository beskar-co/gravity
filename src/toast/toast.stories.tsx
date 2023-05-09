import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './';

const meta: Meta<typeof Toast> = { component: Toast };
export default meta;

export const Default: StoryObj<typeof Toast> = {
  args: {
    onClick: () => toast('Hello world!'),
  },
};

export const Success: StoryObj<typeof Toast> = {
  args: {
    onClick: () =>
      toast.success('Success!', {
        description: 'Your changes have been saved.',
      }),
  },
};

export const Error: StoryObj<typeof Toast> = {
  args: {
    onClick: () =>
      toast.error('Something went wrong!', {
        description: 'Please try again later.',
      }),
  },
};

export const Action: StoryObj<typeof Toast> = {
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
