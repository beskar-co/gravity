'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import { forwardRef } from 'react';

const Progress = forwardRef<
  ElementRef<typeof ProgressPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={clsx(
      'relative h-4 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800',
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-slate-900 transition-all dark:bg-slate-400"
      style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
