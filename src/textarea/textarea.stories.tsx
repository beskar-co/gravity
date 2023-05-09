import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  argTypes: {
    onBlur: { action: 'blurred' },
    onFocus: { action: 'focused' },
    onValueChange: { action: 'value changed' },
  },
};
export default meta;

export const Default: StoryObj<typeof Textarea> = {
  args: {
    placeholder: 'Type your message here.',
  },
};

export const WithLabel: StoryObj<typeof Textarea> = {
  args: {
    placeholder: 'Type your message here.',
    label: 'Message',
  },
};

export const WithHint: StoryObj<typeof Textarea> = {
  args: {
    placeholder: 'Type your message here.',
    label: 'Message',
    hint: 'We will never share your message with anyone else.',
  },
};
