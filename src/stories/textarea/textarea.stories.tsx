import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from './';

export default {
  title: 'Example/Textarea',
  component: Textarea,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type your message here.',
};
