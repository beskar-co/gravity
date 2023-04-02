import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onClick: { action: 'Button Clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Button',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button',
  size: 'lg',
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  children: 'Button',
};

export const Link = Template.bind({});
Link.args = {
  href: 'https://www.google.com',
  children: 'Button',
  target: '_blank',
  rel: 'noopener noreferrer',
  variant: 'link',
};
