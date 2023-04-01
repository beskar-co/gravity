import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from './';

export default {
  title: 'Example/Label',
  component: Label,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
};
