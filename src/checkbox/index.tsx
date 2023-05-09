'use client';

import type { ElementRef, ComponentPropsWithoutRef } from 'react';
import { useId, forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Label } from '@/label';
import { Hint } from '@/hint';

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
          <CheckIcon
            className="h-4 w-4 text-neutral-900 dark:text-white"
            width={16}
            height={16}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor={id}>{label}</Label>
        {hint && <Hint>{hint}</Hint>}
      </div>
    </div>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
