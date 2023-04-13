import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from './';

export default {
  title: 'Example/Divider',
  component: Divider,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Default = Template.bind({});
Default.args = {};
