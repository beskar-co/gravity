import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" {...args} />
    <label
      htmlFor="terms"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </label>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
