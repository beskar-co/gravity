import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './';

const meta: Meta<typeof Accordion> = { component: Accordion };
export default meta;

export const Default: StoryObj<typeof Accordion> = {
  args: {
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
  },
};
