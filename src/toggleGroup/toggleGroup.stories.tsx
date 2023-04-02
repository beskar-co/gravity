import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToggleGroup } from './';
import { TooltipProvider } from '../tooltip';
import { CommandLineIcon, GifIcon, TvIcon } from '@heroicons/react/20/solid';
import { EyeIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Example/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ToggleGroup>;

const Template: ComponentStory<typeof ToggleGroup> = (args) => (
  <TooltipProvider>
    <ToggleGroup {...args} />
  </TooltipProvider>
);

export const Default = Template.bind({});
Default.args = {
  type: 'single',
  items: [
    {
      value: 'CommandLineIcon',
      children: <CommandLineIcon className="h-4 w-4" />,
    },
    {
      value: 'TvIcon',
      children: <TvIcon className="h-4 w-4" />,
    },
    {
      value: 'EyeIcon',
      children: <EyeIcon className="h-4 w-4" />,
    },
  ],
};

export const MultipleOutline = Template.bind({});
MultipleOutline.args = {
  variant: 'outline',
  type: 'multiple',
  items: [
    {
      value: 'CommandLineIcon',
      children: <CommandLineIcon className="h-4 w-4" />,
    },
    {
      value: 'TvIcon',
      children: <TvIcon className="h-4 w-4" />,
    },
    {
      value: 'EyeIcon',
      children: <EyeIcon className="h-4 w-4" />,
    },
    {
      value: 'GifIcon',
      children: <GifIcon className="h-4 w-4" />,
    },
  ],
};
