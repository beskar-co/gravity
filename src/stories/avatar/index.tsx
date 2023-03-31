'use client';

import type { ElementRef, ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import clsx from 'clsx';

const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={clsx('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={clsx(
      'flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
  fallback: ComponentPropsWithoutRef<
    typeof AvatarPrimitive.Fallback
  >['children'];
  src: ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>['src'];
};

const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, src, fallback, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={clsx(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...props}
    >
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarPrimitive.Root>
  )
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

export { Avatar };
