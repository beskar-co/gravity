import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { FileUpload } from './';

export default {
  title: 'Example/File Upload',
  component: FileUpload,
  parameters: {
    layout: 'fullscreen',
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
  onChange: (file) => {
    console.log(file);
  },
  onError: (error) => {
    console.log(error);
  },
};
