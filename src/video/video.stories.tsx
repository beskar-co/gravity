import type { Meta, StoryObj } from '@storybook/react';
import { Video } from './';

const meta: Meta<typeof Video> = { component: Video };
export default meta;

export const Default: StoryObj<typeof Video> = {
  args: {
    url: 'https://vimeo.com/794348644',
  },
};

export const CustomAspectRatio: StoryObj<typeof Video> = {
  args: {
    url: 'https://vimeo.com/794348644',
    className: 'aspect-[2744/1822]',
  },
};
