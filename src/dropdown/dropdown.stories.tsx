import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropdownMenu } from './';
import {
  ArrowLeftOnRectangleIcon,
  BoltIcon,
  ChatBubbleBottomCenterIcon,
  CloudIcon,
  CodeBracketIcon,
  CogIcon,
  CreditCardIcon,
  EnvelopeIcon,
  LifebuoyIcon,
  PlusCircleIcon,
  PlusIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
} from '@heroicons/react/20/solid';

export default {
  title: 'Example/Dropdown',
  component: DropdownMenu,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'w-56',
  children: <button type="button">Open</button>,
  items: [
    {
      label: 'My Account',
    },
    {
      items: [
        {
          icon: UserIcon,
          label: 'Profile',
          shortcut: '⇧⌘P',
        },
        {
          icon: CreditCardIcon,
          label: 'Billing',
          shortcut: '⌘B',
        },
        {
          icon: CogIcon,
          label: 'Settings',
          shortcut: '⌘S',
        },
        {
          icon: BoltIcon,
          label: 'Keyboard shortcuts',
          shortcut: '⌘K',
        },
      ],
    },
    {
      items: [
        {
          icon: UsersIcon,
          label: 'Team',
        },
        {
          icon: UserPlusIcon,
          label: 'Invite users',
          items: [
            {
              icon: EnvelopeIcon,
              label: 'Email',
            },
            {
              icon: ChatBubbleBottomCenterIcon,
              label: 'Message',
            },
            {
              icon: PlusCircleIcon,
              label: 'More...',
            },
          ],
        },
        {
          icon: PlusIcon,
          label: 'New Team',
          shortcut: '⌘+T',
        },
      ],
    },
    {
      items: [
        {
          icon: CodeBracketIcon,
          label: 'GitHub',
        },
        {
          icon: LifebuoyIcon,
          label: 'Support',
        },
        {
          icon: CloudIcon,
          label: 'API',
          disabled: true,
        },
      ],
    },
    {
      items: [
        {
          icon: ArrowLeftOnRectangleIcon,
          label: 'Log out',
          shortcut: '⇧⌘Q',
        },
      ],
    },
  ],
};
