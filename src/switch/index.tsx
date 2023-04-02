'use client';

import type { ElementRef, ComponentPropsWithoutRef } from 'react';
import { forwardRef, useId } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import clsx from 'clsx';
import { Hint } from '../hint';
import { Label } from '../label';

type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
  label: string;
  hint?: string;
};

const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ label, hint, className, ...props }, ref) => {
  const id = useId();

  return (
    <div className="items-top flex space-x-2">
      <SwitchPrimitives.Root
        className={clsx(
          'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-200 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 dark:data-[state=checked]:bg-neutral-400 dark:data-[state=unchecked]:bg-neutral-700',
          className
        )}
        {...props}
        id={id}
        ref={ref}
      >
        <SwitchPrimitives.Thumb
          className={clsx(
            'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
          )}
        />
      </SwitchPrimitives.Root>
      <div className="mt-[5px] grid gap-1.5 leading-none">
        <Label htmlFor={id}>{label}</Label>
        {hint && <Hint>{hint}</Hint>}
      </div>
    </div>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
