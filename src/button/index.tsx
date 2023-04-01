import clsx from 'clsx';
import Link from 'next/link';
import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ElementRef,
  ForwardedRef,
} from 'react';
import { forwardRef } from 'react';

const buttonSizes = {
  sm: 'h-9 px-2',
  md: 'h-10 py-2 px-4',
  lg: 'h-11 px-8',
};

const buttonVariants = {
  primary:
    'bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-neutral-50 dark:text-neutral-900',
  destructive: 'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
  outline:
    'bg-transparent border border-neutral-200 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100',
  subtle:
    'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-100',
  ghost:
    'bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-100 dark:hover:text-neutral-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
  link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-neutral-900 dark:text-neutral-100 hover:bg-transparent dark:hover:bg-transparent',
};

export type ButtonProps = {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | ComponentPropsWithoutRef<typeof Link>
);

const baseClassName =
  'inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 dark:data-[state=open]:bg-neutral-800';

const Button = forwardRef<
  HTMLButtonElement | ElementRef<typeof Link>,
  ButtonProps
>(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  const compiledClassName = clsx(
    baseClassName,
    buttonVariants[variant],
    buttonSizes[size],
    className
  );

  return 'href' in props ? (
    <Link
      className={compiledClassName}
      ref={ref as ForwardedRef<ElementRef<typeof Link>>}
      {...props}
    />
  ) : (
    // eslint-disable-next-line react/button-has-type
    <button
      className={compiledClassName}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
