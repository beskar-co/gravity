import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './';
import { BoltIcon } from '@heroicons/react/20/solid';

export default {
  title: 'Example/Select',
  component: Select,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  name: 'fruit',
  placeholder: 'Select a fruit',
  data: [
    { label: 'Fruits', items: [{ value: 'apple', label: 'Apple' }] },
    {
      label: 'Vegetables',
      items: [{ value: 'aubergine', label: 'Aubergine', disabled: true }],
    },
  ],
};

export const SingleGroup = Template.bind({});
SingleGroup.args = {
  disabled: false,
  name: 'fruit',
  placeholder: 'Select a fruit',
  data: [{ label: 'Fruits', items: [{ value: 'apple', label: 'Apple' }] }],
};

export const WithImage = Template.bind({});
WithImage.args = {
  disabled: false,
  name: 'fruit',
  placeholder: 'Select a fruit',
  data: [
    {
      label: 'Fruits',
      items: [
        {
          value: 'apple',
          label: 'Apple',
          image:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAAAAAByaaZbAAAA6klEQVR4Ae3VIVPDQBDF8X5/se7cOlwdLq6OU626KHBxcevOPQSCe9ndm4ljmPw1v1nyAu1NTvY3wQVKNQzZqnOghkOmU2Bw7TOwIOiRA7UI9JKCFWGvDCiSNAFrBrYYLEi7E+BJP4sc090i8OD3xGNUBsOkVXxqw7Q3fuLhNo9RHfg5sMhvtLY54P9u+LYDnd8Qrx1deAJoMka/a3NA++wA1AH5cAdobQ+KbcWDFz0BAXkH7FgHrc1ANiTtEoP72f8HeSKsSQZKR5CpA8O0QfXk55LJDLw50dUBSlunH/9SiQCboX/zDXSBbwWv2nKo9q41AAAAAElFTkSuQmCC',
        },
      ],
    },
    {
      label: 'Vegetables',
      items: [{ value: 'aubergine', label: 'Aubergine', disabled: true }],
    },
  ],
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  disabled: false,
  name: 'fruit',
  placeholder: 'Select a fruit',
  data: [
    {
      label: 'Fruits',
      items: [
        {
          value: 'apple',
          label: 'Apple',
          icon: BoltIcon,
        },
      ],
    },
    {
      label: 'Vegetables',
      items: [{ value: 'aubergine', label: 'Aubergine', disabled: true }],
    },
  ],
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  disabled: false,
  name: 'fruit',
  placeholder: 'Select a fruit',
  data: [
    {
      label: 'Fruits',
      items: [
        {
          value: 'apple',
          label: 'Apple',
          badge: 'New',
        },
      ],
    },
    {
      label: 'Vegetables',
      items: [{ value: 'aubergine', label: 'Aubergine', disabled: true }],
    },
  ],
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  disabled: false,
  name: 'fruit',
  placeholder: 'Select a fruit',
  search: true,
  data: [
    {
      label: 'Fruits',
      items: [
        {
          value: 'apple',
          label: 'Apple',
          badge: 'New',
        },
      ],
    },
    {
      label: 'Vegetables',
      items: [{ value: 'aubergine', label: 'Aubergine', disabled: true }],
    },
  ],
};
