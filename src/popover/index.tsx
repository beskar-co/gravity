'use client';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { PopoverProps as PopoverPrimitiveProps } from '@radix-ui/react-popover';
import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react';
import { forwardRef } from 'react';

type PopoverProps = ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
> & {
  content: ReactNode;
  children: ReactNode;
  open?: PopoverPrimitiveProps['open'];
  onOpenChange?: PopoverPrimitiveProps['onOpenChange'];
};

export const Popover = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  PopoverProps
>(
  (
    {
      className,
      align = 'center',
      side = 'bottom',
      children,
      content,
      open,
      onOpenChange,
      ...props
    },
    ref
  ) => (
    <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={4}
          side={side}
          className={clsx(
            'z-50 w-72 rounded-md border border-neutral-100 bg-white p-4 shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-800',
            className
          )}
          {...props}
        >
          {content}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
);
Popover.displayName = PopoverPrimitive.Content.displayName;
