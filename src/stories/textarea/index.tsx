import clsx from 'clsx';
import type { TextareaHTMLAttributes } from 'react';
import { useId, forwardRef } from 'react';
import { Label } from '../label';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const id = useId();

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        {props.label && <Label htmlFor={id}>{props.label}</Label>}
        <textarea
          className={clsx(
            'flex h-20 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
