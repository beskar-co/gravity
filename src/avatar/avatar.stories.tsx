import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://github.com/haydenbleasel.png',
  fallback: 'HB',
};

export const NoSrc = Template.bind({});
NoSrc.args = {
  src: '',
  fallback: 'HB',
};
