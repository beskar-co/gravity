'use client';

import type {
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  ReactNode,
} from 'react';
import { forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { twMerge } from 'tailwind-merge';

const DialogAction = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Action>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={twMerge(
      'inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900',
      className
    )}
    {...props}
  />
));
DialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const DialogCancel = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Cancel>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={twMerge(
      'inline-flex h-10 items-center justify-center rounded-md border border-neutral-200 bg-transparent px-4 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 sm:mt-0',
      className
    )}
    {...props}
  />
));
DialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

type DialogProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Root
> & {
  className?: string;
  content: ReactNode;
  title?: string;
  description?: string;
};

const Dialog: FC<DialogProps> = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Root>,
  DialogProps
>(({ className, content, title, description, children, ...props }, ref) => (
  <AlertDialogPrimitive.Root {...props}>
    <AlertDialogPrimitive.Trigger asChild>
      {children}
    </AlertDialogPrimitive.Trigger>
    <AlertDialogPrimitive.Portal>
      <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
        <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in" />
        <AlertDialogPrimitive.Content
          ref={ref}
          className={twMerge(
            'fixed z-50 grid w-full max-w-lg scale-100 gap-4 bg-white p-6 opacity-100 animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full',
            'dark:bg-neutral-900',
            className
          )}
          {...props}
        >
          {(title || description) && (
            <div className="flex flex-col space-y-2 text-center sm:text-left">
              {title && (
                <AlertDialogPrimitive.Title
                  className={twMerge(
                    'text-lg font-semibold text-neutral-900',
                    'dark:text-neutral-50'
                  )}
                >
                  {title}
                </AlertDialogPrimitive.Title>
              )}
              {description && (
                <AlertDialogPrimitive.Description
                  className={twMerge(
                    'text-sm text-neutral-500',
                    'dark:text-neutral-400'
                  )}
                >
                  {description}
                </AlertDialogPrimitive.Description>
              )}
            </div>
          )}
          {content}
        </AlertDialogPrimitive.Content>
      </div>
    </AlertDialogPrimitive.Portal>
  </AlertDialogPrimitive.Root>
));

Dialog.displayName = AlertDialogPrimitive.Root.displayName;

export { Dialog, DialogAction, DialogCancel };
