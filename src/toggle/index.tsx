'use client';

import * as TogglePrimitive from '@radix-ui/react-toggle';
import { twMerge } from 'tailwind-merge';
import type { ComponentPropsWithoutRef, ElementRef, FC } from 'react';
import { forwardRef } from 'react';

type ToggleProps = ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & {
  variant?: keyof typeof toggleVariants;
  size?: keyof typeof toggleSizes;
};

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

export const Toggle: FC<ToggleProps> = forwardRef<
  ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant = 'default', size = 'default', ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={twMerge(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-neutral-200 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:focus:ring-offset-neutral-900 dark:data-[state=on]:bg-neutral-700 dark:data-[state=on]:text-neutral-100',
      toggleVariants[variant],
      toggleSizes[size],
      className
    )}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;
