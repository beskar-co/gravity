import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  argTypes: {
    onCheckedChange: { action: 'checked changed' },
  },
};
export default meta;

export const Default: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithHint: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Accept terms and conditions',
    hint: 'You agree to our Terms of Service and Privacy Policy.',
  },
};
