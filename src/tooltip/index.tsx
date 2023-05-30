'use client';

import type {
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  ReactNode,
} from 'react';
import { forwardRef } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { twMerge } from 'tailwind-merge';

const TooltipProvider = TooltipPrimitive.Provider;

type TooltipProps = ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> & {
  content: string;
  children: ReactNode;
  side?: TooltipPrimitive.TooltipContentProps['side'];
  align?: TooltipPrimitive.TooltipContentProps['align'];
};

const Tooltip: FC<TooltipProps> = forwardRef<
  ElementRef<typeof TooltipPrimitive.Root>,
  TooltipProps
>(({ children, content, side, align, ...props }, ref) => (
  <TooltipPrimitive.Root delayDuration={0} {...props}>
    <TooltipPrimitive.Trigger ref={ref} asChild>
      {children}
    </TooltipPrimitive.Trigger>
    <TooltipPrimitive.Content
      sideOffset={4}
      side={side}
      align={align}
      className={twMerge(
        'z-50 overflow-hidden rounded-md border border-neutral-100 bg-white px-3 py-1.5 text-sm text-neutral-700 shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400'
      )}
    >
      {content}
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Root>
));
Tooltip.displayName = TooltipPrimitive.Tooltip.displayName;

export { Tooltip, TooltipProvider };
