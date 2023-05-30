'use client';

import type { ElementRef, FC } from 'react';
import { forwardRef } from 'react';
import * as Separator from '@radix-ui/react-separator';
import { twMerge } from 'tailwind-merge';

export const Divider: FC<Separator.SeparatorProps> = forwardRef<
  ElementRef<typeof Separator.Root>,
  Separator.SeparatorProps
>(({ className, ...props }, ref) => (
  <Separator.Root
    className={twMerge(
      'border-t border-neutral-200 dark:border-neutral-700',
      className
    )}
    {...props}
    ref={ref}
  />
));
Divider.displayName = 'Divider';
