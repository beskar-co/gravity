import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './';

export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'email',
  placeholder: 'jane@acme.com',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  type: 'email',
  placeholder: 'jane@acme.com',
  label: 'Email',
};

export const WithHint = Template.bind({});
WithHint.args = {
  type: 'email',
  placeholder: 'jane@acme.com',
  label: 'Email',
  hint: 'We will never share your email with anyone else.',
};
