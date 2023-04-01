import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from './';

export default {
  title: 'Example/Textarea',
  component: Textarea,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type your message here.',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  placeholder: 'Type your message here.',
  label: 'Message',
};

export const WithHint = Template.bind({});
WithHint.args = {
  placeholder: 'Type your message here.',
  label: 'Message',
  hint: 'We will never share your message with anyone else.',
};
