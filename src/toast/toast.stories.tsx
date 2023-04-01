import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toaster, toast } from './';

export default {
  title: 'Example/Toast',
  component: toast,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof toast>;

const Template: ComponentStory<typeof toast> = (args) => (
  <div>
    <button type="button" {...args}>
      Click me
    </button>
    <Toaster />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => toast('Hello world!'),
};

export const Success = Template.bind({});
Success.args = {
  onClick: () =>
    toast.success('Success!', {
      description: 'Your changes have been saved.',
    }),
};

export const Error = Template.bind({});
Error.args = {
  onClick: () =>
    toast.error('Something went wrong!', {
      description: 'Please try again later.',
    }),
};

export const Action = Template.bind({});
Action.args = {
  onClick: () => {
    toast('Event has been created', {
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo'),
      },
    });
  },
};

// export const Promise = Template.bind({});
// Promise.args = {
//   onClick: () => {
//     const promise = () =>
//       new Promise((resolve, reject) => setTimeout(resolve, 2000));

//     toast.promise(promise, {
//       loading: 'Loading...',
//       success: (data) => {
//         return `${data.name} toast has been added`;
//       },
//       error: 'Error',
//     });
//   },
// };
