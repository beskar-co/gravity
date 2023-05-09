import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './';

const meta: Meta<typeof RadioGroup> = { component: RadioGroup };
export default meta;

export const Default: StoryObj<typeof RadioGroup> = {
  args: {
    value: '1',
    items: [
      {
        label: 'Option 1',
        value: '1',
        hint: 'This is option 1',
      },
      {
        label: 'Option 2',
        value: '2',
      },
    ],
  },
};
