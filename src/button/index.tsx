import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  ForwardedRef,
} from 'react';
import { forwardRef } from 'react';

const buttonSizes = {
  sm: 'py-2 px-3',
  md: 'py-2.5 px-4',
  lg: 'py-3 px-5',
};

const buttonVariants = {
  primary: twMerge(
    'bg-neutral-900 text-white hover:bg-neutral-700',
    'dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200'
  ),
  destructive: twMerge(
    'bg-red-500 text-white hover:bg-red-600',
    'dark:hover:bg-red-600'
  ),
  secondary: twMerge(
    'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
    'dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600'
  ),
  tertiary: twMerge(
    'bg-transparent border',
    'border-white/80 hover:bg-neutral-100 text-neutral-800',
    'dark:border-white/20 dark:text-neutral-100 dark:hover:bg-neutral-700'
  ),
  link: twMerge(
    'underline-offset-4 hover:underline',
    'bg-transparent text-neutral-900 hover:bg-transparent',
    'dark:text-neutral-100 dark:bg-transparent dark:hover:bg-transparent'
  ),
};

export type ButtonProps = {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  rounded?: boolean;
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | ComponentPropsWithoutRef<typeof Link>
);

const baseClassName =
  'inline-flex flex-nowrap gap-2 whitespace-nowrap items-center justify-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-neutral-100 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 dark:data-[state=open]:bg-neutral-800';

const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement | ElementRef<typeof Link>,
  ButtonProps
>(({ className, variant = 'primary', size = 'md', rounded, ...props }, ref) => {
  const compiledClassName = twMerge(
    baseClassName,
    rounded ? 'rounded-full' : 'rounded-md',
    buttonVariants[variant],
    buttonSizes[size],
    className
  );

  return 'href' in props ? (
    <Link
      className={compiledClassName}
      ref={ref as ForwardedRef<ElementRef<typeof Link>>}
      rel={(props.href as string).startsWith('http') ? 'noopener' : undefined}
      target={(props.href as string).startsWith('http') ? '_blank' : undefined}
      {...props}
    >
      {props.children}
      {(props.href as string).startsWith('http') && (
        <ArrowUpRightIcon className="h-3 w-3" />
      )}
    </Link>
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
