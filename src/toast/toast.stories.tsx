import type { Meta, StoryObj } from '@storybook/react';
import { toast } from './';

const meta: Meta<typeof toast> = { component: toast };
export default meta;

export const Default: StoryObj<typeof toast> = {
  args: {
    onClick: () => toast('Hello world!'),
  },
};

export const Success: StoryObj<typeof toast> = {
  args: {
    onClick: () =>
      toast.success('Success!', {
        description: 'Your changes have been saved.',
      }),
  },
};

export const Error: StoryObj<typeof toast> = {
  args: {
    onClick: () =>
      toast.error('Something went wrong!', {
        description: 'Please try again later.',
      }),
  },
};

export const Action: StoryObj<typeof toast> = {
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
