import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './';

const meta: Meta<typeof FileUpload> = {
  component: FileUpload,
  argTypes: {
    onChange: { action: 'changed' },
    onError: { action: 'error' },
  },
};
export default meta;

export const Default: StoryObj<typeof FileUpload> = {
  args: {
    label: 'Cover Photo',
    accept: ['.jpg', '.jpeg', '.png'],
    maxSize: 5,
  },
};

export const WithValue: StoryObj<typeof FileUpload> = {
  args: {
    label: 'Cover Photo',
    accept: ['.jpg', '.jpeg', '.png'],
    maxSize: 5,
    value: new File([new Blob([''], { type: 'image/jpeg' })], 'test.jpg', {
      type: 'image/jpeg',
    }),
  },
};

export const WithDefaultErrorHandler: StoryObj<typeof FileUpload> = {
  args: {
    label: 'Cover Photo',
    accept: ['.jpg', '.jpeg', '.png'],
    maxSize: 5,
    onError: undefined,
  },
};
