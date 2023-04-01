import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  children: 'Button',
  size: 'default',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'ghost',
  children: 'Button',
  size: 'sm',
};

export const Link = Template.bind({});
Link.args = {
  href: 'https://www.google.com',
  children: 'Button',
  target: '_blank',
  rel: 'noopener noreferrer',
};

export const Pressable = Template.bind({});
Pressable.args = {
  // eslint-disable-next-line no-console
  onClick: console.log,
  children: 'Button',
};
