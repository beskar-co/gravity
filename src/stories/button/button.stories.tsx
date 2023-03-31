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
