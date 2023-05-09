import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './';
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

const meta: Meta<typeof Dropdown> = { component: Dropdown };
export default meta;

export const Default: StoryObj<typeof Dropdown> = {
  args: {
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
            onClick: () => console.log('Profile'),
          },
          {
            icon: CreditCardIcon,
            label: 'Billing',
            shortcut: '⌘B',
            href: 'https://google.com',
            target: '_blank',
            rel: 'noopener noreferrer',
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
  },
};
