import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from './';

export default {
  title: 'Example/Badge',
  component: Badge,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Badge',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Badge',
  size: 'sm',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Badge',
  variant: 'secondary',
};
