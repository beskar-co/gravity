import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from './';

export default {
  title: 'Example/Switch',
  component: Switch,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Airplane Mode',
};

export const WithHint = Template.bind({});
WithHint.args = {
  label: 'Airplane Mode',
  hint: 'Turn on airplane mode to disable all wireless connections.',
};
