import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Video } from './';

export default {
  title: 'Example/Video',
  component: Video,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: 'https://vimeo.com/794348644',
};

export const CustomAspectRatio = Template.bind({});
CustomAspectRatio.args = {
  url: 'https://vimeo.com/794348644',
  className: 'aspect-[2744/1822]',
};
