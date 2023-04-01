import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip, TooltipProvider } from './';
import { PlusIcon } from '@heroicons/react/20/solid';

export default {
  title: 'Example/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <TooltipProvider>
    <Tooltip {...args} />
  </TooltipProvider>
);

export const Default = Template.bind({});
Default.args = {
  content: 'Add to library',
  trigger: (
    <button type="button" className="w-10 rounded-full p-0">
      <PlusIcon className="h-4 w-4" />
      <span className="sr-only">Add</span>
    </button>
  ),
};
