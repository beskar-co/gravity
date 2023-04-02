import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggle } from './';
import { TooltipProvider } from '..';
import { CommandLineIcon } from '@heroicons/react/20/solid';

export default {
  title: 'Example/Toggle',
  component: Toggle,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => (
  <TooltipProvider>
    <Toggle {...args} />
  </TooltipProvider>
);

export const Default = Template.bind({});
Default.args = {
  'aria-label': 'Toggle italic',
  children: <CommandLineIcon className="h-4 w-4" />,
};

export const Outline = Template.bind({});
Outline.args = {
  'aria-label': 'Toggle italic',
  variant: 'outline',
  children: <CommandLineIcon className="h-4 w-4" />,
};

export const Small = Template.bind({});
Small.args = {
  'aria-label': 'Toggle italic',
  size: 'sm',
  children: <CommandLineIcon className="h-4 w-4" />,
};
