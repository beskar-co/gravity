import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioGroup } from './';
import { useState } from 'react';

export default {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = ({ value, ...args }) => {
  const [val, setVal] = useState(value);

  return <RadioGroup {...args} value={val} onValueChange={setVal} />;
};

export const Default = Template.bind({});
Default.args = {
  value: '1',
  items: [
    {
      label: 'Option 1',
      value: '1',
      hint: 'This is option 1',
    },
    {
      label: 'Option 2',
      value: '2',
    },
  ],
};
