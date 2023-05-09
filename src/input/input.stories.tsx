import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './';

const meta: Meta<typeof Input> = { component: Input };
export default meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    type: 'email',
    placeholder: 'jane@acme.com',
  },
};

export const WithLabel: StoryObj<typeof Input> = {
  args: {
    type: 'email',
    placeholder: 'jane@acme.com',
    label: 'Email',
  },
};

export const WithHint: StoryObj<typeof Input> = {
  args: {
    type: 'email',
    placeholder: 'jane@acme.com',
    label: 'Email',
    hint: 'We will never share your email with anyone else.',
  },
};
