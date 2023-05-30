'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';
import type { ComponentPropsWithoutRef, ElementRef, FC } from 'react';
import { forwardRef } from 'react';

type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

const Label: FC<LabelProps> = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={twMerge(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      'text-neutral-900 dark:text-white',
      className
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
