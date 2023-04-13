'use client';

import type { ElementRef } from 'react';
import { forwardRef } from 'react';
import * as Separator from '@radix-ui/react-separator';
import clsx from 'clsx';

export const Divider = forwardRef<
  ElementRef<typeof Separator.Root>,
  Separator.SeparatorProps
>(({ className, ...props }, ref) => (
  <Separator.Root
    className={clsx(
      'border-t border-neutral-200 dark:border-neutral-700',
      className
    )}
    {...props}
    ref={ref}
  />
));
Divider.displayName = 'Divider';
