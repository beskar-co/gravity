import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
};
export default meta;

export const Default: StoryObj<typeof Calendar> = {
  args: {
    selected: new Date(),
  },
};
