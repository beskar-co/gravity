import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Snippet } from './';
import { TooltipProvider } from '..';

export default {
  title: 'Example/Snippet',
  component: Snippet,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Snippet>;

const Template: ComponentStory<typeof Snippet> = (args) => (
  <TooltipProvider>
    <Snippet {...args} />
  </TooltipProvider>
);

export const Default = Template.bind({});
Default.args = {
  language: 'javascript',
  // eslint-disable-next-line no-console
  onCopyError: console.log,
  // eslint-disable-next-line no-console
  onCopySuccess: console.log,
  children: `const waitlist = 'cleftordg0002l8082tu040gj';
const email = 'janesmith@acme.com';
const name = 'Jane Smith'; // Optional
const phone = '555-555-5555'; // Optional
const referredBy = 'abc123'; // Optional
const metadata = { userId: 'abcd' }; // Optional (Pro only)

/* With client-side JavaScript, you don't need the API Key
 * if you call the endpoint from a whitelisted domain. This
 * way, you don't need to expose your API Key to the public.
 */
const response = await fetch('/api/subscribers/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    waitlist,
    email,
    name,
    phone,
    referredBy,
    metadata,
  }),
});

const body = (await response.json()) as { message: string };

if (!response.ok) {
  window.alert(body.message);
  return;
}

window.alert('You have been subscribed!');`,
};
