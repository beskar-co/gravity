import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { FileUpload } from './';

export default {
  title: 'Example/File Upload',
  component: FileUpload,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onChange: { action: 'File Upload Success' },
    onError: { action: 'File Upload Error' },
  },
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <FileUpload {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Cover Photo',
  accept: ['.jpg', '.jpeg', '.png'],
  maxSize: 5,
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Cover Photo',
  accept: ['.jpg', '.jpeg', '.png'],
  maxSize: 5,
  value: new File([new Blob([''], { type: 'image/jpeg' })], 'test.jpg', {
    type: 'image/jpeg',
  }),
};
