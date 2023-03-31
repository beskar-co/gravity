'use client';

import type { ElementRef, ComponentPropsWithoutRef } from 'react';
import { useId, forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Label } from '../label';

type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
  label: string;
  hint?: string;
};

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, hint, ...props }, ref) => {
  const id = useId();

  return (
    <div className="items-top flex space-x-2">
      <CheckboxPrimitive.Root
        ref={ref}
        id={id}
        className={clsx(
          'peer h-4 w-4 shrink-0 rounded-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900',
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={clsx('flex items-center justify-center')}
        >
          <CheckIcon className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor={id}>{label}</Label>
        {hint && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {hint}
          </p>
        )}
      </div>
    </div>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
