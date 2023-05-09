import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './';

const meta: Meta<typeof Avatar> = { component: Avatar };
export default meta;

export const Default: StoryObj<typeof Avatar> = {
  args: {
    src: 'https://github.com/haydenbleasel.png',
    fallback: 'HB',
  },
};

export const NoSrc: StoryObj<typeof Avatar> = {
  args: {
    src: '',
    fallback: 'HB',
  },
};
