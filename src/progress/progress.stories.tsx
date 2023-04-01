import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Progress } from './';

export default {
  title: 'Example/Progress',
  component: Progress,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 33,
};
