import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from './';

export default {
  title: 'Example/Textarea',
  component: Avatar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args}>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

export const Default = Template.bind({});
Default.args = {};
