import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hint } from './';

export default {
  title: 'Example/Hint',
  component: Hint,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Hint>;

const Template: ComponentStory<typeof Hint> = (args) => <Hint {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a hint.',
};
