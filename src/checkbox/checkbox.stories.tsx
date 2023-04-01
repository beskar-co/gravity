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
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Accept terms and conditions',
};

export const WithHint = Template.bind({});
WithHint.args = {
  label: 'Accept terms and conditions',
  hint: 'You agree to our Terms of Service and Privacy Policy.',
};
