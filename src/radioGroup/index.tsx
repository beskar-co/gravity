'use client';

import { Hint } from '../hint';
import { Label } from '../label';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import { forwardRef } from 'react';

type RadioGroupProps = ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> & {
  items: {
    label: string;
    value: string;
    hint?: string;
  }[];
};

export const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, items, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    className={clsx('grid gap-2', className)}
    {...props}
    ref={ref}
  >
    {items.map((item) => (
      <div className="flex space-x-2" key={item.value}>
        <RadioGroupPrimitive.Item
          value={item.value}
          className="text:fill-neutral-50 h-4 w-4 rounded-full border border-neutral-300 text-neutral-900 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-900 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900"
          id={item.value}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <div className="h-2.5 w-2.5 rounded-full bg-neutral-900 dark:bg-neutral-50" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <div className="mt-px grid gap-1.5 leading-none">
          <Label htmlFor={item.value}>{item.label}</Label>
          {item.hint && <Hint>{item.hint}</Hint>}
        </div>
      </div>
    ))}
  </RadioGroupPrimitive.Root>
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
