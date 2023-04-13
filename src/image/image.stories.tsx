import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from './';

export default {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder',
  width: 150,
  height: 150,
};
