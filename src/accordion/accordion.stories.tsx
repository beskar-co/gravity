import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from './';

export default {
  title: 'Example/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'single',
  collapsible: true,
  data: [
    {
      value: 'item-1',
      trigger: 'Is it accessible?',
      content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      value: 'item-2',
      trigger: 'Is it styled?',
      content:
        "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
      value: 'item-3',
      trigger: 'Is it animated?',
      content:
        'Yes. It is animated by default, but you can disable it if you prefer.',
    },
  ],
};
