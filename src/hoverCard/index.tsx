'use client';

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { twMerge } from 'tailwind-merge';
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  ReactNode,
} from 'react';
import { forwardRef } from 'react';

type HoverCardProps = ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Root
> & {
  className?: string;
  children: ReactNode;
  content: ReactNode;
};

const HoverCard: FC<HoverCardProps> = forwardRef<
  ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardProps
>(({ className, children, content, ...props }, ref) => (
  <HoverCardPrimitive.Root {...props}>
    <HoverCardPrimitive.Trigger asChild>{children}</HoverCardPrimitive.Trigger>
    <HoverCardPrimitive.Content
      ref={ref}
      align="center"
      sideOffset={4}
      className={twMerge(
        'bg-popover text-popover-foreground z-50 w-64 rounded-md border p-4 shadow-md outline-none animate-in zoom-in-90',
        className
      )}
      {...props}
    >
      {content}
    </HoverCardPrimitive.Content>
  </HoverCardPrimitive.Root>
));
HoverCard.displayName = HoverCardPrimitive.Root.displayName;

export { HoverCard };
