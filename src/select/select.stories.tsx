import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './';

export default {
  title: 'Example/Select',
  component: Select,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  name: 'fruit',
  placeholder: 'Select a fruit',
  data: [
    { label: 'Fruits', items: [{ value: 'apple', label: 'Apple' }] },
    {
      label: 'Vegetables',
      items: [{ value: 'aubergine', label: 'Aubergine', disabled: true }],
    },
  ],
};

export const SingleGroup = Template.bind({});
SingleGroup.args = {
  disabled: false,
  name: 'fruit',
  placeholder: 'Select a fruit',
  data: [{ label: 'Fruits', items: [{ value: 'apple', label: 'Apple' }] }],
};
