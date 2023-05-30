'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import { twMerge } from 'tailwind-merge';
import type { ComponentPropsWithoutRef, ElementRef, FC } from 'react';
import { forwardRef } from 'react';

type ProgressProps = ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>;

const Progress: FC<ProgressProps> = forwardRef<
  ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={twMerge(
      'relative h-4 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800',
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-neutral-900 transition-all dark:bg-neutral-400"
      style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
