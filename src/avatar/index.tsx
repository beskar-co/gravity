'use client';

import type { ElementRef, ComponentPropsWithoutRef, FC } from 'react';
import { forwardRef } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import clsx from 'clsx';

type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
  fallback: ComponentPropsWithoutRef<
    typeof AvatarPrimitive.Fallback
  >['children'];
  src: ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>['src'];
};

const Avatar: FC<AvatarProps> = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, src, fallback, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={clsx(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  >
    <AvatarPrimitive.Image
      className={clsx('aspect-square h-full w-full', className)}
      src={src}
      {...props}
    />
    <AvatarPrimitive.Fallback
      className={clsx(
        'flex h-full w-full items-center justify-center rounded-full',
        'bg-neutral-100 dark:bg-neutral-700',
        'text-neutral-900 dark:text-white',
        className
      )}
      {...props}
    >
      {fallback}
    </AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

export { Avatar };
