import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import { useId, forwardRef } from 'react';
import { Label } from '../label';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const id = useId();

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        {props.label && <Label htmlFor={id}>{props.label}</Label>}
        <input
          id={id}
          className={clsx(
            'flex h-10 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900',
            className
          )}
          ref={ref}
          {...props}
        />
        {props.hint && <p className="text-sm text-slate-500">{props.hint}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
