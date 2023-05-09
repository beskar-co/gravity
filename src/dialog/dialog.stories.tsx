import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogAction, DialogCancel } from './';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  argTypes: {
    onOpenChange: { action: 'open changed' },
  },
};
export default meta;

export const Default: StoryObj<typeof Dialog> = {
  args: {
    title: 'Are you absolutely sure?',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    content: (
      <div className="flex items-center justify-center gap-2 sm:justify-normal">
        <DialogCancel>Cancel</DialogCancel>
        <DialogAction>Continue</DialogAction>
      </div>
    ),
    children: <button type="button">Open</button>,
  },
};
