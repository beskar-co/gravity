import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './';

const meta: Meta<typeof Slider> = {
  component: Slider,
  argTypes: {
    onValueChange: { action: 'value changed' },
  },
};
export default meta;

export const Default: StoryObj<typeof Slider> = {
  args: {
    value: [50],
  },
};

export const TwoValues: StoryObj<typeof Slider> = {
  args: {
    value: [50, 75],
  },
};
