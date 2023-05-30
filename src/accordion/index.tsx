'use client';

import type { ElementRef, ComponentPropsWithoutRef, FC } from 'react';
import { forwardRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { twMerge } from 'tailwind-merge';

type AccordionProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> & {
  data: {
    value: string;
    trigger: AccordionPrimitive.AccordionTriggerProps['children'];
    content: AccordionPrimitive.AccordionContentProps['children'];
  }[];
};

export const Accordion: FC<AccordionProps> = forwardRef<
  ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, data, ...props }, ref) => (
  <AccordionPrimitive.Root ref={ref} className={className} {...props}>
    {data.map(({ value, trigger, content }) => (
      <AccordionPrimitive.Item
        className="border-b border-b-neutral-200 dark:border-b-neutral-700"
        value={value}
        key={value}
      >
        <AccordionPrimitive.Header className="flex">
          <AccordionPrimitive.Trigger
            className={twMerge(
              'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
              'text-neutral-900 dark:text-white'
            )}
          >
            {trigger}
            <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content
          className={twMerge(
            'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
            'text-neutral-900 dark:text-white'
          )}
        >
          <div className="pb-4 pt-0">{content}</div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    ))}
  </AccordionPrimitive.Root>
));
Accordion.displayName = AccordionPrimitive.Root.displayName;
