'use client';

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const toggleVariants = {
  default: 'bg-transparent',
  outline:
    'bg-transparent border border-neutral-200 hover:bg-neutral-100 dark:border-neutral-700',
};

const toggleSizes = {
  default: 'h-10 px-3',
  sm: 'h-9 px-2.5',
  lg: 'h-11 px-5',
};

export const ToggleGroup = forwardRef<
  ElementRef<typeof ToggleGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & {
    variant?: keyof typeof toggleVariants;
    size?: keyof typeof toggleSizes;
    items: ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>[];
  }
>(
  (
    { className, variant = 'default', size = 'default', items, ...props },
    ref
  ) => (
    <ToggleGroupPrimitive.Root {...props}>
      {items.map((item, index) => (
        <ToggleGroupPrimitive.Item
          key={item.value}
          className={clsx(
            'inline-flex items-center justify-center text-sm font-medium transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-neutral-200 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:focus:ring-offset-neutral-900 dark:data-[state=on]:bg-neutral-700 dark:data-[state=on]:text-neutral-100',
            toggleVariants[variant],
            toggleSizes[size],
            index === 0 && 'rounded-l-md',
            index === items.length - 1 && 'rounded-r-md',
            variant === 'outline' && index > 0 && 'border-l-0'
          )}
          {...item}
        />
      ))}
    </ToggleGroupPrimitive.Root>
  )
);