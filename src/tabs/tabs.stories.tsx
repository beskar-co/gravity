import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from './';
import { useState } from 'react';

export default {
  title: 'Example/Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [value, setValue] = useState(args.value);

  return <Tabs {...args} value={value} onValueChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { value: 'one', label: 'One', content: 'Hello, world 1.' },
    { value: 'two', label: 'Two', content: 'Hello, world 2.' },
    { value: 'three', label: 'Three', content: 'Hello, world 3.' },
  ],
  value: 'one',
};

export const NoValue = Template.bind({});
NoValue.args = {
  items: [
    { value: 'one', label: 'One', content: 'Hello, world 1.' },
    { value: 'two', label: 'Two', content: 'Hello, world 2.' },
    { value: 'three', label: 'Three', content: 'Hello, world 3.' },
  ],
};

export const SomeLinks = Template.bind({});
SomeLinks.args = {
  items: [
    { value: 'one', label: 'One', content: 'Hello, world 1.' },
    { value: 'two', label: 'Two', content: 'Hello, world 2.' },
    { value: 'three', label: 'Three', href: 'https://www.google.com/' },
  ],
};

export const AllLinks = Template.bind({});
AllLinks.args = {
  items: [
    { value: 'one', label: 'One', href: 'https://www.google.com/' },
    { value: 'two', label: 'Two', href: 'https://www.google.com/' },
    { value: 'three', label: 'Three', href: 'https://www.google.com/' },
  ],
};

export const WithBadges = Template.bind({});
WithBadges.args = {
  items: [
    { value: 'one', label: 'One', badge: 'New' },
    { value: 'two', label: 'Two', badge: 'New' },
    { value: 'three', label: 'Three', badge: 'New' },
  ],
};
