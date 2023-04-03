import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Slider } from './';

export default {
  title: 'Example/Slider',
  component: Slider,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: [50],
};

export const TwoValues = Template.bind({});
TwoValues.args = {
  value: [50, 75],
};
