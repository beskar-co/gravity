import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog, DialogAction, DialogCancel } from './';
export default {
  title: 'Example/Alert Dialog',
  component: Dialog,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
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
};
