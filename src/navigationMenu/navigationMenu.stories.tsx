import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenu, NavigationMenuLink } from './';
import { CommandLineIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
  render: (args) => (
    <div className="-m-4 h-[200vh]">
      <NavigationMenu {...args} />
    </div>
  ),
};
export default meta;

const items: ComponentPropsWithoutRef<typeof NavigationMenu>['items'] = [
  {
    label: 'Stub',
    layout: 'list',
    items: [
      {
        label: 'Stub',
        href: '#',
      },
    ],
  },
  {
    label: 'Home',
    href: '/',
    active: true,
  },
  {
    label: 'List',
    layout: 'list',
    items: [
      {
        label: 'Introduction',
        href: '/docs',
        description:
          'Re-usable components built using Radix UI and Tailwind CSS.',
        icon: CommandLineIcon,
      },
      {
        label: 'Installation',
        href: '/docs/installation',
        icon: CommandLineIcon,
      },
      {
        label: 'Typography',
        href: '/docs/primitives/typography',
        description: 'Styles for headings, paragraphs, lists...etc',
      },
    ],
  },
  {
    label: 'Grid',
    layout: 'grid',
    items: [
      {
        label: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description:
          'A modal dialog that interrupts the user with important content and expects a response.',
        icon: CommandLineIcon,
      },
      {
        label: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description:
          'For sighted users to preview content available behind a link.',
      },
      {
        label: 'Progress',
        href: '/docs/primitives/progress',
        description:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
        icon: CommandLineIcon,
      },
      {
        label: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
        icon: CommandLineIcon,
      },
      {
        label: 'Tabs',
        href: '/docs/primitives/tabs',
        description:
          'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      },
      {
        label: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description:
          'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      },
    ],
  },
  {
    label: 'Custom',
    layout: 'custom',
    className: 'w-[500px]',
    children: () => (
      <div className="grid grid-cols-2 gap-2">
        <Link
          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
          href="/"
        >
          <CommandLineIcon className="h-6 w-6 text-white" />
          <div className="mb-2 mt-4 text-lg font-medium text-white">
            shadcn/ui
          </div>
          <p className="text-sm leading-tight text-white/90">
            Beautifully designed components built with Radix UI and Tailwind
            CSS.
          </p>
        </Link>
        <div className="flex flex-col items-start gap-1">
          {[
            {
              label: 'Introduction',
              href: '/docs',
              description:
                'Re-usable components built using Radix UI and Tailwind CSS.',
              icon: CommandLineIcon,
            },
            {
              label: 'Installation',
              href: '/docs/installation',
              icon: CommandLineIcon,
            },
            {
              label: 'Typography',
              href: '/docs/primitives/typography',
              description: 'Styles for headings, paragraphs, lists...etc',
            },
          ].map((item) => (
            <NavigationMenuLink {...item} key={item} />
          ))}
        </div>
      </div>
    ),
  },
  {
    label: 'Docs',
    href: 'https://www.google.com/',
  },
];

export const Default: StoryObj<typeof NavigationMenu> = {
  args: {
    items,
  },
};

export const WithLogo: StoryObj<typeof NavigationMenu> = {
  args: {
    logo: () => <CommandLineIcon className="h-6 w-6" />,
    items,
  },
};

export const WithLogoAndCta: StoryObj<typeof NavigationMenu> = {
  args: {
    logo: () => <CommandLineIcon className="h-6 w-6" />,
    items,
    actions: [
      {
        children: 'Log in',
        href: '/login',
        variant: 'secondary',
      },
      {
        children: 'Sign up',
        href: '/signup',
      },
    ],
  },
};
