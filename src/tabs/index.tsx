'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import Link from 'next/link';
import clsx from 'clsx';
import { Select } from '..';

type TabsProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
  value?: TabsPrimitive.TabsContentProps['value'];
  items: {
    value: TabsPrimitive.TabsTriggerProps['value'];
    label: TabsPrimitive.TabsTriggerProps['children'];
    href?: string;
    content?: TabsPrimitive.TabsContentProps['children'];
    badge?: string;
  }[];
};

const Badge: React.FC<{
  children: React.ReactNode;
  active: boolean;
}> = ({ children, active }) => (
  <span
    className={clsx(
      active ? 'bg-neutral-100 text-neutral-900' : 'bg-white text-neutral-500',
      active
        ? 'dark:bg-neutral-800 dark:text-white'
        : 'dark:bg-neutral-900 dark:text-neutral-400',
      'ml-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block'
    )}
  >
    {children}
  </span>
);

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ className, items, value, ...props }, ref) => (
  <>
    <div className="block sm:hidden">
      <Select
        value={value}
        onValueChange={props.onValueChange}
        data={[
          {
            label: 'Tabs',
            items: items.map((item) => ({
              label: item.label?.toString() ?? item.value,
              value: item.value,
            })),
          },
        ]}
        placeholder="Select a tab"
      />
    </div>
    <TabsPrimitive.Root
      {...props}
      value={value}
      ref={ref}
      className={clsx('hidden sm:block', className)}
    >
      <TabsPrimitive.List
        className={clsx(
          '-mb-px flex gap-4 border-b md:gap-6',
          'border-neutral-100 dark:border-neutral-800'
        )}
      >
        {items.map((item) => (
          <TabsPrimitive.Trigger
            key={item.value}
            value={item.value}
            className={clsx(
              'flex whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium',
              'text-neutral-500 hover:border-neutral-700 hover:text-neutral-600',
              'dark:text-neutral-400 dark:hover:border-neutral-200 dark:hover:text-neutral-300',
              'data-[state=active]:border-neutral-900 data-[state=active]:text-neutral-900',
              'dark:data-[state=active]:border-white dark:data-[state=active]:text-white'
            )}
            asChild={!!item.href}
          >
            {item.href ? (
              <Link href={item.href}>
                {item.label}
                {item.badge && (
                  <Badge active={item.value === value}>{item.badge}</Badge>
                )}
              </Link>
            ) : (
              <span>
                {item.label}
                {item.badge && (
                  <Badge active={item.value === value}>{item.badge}</Badge>
                )}
              </span>
            )}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {items.some((item) => !item.href) &&
        value &&
        items.find((item) => item.value === value)?.content && (
          <TabsPrimitive.Content value={value} className="mt-4">
            {items.find((item) => item.value === value)?.content}
          </TabsPrimitive.Content>
        )}
    </TabsPrimitive.Root>
  </>
));
Tabs.displayName = TabsPrimitive.Root.displayName;

export { Tabs };
